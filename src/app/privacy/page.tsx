import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — ArtImageHub",
  description: "ArtImageHub privacy policy: how we handle your photos and personal data. Photos are deleted after 24 hours. We never share or train on your images.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const lastUpdated = "February 16, 2026";

  return (
    <div className="min-h-screen bg-[#faf8f4]">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-20">
        {/* Header */}
        <div className="mb-12 border-b border-[#d4bc91]/50 pb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-[#8B5E3C]" aria-hidden="true" />
            <span className="font-lora text-[12px] uppercase tracking-[0.14em] text-[#8B5E3C]">Legal</span>
          </div>
          <h1 className="font-playfair text-[42px] font-800 leading-[1.1] tracking-[-0.02em] text-[#2c2416]">
            Privacy Policy
          </h1>
          <p className="mt-3 font-lora text-[15px] text-[#8B7355]">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="font-lora text-[16px] leading-[1.8] text-[#4a3728] space-y-8">
          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">1. Overview</h2>
            <p>
              ArtImageHub (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the AI photo restoration service at www.artimagehub.com.
              This Privacy Policy explains how we collect, use, and protect your information when you use our service.
            </p>
            <p className="mt-4">
              We built ArtImageHub with privacy in mind. Your photos are precious — we treat them that way.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">2. Your Photos</h2>
            <p>
              <strong className="text-[#2c2416]">Automatic deletion:</strong> All uploaded photos are automatically and permanently deleted from our servers within 24 hours of upload.
            </p>
            <p className="mt-4">
              <strong className="text-[#2c2416]">No training:</strong> We never use your photos to train AI models. Your images are processed solely to generate your restored output.
            </p>
            <p className="mt-4">
              <strong className="text-[#2c2416]">No sharing:</strong> We never sell, share, or transfer your photos to third parties.
            </p>
            <p className="mt-4">
              <strong className="text-[#2c2416]">Transmission security:</strong> All photo uploads are encrypted in transit using HTTPS/TLS.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">3. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-[#2c2416]">Email address:</strong> Collected when you start a free trial or subscribe. Used to manage your subscription and send transactional emails.</li>
              <li><strong className="text-[#2c2416]">Payment information:</strong> Processed by LemonSqueezy. We never see or store your credit card details.</li>
              <li><strong className="text-[#2c2416]">Usage data:</strong> Basic analytics (pages visited, feature usage) to improve the product. No personal identification.</li>
              <li><strong className="text-[#2c2416]">Uploaded images:</strong> Temporarily processed to perform restoration. Deleted within 24 hours (see above).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">4. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve the photo restoration service</li>
              <li>To manage your subscription and billing</li>
              <li>To send transactional emails (receipt, trial ending notice)</li>
              <li>To enforce our Terms of Service</li>
              <li>To respond to support requests</li>
            </ul>
            <p className="mt-4">We do not send marketing emails without your explicit consent.</p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">5. Third-Party Services</h2>
            <p>We use the following trusted third-party services:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong className="text-[#2c2416]">LemonSqueezy:</strong> Payment processing. Subject to their privacy policy.</li>
              <li><strong className="text-[#2c2416]">Replicate:</strong> AI model inference. Images sent for processing are subject to Replicate&apos;s data handling policies.</li>
              <li><strong className="text-[#2c2416]">Vercel:</strong> Website hosting and edge delivery.</li>
              <li><strong className="text-[#2c2416]">Render:</strong> API server hosting.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">6. Cookies</h2>
            <p>
              We use minimal, essential cookies only: session management and your saved email for the subscription portal.
              We do not use advertising cookies or cross-site tracking.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Request a copy of the personal data we hold about you</li>
              <li>Request deletion of your email and account data</li>
              <li>Cancel your subscription at any time</li>
              <li>Opt out of any non-essential communications</li>
            </ul>
            <p className="mt-4">To exercise these rights, email us at the address below.</p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">8. Data Retention</h2>
            <p>
              Photos: deleted within 24 hours.<br />
              Email and subscription data: retained while your account is active, then deleted within 30 days of cancellation upon request.<br />
              Anonymous analytics: retained for up to 12 months.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">9. Children&apos;s Privacy</h2>
            <p>
              ArtImageHub is not directed at children under 13. We do not knowingly collect personal information from children under 13.
              If you believe a child has provided us with personal information, please contact us so we can delete it.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. We will notify subscribed users of material changes by email.
              Continued use of the service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">11. Contact</h2>
            <p>
              Questions about this Privacy Policy? Contact us at:{" "}
              <a href="mailto:privacy@www.artimagehub.com" className="text-[#8B5E3C] underline">
                privacy@www.artimagehub.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
