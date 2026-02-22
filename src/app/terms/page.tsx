import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — ArtImageHub",
  description: "ArtImageHub terms of service: acceptable use, subscription terms, refund policy, and intellectual property rights for our AI photo restoration service.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-3 font-lora text-[15px] text-[#8B7355]">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="font-lora text-[16px] leading-[1.8] text-[#4a3728] space-y-8">
          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using ArtImageHub (&quot;Service&quot;) at artimagehub.com, you agree to be bound by these Terms of Service.
              If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">2. Description of Service</h2>
            <p>
              ArtImageHub provides AI-powered photo restoration, enhancement, and colorization services. We offer a free tier (3 restorations per day, 720p output, watermark) and a paid Pro subscription (unlimited restorations, original quality, no watermark).
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">3. Free Tier</h2>
            <p>
              The free tier allows 3 photo restorations per day without requiring an account. Free tier output includes a small watermark and is limited to 720p resolution. We reserve the right to modify free tier limits at any time.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">4. Pro Subscription</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-[#2c2416]">Price:</strong> $9.90/month after a 7-day free trial.</li>
              <li><strong className="text-[#2c2416]">Trial:</strong> Your card is charged only after the 7-day trial period ends. Cancel any time before the trial ends and you will not be charged.</li>
              <li><strong className="text-[#2c2416]">Billing:</strong> Subscriptions renew automatically on a monthly basis.</li>
              <li><strong className="text-[#2c2416]">Cancellation:</strong> Cancel at any time through your account dashboard or by contacting support. Access continues until the end of the current billing period.</li>
              <li><strong className="text-[#2c2416]">Refunds:</strong> We offer a 7-day money-back guarantee after your first charge. Contact support within 7 days of being charged.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">5. Your Content and License</h2>
            <p>
              You retain all ownership rights to photos you upload. By uploading photos, you grant us a limited, temporary license to process them solely for the purpose of providing the restoration service.
            </p>
            <p className="mt-4">
              You represent that you have the rights to upload and process the photos (e.g., you own them or have permission from the copyright holder).
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Upload photos containing illegal content, including child sexual abuse material (CSAM)</li>
              <li>Upload photos of others without their consent</li>
              <li>Use the service for deepfake creation or identity fraud</li>
              <li>Attempt to reverse-engineer, scrape, or overload our systems</li>
              <li>Resell or sublicense the service without written permission</li>
            </ul>
            <p className="mt-4">
              Violations may result in immediate account termination without refund.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">7. Intellectual Property</h2>
            <p>
              The ArtImageHub service, interface, brand, and technology are owned by us and protected by intellectual property laws.
              Restored photos you create are yours — we claim no ownership of your output.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">8. Disclaimer of Warranties</h2>
            <p>
              The Service is provided &quot;as is&quot; without warranties of any kind. AI restoration results vary based on photo quality, damage type, and other factors.
              We do not guarantee specific results. We are not liable for restoration quality below your expectations.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ArtImageHub&apos;s liability is limited to the amount you paid us in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">10. Changes to Terms</h2>
            <p>
              We may update these Terms at any time. Material changes will be notified to subscribers by email. Continued use after notice constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-[22px] font-700 text-[#2c2416] mb-4">11. Contact</h2>
            <p>
              Questions? Contact us at:{" "}
              <a href="mailto:support@artimagehub.com" className="text-[#8B5E3C] underline">
                support@artimagehub.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
