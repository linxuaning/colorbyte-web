"use client";

import { useEffect } from "react";
import { trackPaymentCancel } from "@/lib/analytics";

export default function PaymentCancelTracker() {
  useEffect(() => {
    trackPaymentCancel("dodo_cancel_page");
  }, []);

  return null;
}
