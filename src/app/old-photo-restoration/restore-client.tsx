"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Upload,
  Loader2,
  Download,
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
  readPaymentFunnelSource,
  trackPhotoUpload,
  trackProcessingComplete,
  trackPhotoDownload,
  trackCTAClick,
} from "@/lib/analytics";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.trim() || "";
const parsedPrice = Number.parseFloat(
  process.env.NEXT_PUBLIC_PRO_PRICE_USD?.trim() || "4.99"
);
const PRO_PRICE_USD = Number.isFinite(parsedPrice) ? parsedPrice : 4.99;
const PRO_PRICE_TEXT = `$${PRO_PRICE_USD.toFixed(2)}`;
const CHECKOUT_NOISE_DATA_ATTR = "checkoutNoiseSuppressed";
const CHECKOUT_NOISE_EVENT = "artimagehub:checkout-noise-changed";

type Stage = "idle" | "uploading" | "processing" | "done" | "error";

interface TaskStatus {
  task_id: string;
  status: string;
  progress: number;
  stage: string | null;
  error: string | null;
}

export default function RestoreClient() {
  const searchParams = useSearchParams();
  const [stage, setStage] = useState<Stage>("idle");
  const [preview, setPreview] = useState<string | null>(null);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [colorize, setColorize] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [isSubscriber, setIsSubscriber] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [remaining, setRemaining] = useState(3);
  const [limitReached, setLimitReached] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const processingStartedAtRef = useRef<number | null>(null);
  const resumeTaskId = searchParams.get("resume_task_id")?.trim() || "";
  const funnelSource = useMemo(
    () =>
      typeof window === "undefined"
        ? { landingPage: "/old-photo-restoration" }
        : mergePaymentFunnelSource(
            { landingPage: "/old-photo-restoration" },
            readPaymentFunnelSource(new URLSearchParams(window.location.search))
          ),
    []
  );

  const redirectToSubscription = useCallback(
    (overrides?: {
      ctaSlot?: string;
      entryVariant?: string;
      checkoutSource?: string;
    }) => {
      const params = buildPaymentFunnelQuery(
        mergePaymentFunnelSource(funnelSource, {
          ctaSlot: funnelSource.ctaSlot || overrides?.ctaSlot,
          entryVariant: funnelSource.entryVariant || overrides?.entryVariant,
          checkoutSource: overrides?.checkoutSource || "subscription_page",
        })
      );
      window.location.href = params ? `/subscription?${params}` : "/subscription";
    },
    [funnelSource]
  );

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

    fetch(`${API_BASE}/api/payment/subscription/${encodeURIComponent(email)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.is_active) {
          setIsSubscriber(true);
        }
      })
      .catch(() => {})
      .finally(() => {
        setCheckingAccess(false);
      });
  }, []);

  useEffect(() => {
    if (!API_BASE || !resumeTaskId || stage !== "idle" || checkingAccess || !isSubscriber) {
      return;
    }

    setTaskId(resumeTaskId);
    setResultUrl(`${API_BASE}/api/download/${resumeTaskId}`);
    setOriginalUrl(`${API_BASE}/api/preview/${resumeTaskId}`);
    setProgress(100);
    setProgressText("");
    setErrorMsg("");
    setStage("done");
  }, [API_BASE, checkingAccess, isSubscriber, resumeTaskId, stage]);

  useEffect(() => {
    const suppressCheckoutNoise = stage === "done" && !isSubscriber;
    const { body } = document;

    if (suppressCheckoutNoise) {
      body.dataset[CHECKOUT_NOISE_DATA_ATTR] = "1";
    } else {
      delete body.dataset[CHECKOUT_NOISE_DATA_ATTR];
    }
    window.dispatchEvent(new Event(CHECKOUT_NOISE_EVENT));

    return () => {
      if (body.dataset[CHECKOUT_NOISE_DATA_ATTR] === "1") {
        delete body.dataset[CHECKOUT_NOISE_DATA_ATTR];
        window.dispatchEvent(new Event(CHECKOUT_NOISE_EVENT));
      }
    };
  }, [isSubscriber, stage]);

  // Handle click on upload area — open for all users (freemium)
  const handleUploadClick = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  // --- Upload --- (open to all users in freemium model)
  const handleFile = useCallback(
    async (file: File) => {
      const checkoutEmail =
        localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";

      const allowed = ["image/jpeg", "image/png", "image/webp"];
      if (!allowed.includes(file.type)) {
        setErrorMsg("Invalid file type. Please upload JPG, PNG, or WEBP.");
        setStage("error");
        return;
      }
      if (file.size > 20 * 1024 * 1024) {
        setErrorMsg("File too large. Maximum size is 20MB.");
        setStage("error");
        return;
      }

      // Show preview
      setPreview(URL.createObjectURL(file));
      setStage("uploading");
      setProgress(0);
      setProgressText("Uploading...");

      try {
        const form = new FormData();
        form.append("file", file);
        form.append("colorize", String(colorize));
        form.append("email", checkoutEmail);

        // Upload with retry (3 attempts, exponential backoff)
        let lastError: Error | null = null;
        const delays = [0, 1000, 2000];
        for (let attempt = 0; attempt < 3; attempt++) {
          if (attempt > 0) {
            setProgressText(`Retrying upload (${attempt + 1}/3)...`);
            await new Promise((r) => setTimeout(r, delays[attempt]));
          }
          try {
            const res = await fetch(`${API_BASE}/api/upload`, {
              method: "POST",
              body: form,
            });

            if (!res.ok) {
              const data = await res.json().catch(() => null);
              throw new Error(data?.detail || `Upload failed (${res.status})`);
            }

            const data = await res.json();
            setTaskId(data.task_id);
            processingStartedAtRef.current = Date.now();
            setStage("processing");
            setProgressText("Processing started...");

            // Track successful upload
            trackPhotoUpload();

            lastError = null;
            break;
          } catch (err) {
            lastError = err instanceof Error ? err : new Error("Upload failed");
          }
        }

        if (lastError) throw lastError;
      } catch (err: unknown) {
        setErrorMsg(err instanceof Error ? err.message : "Upload failed");
        setStage("error");
      }
    },
    [colorize],
  );

  // --- Poll task status ---
  useEffect(() => {
    if (stage !== "processing" || !taskId) return;

    let cancelled = false;
    const timeout = setTimeout(() => {
      if (!cancelled) {
        setErrorMsg(
          "Processing timed out. The AI service may be warming up — please try again.",
        );
        setStage("error");
      }
    }, 120_000);

    const poll = async () => {
      while (!cancelled) {
        try {
          const res = await fetch(`${API_BASE}/api/tasks/${taskId}`);
          if (!res.ok) throw new Error("Failed to fetch status");
          const data: TaskStatus = await res.json();

          if (cancelled) break;

          setProgress(data.progress);
          setProgressText(data.stage || "Processing...");

          if (data.status === "completed") {
            const startedAt = processingStartedAtRef.current ?? Date.now();
            trackProcessingComplete({
              taskId,
              tool: colorize ? "colorize" : "restore",
              processingTimeMs: Date.now() - startedAt,
              source: funnelSource,
            });
            setResultUrl(`${API_BASE}/api/download/${taskId}`);
            setOriginalUrl(`${API_BASE}/api/preview/${taskId}`);
            setStage("done");
            break;
          }
          if (data.status === "failed") {
            setErrorMsg(data.error || "Processing failed. Please try again.");
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
  }, [stage, taskId]);

  // --- Drag & drop ---
  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile],
  );

  // --- Paste ---
  useEffect(() => {
    const handler = (e: ClipboardEvent) => {
      const file = e.clipboardData?.files[0];
      if (file && stage === "idle") handleFile(file);
    };
    document.addEventListener("paste", handler);
    return () => document.removeEventListener("paste", handler);
  }, [handleFile, stage]);

  const reset = () => {
    setStage("idle");
    setPreview(null);
    setTaskId(null);
    setProgress(0);
    setProgressText("");
    setErrorMsg("");
    setResultUrl(null);
    setOriginalUrl(null);
    processingStartedAtRef.current = null;
  };

  return (
    <div className="mt-10">
      {/* --- IDLE: Upload area (open to all users) --- */}
      {stage === "idle" && (
        checkingAccess ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-[#d2d2d7]/60 bg-[#f5f5f7] px-8 py-16 text-center">
            <Loader2 className="h-6 w-6 animate-spin text-[#0071e3]" />
            <p className="text-[17px] font-semibold text-[#1d1d1f]">Loading...</p>
          </div>
        ) : (
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={onDrop}
            onClick={handleUploadClick}
            className="group flex flex-col items-center gap-5 rounded-2xl border-2 border-dashed border-[#d2d2d7] bg-[#f5f5f7] px-8 py-16 text-center cursor-pointer transition-all hover:border-[#0071e3]/40 hover:bg-[#f0f6ff]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[#d2d2d7]/60 shadow-sm group-hover:border-[#0071e3]/30 group-hover:bg-[#f0f7ff] transition-all">
              <Upload className="h-7 w-7 text-[#6e6e73] group-hover:text-[#0071e3] transition-colors" />
            </div>

            <div>
              <p className="text-[17px] font-semibold text-[#1d1d1f]">Drop your photo here</p>
              <p className="mt-1.5 text-[14px] text-[#6e6e73]">
                or click to browse &middot; JPG, PNG, WEBP &middot; Max 20 MB
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
              Restore Your Photo Free
            </button>

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
              Colorize black &amp; white photo
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
              You can also paste an image with Ctrl+V
            </p>
          </div>
        )
      )}

      {/* --- UPLOADING / PROCESSING --- */}
      {(stage === "uploading" || stage === "processing") && (
        <div className="flex flex-col items-center gap-7 rounded-2xl border border-[#d2d2d7]/50 bg-[#f5f5f7] p-12 text-center">
          {preview && (
            <img
              src={preview}
              alt="Uploaded photo being processed"
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
              {progressText || "Processing..."}{progress > 0 && ` — ${progress}%`}
            </p>
            {stage === "processing" && progress < 30 && (
              <p className="mt-1.5 text-[12px] text-[#6e6e73]">
                First processing may take a moment while the AI warms up.
              </p>
            )}
          </div>
          <Loader2 className="h-5 w-5 animate-spin text-[#6e6e73]" />
        </div>
      )}

      {/* --- DONE: Before/After comparison --- */}
      {stage === "done" && resultUrl && (
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-[17px] font-semibold text-[#1d1d1f]">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Photo Restored
          </div>

          <BeforeAfterSlider
            beforeSrc={originalUrl || preview || ""}
            afterSrc={resultUrl}
          />

          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Face Enhancement", "Super Resolution", ...(colorize ? ["Colorized"] : [])].map((tag) => (
              <span key={tag} className="rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/40 px-3 py-1 text-[13px] text-[#6e6e73]">
                {tag}
              </span>
            ))}
          </div>

          {/* Download Options Card */}
          <div className="mx-auto max-w-md rounded-2xl border border-[#d2d2d7]/50 bg-[#f5f5f7] p-7">
            <h3 className="mb-5 text-center text-[13px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">
              Download Options
            </h3>

            {isSubscriber ? (
              /* State C: Subscriber */
              <a
                href={`${resultUrl}?quality=original&email=${encodeURIComponent(localStorage.getItem("artimagehub_email") || "")}`}
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
            ) : (
              <div className="space-y-3">
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

                <a
                  href={resultUrl}
                  download
                  onClick={() => trackPhotoDownload('free')}
                  className="flex items-center justify-center gap-2 px-2 py-1 text-[12px] font-medium text-[#6e6e73] underline decoration-[#d2d2d7] underline-offset-4 hover:text-[#1d1d1f]"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download the 720p watermarked preview instead
                </a>
              </div>
            )}

            {!isSubscriber && (
              <div className="mt-4">
                <p className="text-center text-[12px] text-[#6e6e73]">
                  {PRO_PRICE_TEXT} one-time payment. No subscription.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Restore Another Photo
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
            <p className="text-[17px] font-semibold text-[#1d1d1f]">Something Went Wrong</p>
            <p className="mt-2 max-w-md text-[14px] text-[#6e6e73] leading-[1.6]">{errorMsg}</p>
          </div>
          <button
            onClick={reset}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all"
          >
            <RotateCcw className="h-4 w-4" />
            Try Again
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
              { n: "1", title: "Upload", desc: "Drop or select your old photo" },
              { n: "2", title: "AI Restores", desc: "Face enhancement + super resolution" },
              { n: "3", title: "Download", desc: "Compare before/after and download" },
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

          <h2 className="text-[22px] font-bold tracking-[-0.03em] text-[#1d1d1f]">Download HD Original</h2>
          <p className="mt-2 text-[14px] text-[#6e6e73] leading-[1.6]">
            Your preview is ready.
            <br />
            Pay once to download the HD original without a watermark.
          </p>

          {/* HD original benefits card */}
          <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f] border border-[#0071e3]/20 p-6 text-left relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="rounded-full bg-[#0071e3] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                One-time access
              </span>
            </div>

            <h3 className="text-[18px] font-bold text-white mb-1">Download HD Original — $4.99</h3>
            <p className="text-[12px] text-white/60 mb-4">
              One-time payment. No subscription.
            </p>

            <div className="space-y-2.5 text-[13px]">
              {[
                "HD original file",
                "Full resolution",
                "No watermark",
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
              <p className="text-white">Your current email unlocks the HD original immediately.</p>
              <p className="text-white mt-1">You return straight to the result after checkout.</p>
            </div>

            <button
              onClick={onStartTrial}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#0071e3] px-6 py-3.5 text-[14px] font-bold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-lg shadow-[#0071e3]/25"
            >
              <Crown className="h-4 w-4" />
              Download HD Original — $4.99
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
