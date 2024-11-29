import { ReactLenis } from "lenis/dist/lenis-react";
import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";

import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import InitialRenderAnimationWrapper from "@/components/ui/initial-render-animation-wrapper";
import Loading from "@/app/loading";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "KMK Legal",
  description: "Trusted Legal Representation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactLenis root>
          <InitialRenderAnimationWrapper>
            <Navbar />
            <main className="flex-grow pt-[80px] md:pt-[100px]">
              <Suspense fallback={<Loading showText />}>
                <AnimatePresence mode="wait">{children}</AnimatePresence>
              </Suspense>
            </main>
            <Footer />
          </InitialRenderAnimationWrapper>
        </ReactLenis>
      </body>
    </html>
  );
}
