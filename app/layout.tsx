import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Tamil } from "next/font/google";
import { Instrument_Sans } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
    weight: ["400", "500", "600", "700"],

});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
    weight: ["400", "500", "600", "700"],

});

const anekTamil = Anek_Tamil({
  variable:"--font-anek-tamil",
  subsets:["latin"],
  weight:["700", "800"]
})

const instrumentSans = Instrument_Sans({
  variable:"--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PrimalTraining",
  description: "Train hard. Live better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${anekTamil.variable} ${instrumentSans.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
