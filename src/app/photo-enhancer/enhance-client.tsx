"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import Link from "next/link";
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

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.trim() || "";
const parsedPrice = Number.parseFloat(
  process.env.NEXT_PUBLIC_PRO_PRICE_USD?.trim() || "4.99"
);
const PRO_PRICE_USD = Number.isFinite(parsedPrice) ? parsedPrice : 4.99;
const PRO_PRICE_TEXT = `$${PRO_PRICE_USD.toFixed(2)}`;

type Stage = "idle" | "uploading" | "processing" | "done" | "error";

interface TaskStatus {
  task_id: string;
  status: string;
  progress: number;
  stage: string | null;
  error: string | null;
}

export default function EnhanceClient() {
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const processingStartedAtRef = useRef<number | null>(null);
  const funnelSource = useMemo(
    () =>
      typeof window === "undefined"
        ? { landingPage: "/photo-enhancer" }
        : mergePaymentFunnelSource(
            { landingPage: "/photo-enhancer" },
            readPaymentFunnelSource(new URLSearchParams(window.location.search))
          ),
    []
  );

  const buildSubscriptionHref = useCallback(
    (ctaSlot: string, checkoutSource: string, entryVariant = "pay_first") => {
      const params = buildPaymentFunnelQuery(
        mergePaymentFunnelSource(funnelSource, {
          ctaSlot,
          entryVariant,
          checkoutSource,
        })
      );
      return params ? `/subscription?${params}` : "/subscription";
    },
    [funnelSource]
  );

  // Check subscription status and download limit on mount
  useEffect(() => {
    if (!API_BASE) {
      setErrorMsg("Missing NEXT_PUBLIC_API_URL. Upload and payment are unavailable.");
      setStage("error");
      return;
    }
    const email = localStorage.getItem("artimagehub_email");
    if (email) {
      fetch(`${API_BASE}/api/payment/subscription/${encodeURIComponent(email)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.is_active) setIsSubscriber(true);
        })
        .catch(() => {});
    }
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
              tool: "enhance",
              processingTimeMs: Date.now() - startedAt,
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
            Choose Photo to Enhance
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
            Also colorize if black &amp; white
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
              alt="Photo being enhanced by AI"
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
              {progressText || "Enhancing..."}{progress > 0 && ` — ${progress}%`}
            </p>
            {stage === "processing" && progress < 30 && (
              <p className="mt-1.5 text-[12px] text-[#6e6e73]">
                First enhancement may take a moment while the AI warms up.
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
            Photo Enhanced
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
                  Download Original Quality
                </span>
                <span className="text-[11px] opacity-70 font-normal">PRO Member — Unlimited downloads</span>
              </a>
            ) : (
              <div className="space-y-3">
                <div className="rounded-xl border border-[#0071e3]/15 bg-white p-4 text-left">
                  <p className="text-[14px] font-semibold text-[#1d1d1f]">
                    This enhanced photo is ready for Pro download.
                  </p>
                  <p className="mt-1.5 text-[13px] leading-[1.6] text-[#6e6e73]">
                    This result path now uses the pay-first handoff. Unlock once to export this image in original quality and keep the same email linked for future enhancements.
                  </p>
                </div>
                <Link
                  href={buildSubscriptionHref(
                    "result_unlock",
                    "download_intercept",
                    "result_paywall"
                  )}
                  onClick={() => trackCTAClick("enhancer-result-paywall")}
                  className="flex w-full flex-col items-center gap-1 rounded-full bg-[#1d1d1f] px-6 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-[#2d2d2f] active:scale-[0.98]"
                >
                  <span className="flex items-center gap-2">
                    <Crown className="h-4 w-4" />
                    Unlock Pro to Download This Photo
                  </span>
                  <span className="text-[11px] font-normal opacity-70">
                    Original quality  ·  No watermark  ·  {PRO_PRICE_TEXT} once
                  </span>
                </Link>
              </div>
            )}

            {!isSubscriber && (
              <p className="mt-4 text-center text-[12px] text-[#6e6e73]">
                {PRO_PRICE_TEXT} one-time payment. No subscription. Original-quality download unlocks immediately after checkout.
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Enhance Another Photo
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
              { n: "1", title: "Upload", desc: "Drop or select any photo to enhance" },
              { n: "2", title: "AI Enhances", desc: "Face enhancement + super resolution" },
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
        alt="Enhanced photo after AI processing"
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
          alt="Original photo before enhancement"
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
