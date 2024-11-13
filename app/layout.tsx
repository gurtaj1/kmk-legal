import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
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

const navBarHeight = 72;

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
        <Navbar />
        <main className="flex-grow" style={{ paddingTop: navBarHeight }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
