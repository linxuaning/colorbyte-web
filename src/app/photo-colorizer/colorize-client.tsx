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
} from "lucide-react";
import {
  trackPhotoUpload,
  trackProcessingComplete,
  trackPhotoDownload,
  trackCTAClick,
} from "@/lib/analytics";
import {
  buildPaymentFunnelQuery,
  mergePaymentFunnelSource,
  readPaymentFunnelSource,
} from "@/lib/payment-funnel";
import { getToolClientCopy } from "@/lib/i18n/locale-map";
import { detectLocaleFromPath } from "@/lib/i18n/detect";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.trim() || "";
const parsedPrice = Number.parseFloat(
  process.env.NEXT_PUBLIC_PRO_PRICE_USD?.trim() || "4.99"
);
const PRO_PRICE_USD = Number.isFinite(parsedPrice) ? parsedPrice : 4.99;
const PRO_PRICE_TEXT = `$${PRO_PRICE_USD.toFixed(2)}`;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Stage = "idle" | "uploading" | "processing" | "done" | "error";

interface TaskStatus {
  task_id: string;
  status: string;
  progress: number;
  stage: string | null;
  error: string | null;
}

interface ColorizeClientProps {
  landingPage?: string;
}

export default function ColorizeClient({ landingPage }: ColorizeClientProps = {}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const t = getToolClientCopy(detectLocaleFromPath(pathname), "colorize");
  const [stage, setStage] = useState<Stage>("idle");
  const [preview, setPreview] = useState<string | null>(null);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [resultPreviewUrl, setResultPreviewUrl] = useState<string | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [isSubscriber, setIsSubscriber] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [paidEmail, setPaidEmail] = useState("");
  const [paidCheckStatus, setPaidCheckStatus] = useState<"idle" | "checking" | "found" | "notfound">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const processingStartedAtRef = useRef<number | null>(null);
  const resumeTaskId = searchParams.get("resume_task_id")?.trim() || "";
  const funnelSource = useMemo(
    () => {
      const resolvedLandingPage = landingPage?.trim() || "/photo-colorizer";
      return typeof window === "undefined"
        ? { landingPage: resolvedLandingPage }
        : mergePaymentFunnelSource(
            { landingPage: resolvedLandingPage },
            readPaymentFunnelSource(new URLSearchParams(window.location.search))
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

  // Colorization is always enabled on this page
  const colorize = true;

  // Check subscription status on mount
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
      setCheckingAccess(false);
      return;
    }

    // Only run the full retry loop when returning from a payment redirect.
    // Normal revisits do one check and exit fast.
    // Timestamp-based staleness guard for the localStorage flag — a boolean
    // flag could outlive its setTimeout if the tab closed first.
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
            setCheckingAccess(false);
            return;
          }
        } catch {
          // swallow — try next attempt or fall through
        }
      }
      if (!cancelled) setCheckingAccess(false);
    };
    checkSubscription();
    return () => {
      cancelled = true;
    };
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

  // --- Upload ---
  const handleFile = useCallback(
    async (file: File) => {
      if (!canUpload) {
        setErrorMsg("Paid access is required before upload and processing. Complete checkout first.");
        setStage("error");
        return;
      }

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

      // Show preview
      setPreview(URL.createObjectURL(file));
      setStage("uploading");
      setProgress(0);
      setProgressText(t.uploading);

      try {
        const form = new FormData();
        form.append("file", file);
        form.append("colorize", String(colorize));
        const checkoutEmail =
          localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";
        if (EMAIL_REGEX.test(checkoutEmail)) {
          form.append("email", checkoutEmail);
        }

        // Upload with retry (3 attempts, exponential backoff)
        let lastError: Error | null = null;
        const delays = [0, 1000, 2000];
        for (let attempt = 0; attempt < 3; attempt++) {
          if (attempt > 0) {
            setProgressText(t.retryingUpload.replace("{n}", String(attempt + 1)));
            await new Promise((r) => setTimeout(r, delays[attempt]));
          }
          try {
            const res = await fetch(`${API_BASE}/api/upload`, {
              method: "POST",
              body: form,
            });

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
            lastError = err instanceof Error ? err : new Error(t.errorUploadFailed);
          }
        }

        if (lastError) throw lastError;
      } catch (err: unknown) {
        setErrorMsg(err instanceof Error ? err.message : t.errorUploadFailed);
        setStage("error");
      }
    },
    [canUpload, colorize, t],
  );

  // --- Poll task status ---
  useEffect(() => {
    if (stage !== "processing" || !taskId) return;

    let cancelled = false;
    const timeout = setTimeout(() => {
      if (!cancelled) {
        setErrorMsg(t.errorProcessingTimeout);
        setStage("error");
      }
    }, 600_000);

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
              tool: "colorize",
              processingTimeMs: Date.now() - startedAt,
              source: funnelSource,
            });
            setResultPreviewUrl(`${API_BASE}/api/result-preview/${taskId}`);
            setOriginalUrl(`${API_BASE}/api/preview/${taskId}`);
            setStage("done");
            break;
          }
          if (data.status === "failed") {
            setErrorMsg(data.error || t.errorProcessingFailed);
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
  }, [funnelSource, stage, taskId, t]);

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
    setResultPreviewUrl(null);
    setOriginalUrl(null);
    processingStartedAtRef.current = null;
  };

  return (
    <div className="mt-10">
      {/* --- IDLE: Upload area --- */}
      {stage === "idle" && (
        resumeTaskId && checkingAccess ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-[#d2d2d7]/60 bg-[#f5f5f7] px-8 py-16 text-center">
            <Loader2 className="h-6 w-6 animate-spin text-[#0071e3]" />
            <p className="text-[17px] font-semibold text-[#1d1d1f]">Restoring your download access</p>
            <p className="text-[13px] text-[#6e6e73]">
              Checking the email linked to this result before reopening the paid download.
            </p>
          </div>
        ) : !canUpload ? (
          <div className="rounded-2xl border border-[#d2d2d7]/60 bg-[#f5f5f7] px-8 py-14 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0071e3]/15 bg-white shadow-sm">
              <Crown className="h-7 w-7 text-[#0071e3]" />
            </div>
            <h3 className="mt-5 text-[24px] font-semibold tracking-[-0.03em] text-[#1d1d1f]">
              Unlock Colorization Before Upload
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-[14px] leading-[1.7] text-[#6e6e73]">
              This page now runs pay-first. Complete checkout before upload, then return with the same email to start colorization and keep paid download access attached to that purchase.
            </p>
            <Link
              href={checkoutHref}
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm"
            >
              <Crown className="h-4 w-4" />
              Unlock Access — {PRO_PRICE_TEXT}
            </Link>
            <p className="mt-3 text-[12px] text-[#6e6e73]">
              After payment, this tool reopens in the allowed pre-upload state.
            </p>
          </div>
        ) : (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            className="group flex flex-col items-center gap-5 rounded-2xl border-2 border-dashed border-[#d2d2d7] bg-[#f5f5f7] px-8 py-16 text-center cursor-pointer transition-all hover:border-[#0071e3]/40 hover:bg-[#f0f6ff]"
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
              onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm"
            >
              <Upload className="h-4 w-4" />
              {t.uploadCta}
            </button>
            <p className="text-[12px] text-[#6e6e73]/80">
              Free preview is watermarked · Full resolution for {PRO_PRICE_TEXT}
            </p>

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
            {checkingAccess ? (
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d2d2d7]/60 bg-white px-3 py-1 text-[12px] text-[#6e6e73]">
                <Loader2 className="h-3.5 w-3.5 animate-spin text-[#0071e3]" />
                Checking saved Pro access in the background
              </div>
            ) : null}
            {!checkingAccess && !isSubscriber && (
              <div
                className="w-full max-w-xs rounded-xl border border-[#d2d2d7]/60 bg-white p-3 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-[12px] font-medium text-[#1d1d1f]">Already paid? Enter your email to restore access</p>
                <div className="mt-2 flex gap-2">
                  <input
                    type="email"
                    value={paidEmail}
                    onChange={(e) => setPaidEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAlreadyPaidCheck()}
                    placeholder="you@example.com"
                    onClick={(e) => e.stopPropagation()}
                    className="h-9 flex-1 rounded-lg border border-[#d2d2d7] px-2.5 text-[12px] outline-none focus:border-[#0071e3]"
                  />
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleAlreadyPaidCheck(); }}
                    disabled={paidCheckStatus === "checking"}
                    className="h-9 rounded-lg bg-[#1d1d1f] px-3 text-[12px] font-medium text-white hover:bg-[#2d2d2f] disabled:opacity-50"
                  >
                    {paidCheckStatus === "checking" ? "…" : "Check"}
                  </button>
                </div>
                {paidCheckStatus === "found" && (
                  <p className="mt-1.5 text-[11px] text-green-600">Access restored — watermark removed.</p>
                )}
                {paidCheckStatus === "notfound" && (
                  <p className="mt-1.5 text-[11px] text-red-500">No active subscription found for this email.</p>
                )}
              </div>
            )}
          </div>
        )
      )}

      {/* --- UPLOADING / PROCESSING --- */}
      {(stage === "uploading" || stage === "processing") && (
        <div className="flex flex-col items-center gap-7 rounded-2xl border border-[#d2d2d7]/50 bg-[#f5f5f7] p-12 text-center">
          {preview && (
            <img
              src={preview}
              alt="Black and white photo being colorized"
              className="h-48 w-auto rounded-xl object-contain shadow-sm"
              loading="lazy"
            />
          )}
          <div className="w-full max-w-sm">
            <div className="relative h-1.5 overflow-hidden rounded-full bg-[#d2d2d7]/60">
              <div
                className="h-full rounded-full bg-[#0071e3] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 text-[14px] font-medium text-[#1d1d1f]">
              {progressText || `${t.actionVerbIng}...`}{progress > 0 && ` — ${progress}%`}
            </p>
            {stage === "processing" && progress < 30 && (
              <p className="mt-1.5 text-[12px] text-[#6e6e73]">
                {t.warmupNotice}
              </p>
            )}
          </div>
          <Loader2 className="h-5 w-5 animate-spin text-[#6e6e73]" />
        </div>
      )}

      {/* --- DONE: Before/After comparison --- */}
      {stage === "done" && resultPreviewUrl && (
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-[17px] font-semibold text-[#1d1d1f]">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Photo Colorized
          </div>

          <BeforeAfterSlider
            beforeSrc={originalUrl || preview || ""}
            afterSrc={resultPreviewUrl}
          />

          <div className="flex flex-wrap items-center justify-center gap-2">
            {["AI Colorization", "Realistic Colors", "Face-Aware"].map((tag) => (
              <span key={tag} className="rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/40 px-3 py-1 text-[13px] text-[#6e6e73]">
                {tag}
              </span>
            ))}
          </div>

          {/* Download Options Card */}
          <div className="mx-auto max-w-md rounded-2xl border border-[#d2d2d7]/50 bg-[#f5f5f7] p-7">
            <h3 className="mb-5 text-center text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">
              Result Access
            </h3>

            {isSubscriber ? (
              /* State C: Subscriber */
              <a
                href={`${API_BASE}/api/download/${taskId}?quality=original&email=${encodeURIComponent(localStorage.getItem("artimagehub_email") || "")}`}
                download
                onClick={() => trackPhotoDownload('pro')}
                className="flex w-full flex-col items-center gap-1 rounded-full bg-[#0071e3] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all"
              >
                <span className="flex items-center gap-2">
                  <Crown className="h-4 w-4" />
                  Download Original Quality
                </span>
                <span className="text-[11px] opacity-70 font-normal">PRO Member — Unlimited downloads</span>
              </a>
            ) : (
              <div className="space-y-3">
                <div className="rounded-xl border border-[#0071e3]/15 bg-white p-4 text-left">
                  <p className="text-[14px] font-semibold text-[#1d1d1f]">
                    This colorized photo is ready for Pro download.
                  </p>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-[#6e6e73]">
                    Preview stays free on this page. Unlock once to download the original-quality file and keep the same email linked for future colorization exports.
                  </p>
                </div>
                <Link
                  href={(() => {
                    const params = new URLSearchParams(
                      buildPaymentFunnelQuery(
                        mergePaymentFunnelSource(funnelSource, {
                          ctaSlot: "result_unlock",
                          entryVariant: "result_paywall",
                          checkoutSource: "download_intercept",
                        })
                      )
                    );
                    if (taskId) {
                      params.set("resume_task_id", taskId);
                    }
                    return `/subscription?${params.toString()}`;
                  })()}
                  onClick={() => trackCTAClick("colorizer-result-paywall")}
                  className="flex w-full flex-col items-center gap-1 rounded-full bg-[#1d1d1f] px-6 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-[#2d2d2f] active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2">
                    <Crown className="h-4 w-4" />
                    Unlock Pro to Download This Photo
                  </span>
                  <span className="text-[11px] font-normal opacity-70">
                    Unlimited · All tools · {PRO_PRICE_TEXT} lifetime
                  </span>
                </Link>
              </div>
            )}

            {!isSubscriber && (
              <p className="mt-4 text-center text-[12px] text-[#6e6e73]">
                {PRO_PRICE_TEXT} one-time · Pro Lifetime Access · Unlimited restorations on all 3 tools forever.
              </p>
            )}
            <div className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-amber-600">
              <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
              ⏱ Your colorized photo will be deleted in 24 hours
            </div>
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
          <button
            onClick={reset}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all"
          >
            <RotateCcw className="h-4 w-4" />
            {t.errorTryAgain}
          </button>
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
              { n: "1", title: "Pay First", desc: "Unlock upload and colorization with one payment" },
              { n: "2", title: "Upload", desc: "Return with the same email and upload your black & white photo" },
              { n: "3", title: "Process & Download", desc: "If processing completes, the HD download stays on that paid email" },
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
        alt="Colorized photo after AI processing"
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
          alt="Original black and white photo before colorization"
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
