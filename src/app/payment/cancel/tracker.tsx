"use client";

import { useEffect } from "react";
import {
  consumePendingPaymentFunnelSource,
  trackPaymentCancel,
} from "@/lib/analytics";

export default function PaymentCancelTracker() {
  useEffect(() => {
    trackPaymentCancel("paypal_cancel_page", consumePendingPaymentFunnelSource());
  }, []);

  return null;
}
