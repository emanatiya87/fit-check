import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutNav from "@/components/LayoutNav";
import Banner from "@/components/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fit Check - just Click !",
  description: "fit check store , just click and catch the trend",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <div className="bg-background mt-0">
          <LayoutHeader />
          <LayoutNav />
        </div>
        <Banner />
        {children}
      </body>
    </html>
  );
}
