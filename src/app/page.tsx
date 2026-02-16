import Link from "next/link";
import {
  Sparkles,
  Scan,
  Palette,
  Upload,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import PricingSection from "./pricing-section";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Restore Your Old Photos in Seconds with AI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Free online AI photo restoration tool. Enhance faces, fix
            scratches, and colorize black &amp; white photos instantly. No
            signup required.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Link
              href="/old-photo-restoration"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Upload className="h-5 w-5" />
              Upload Your Photo — Free
            </Link>
            <p className="text-sm text-muted-foreground">
              Want unlimited?{" "}
              <a
                href="/#pricing"
                className="font-medium text-primary hover:underline"
              >
                Start your free 7-day trial &rarr;
              </a>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              3 free downloads/day (720p)
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              No signup required
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Try 7-day unlimited trial — Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* Before/After Examples */}
      <section className="border-t bg-muted/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            See the Difference
          </h2>
          <p className="mt-3 text-center text-muted-foreground">
            Real results from our AI photo restoration
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ExampleCard
              title="Face Restoration"
              description="Damaged portrait restored with enhanced facial details"
            />
            <ExampleCard
              title="Old Family Photo"
              description="Faded family photo brought back to life with vivid clarity"
            />
            <ExampleCard
              title="Black & White Colorized"
              description="Classic B&W photo colorized with natural, realistic colors"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            What Our AI Can Do
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <FeatureCard
              icon={<Scan className="h-8 w-8" />}
              title="Face Enhancement"
              description="Restore facial details, fix blur and damage using GFPGAN AI model."
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Super Resolution"
              description="Upscale to 4x resolution with AI sharpening for crystal-clear results."
            />
            <FeatureCard
              icon={<Palette className="h-8 w-8" />}
              title="Auto Colorize"
              description="Add natural colors to black & white photos with one click."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t bg-muted/50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            How It Works
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <StepCard step={1} title="Upload" description="Drop your old photo or click to upload. JPG, PNG, WEBP supported." />
            <StepCard step={2} title="AI Restores" description="Our AI enhances faces, fixes damage, and upscales resolution automatically." />
            <StepCard step={3} title="Download" description="Preview before/after comparison and download your restored photo." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* FAQ */}
      <section className="border-t bg-muted/50 py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-4">
            <FaqItem
              question="What image formats are supported?"
              answer="We support JPG, PNG, and WEBP formats, up to 20MB per file."
            />
            <FaqItem
              question="How long does processing take?"
              answer="Most photos are processed in 15-30 seconds. Larger images may take slightly longer."
            />
            <FaqItem
              question="Is my photo data safe?"
              answer="Yes. All uploaded photos are automatically deleted after 24 hours. We do not store or share your images."
            />
            <FaqItem
              question="What's the difference between Free and Pro?"
              answer="Free gives you 720p downloads with a small watermark (3/day). Pro gives you unlimited original quality downloads without watermark. Start with a 7-day free trial."
            />
            <FaqItem
              question="How does the free trial work?"
              answer="Start your 7-day free trial by entering your email and card. You won't be charged during the trial. After 7 days, it's $9.90/month. Cancel anytime."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Restore Your Photos?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Try it free. No signup required.
          </p>
          <Link
            href="/old-photo-restoration"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Upload className="h-5 w-5" />
            Upload Your Photo Now
          </Link>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border p-6 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-muted">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
        {step}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function ExampleCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border">
      <div className="flex aspect-[4/3] items-center justify-center bg-muted">
        <div className="grid w-full grid-cols-2 gap-px">
          <div className="flex aspect-square items-center justify-center bg-muted-foreground/10 text-xs text-muted-foreground">
            Before
          </div>
          <div className="flex aspect-square items-center justify-center bg-muted-foreground/5 text-xs text-muted-foreground">
            After
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-lg border bg-background p-4">
      <summary className="flex cursor-pointer items-center justify-between font-medium">
        {question}
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
      </summary>
      <p className="mt-3 text-sm text-muted-foreground">{answer}</p>
    </details>
  );
}
