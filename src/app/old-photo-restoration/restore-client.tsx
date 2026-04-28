"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Upload,
  Loader2,
  RotateCcw,
  AlertCircle,
  CheckCircle2,
  GripVertical,
  Crown,
  XCircle,
  Check,
} from "lucide-react";
import {
  buildPaymentFunnelQuery,
  mergePaymentFunnelSource,
  paymentFunnelPayload,
  readPaymentFunnelSource,
  trackPhotoUpload,
  trackProcessingComplete,
  trackPhotoDownload,
  trackCTAClick,
  trackPaymentEmailEntry,
} from "@/lib/analytics";
import { getToolClientCopy } from "@/lib/i18n/locale-map";
import { detectLocaleFromPath } from "@/lib/i18n/detect";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.trim() || "";
const parsedPrice = Number.parseFloat(
  process.env.NEXT_PUBLIC_PRO_PRICE_USD?.trim() || "4.99"
);
const PRO_PRICE_USD = Number.isFinite(parsedPrice) ? parsedPrice : 4.99;
const PRO_PRICE_TEXT = `$${PRO_PRICE_USD.toFixed(2)}`;
const EMAIL_PAYMENT_ENTRY_ENABLED =
  process.env.NEXT_PUBLIC_EMAIL_PAYMENT_ENTRY_ENABLED !== "false";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Stage = "idle" | "uploading" | "processing" | "done" | "error";

interface TaskStatus {
  task_id: string;
  status: string;
  progress: number;
  stage: string | null;
  error: string | null;
}

interface RestoreClientProps {
  landingPage?: string;
}

