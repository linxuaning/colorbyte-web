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
          className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed p-12 text-center transition-colors hover:border-primary/50 hover:bg-muted/50"
        >
          <Upload className="h-12 w-12 text-muted-foreground" />
          <p className="text-lg font-medium">Drop your photo here</p>
          <p className="text-sm text-muted-foreground">
            or click to upload &middot; JPG, PNG, WEBP &middot; Max 20MB
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Upload className="h-4 w-4" />
              Upload Photo
            </button>
          </div>
          <label className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={colorize}
              onChange={(e) => setColorize(e.target.checked)}
              className="rounded"
            />
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
          <p className="mt-2 text-xs text-muted-foreground">
            You can also paste an image with Ctrl+V
          </p>
        </div>
      )}

      {/* --- UPLOADING / PROCESSING --- */}
      {(stage === "uploading" || stage === "processing") && (
        <div className="flex flex-col items-center gap-6 rounded-xl border p-12 text-center">
          {preview && (
            <img
              src={preview}
              alt="Uploaded photo being processed"
              className="h-48 w-auto rounded-lg object-contain"
            />
          )}
          <div className="w-full max-w-sm">
            <div className="relative h-3 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 text-sm font-medium">
              {progressText || "Processing..."} {progress > 0 && `${progress}%`}
            </p>
            {stage === "processing" && progress < 30 && (
              <p className="mt-1 text-xs text-muted-foreground">
                First processing may take longer while the AI warms up. Please
                wait...
              </p>
            )}
          </div>
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      )}

      {/* --- DONE: Before/After comparison --- */}
      {stage === "done" && resultUrl && (
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Photo Restored!
          </div>

          <BeforeAfterSlider
            beforeSrc={originalUrl || preview || ""}
            afterSrc={resultUrl}
          />

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="rounded-full bg-muted px-3 py-1">Face Enhancement</span>
            <span className="rounded-full bg-muted px-3 py-1">Super Resolution</span>
            {colorize && (
              <span className="rounded-full bg-muted px-3 py-1">Colorized</span>
            )}
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {isSubscriber ? (
              <a
                href={`${resultUrl}?quality=original&email=${encodeURIComponent(localStorage.getItem("artimagehub_email") || "")}`}
                download
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                Download Original Quality
              </a>
            ) : limitReached ? (
              <Link
                href="/#pricing"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Crown className="h-4 w-4" />
                Start Free Trial — Unlimited Downloads
              </Link>
            ) : (
              <a
                href={resultUrl}
                download
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" />
                Download 720p ({remaining}/3 remaining)
              </a>
            )}
            {!isSubscriber && !limitReached && (
              <Link
                href="/#pricing"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-primary px-6 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                <Crown className="h-4 w-4" />
                Get Original — Start Free Trial
              </Link>
            )}
          </div>
          {limitReached && !isSubscriber && (
            <p className="text-center text-sm text-muted-foreground">
              You&apos;ve used all 3 free downloads today. Start a free trial for unlimited original-quality downloads.
            </p>
          )}

          <div className="flex justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="h-4 w-4" />
              Restore Another Photo
            </button>
          </div>
        </div>
      )}

      {/* --- ERROR --- */}
      {stage === "error" && (
        <div className="flex flex-col items-center gap-4 rounded-xl border border-destructive/20 bg-destructive/5 p-12 text-center">
          <AlertCircle className="h-10 w-10 text-destructive" />
          <p className="text-lg font-medium">Oops, Something Went Wrong</p>
          <p className="max-w-md text-sm text-muted-foreground">{errorMsg}</p>
          <div className="flex gap-3">
            <button
              onClick={reset}
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* --- How It Works (below fold) --- */}
      {stage === "idle" && (
        <div className="mt-16">
          <h2 className="text-center text-xl font-semibold">How It Works</h2>
          <div className="mt-8 grid gap-6 text-center sm:grid-cols-3">
            <div>
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                1
              </div>
              <p className="mt-2 text-sm font-medium">Upload</p>
              <p className="text-xs text-muted-foreground">
                Drop or select your old photo
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                2
              </div>
              <p className="mt-2 text-sm font-medium">AI Restores</p>
              <p className="text-xs text-muted-foreground">
                Face enhancement + super resolution
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                3
              </div>
              <p className="mt-2 text-sm font-medium">Download</p>
              <p className="text-xs text-muted-foreground">
                Compare before/after and download
              </p>
            </div>
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
      className="relative mx-auto aspect-[4/3] max-w-2xl cursor-col-resize select-none overflow-hidden rounded-xl border"
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
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-lg"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-black/50 text-white">
          <GripVertical className="h-4 w-4" />
        </div>
      </div>
      {/* Labels */}
      <span className="absolute top-3 left-3 rounded bg-black/50 px-2 py-0.5 text-xs font-medium text-white">
        Before
      </span>
      <span className="absolute top-3 right-3 rounded bg-black/50 px-2 py-0.5 text-xs font-medium text-white">
        After
      </span>
    </div>
  );
}
