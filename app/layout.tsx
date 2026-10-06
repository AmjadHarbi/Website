import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FullscreenNavigator from "@/components/layout/FullscreenNavigator";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amjad Almaghthawi",
  description: "Website of Amjad Almaghthawi, a software engineer and AI researcher. Explore my projects, achievements, and journey in the world of technology.",
  icons: {
    icon: "/img/moon.png",
    shortcut: "/img/moon.png",
    apple: "/img/moon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FullscreenNavigator />
        <Analytics />
      </body>
    </html>
  );
}