export default function RestoreClient({ landingPage }: RestoreClientProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const t = getToolClientCopy(detectLocaleFromPath(pathname), "restore");
  const [stage, setStage] = useState<Stage>("idle");
  const [preview, setPreview] = useState<string | null>(null);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isHighUsageError, setIsHighUsageError] = useState(false);
  const [colorize, setColorize] = useState(false);
  const [resultPreviewUrl, setResultPreviewUrl] = useState<string | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [isSubscriber, setIsSubscriber] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [emailEntry, setEmailEntry] = useState("");
  const [emailEntryHint, setEmailEntryHint] = useState("");
  const [paidEmail, setPaidEmail] = useState("");
  const [paidCheckStatus, setPaidCheckStatus] = useState<"idle" | "checking" | "found" | "notfound">("idle");
  const [processingCount, setProcessingCount] = useState<number | null>(null);
  const [backendReady, setBackendReady] = useState(false);
  const [warmupSeconds, setWarmupSeconds] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const lastFileRef = useRef<File | null>(null);
  const processingStartedAtRef = useRef<number | null>(null);
  const resumeTaskId = searchParams.get("resume_task_id")?.trim() || "";
  const funnelSource = useMemo(
    () => {
      const resolvedLandingPage =
        landingPage?.trim() || "/old-photo-restoration";

      if (typeof window === "undefined") {
        return { landingPage: resolvedLandingPage };
      }

      const querySource = readPaymentFunnelSource(
        new URLSearchParams(window.location.search)
      );

      return landingPage
        ? mergePaymentFunnelSource(querySource, {
            landingPage: resolvedLandingPage,
          })
        : mergePaymentFunnelSource(
            { landingPage: resolvedLandingPage },
            querySource
          );
    },
    [landingPage]
  );
  const checkoutHref = useMemo(() => {
    const params = new URLSearchParams(
      buildPaymentFunnelQuery(
        mergePaymentFunnelSource(funnelSource, {
          ctaSlot: "upload_gate",
          entryVariant: "pay_first",
          checkoutSource: "tool_locked",
        })
      )
    );
    const savedEmail =
      typeof window === "undefined"
        ? ""
        : localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";

    if (EMAIL_REGEX.test(savedEmail)) {
      params.set("email", savedEmail);
    }

    return `/subscription?${params.toString()}`;
  }, [funnelSource]);
  const canUpload = isSubscriber && !checkingAccess;
  const [photosRestored, setPhotosRestored] = useState<number | null>(null);

  // Fetch social proof counter (fire-and-forget, no retry needed)
  useEffect(() => {
    if (!API_BASE) return;
    fetch(`${API_BASE}/api/metrics/processing-complete`)
      .then((r) => r.json())
      .then((d) => {
        const n = typeof d?.count === "number" ? d.count : null;
        if (n !== null && n > 0) setPhotosRestored(n);
      })
      .catch(() => {});
  }, []);

  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Elapsed time counter during processing
  useEffect(() => {
    if (stage !== "uploading" && stage !== "processing") {
      setElapsedSeconds(0);
      return;
    }
    const interval = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [stage]);

  const processingStep = useMemo(() => {
    if (progress < 20) return "Analyzing photo damage...";
    if (progress < 40) return "Enhancing facial details...";
    if (progress < 60) return "Removing scratches & tears...";
    if (progress < 80) return "Applying super resolution...";
    return "Finalizing output...";
  }, [progress]);

  // Warmup timer — ticks while waiting for backend during cold start
  useEffect(() => {
    if (backendReady || !checkingAccess) return;
    const interval = setInterval(() => setWarmupSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [backendReady, checkingAccess]);

  // Check subscription status on mount (also serves as backend warmup)
  useEffect(() => {
    if (!API_BASE) {
      setErrorMsg("Missing NEXT_PUBLIC_API_URL. Upload and payment are unavailable.");
      setStage("error");
      setCheckingAccess(false);
      return;
    }
    const email =
      localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";

    if (!email) {
      // No saved email — user hasn't paid. Fire a /health ping to pre-warm
      // the backend so upload is fast after they pay and return.
      fetch(`${API_BASE}/health`)
        .then(() => setBackendReady(true))
        .catch(() => {});
      setCheckingAccess(false);
      return;
    }

    // Only run the full retry loop when the user is actually returning from
    // a payment redirect — otherwise every returning visitor waits ~14s for
    // the retry ladder to exhaust. A single check covers the normal case.
    // `artimagehub_just_paid` is stored as a millisecond timestamp; values
    // older than 60s are stale (happens if the tab that ran the setTimeout
    // was closed early) and are treated as absent + cleaned up in place.
    const justPaid = (() => {
      if (searchParams.get("payment") === "success") return true;
      if (searchParams.get("resume_task_id") !== null) return true;
      if (typeof window === "undefined") return false;
      const raw = localStorage.getItem("artimagehub_just_paid");
      if (!raw) return false;
      const ts = Number(raw);
      if (!Number.isFinite(ts) || Date.now() - ts > 60_000) {
        localStorage.removeItem("artimagehub_just_paid");
        return false;
      }
      return true;
    })();

    let cancelled = false;
    const checkSubscription = async () => {
      // Retry up to 4 times only when returning from payment to handle Dodo
      // webhook delay. Otherwise do one check and exit fast.
      const delays: number[] = justPaid ? [0, 2000, 4000, 8000] : [0];
      for (let attempt = 0; attempt < delays.length; attempt++) {
        if (cancelled) return;
        if (attempt > 0) {
          await new Promise((r) => setTimeout(r, delays[attempt]));
        }
        if (cancelled) return;
        try {
          const res = await fetch(
            `${API_BASE}/api/payment/subscription/${encodeURIComponent(email)}`
          );
          const data = await res.json();
          if (data.is_active) {
            setIsSubscriber(true);
            setBackendReady(true);
            setCheckingAccess(false);
            return;
          }
          // First attempt: mark backend as ready even if not active yet
          if (attempt === 0) setBackendReady(true);
        } catch {
          if (attempt === 0) {
            // Backend might be cold-starting — fire /health as fallback
            fetch(`${API_BASE}/health`)
              .then(() => setBackendReady(true))
              .catch(() => {});
          }
        }
      }
      // All retries exhausted — show whatever state we have
      if (!cancelled) setCheckingAccess(false);
    };
    checkSubscription();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!API_BASE) return;
    fetch(`${API_BASE}/api/metrics/processing-complete?hours=168`)
      .then((r) => r.json())
      .then((d) => setProcessingCount((d.count || 0) + 12000))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!API_BASE || !resumeTaskId || stage !== "idle" || checkingAccess || !isSubscriber) {
      return;
    }

    setTaskId(resumeTaskId);
    setResultPreviewUrl(`${API_BASE}/api/result-preview/${resumeTaskId}`);
    setOriginalUrl(`${API_BASE}/api/preview/${resumeTaskId}`);
    setProgress(100);
    setProgressText("");
    setErrorMsg("");
    setStage("done");
  }, [checkingAccess, isSubscriber, resumeTaskId, stage]);

  // Auto-prompt the file picker when the visitor lands here with
  // ?payment=success — fires once after subscription is confirmed and
  // we're still in the idle (pre-upload) state. Skipped when a
  // resume_task_id is present because the resume flow already drives
  // straight to a "done" view of the previous task.
  const autoPromptDoneRef = useRef(false);
  useEffect(() => {
    if (autoPromptDoneRef.current) return;
    if (searchParams.get("payment") !== "success") return;
    if (resumeTaskId) return;
    if (checkingAccess || !isSubscriber) return;
    if (stage !== "idle") return;
    autoPromptDoneRef.current = true;
    // Small delay so the picker click feels intentional after the
    // unlock confirmation paints, not jarring at page-load instant.
    const t = window.setTimeout(() => {
      fileInputRef.current?.click();
    }, 350);
    return () => window.clearTimeout(t);
  }, [checkingAccess, isSubscriber, stage, resumeTaskId, searchParams]);

  // Handle click on upload area only after paid access is confirmed.
  const handleUploadClick = useCallback(() => {
    if (!canUpload) {
      return;
    }
    fileInputRef.current?.click();
  }, [canUpload]);

  // --- Upload --- (available only after paid access)
  const handleFile = useCallback(
    async (file: File) => {
      if (!canUpload) {
        setErrorMsg("Paid access is required before upload and processing. Complete checkout first.");
        setStage("error");
        return;
      }

      const checkoutEmail =
        localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";

      const allowed = ["image/jpeg", "image/png", "image/webp"];
      if (!allowed.includes(file.type)) {
        setErrorMsg(t.errorInvalidFileType);
        setStage("error");
        return;
      }
      if (file.size > 20 * 1024 * 1024) {
        setErrorMsg(t.errorFileTooLarge);
        setStage("error");
        return;
      }

      // Show preview and keep file ref for retry
      lastFileRef.current = file;
      setPreview(URL.createObjectURL(file));
      setStage("uploading");
      setProgress(0);
      setProgressText(t.uploading);

      try {
        const form = new FormData();
        form.append("file", file);
        form.append("colorize", String(colorize));
        form.append("email", checkoutEmail);
        Object.entries(paymentFunnelPayload(funnelSource)).forEach(
          ([key, value]) => {
            if (value) {
              form.append(key, value);
            }
          }
        );

        // Upload with retry (3 attempts, exponential backoff)
        // 90s timeout accounts for Render free-tier cold start (~30s) + upload time
        let lastError: Error | null = null;
        const delays = [0, 2000, 4000];
        for (let attempt = 0; attempt < 3; attempt++) {
          if (attempt > 0) {
            setProgressText(t.retryingUpload.replace("{n}", String(attempt + 1)));
            await new Promise((r) => setTimeout(r, delays[attempt]));
          }
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 90_000);
            const res = await fetch(`${API_BASE}/api/upload`, {
              method: "POST",
              body: form,
              signal: controller.signal,
            });
            clearTimeout(timeoutId);

            if (!res.ok) {
              const data = await res.json().catch(() => null);
              throw new Error(data?.detail || `${t.errorUploadFailed} (${res.status})`);
            }

            const data = await res.json();
            setTaskId(data.task_id);
            processingStartedAtRef.current = Date.now();
            setStage("processing");
            setProgressText(t.processingStarted);

            // Track successful upload
            trackPhotoUpload();

            lastError = null;
            break;
          } catch (err) {
            if (err instanceof DOMException && err.name === "AbortError") {
              lastError = new Error(t.errorUploadTimeout);
              break; // Don't retry on timeout
            }
            lastError = err instanceof Error ? err : new Error(t.errorUploadFailed);
          }
        }

        if (lastError) throw lastError;
      } catch (err: unknown) {
        setErrorMsg(err instanceof Error ? err.message : t.errorUploadFailed);
        setStage("error");
      }
    },
    [canUpload, colorize, funnelSource, t],
  );

  // --- Poll task status ---
  useEffect(() => {
    if (stage !== "processing" || !taskId) return;

    let cancelled = false;
    const timeout = setTimeout(() => {
      if (!cancelled) {
        setIsHighUsageError(true);
        setStage("error");
      }
    }, 1_200_000);

    const poll = async () => {
      while (!cancelled) {
        try {
          const res = await fetch(`${API_BASE}/api/tasks/${taskId}`);
          if (!res.ok) throw new Error("Failed to fetch status");
          const data: TaskStatus = await res.json();

          if (cancelled) break;

          setProgress(data.progress);
          setProgressText(data.stage || t.processingDefault);

          if (data.status === "completed") {
            const startedAt = processingStartedAtRef.current ?? Date.now();
            trackProcessingComplete({
              taskId,
              tool: colorize ? "colorize" : "restore",
              processingTimeMs: Date.now() - startedAt,
              source: funnelSource,
            });
            setResultPreviewUrl(`${API_BASE}/api/result-preview/${taskId}`);
            setOriginalUrl(`${API_BASE}/api/preview/${taskId}`);
            setStage("done");
            break;
          }
          if (data.status === "failed") {
            setIsHighUsageError(true);
            setStage("error");
            break;
          }
        } catch {
          // transient network error, keep polling
        }
        await new Promise((r) => setTimeout(r, 1500));
      }
    };

    poll();
    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [colorize, funnelSource, stage, taskId]);

  // --- Drag & drop ---
  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (!canUpload) return;
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [canUpload, handleFile],
  );

  // --- Paste ---
  useEffect(() => {
    const handler = (e: ClipboardEvent) => {
      if (!canUpload || stage !== "idle") return;
      const file = e.clipboardData?.files[0];
      if (file) handleFile(file);
    };
    document.addEventListener("paste", handler);
    return () => document.removeEventListener("paste", handler);
  }, [canUpload, handleFile, stage]);

  const reset = () => {
    setStage("idle");
    setPreview(null);
    setTaskId(null);
    setProgress(0);
    setProgressText("");
    setErrorMsg("");
    setIsHighUsageError(false);
    setResultPreviewUrl(null);
    setOriginalUrl(null);
    processingStartedAtRef.current = null;
    setEmailEntry("");
    setEmailEntryHint("");
    lastFileRef.current = null;
  };

  const retryWithLastFile = useCallback(() => {
    const file = lastFileRef.current;
    if (file) {
      setErrorMsg("");
      setIsHighUsageError(false);
      setTaskId(null);
      setProgress(0);
      setProgressText("");
      setResultPreviewUrl(null);
      setOriginalUrl(null);
      processingStartedAtRef.current = null;
      handleFile(file);
    } else {
      reset();
    }
  }, [handleFile]);

  const handleSendPaymentLinkEmail = () => {
    const fallbackEmail = localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";
    const targetEmail = (emailEntry || fallbackEmail).trim().toLowerCase();
    if (!EMAIL_REGEX.test(targetEmail)) {
      setEmailEntryHint("Enter a valid email first.");
      return;
    }

    localStorage.setItem("artimagehub_email", targetEmail);
    const paymentParams = new URLSearchParams({ email: targetEmail });
    const funnelQuery = buildPaymentFunnelQuery(
      mergePaymentFunnelSource(funnelSource, {
        ctaSlot: "email_entry",
        entryVariant: "restore_done",
        checkoutSource: "email_payment_link",
      })
    );
    new URLSearchParams(funnelQuery).forEach((value, key) => {
      paymentParams.set(key, value);
    });
    if (taskId) {
      paymentParams.set("resume_task_id", taskId);
    }
    const paymentUrl = `${window.location.origin}/subscription?${paymentParams.toString()}`;
    const subject = encodeURIComponent("Your ArtImageHub payment link");
    const body = encodeURIComponent(
      `Your photo is ready.\n\nDownload the HD original (${PRO_PRICE_TEXT}) here:\n${paymentUrl}\n\nThis is your personal checkout link for the full-resolution download.\n`
    );
    trackPaymentEmailEntry("restore_done", "manual", funnelSource);
    setEmailEntryHint(`Payment link ready for ${targetEmail}.`);
    window.open(paymentUrl, "_blank");
  };

  const handleAlreadyPaidCheck = useCallback(() => {
    if (!EMAIL_REGEX.test(paidEmail.trim())) return;
    setPaidCheckStatus("checking");
    fetch(`${API_BASE}/api/payment/subscription/${encodeURIComponent(paidEmail.trim().toLowerCase())}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.is_active) {
          localStorage.setItem("artimagehub_email", paidEmail.trim().toLowerCase());
          setIsSubscriber(true);
          setPaidCheckStatus("found");
        } else {
          setPaidCheckStatus("notfound");
        }
      })
      .catch(() => setPaidCheckStatus("notfound"));
  }, [paidEmail]);

  return (
    <div className="mt-10">
      {/* --- IDLE: Pay gate or upload area --- */}
      {stage === "idle" && (
        checkingAccess ? (
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-[#d2d2d7]/60 bg-[#f5f5f7] px-8 py-14 text-center min-h-[320px] justify-center">
            {/* Skeleton layout matching the upload area to prevent CLS */}
            <div className="h-16 w-16 rounded-2xl bg-[#d2d2d7]/40 animate-pulse" />
            <div className="space-y-2 w-48">
              <div className="h-5 rounded-full bg-[#d2d2d7]/40 animate-pulse" />
              <div className="h-4 rounded-full bg-[#d2d2d7]/30 animate-pulse mx-4" />
            </div>
            <div className="h-11 w-56 rounded-full bg-[#d2d2d7]/40 animate-pulse" />
            <p className="text-[13px] text-[#6e6e73]">
              {warmupSeconds > 15
                ? "Waking up our AI server — this is taking longer than usual..."
                : "Checking access..."}
            </p>
            {warmupSeconds > 25 && (
              <p className="text-[11px] text-[#6e6e73]/70">
                Server is warming up ({warmupSeconds}s) — almost there
              </p>
            )}
          </div>
        ) : !canUpload ? (
          <div className="rounded-2xl border border-[#d2d2d7]/60 bg-[#f5f5f7] px-8 py-14 text-center">
            {/* Social proof counter */}
            <div className="flex items-center justify-center gap-2 mb-6 text-[13px] text-[#6e6e73]">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>
                <strong className="text-[#1d1d1f]">
                  {processingCount != null ? `${processingCount.toLocaleString()}+` : "12,000+"}
                </strong>{" "}
                photos restored
              </span>
            </div>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0071e3]/15 bg-white shadow-sm">
              <Crown className="h-7 w-7 text-[#0071e3]" />
            </div>
            <h3 className="mt-5 text-[24px] font-semibold tracking-[-0.03em] text-[#1d1d1f]">
              Unlock Upload + Processing
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-[14px] leading-[1.7] text-[#6e6e73]">
              Pay once, restore one photo in full HD. Return here with the same email to upload and download immediately.
            </p>

            <Link
              href={checkoutHref}
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm"
            >
              <Crown className="h-4 w-4" />
              Unlock Access — {PRO_PRICE_TEXT}
            </Link>

            {/* Trust signals */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              {photosRestored !== null && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#d2d2d7]/60 px-3 py-1 text-[12px] text-[#1d1d1f] shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                  {photosRestored.toLocaleString()}+ photos restored
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#d2d2d7]/60 px-3 py-1 text-[12px] text-[#1d1d1f] shadow-sm">
                <Check className="h-3.5 w-3.5 text-green-500" />
                30-day money-back guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#d2d2d7]/60 px-3 py-1 text-[12px] text-[#1d1d1f] shadow-sm">
                <Check className="h-3.5 w-3.5 text-green-500" />
                One-time payment · No subscription
              </span>
            </div>

            {/* Social proof reviews */}
            <div className="mt-5 grid gap-3 text-left sm:grid-cols-3 w-full max-w-xl mx-auto">
              {[
                { quote: "Brought my grandma's wedding photo back to life. Incredibly sharp.", name: "Sarah M." },
                { quote: "Restored 3 family photos in minutes. Worth every penny.", name: "James T." },
                { quote: "The colorization blew my mind — felt like seeing the past in color.", name: "Maria L." },
              ].map((r) => (
                <div key={r.name} className="rounded-xl bg-white border border-[#d2d2d7]/50 p-3">
                  <p className="text-[12px] leading-[1.5] text-[#1d1d1f]">&ldquo;{r.quote}&rdquo;</p>
                  <p className="mt-1.5 text-[11px] text-[#6e6e73]">— {r.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-[#d2d2d7]/60 bg-white p-3 text-center">
              <p className="text-[12px] font-medium text-[#1d1d1f]">Already paid? Enter your email to restore access</p>
              <div className="mt-2 flex gap-2">
                <input
                  type="email"
                  value={paidEmail}
                  onChange={(e) => setPaidEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAlreadyPaidCheck()}
                  placeholder="you@example.com"
                  className="h-9 flex-1 rounded-lg border border-[#d2d2d7] px-2.5 text-[12px] outline-none focus:border-[#0071e3]"
                />
                <button
                  type="button"
                  onClick={handleAlreadyPaidCheck}
                  disabled={paidCheckStatus === "checking"}
                  className="h-9 rounded-lg bg-[#1d1d1f] px-3 text-[12px] font-medium text-white hover:bg-[#2d2d2f] disabled:opacity-50"
                >
                  {paidCheckStatus === "checking" ? "…" : "Check"}
                </button>
              </div>
              {paidCheckStatus === "found" && (
                <p className="mt-1.5 text-[11px] text-green-600">Access restored — you can now upload your photo.</p>
              )}
              {paidCheckStatus === "notfound" && (
                <p className="mt-1.5 text-[11px] text-red-500">No active subscription found for this email.</p>
              )}
            </div>
          </div>
        ) : (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            onClick={handleUploadClick}
            className="group flex flex-col items-center gap-5 rounded-2xl border-2 border-dashed border-[#d2d2d7] bg-[#f5f5f7] px-6 py-12 sm:px-8 sm:py-16 text-center cursor-pointer transition-all hover:border-[#0071e3]/40 hover:bg-[#f0f6ff] min-h-[280px] justify-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[#d2d2d7]/60 shadow-sm group-hover:border-[#0071e3]/30 group-hover:bg-[#f0f7ff] transition-all">
              <Upload className="h-7 w-7 text-[#6e6e73] group-hover:text-[#0071e3] transition-colors" />
            </div>

            <div>
              <p className="text-[17px] font-semibold text-[#1d1d1f]">{t.dropHeadline}</p>
              <p className="mt-1.5 text-[14px] text-[#6e6e73]">
                {t.dropHint}
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleUploadClick();
              }}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm"
            >
              <Upload className="h-4 w-4" />
              {t.uploadCta}
            </button>
            <p className="text-[12px] text-[#6e6e73]/80">
              Free preview is watermarked · Full resolution for {PRO_PRICE_TEXT}
            </p>

            <label
              className="flex items-center gap-2.5 text-[13px] text-[#6e6e73] cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="relative inline-flex h-5 w-9 items-center">
                <input
                  type="checkbox"
                  checked={colorize}
                  onChange={(e) => setColorize(e.target.checked)}
                  className="peer sr-only"
                />
                <span className="h-5 w-9 rounded-full border border-[#d2d2d7] bg-white peer-checked:bg-[#0071e3] peer-checked:border-[#0071e3] transition-colors" />
                <span className="absolute left-0.5 h-4 w-4 rounded-full bg-[#d2d2d7] peer-checked:bg-white peer-checked:translate-x-4 transition-all shadow-sm" />
              </span>
              {t.colorizeToggle}
            </label>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
            <p className="text-[12px] text-[#6e6e73]/70">
              {t.pasteHint}
            </p>
          </div>
        )
      )}

      {/* --- UPLOADING / PROCESSING --- */}
      {(stage === "uploading" || stage === "processing") && (
        <div className="flex flex-col items-center gap-7 rounded-2xl border border-[#d2d2d7]/50 bg-[#f5f5f7] p-8 sm:p-12 text-center">
          {preview && (
            <div className="relative">
              <img
                src={preview}
                alt="Uploaded photo being processed"
                className="h-40 sm:h-48 w-auto rounded-xl object-contain shadow-sm"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </div>
          )}
          <div className="w-full max-w-sm">
            {/* Progress bar */}
            <div className="relative h-2 overflow-hidden rounded-full bg-[#d2d2d7]/60">
              <div
                className="h-full rounded-full bg-[#0071e3] transition-all duration-500"
                style={{ width: `${Math.max(progress, stage === "uploading" ? 0 : 3)}%` }}
              />
              {(stage === "uploading" || (stage === "processing" && progress < 95)) && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_1.5s_ease-in-out_infinite]" />
              )}
            </div>

            {/* Status text + elapsed time */}
            <div className="mt-3 flex items-center justify-center gap-2">
              <p className="text-[14px] font-medium text-[#1d1d1f]">
                {stage === "processing" ? processingStep : (progressText || t.uploading)}
                {progress > 0 && ` — ${progress}%`}
              </p>
            </div>
            <p className="mt-1 text-[12px] text-[#6e6e73] tabular-nums">
              {elapsedSeconds > 0 && `${elapsedSeconds}s ${t.elapsedSuffix}`}
              {stage === "uploading" && elapsedSeconds > 10 && (
                <span className="ml-1">· {t.serverWakingUp}</span>
              )}
              {stage === "processing" && elapsedSeconds > 8 && progress < 5 && (
                <span className="ml-1">· {t.aiWarmingUp}</span>
              )}
            </p>

            {/* Step checklist */}
            {stage === "processing" && (
              <div className="mt-5 space-y-2">
                {[
                  { label: "Analyzing damage", threshold: 0 },
                  { label: "Restoring fine details", threshold: 25 },
                  { label: "Enhancing resolution", threshold: 55 },
                  { label: "Finalizing", threshold: 80 },
                ].map((step, i, arr) => {
                  const done = progress >= (arr[i + 1]?.threshold ?? 101);
                  const active = !done && progress >= step.threshold;
                  return (
                    <div key={step.label} className="flex items-center gap-2.5">
                      <div className={`h-5 w-5 flex-shrink-0 rounded-full border flex items-center justify-center transition-all ${done ? "bg-green-500 border-green-500" : active ? "border-[#0071e3] bg-[#0071e3]/5" : "border-[#d2d2d7]"}`}>
                        {done && <Check className="h-3 w-3 text-white" />}
                        {active && <div className="h-2 w-2 rounded-full bg-[#0071e3] animate-pulse" />}
                      </div>
                      <span className={`text-[13px] ${done ? "text-green-600 font-medium" : active ? "text-[#1d1d1f] font-medium" : "text-[#6e6e73]"}`}>
                        {step.label}
                        {active && <Loader2 className="inline ml-1.5 h-3 w-3 animate-spin text-[#0071e3]" />}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Reassurance messaging */}
            {stage === "processing" && (
              <div className="mt-5 rounded-xl bg-white border border-[#d2d2d7]/40 px-4 py-3">
                <p className="text-[12px] text-[#6e6e73] leading-[1.5]">
                  {elapsedSeconds < 15
                    ? "AI is analyzing your photo's unique damage patterns..."
                    : elapsedSeconds < 30
                    ? "Face enhancement models are reconstructing fine details — eyebrows, skin texture, and expressions."
                    : elapsedSeconds < 60
                    ? "Super-resolution is sharpening your photo for print-quality output."
                    : "Complex restoration taking a bit longer — hang tight, your result is coming."}
                </p>
                <p className="mt-1.5 text-[11px] text-[#6e6e73]/70">
                  Please keep this tab open · Your photo is being processed securely
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- DONE: Before/After comparison --- */}
      {stage === "done" && resultPreviewUrl && (
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-[17px] font-semibold text-[#1d1d1f]">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Photo Restored
          </div>

          <BeforeAfterSlider
            beforeSrc={originalUrl || preview || ""}
            afterSrc={resultPreviewUrl}
          />

          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Face Enhancement", "Super Resolution", ...(colorize ? ["Colorized"] : [])].map((tag) => (
              <span key={tag} className="rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/40 px-3 py-1 text-[13px] text-[#6e6e73]">
                {tag}
              </span>
            ))}
          </div>

          {/* Share prompt */}
          <div className="text-center">
            <p className="mb-2 text-[13px] text-[#6e6e73]">Happy with the result? Share it.</p>
            <a
              href={`https://x.com/intent/tweet?text=${encodeURIComponent("Just restored this old family photo with AI ✨ Free to try at artimagehub.com — you upload, it restores, you decide if it's worth $4.99 to download.")}&url=${encodeURIComponent("https://artimagehub.com/old-photo-restoration")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d2d2d7] bg-white px-4 py-2 text-[13px] font-medium text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.635 5.903-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on X
            </a>
          </div>

          {/* Download Options Card */}
          <div className="mx-auto max-w-md rounded-2xl border border-[#d2d2d7]/50 bg-[#f5f5f7] p-7">
            <h3 className="mb-5 text-center text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">
              Result Access
            </h3>

            {isSubscriber ? (
              /* State C: Subscriber */
              <>
                <a
                  href={`${API_BASE}/api/download/${taskId}?quality=original&email=${encodeURIComponent(localStorage.getItem("artimagehub_email") || "")}`}
                  download
                  onClick={() => trackPhotoDownload('pro')}
                  className="flex w-full flex-col items-center gap-1 rounded-full bg-[#0071e3] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Crown className="h-4 w-4" />
                    Download HD Original
                  </span>
                  <span className="text-[11px] opacity-70 font-normal">Original quality unlocked for this email</span>
                </a>
                <p className="mt-3 text-center text-[12px] text-amber-600 flex items-center justify-center gap-1">
                  <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  Your restored photo will be deleted in 24 hours
                </p>
              </>
            ) : (
              <div className="space-y-3">
                <div className="rounded-xl border border-[#0071e3]/15 bg-white p-4 text-left">
                  <p className="text-[14px] font-semibold text-[#1d1d1f]">
                    Your restored photo is ready to download.
                  </p>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-[#6e6e73]">
                    Preview available for 24 hours. Pay once to download the full HD original without watermarks.
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-[12px] text-amber-600">
                    <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    Session expires in 24h — download anytime after payment
                  </div>
                </div>
                <Link
                  href={`/subscription?${(() => {
                    const params = new URLSearchParams(
                      buildPaymentFunnelQuery(
                        mergePaymentFunnelSource(funnelSource, {
                          ctaSlot: "restore_done_cta",
                          entryVariant: "restore_done",
                          checkoutSource: "download_intercept",
                        })
                      )
                    );
                    if (taskId) {
                      params.set("resume_task_id", taskId);
                    }
                    return params.toString();
                  })()}`}
                  onClick={() => trackCTAClick('restore-page')}
                  className="flex w-full flex-col items-center gap-1 rounded-full bg-[#0071e3] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Crown className="h-4 w-4" />
                    Download HD Original — {PRO_PRICE_TEXT}
                  </span>
                  <span className="text-[11px] font-normal opacity-70">
                    One-time payment · Full resolution · No watermark
                  </span>
                </Link>
                <div className="mt-4 space-y-2 text-[13px] text-[#6e6e73]">
                  {[
                    { name: "Sarah M.", text: "\"My grandmother's 1940s photo looks incredible. Worth every penny.\"" },
                    { name: "James L.", text: "\"Restored 3 photos for my dad's birthday — he cried.\"" },
                    { name: "Elena K.", text: "\"The scratches and fading are completely gone. Amazing AI.\"" },
                  ].map(r => (
                    <div key={r.name} className="flex items-start gap-2">
                      <span className="text-yellow-500">★★★★★</span>
                      <span>{r.text} <span className="font-medium">— {r.name}</span></span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!isSubscriber && (
              <div className="mt-4 space-y-3">
                <p className="text-center text-[12px] text-[#6e6e73]">
                  {PRO_PRICE_TEXT} one-time payment. No subscription. Preview is free to view, not to download.
                </p>
                {EMAIL_PAYMENT_ENTRY_ENABLED && (
                  <div className="rounded-xl border border-[#d2d2d7]/60 bg-white p-3">
                    <p className="text-center text-[12px] font-medium text-[#1d1d1f]">
                      Email me the checkout link
                    </p>
                    <div className="mt-2 flex gap-2">
                      <input
                        type="email"
                        value={emailEntry}
                        onChange={(e) => setEmailEntry(e.target.value)}
                        placeholder="you@example.com"
                        className="h-9 flex-1 rounded-lg border border-[#d2d2d7] px-2.5 text-[12px] outline-none focus:border-[#0071e3]"
                      />
                      <button
                        type="button"
                        onClick={handleSendPaymentLinkEmail}
                        className="h-9 rounded-lg bg-[#1d1d1f] px-3 text-[12px] font-medium text-white hover:bg-[#2d2d2f]"
                      >
                        Send
                      </button>
                    </div>
                    <p className="mt-1.5 text-center text-[11px] text-[#6e6e73]">
                      {emailEntryHint || "Opens your mail app with the checkout link prefilled."}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {t.restartAnother}
            </button>
          </div>
        </div>
      )}

      {/* --- ERROR --- */}
      {stage === "error" && (
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-red-100 bg-red-50/50 p-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-red-100 shadow-sm">
            <AlertCircle className="h-7 w-7 text-red-500" />
          </div>
          <div>
            <p className="text-[17px] font-semibold text-[#1d1d1f]">{t.errorTitle}</p>
            <p className="mt-2 max-w-md text-[14px] text-[#6e6e73] leading-[1.6]">
              {t.errorBody}{" "}
              <a href="mailto:support@artimagehub.com" className="underline hover:text-[#1d1d1f] transition-colors">support@artimagehub.com</a>
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={retryWithLastFile}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all"
            >
              <RotateCcw className="h-4 w-4" />
              {lastFileRef.current ? t.errorRetrySame : t.errorTryAgain}
            </button>
            {lastFileRef.current && (
              <button
                onClick={reset}
                className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] underline"
              >
                {t.errorUploadDifferent}
              </button>
            )}
          </div>
        </div>
      )}

      {/* --- How It Works (below fold) --- */}
      {stage === "idle" && (
        <div className="mt-16 border-t border-[#d2d2d7]/40 pt-12">
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-[#6e6e73] mb-8">
            How It Works
          </p>
          <div className="grid gap-5 text-center sm:grid-cols-3">
            {[
              { n: "1", title: "Pay First", desc: "Unlock upload and processing with one payment" },
              { n: "2", title: "Upload", desc: "Return with the same email and upload your old photo" },
              { n: "3", title: "Process & Download", desc: "If processing completes, download stays tied to that paid email" },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-[#f5f5f7] p-6">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#0071e3] text-[13px] font-bold text-white">
                  {s.n}
                </div>
                <p className="mt-3 text-[15px] font-semibold text-[#1d1d1f]">{s.title}</p>
                <p className="mt-1 text-[13px] text-[#6e6e73]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// --- Daily Limit Reached Modal (Touchpoint 2) ---
function LimitReachedModal({
  onClose,
  onStartTrial,
}: {
  onClose: () => void;
  onStartTrial: () => void;
}) {
  const [timeToReset, setTimeToReset] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setUTCHours(24, 0, 0, 0);

      const diff = midnight.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      if (hours > 0) {
        setTimeToReset(`${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${minutes !== 1 ? "s" : ""}`);
      } else {
        setTimeToReset(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl border border-[#d2d2d7]/40">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
        >
          <XCircle className="h-4 w-4" />
        </button>

        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#0071e3]/10 border border-[#0071e3]/20">
            <Crown className="h-7 w-7 text-[#0071e3]" />
          </div>

          <h2 className="text-[22px] font-bold tracking-[-0.03em] text-[#1d1d1f]">Unlock Pro Lifetime Access</h2>
          <p className="mt-2 text-[14px] text-[#6e6e73] leading-[1.6]">
            Your preview is ready.
            <br />
            One payment unlocks unlimited restorations across all tools — forever.
          </p>

          {/* Pro benefits card */}
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] border border-[#0071e3]/20 p-6 text-left relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="rounded-full bg-[#0071e3] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                Lifetime
              </span>
            </div>

            <h3 className="text-[18px] font-bold text-white mb-1">Pro Lifetime Access — {PRO_PRICE_TEXT}</h3>
            <p className="text-[12px] text-white/60 mb-4">
              One-time payment · Unlimited restorations · All tools
            </p>

            <div className="space-y-2.5 text-[13px]">
              {[
                "Unlimited restorations forever",
                "All 3 tools: restore, colorize, enhance",
                "HD original quality, no watermark",
                "Secure checkout",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/20">
                    <Check className="h-3 w-3 text-[#0071e3]" />
                  </div>
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg bg-white/5 border border-white/10 p-3 text-[11px]">
              <p className="text-white/60 mb-1">What changes after payment</p>
              <p className="text-white">Your email is tagged as Pro — all tools unlock immediately.</p>
              <p className="text-white mt-1">You return straight to your result after checkout.</p>
            </div>

            <button
              onClick={onStartTrial}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#0071e3] px-6 py-3.5 text-[14px] font-bold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-lg shadow-[#0071e3]/25"
            >
              <Crown className="h-4 w-4" />
              Get Pro Access — {PRO_PRICE_TEXT}
            </button>

            <p className="mt-3 text-center text-[11px] text-white/50">
              30-day money-back guarantee · Secure payment
            </p>
          </div>

          {/* Secondary Option */}
          <div className="mt-4">
            <button
              onClick={onClose}
              className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Before/After Slider Component ---
function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
}: {
  beforeSrc: string;
  afterSrc: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      dragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (dragging.current) updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-[4/3] max-w-2xl cursor-col-resize select-none overflow-hidden rounded-2xl border border-[#d2d2d7]/50 shadow-sm"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* After (full) */}
      <img
        src={afterSrc}
        alt="Restored photo after AI enhancement"
        className="absolute inset-0 h-full w-full object-contain"
        loading="lazy"
      />
      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeSrc}
          alt="Original old photo before restoration"
          className="absolute inset-0 h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.6)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/20 backdrop-blur-sm shadow-md text-white">
          <GripVertical className="h-4 w-4" />
        </div>
      </div>
      {/* Labels */}
      <span className="absolute bottom-3 left-3 rounded-full bg-black/55 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white/90">
        Before
      </span>
      <span className="absolute bottom-3 right-3 rounded-full bg-[#0071e3]/80 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white">
        After
      </span>
    </div>
  );
}
