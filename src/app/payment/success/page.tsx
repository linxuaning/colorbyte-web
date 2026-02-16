"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Verifying your payment...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [data, setData] = useState<{
    email: string;
    subscription_status: string;
    trial_end: string | null;
  } | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    fetch(`${API_BASE}/api/payment/verify-session/${sessionId}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "success") {
          setData(result);
          setStatus("success");
          // Save email to localStorage for later use
          if (result.email) {
            localStorage.setItem("artimagehub_email", result.email);
          }
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, [sessionId]);

  if (status === "loading") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
          <p className="mt-4 text-muted-foreground">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="mx-auto max-w-md text-center">
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="mt-2 text-muted-foreground">
            We couldn&apos;t verify your payment. If you were charged, please contact support.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex h-10 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const trialEndDate = data?.trial_end
    ? new Date(data.trial_end).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-4 text-3xl font-bold">Welcome to ArtImageHub Pro!</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Your 7-day free trial has started.
        </p>

        {trialEndDate && (
          <div className="mt-6 rounded-lg border bg-muted/50 p-4">
            <p className="text-sm text-muted-foreground">Trial ends on</p>
            <p className="text-lg font-semibold">{trialEndDate}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              You won&apos;t be charged until your trial ends. Cancel anytime.
            </p>
          </div>
        )}

        <div className="mt-6 space-y-3">
          <p className="text-sm text-muted-foreground">
            Signed in as <strong>{data?.email}</strong>
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/old-photo-restoration"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Restoring Photos
          </Link>
          <Link
            href="/subscription"
            className="inline-flex h-10 items-center justify-center rounded-lg border px-6 text-sm font-medium transition-colors hover:bg-muted"
          >
            Manage Subscription
          </Link>
        </div>
      </div>
    </div>
  );
}
