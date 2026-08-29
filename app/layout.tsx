import type { Metadata } from "next";
import { Instrument_Sans, Syne } from "next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio.example"),
  title: {
    default: "Studio — Design & development that grows businesses",
    template: "%s · Studio",
  },
  description:
    "A premium design and development studio for startups and SaaS. Strategy, UX/UI, and engineering — built to convert.",
  openGraph: {
    title: "Studio — Design & development that grows businesses",
    description:
      "Premium portfolio and lead-generation site. Book a free strategy call.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
