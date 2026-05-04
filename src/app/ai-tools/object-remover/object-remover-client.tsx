"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Upload,
  Loader2,
  RotateCcw,
  AlertCircle,
  CheckCircle2,
  Crown,
  Eraser,
  Undo2,
  Trash2,
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
} from "@/lib/analytics";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.trim() || "";
const parsedPrice = Number.parseFloat(
  process.env.NEXT_PUBLIC_PRO_PRICE_USD?.trim() || "4.99"
);
const PRO_PRICE_USD = Number.isFinite(parsedPrice) ? parsedPrice : 4.99;
const PRO_PRICE_TEXT = `$${PRO_PRICE_USD.toFixed(2)}`;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Total upper bound for the round-trip POST /api/inpaint/lama call.
// Backend has a 12s connect + 60s read timeout chain; 90s gives a small
// envelope for cross-region TLS + multipart upload of large images.
const REQUEST_TIMEOUT_MS = 90_000;

const LANDING_PAGE = "/ai-tools/object-remover";

type Stage = "idle" | "mask" | "submitting" | "done" | "error";

interface PaintStroke {
  // Snapshot of the mask canvas before this stroke. Used for undo.
  imageData: ImageData;
}

export default function ObjectRemoverClient() {
  const searchParams = useSearchParams();
  const [stage, setStage] = useState<Stage>("idle");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [imageNaturalSize, setImageNaturalSize] = useState<{ w: number; h: number } | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [brushSize, setBrushSize] = useState(28);
  const [hasMask, setHasMask] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isSubscriber, setIsSubscriber] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [paidEmail, setPaidEmail] = useState("");
  const [paidCheckStatus, setPaidCheckStatus] = useState<"idle" | "checking" | "found" | "notfound">("idle");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const lastFileRef = useRef<File | null>(null);
  const imgElRef = useRef<HTMLImageElement | null>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const undoStackRef = useRef<PaintStroke[]>([]);
  const drawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const requestStartRef = useRef<number | null>(null);

  const funnelSource = useMemo(() => {
    if (typeof window === "undefined") {
      return { landingPage: LANDING_PAGE };
    }
    const querySource = readPaymentFunnelSource(
      new URLSearchParams(window.location.search)
    );
    return mergePaymentFunnelSource({ landingPage: LANDING_PAGE }, querySource);
  }, []);

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
    if (typeof window !== "undefined") {
      const savedEmail =
        localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";
      if (EMAIL_REGEX.test(savedEmail)) {
        params.set("email", savedEmail);
      }
    }
    return `/subscription?${params.toString()}`;
  }, [funnelSource]);

  // Subscription check (mirror restore-client.tsx — same payment infra)
  useEffect(() => {
    if (!API_BASE) {
      setErrorMsg(
        "Missing NEXT_PUBLIC_API_URL. Upload and payment are unavailable."
      );
      setStage("error");
      setCheckingAccess(false);
      return;
    }
    const email =
      localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";
    if (!email) {
      fetch(`${API_BASE}/health`).catch(() => {});
      setCheckingAccess(false);
      return;
    }

    const justPaid = (() => {
      if (searchParams.get("payment") === "success") return true;
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
          // transient — retry next iteration
        }
      }
      if (!cancelled) setCheckingAccess(false);
    };
    checkSubscription();
    return () => {
      cancelled = true;
    };
  }, [searchParams]);

  // Elapsed timer during submission
  useEffect(() => {
    if (stage !== "submitting") {
      setElapsedSeconds(0);
      return;
    }
    const interval = setInterval(() => setElapsedSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [stage]);

  // Cleanup object URLs
  useEffect(() => {
    return () => {
      if (imageUrl) URL.revokeObjectURL(imageUrl);
      if (resultUrl && resultUrl.startsWith("blob:"))
        URL.revokeObjectURL(resultUrl);
    };
  }, [imageUrl, resultUrl]);

  const handleAlreadyPaidCheck = useCallback(() => {
    if (!EMAIL_REGEX.test(paidEmail.trim())) return;
    setPaidCheckStatus("checking");
    fetch(
      `${API_BASE}/api/payment/subscription/${encodeURIComponent(
        paidEmail.trim().toLowerCase()
      )}`
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.is_active) {
          localStorage.setItem(
            "artimagehub_email",
            paidEmail.trim().toLowerCase()
          );
          setIsSubscriber(true);
          setPaidCheckStatus("found");
        } else {
          setPaidCheckStatus("notfound");
        }
      })
      .catch(() => setPaidCheckStatus("notfound"));
  }, [paidEmail]);

  const handleFile = useCallback((file: File) => {
    if (!isSubscriber) {
      setErrorMsg("Paid access required. Complete checkout first.");
      setStage("error");
      return;
    }
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(file.type)) {
      setErrorMsg("Invalid file type. Use JPG, PNG, or WEBP.");
      setStage("error");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setErrorMsg("File too large. Max 20MB.");
      setStage("error");
      return;
    }

    lastFileRef.current = file;
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setStage("mask");
    setHasMask(false);
    setResultUrl(null);
    setErrorMsg("");
    undoStackRef.current = [];
  }, [imageUrl, isSubscriber]);

  // When the image element loads, size the mask canvas to natural resolution.
  const onImageLoad = useCallback(() => {
    const img = imgElRef.current;
    const canvas = maskCanvasRef.current;
    if (!img || !canvas) return;
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    canvas.width = w;
    canvas.height = h;
    setImageNaturalSize({ w, h });
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, w, h);
    }
  }, []);

  // Convert pointer event coords → canvas internal coords
  const eventToCanvas = useCallback((e: React.PointerEvent) => {
    const canvas = maskCanvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return null;
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
      scale: scaleX,
    };
  }, []);

  const drawAt = useCallback(
    (x: number, y: number, scale: number, prev?: { x: number; y: number }) => {
      const canvas = maskCanvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx || !canvas) return;
      const radius = brushSize * scale;
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = radius * 2;
      if (prev) {
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    },
    [brushSize]
  );

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (stage !== "mask") return;
      const canvas = maskCanvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Snapshot for undo
      try {
        const snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
        undoStackRef.current.push({ imageData: snapshot });
        if (undoStackRef.current.length > 30) undoStackRef.current.shift();
      } catch {
        // Cross-origin canvas can throw; ignore — undo just won't include this stroke
      }

      drawingRef.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      const c = eventToCanvas(e);
      if (!c) return;
      drawAt(c.x, c.y, c.scale);
      lastPointRef.current = { x: c.x, y: c.y };
      setHasMask(true);
    },
    [drawAt, eventToCanvas, stage]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!drawingRef.current || stage !== "mask") return;
      const c = eventToCanvas(e);
      if (!c) return;
      drawAt(c.x, c.y, c.scale, lastPointRef.current ?? undefined);
      lastPointRef.current = { x: c.x, y: c.y };
    },
    [drawAt, eventToCanvas, stage]
  );

  const onPointerUp = useCallback(() => {
    drawingRef.current = false;
    lastPointRef.current = null;
  }, []);

  const handleUndo = useCallback(() => {
    const canvas = maskCanvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    const snapshot = undoStackRef.current.pop();
    if (snapshot) {
      ctx.putImageData(snapshot.imageData, 0, 0);
    } else {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      setHasMask(false);
    }
  }, []);

  const handleClearMask = useCallback(() => {
    const canvas = maskCanvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    undoStackRef.current = [];
    setHasMask(false);
  }, []);

  const exportMaskBlob = useCallback((): Promise<Blob | null> => {
    return new Promise((resolve) => {
      const canvas = maskCanvasRef.current;
      if (!canvas) return resolve(null);
      canvas.toBlob((blob) => resolve(blob), "image/png");
    });
  }, []);

  const handleSubmit = useCallback(async () => {
    const file = lastFileRef.current;
    if (!file || !hasMask) return;

    const checkoutEmail =
      localStorage.getItem("artimagehub_email")?.trim().toLowerCase() || "";
    if (!checkoutEmail) {
      setErrorMsg("Missing paid email. Please log in or pay first.");
      setStage("error");
      return;
    }

    setStage("submitting");
    setErrorMsg("");
    requestStartRef.current = Date.now();

    const maskBlob = await exportMaskBlob();
    if (!maskBlob) {
      setErrorMsg("Could not export mask. Please try again.");
      setStage("error");
      return;
    }

    const form = new FormData();
    form.append("image", file);
    form.append("mask", maskBlob, "mask.png");
    form.append("email", checkoutEmail);
    Object.entries(paymentFunnelPayload(funnelSource)).forEach(([k, v]) => {
      if (v) form.append(k, v);
    });

    trackPhotoUpload();

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    try {
      const res = await fetch(`${API_BASE}/api/inpaint/lama`, {
        method: "POST",
        body: form,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!res.ok) {
        // 503 = backend's silent-fallback also failed. Generic retry banner —
        // do NOT echo backend `detail` because it may leak "tunnel"/"HF" wording.
        if (res.status === 503) {
          throw new Error(
            "Service is busy right now. Please try again in a moment."
          );
        }
        const data = await res.json().catch(() => null);
        throw new Error(
          (data?.detail as string) || `Request failed (${res.status})`
        );
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setResultUrl(url);
      setStage("done");

      const startedAt = requestStartRef.current ?? Date.now();
      trackProcessingComplete({
        taskId: "inpaint-sync",
        tool: "object-remover",
        processingTimeMs: Date.now() - startedAt,
        source: funnelSource,
      });
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof DOMException && err.name === "AbortError") {
        setErrorMsg(
          "Request timed out. Your network may be slow — please try again."
        );
      } else {
        setErrorMsg(
          err instanceof Error
            ? err.message
            : "Object removal failed. Please try again."
        );
      }
      setStage("error");
    }
  }, [exportMaskBlob, funnelSource, hasMask]);

  const handleDownload = useCallback(() => {
    if (!resultUrl) return;
    trackPhotoDownload("pro");
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = "object-removed.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, [resultUrl]);

  const reset = useCallback(() => {
    if (imageUrl) URL.revokeObjectURL(imageUrl);
    if (resultUrl && resultUrl.startsWith("blob:"))
      URL.revokeObjectURL(resultUrl);
    setStage("idle");
    setImageUrl(null);
    setImageNaturalSize(null);
    setResultUrl(null);
    setErrorMsg("");
    setHasMask(false);
    undoStackRef.current = [];
    lastFileRef.current = null;
  }, [imageUrl, resultUrl]);

  const retryWithLastFile = useCallback(() => {
    const file = lastFileRef.current;
    if (file) {
      setErrorMsg("");
      handleFile(file);
    } else {
      reset();
    }
  }, [handleFile, reset]);

  // ---- Render ----
  return (
    <div className="mt-10">
      {stage === "idle" && (
        checkingAccess ? (
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-[#d2d2d7]/60 bg-[#f5f5f7] px-8 py-14 text-center min-h-[320px] justify-center">
            <div className="h-16 w-16 rounded-2xl bg-[#d2d2d7]/40 animate-pulse" />
            <div className="space-y-2 w-48">
              <div className="h-5 rounded-full bg-[#d2d2d7]/40 animate-pulse" />
              <div className="h-4 rounded-full bg-[#d2d2d7]/30 animate-pulse mx-4" />
            </div>
            <p className="text-[13px] text-[#6e6e73]">Checking access...</p>
          </div>
        ) : !isSubscriber ? (
          <PayGate
            checkoutHref={checkoutHref}
            paidEmail={paidEmail}
            setPaidEmail={setPaidEmail}
            paidCheckStatus={paidCheckStatus}
            handleAlreadyPaidCheck={handleAlreadyPaidCheck}
          />
        ) : (
          <UploadDropzone
            onClick={() => fileInputRef.current?.click()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              if (file) handleFile(file);
            }}
            fileInputRef={fileInputRef}
            handleFile={handleFile}
          />
        )
      )}

      {stage === "mask" && imageUrl && (
        <div className="space-y-5">
          <div className="rounded-2xl border border-[#d2d2d7]/50 bg-[#f5f5f7] p-3 sm:p-4">
            {/* Image + mask overlay.
                Mobile fold guard (per foreman 5-4 mobile-UX callout, 4-28
                /subscription mobile-fold lesson): cap image preview at
                min(55vh, 480px). The toolbar with "Remove" button must stay
                above fold on iPhone 14 Pro (844px viewport) after hero/nav. */}
            <div
              className="relative mx-auto inline-block max-w-full"
              style={{ touchAction: "none", maxHeight: "min(55vh, 480px)" }}
            >
              <img
                ref={imgElRef}
                src={imageUrl}
                alt="Image to clean up"
                onLoad={onImageLoad}
                className="block max-w-full rounded-xl select-none"
                style={{ maxHeight: "min(55vh, 480px)", width: "auto", height: "auto" }}
                draggable={false}
              />
              <canvas
                ref={maskCanvasRef}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                className="absolute inset-0 h-full w-full rounded-xl cursor-crosshair touch-none"
                style={{ opacity: 0.55, mixBlendMode: "screen" }}
              />
            </div>
          </div>

          {/* Toolbar */}
          <div className="rounded-xl border border-[#d2d2d7]/60 bg-white p-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              <div className="flex items-center gap-2">
                <Eraser className="h-4 w-4 text-[#6e6e73]" />
                <span className="text-[13px] font-medium text-[#1d1d1f]">Brush</span>
                <input
                  type="range"
                  min={6}
                  max={120}
                  step={1}
                  value={brushSize}
                  onChange={(e) => setBrushSize(Number(e.target.value))}
                  className="w-32 accent-[#0071e3]"
                />
                <span className="text-[12px] text-[#6e6e73] tabular-nums w-9">
                  {brushSize}px
                </span>
              </div>
              <button
                type="button"
                onClick={handleUndo}
                disabled={undoStackRef.current.length === 0}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] text-[#1d1d1f] hover:bg-[#f5f5f7] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Undo2 className="h-3.5 w-3.5" />
                Undo
              </button>
              <button
                type="button"
                onClick={handleClearMask}
                disabled={!hasMask}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] text-[#1d1d1f] hover:bg-[#f5f5f7] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Clear
              </button>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] text-[#6e6e73] hover:bg-[#f5f5f7]"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Different photo
              </button>
            </div>

            <div className="mt-3 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-[12px] text-[#6e6e73]">
                Brush over what you want gone. Be generous on edges — AI fills
                cleanly when there's a margin.
              </p>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!hasMask}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-sm"
              >
                <Eraser className="h-4 w-4" />
                Remove
              </button>
            </div>
            {imageNaturalSize && (
              <p className="mt-2 text-[11px] text-[#6e6e73]/70">
                Source: {imageNaturalSize.w} × {imageNaturalSize.h}px
              </p>
            )}
          </div>
        </div>
      )}

      {stage === "submitting" && (
        <div className="flex flex-col items-center gap-7 rounded-2xl border border-[#d2d2d7]/50 bg-[#f5f5f7] p-8 sm:p-12 text-center">
          <Loader2 className="h-10 w-10 animate-spin text-[#0071e3]" />
          <div className="w-full max-w-sm">
            <p className="text-[15px] font-medium text-[#1d1d1f]">
              {elapsedSeconds < 5
                ? "Uploading your image and mask..."
                : elapsedSeconds < 20
                ? "AI is reconstructing the area you brushed..."
                : elapsedSeconds < 45
                ? "Finalizing inpainted output — almost there."
                : "Server taking longer than usual — hang tight."}
            </p>
            <p className="mt-1 text-[12px] text-[#6e6e73] tabular-nums">
              {elapsedSeconds}s elapsed
            </p>
            <p className="mt-4 text-[12px] text-[#6e6e73]/80">
              Please keep this tab open. Your photo is processed securely and
              deleted within 24h.
            </p>
          </div>
        </div>
      )}

      {stage === "done" && resultUrl && (
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-[17px] font-semibold text-[#1d1d1f]">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Object Removed
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">
                Original
              </p>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt="Original photo"
                  className="w-full h-auto rounded-xl border border-[#d2d2d7]/50"
                />
              )}
            </div>
            <div>
              <p className="mb-1.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#6e6e73]">
                Cleaned
              </p>
              <img
                src={resultUrl}
                alt="Photo with object removed"
                className="w-full h-auto rounded-xl border border-[#d2d2d7]/50"
              />
            </div>
          </div>

          <div className="mx-auto max-w-md rounded-2xl border border-[#d2d2d7]/50 bg-[#f5f5f7] p-7">
            <button
              type="button"
              onClick={handleDownload}
              className="flex w-full flex-col items-center gap-1 rounded-full bg-[#0071e3] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all"
            >
              <span className="flex items-center gap-2">
                <Crown className="h-4 w-4" />
                Download HD Result
              </span>
              <span className="text-[11px] opacity-70 font-normal">
                Original quality unlocked for this email
              </span>
            </button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Clean another photo
            </button>
          </div>
        </div>
      )}

      {stage === "error" && (
        <div className="flex flex-col items-center gap-5 rounded-2xl border border-red-100 bg-red-50/50 p-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-red-100 shadow-sm">
            <AlertCircle className="h-7 w-7 text-red-500" />
          </div>
          <div>
            <p className="text-[17px] font-semibold text-[#1d1d1f]">
              Something went wrong
            </p>
            <p className="mt-2 max-w-md text-[14px] text-[#6e6e73] leading-[1.6]">
              {errorMsg ||
                "Object removal failed. Please try again, or email "}
              <a
                href="mailto:support@artimagehub.com"
                className="underline hover:text-[#1d1d1f] transition-colors"
              >
                support@artimagehub.com
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={retryWithLastFile}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all"
            >
              <RotateCcw className="h-4 w-4" />
              {lastFileRef.current ? "Try same photo again" : "Try again"}
            </button>
            {lastFileRef.current && (
              <button
                onClick={reset}
                className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] underline"
              >
                Upload a different photo
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ---- Sub-components ----

function PayGate({
  checkoutHref,
  paidEmail,
  setPaidEmail,
  paidCheckStatus,
  handleAlreadyPaidCheck,
}: {
  checkoutHref: string;
  paidEmail: string;
  setPaidEmail: (s: string) => void;
  paidCheckStatus: "idle" | "checking" | "found" | "notfound";
  handleAlreadyPaidCheck: () => void;
}) {
  return (
    <div className="rounded-2xl border border-[#d2d2d7]/60 bg-[#f5f5f7] px-8 py-14 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#0071e3]/15 bg-white shadow-sm">
        <Crown className="h-7 w-7 text-[#0071e3]" />
      </div>
      <h3 className="mt-5 text-[24px] font-semibold tracking-[-0.03em] text-[#1d1d1f]">
        Unlock Object Remover
      </h3>
      <p className="mx-auto mt-3 max-w-xl text-[14px] leading-[1.7] text-[#6e6e73]">
        Pay once, remove unlimited objects in HD. Return here with the same
        email to upload and clean up your photos.
      </p>
      <Link
        href={checkoutHref}
        onClick={() => trackCTAClick("object-remover-paywall")}
        className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm"
      >
        <Crown className="h-4 w-4" />
        Unlock Access — ${PRO_PRICE_USD.toFixed(2)}
      </Link>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#d2d2d7]/60 px-3 py-1 text-[12px] text-[#1d1d1f] shadow-sm">
          <Check className="h-3.5 w-3.5 text-green-500" />
          One-time payment · No subscription
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-[#d2d2d7]/60 px-3 py-1 text-[12px] text-[#1d1d1f] shadow-sm">
          <Check className="h-3.5 w-3.5 text-green-500" />
          30-day money-back guarantee
        </span>
      </div>

      <div className="mt-6 rounded-xl border border-[#d2d2d7]/60 bg-white p-3 text-center">
        <p className="text-[12px] font-medium text-[#1d1d1f]">
          Already paid? Enter your email to restore access
        </p>
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
          <p className="mt-1.5 text-[11px] text-green-600">
            Access restored — you can now upload your photo.
          </p>
        )}
        {paidCheckStatus === "notfound" && (
          <p className="mt-1.5 text-[11px] text-red-500">
            No active subscription found for this email.
          </p>
        )}
      </div>
    </div>
  );
}

function UploadDropzone({
  onClick,
  onDrop,
  fileInputRef,
  handleFile,
}: {
  onClick: () => void;
  onDrop: (e: React.DragEvent) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleFile: (file: File) => void;
}) {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      onClick={onClick}
      className="group flex flex-col items-center gap-5 rounded-2xl border-2 border-dashed border-[#d2d2d7] bg-[#f5f5f7] px-6 py-12 sm:px-8 sm:py-16 text-center cursor-pointer transition-all hover:border-[#0071e3]/40 hover:bg-[#f0f6ff] min-h-[280px] justify-center"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-[#d2d2d7]/60 shadow-sm group-hover:border-[#0071e3]/30 group-hover:bg-[#f0f7ff] transition-all">
        <Upload className="h-7 w-7 text-[#6e6e73] group-hover:text-[#0071e3] transition-colors" />
      </div>
      <div>
        <p className="text-[17px] font-semibold text-[#1d1d1f]">
          Upload a photo
        </p>
        <p className="mt-1.5 text-[14px] text-[#6e6e73]">
          You'll brush over what you want removed in the next step
        </p>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        className="inline-flex h-11 items-center gap-2 rounded-full bg-[#0071e3] px-7 text-[14px] font-semibold text-white hover:bg-[#0077ed] active:scale-[0.98] transition-all shadow-sm"
      >
        <Upload className="h-4 w-4" />
        Choose Photo
      </button>
      <p className="text-[12px] text-[#6e6e73]/80">
        JPG, PNG, WEBP up to 20MB
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
    </div>
  );
}
