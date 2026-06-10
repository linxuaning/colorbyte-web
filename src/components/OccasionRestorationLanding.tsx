import Link from "next/link";
import RestoreClient from "@/app/old-photo-restoration/restore-client";
import ProofSampleGallery from "@/components/ProofSampleGallery";

export interface OccasionRestorationLandingConfig {
  badge: string;
  title: string;
  description: string;
  proof: string[];
  whyTitle: string;
  whyItems: Array<{ title: string; body: string }>;
  damageTitle: string;
  damageItems: Array<{ label: string; body: string }>;
  workflowTitle: string;
  workflowItems: Array<{ title: string; body: string }>;
  faq: Array<{ q: string; a: string }>;
  related: Array<{ href: string; title: string; body: string }>;
}

export default function OccasionRestorationLanding({
  config,
}: {
  config: OccasionRestorationLandingConfig;
}) {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden border-b border-[#d2d2d7]/40 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-15%,rgba(139,94,60,0.08),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-5 py-14 text-center sm:py-18">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#6e6e73] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8B5E3C] shadow-[0_0_5px_rgba(139,94,60,0.45)]" />
            {config.badge}
          </div>
          <h1 className="text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-[#1d1d1f] sm:text-[44px]">
            {config.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-[1.6] text-[#6e6e73]">
            {config.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#6e6e73]">
            {config.proof.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="font-bold text-[#8B5E3C]">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div id="upload" className="mx-auto max-w-3xl px-5 py-10">
        <RestoreClient />
      </div>

      <section className="border-t border-[#d2d2d7]/40 bg-[#faf8f4] py-16">
        <div className="mx-auto max-w-5xl px-5">
          <div className="mb-14 text-center">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f] sm:text-[34px]">
              {config.whyTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[16px] leading-[1.6] text-[#6e6e73]">
              ArtImageHub is pay-first: one $4.99 payment unlocks upload,
              AI processing, and original-quality download on your email.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {config.whyItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-[#d4bc91]/40 bg-white p-5">
                <h3 className="text-[16px] font-semibold text-[#1d1d1f]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#6e6e73]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <section className="rounded-lg border border-[#d4bc91]/40 bg-white p-6">
              <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#1d1d1f]">
                {config.damageTitle}
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {config.damageItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#8B5E3C]" />
                    <p className="text-[14px] leading-[1.6] text-[#6e6e73]">
                      <span className="font-semibold text-[#1d1d1f]">{item.label}:</span>{" "}
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-[#d4bc91]/40 bg-white p-6">
              <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#1d1d1f]">
                {config.workflowTitle}
              </h2>
              <ol className="mt-5 space-y-4">
                {config.workflowItems.map((item, index) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8B5E3C] text-[13px] font-semibold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#1d1d1f]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[14px] leading-[1.6] text-[#6e6e73]">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <div className="mt-14">
            <ProofSampleGallery />
          </div>

          <section className="mt-14">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#1d1d1f]">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              {config.faq.map((item) => (
                <details key={item.q} className="group overflow-hidden rounded-lg border border-[#d4bc91]/40 bg-white">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-[16px] font-semibold text-[#1d1d1f]">
                    {item.q}
                    <span className="text-[#6e6e73] transition-transform group-open:rotate-180">⌄</span>
                  </summary>
                  <div className="px-6 pb-4 text-[14px] leading-[1.7] text-[#6e6e73]">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-[24px] font-bold tracking-[-0.02em] text-[#1d1d1f]">
              Related Restoration Pages
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {config.related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-[#d4bc91]/40 bg-white p-5 transition hover:border-[#8B5E3C]/60 hover:shadow-md"
                >
                  <h3 className="text-[15px] font-semibold text-[#1d1d1f]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[#6e6e73]">
                    {item.body}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
