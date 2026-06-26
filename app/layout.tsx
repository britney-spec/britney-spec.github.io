import type { Metadata } from "next";
import { Inter, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const notoSerif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Britney | Personal Brand Website",
  description:
    "A warm, minimal personal brand website for Britney, focused on education, language, digital learning, and human-centered connection.",
  openGraph: {
    title: "Britney | Personal Brand Website",
    description:
      "Explore Britney's values, selected work, current explorations, and ways to connect.",
    images: ["/profile.jpg"],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
