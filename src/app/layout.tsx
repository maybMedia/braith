import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RouteTransitions from "@/components/motion/RouteTransitions";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Braith.Site",
  description: "I'm Braith, I'll build your website.",
  metadataBase: new URL("https://braithwebdesign.site"),
  twitter: {
    card: "summary_large_image",
    title: "Braith.Site",
    description: "I'm Braith, I'll build your website.",
    images: ["/images/logos/braith-web-logo.png"],
  },
  openGraph: {
    type: "website",
    title: "Braith.Site",
    description: "I'm Braith, I'll build your website.",
    siteName: "Braith.Site",
    url: "https://braithwebdesign.site",
    images: [
      {
        url: "/images/logos/braith-web-logo.png",
        alt: "Braith.Site logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RouteTransitions />
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
