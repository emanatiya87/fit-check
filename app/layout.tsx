import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutNav from "@/components/LayoutNav";
import { FavProvider } from "@/context/FavContext";
import { Contacts } from "@/components/Contacts";
import { GoogleAnalytics } from "@next/third-parties/google";
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
    <html suppressHydrationWarning data-mode="light">
      <head>
        {/* Configure ThemeModeScript to force light mode */}
        <ThemeModeScript mode="light" />
        {/* Alternative: Add inline script to force light mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                localStorage.setItem('flowbite-theme-mode', 'light');
                document.documentElement.classList.remove('dark');
                document.documentElement.style.colorScheme = 'light';
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-background text-gray-900">
        <FavProvider>
          <div className="bg-background mt-0">
            <LayoutHeader />
            <LayoutNav />
          </div>
          {children}
          <Contacts />
        </FavProvider>
        <GoogleAnalytics gaId="G-64Q539S7S7" />
      </body>
    </html>
  );
}
