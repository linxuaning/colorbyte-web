"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
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

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type Stage = "idle" | "uploading" | "processing" | "done" | "error";

interface TaskStatus {
  task_id: string;
  status: string;
  progress: number;
  stage: string | null;
  error: string | null;
}

export default function RestoreClient() {
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
  const [remaining, setRemaining] = useState(3);
  const [limitReached, setLimitReached] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check subscription status and download limit on mount
  useEffect(() => {
    const email = localStorage.getItem("artimagehub_email");
    if (email) {
      fetch(`${API_BASE}/api/payment/subscription/${encodeURIComponent(email)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.is_active) setIsSubscriber(true);
        })
        .catch(() => {});
    }
    // Check download limit
    const limitUrl = email
      ? `${API_BASE}/api/download/check-limit?email=${encodeURIComponent(email)}`
      : `${API_BASE}/api/download/check-limit`;
    fetch(limitUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.remaining >= 0) setRemaining(data.remaining);
        if (!data.allowed && !data.is_subscriber) setLimitReached(true);
      })
      .catch(() => {});
  }, []);

  // --- Upload ---
  const handleFile = useCallback(
    async (file: File) => {
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
            setStage("processing");
            setProgressText("Processing started...");
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
  };

  return (
    <div className="mt-10">
      {/* --- IDLE: Upload area --- */}
      {stage === "idle" && (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
          className="group flex flex-col items-center gap-5 rounded-2xl border-2 border-dashed border-[#d2d2d7] bg-[#f5f5f7] px-8 py-16 text-center cursor-pointer transition-all hover:border-[#0071e3]/40 hover:bg-[#f0f6ff]"
        >
          {/* Upload icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[#d2d2d7]/60 shadow-sm group-hover:border-[#0071e3]/30 group-hover:bg-[#f0f7ff] transition-all">
            <Upload className="h-7 w-7 text-[#6e6e73] group-hover:text-[#0071e3] transition-colors" />
          </div>

          {/* Text */}
          <div>
            <p className="text-[17px] font-semibold text-[#1d1d1f]">Drop your photo here</p>
            <p className="mt-1.5 text-[14px] text-[#6e6e73]">
              or click to browse &middot; JPG, PNG, WEBP &middot; Max 20 MB
            </p>
          </div>

          {/* CTA button */}
          <button
            onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm"
          >
            <Upload className="h-4 w-4" />
            Choose Photo
          </button>

          {/* Colorize toggle */}
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
      )}

      {/* --- UPLOADING / PROCESSING --- */}
      {(stage === "uploading" || stage === "processing") && (
        <div className="flex flex-col items-center gap-7 rounded-2xl border border-[#d2d2d7]/50 bg-[#f5f5f7] p-12 text-center">
          {preview && (
            <img
              src={preview}
              alt="Uploaded photo being processed"
              className="h-48 w-auto rounded-xl object-contain shadow-sm"
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
                className="flex w-full flex-col items-center gap-1 rounded-full bg-[#0071e3] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all"
              >
                <span className="flex items-center gap-2">
                  <Crown className="h-4 w-4" />
                  Download Original Quality
                </span>
                <span className="text-[11px] opacity-70 font-normal">PRO Member — Unlimited downloads</span>
              </a>
            ) : (
              <div className="space-y-2.5">
                {/* Free Download */}
                {remaining > 0 ? (
                  <a
                    href={resultUrl}
                    download
                    onClick={() => {
                      const next = remaining - 1;
                      setRemaining(next);
                      if (next <= 0) setLimitReached(true);
                    }}
                    className="flex w-full flex-col items-center gap-1 rounded-full bg-[#0071e3] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download 720p — FREE
                    </span>
                    <span className="text-[11px] opacity-70 font-normal">
                      {remaining} download{remaining !== 1 ? "s" : ""} remaining today
                    </span>
                  </a>
                ) : (
                  <button
                    onClick={() => setShowLimitModal(true)}
                    className="flex w-full cursor-not-allowed flex-col items-center gap-1 rounded-full bg-[#f5f5f7] border border-[#d2d2d7]/60 px-6 py-3.5 text-[14px] font-medium text-[#6e6e73]"
                  >
                    <span className="flex items-center gap-2">
                      <XCircle className="h-4 w-4" />
                      Daily Limit Reached (0/3)
                    </span>
                    <span className="text-[11px]">Resets at midnight UTC</span>
                  </button>
                )}

                {/* Trial CTA */}
                <Link
                  href="/#pricing"
                  className={`flex w-full flex-col items-center gap-1 rounded-full px-6 py-3.5 text-[14px] font-semibold transition-all active:scale-[0.98] ${
                    remaining === 0
                      ? "bg-[#1d1d1f] text-white hover:bg-[#2d2d2f]"
                      : "border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/5"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Crown className="h-4 w-4" />
                    {remaining === 0
                      ? "Start 7-Day Free Trial — Unlimited Downloads"
                      : "Start 7-Day Free Trial"}
                  </span>
                  <span className={`text-[11px] font-normal ${remaining === 0 ? "opacity-60" : "opacity-70"}`}>
                    {remaining === 0
                      ? "No watermark  ·  Original quality  ·  $0 today"
                      : "Original quality · No watermark · Unlimited"}
                  </span>
                </Link>
              </div>
            )}

            {!isSubscriber && (
              <p className="mt-4 text-center text-[12px] text-[#6e6e73]">
                Trial is free. Card required, $9.9/mo after 7 days. Cancel anytime.
              </p>
            )}
          </div>

          {/* Limit Reached Modal */}
          {showLimitModal && (
            <LimitReachedModal
              onClose={() => setShowLimitModal(false)}
              onStartTrial={() => {
                setShowLimitModal(false);
                window.location.href = "/#pricing";
              }}
            />
          )}

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
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#fff2f2] border border-red-100">
            <XCircle className="h-7 w-7 text-red-500" />
          </div>

          <h2 className="text-[22px] font-bold tracking-[-0.03em] text-[#1d1d1f]">Daily Limit Reached</h2>
          <p className="mt-2 text-[14px] text-[#6e6e73] leading-[1.6]">
            You&apos;ve used all 3 free downloads for today.
            <br />
            Your limit resets in {timeToReset}.
          </p>

          {/* Trial Benefits Card */}
          <div className="mt-6 rounded-2xl bg-[#f5f5f7] border border-[#d2d2d7]/40 p-6 text-left">
            <h3 className="text-[16px] font-semibold text-[#1d1d1f] mb-1">Start Your 7-Day Free Trial</h3>
            <p className="text-[13px] text-[#6e6e73] mb-4">
              Get unlimited downloads immediately:
            </p>

            <div className="space-y-2.5 text-[14px]">
              {[
                "Unlimited downloads (no daily limit)",
                "Original quality (full resolution)",
                "No watermark",
                "Priority processing",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10">
                    <Check className="h-3 w-3 text-[#0071e3]" />
                  </div>
                  <span className="text-[#1d1d1f]">{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onStartTrial}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#0071e3] px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all"
            >
              <Crown className="h-4 w-4" />
              Start Free Trial — $0 Today
            </button>

            <p className="mt-3 text-center text-[12px] text-[#6e6e73]">
              $9.9/month after trial. Cancel anytime in 1 click.
            </p>
          </div>

          {/* Secondary Option */}
          <div className="mt-4">
            <button
              onClick={onClose}
              className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              Come back later
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
      />
      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={beforeSrc}
          alt="Original old photo before restoration"
          className="h-full w-full object-contain"
          style={{
            width: containerRef.current
              ? `${containerRef.current.offsetWidth}px`
              : "100%",
            maxWidth: "none",
          }}
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
