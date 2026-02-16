import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://artimagehub.com"),
  title: {
    default:
      "AI Photo Tools | Restore, Enhance & Colorize Photos Online Free - ColorByte",
    template: "%s - ColorByte",
  },
  description:
    "Free AI-powered photo tools. Restore old photos, enhance image quality, and colorize black & white pictures online. No signup required.",
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "ColorByte",
    title: "AI Photo Tools | Restore, Enhance & Colorize Photos Online Free",
    description:
      "Free AI-powered photo tools. Restore old photos, enhance image quality, and colorize black & white pictures online.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="/" className="text-lg font-semibold tracking-tight">
          ColorByte
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="/old-photo-restoration"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Restore
          </a>
          <a
            href="/blog"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <div className="mx-auto max-w-6xl px-4">
        <p>&copy; {new Date().getFullYear()} ColorByte. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="/blog" className="hover:text-foreground">
            Blog
          </a>
          <a href="/privacy" className="hover:text-foreground">
            Privacy
          </a>
          <a href="/terms" className="hover:text-foreground">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
