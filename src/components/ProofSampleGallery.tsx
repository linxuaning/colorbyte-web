import Image from "next/image";

const proofSamples = [
  {
    title: "1947 wedding portrait",
    damage: "Heavy fading, torn edges, and soft faces from an old print scan.",
    outcome: "Recovered facial clarity, balanced tones, and cleaner texture for reprint.",
    beforeSrc: "/blog/before-1.webp",
    afterSrc: "/blog/after-1.jpg",
  },
  {
    title: "Family snapshot with color loss",
    damage: "Yellow cast, low contrast, and age-related detail loss.",
    outcome: "Restored contrast, stronger subject separation, and more natural skin tone.",
    beforeSrc: "/blog/before-2.jpg",
    afterSrc: "/blog/after-2.jpg",
  },
  {
    title: "Damaged keepsake portrait",
    damage: "Scratches, dull blacks, and weak detail in the face and clothing.",
    outcome: "Sharper facial features, cleaner background, and higher print-ready clarity.",
    beforeSrc: "/blog/before-3.jpg",
    afterSrc: "/blog/after-3.jpg",
  },
];

type ProofSampleGalleryProps = {
  title?: string;
  description?: string;
  className?: string;
};

export default function ProofSampleGallery({
  title = "See the kind of restoration people pay for.",
  description = "Concrete examples beat abstract promises. These are the damage patterns users care about most before they trust an upload.",
  className = "",
}: ProofSampleGalleryProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#8B5E3C]">
            Proof Before Promise
          </p>
          <h2 className="mt-3 text-[30px] font-bold tracking-[-0.03em] text-[#1d1d1f] sm:text-[40px]">
            {title}
          </h2>
          <p className="mt-4 text-[16px] leading-[1.7] text-[#6e6e73]">{description}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {proofSamples.map((sample) => (
            <article
              key={sample.title}
              className="overflow-hidden rounded-[28px] border border-[#d2d2d7]/70 bg-white shadow-[0_18px_50px_rgba(29,29,31,0.06)]"
            >
              <div className="grid grid-cols-2 border-b border-[#d2d2d7]/70 bg-[#faf8f4]">
                <div className="border-r border-[#d2d2d7]/70 p-3">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8B5E3C]">
                    Before
                  </p>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#ece8df]">
                    <Image
                      src={sample.beforeSrc}
                      alt={`${sample.title} before restoration`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 20vw, 40vw"
                    />
                  </div>
                </div>
                <div className="p-3">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0071e3]">
                    After
                  </p>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#ece8df]">
                    <Image
                      src={sample.afterSrc}
                      alt={`${sample.title} after restoration`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 20vw, 40vw"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-[18px] font-semibold text-[#1d1d1f]">{sample.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[#6e6e73]">
                  <span className="font-semibold text-[#1d1d1f]">Damage:</span> {sample.damage}
                </p>
                <p className="mt-2 text-[14px] leading-[1.65] text-[#6e6e73]">
                  <span className="font-semibold text-[#1d1d1f]">Result:</span> {sample.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
