import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fitz Maro | AI & Creative Technology Leader",
  description:
    "Fitz Maro is a Creative Technology leader with 13+ years experience driving AI transformation at Amazon, Pinterest, and top agencies. Speaker, award-winner, team builder.",
  keywords: [
    "Fitz Maro",
    "AI Leader",
    "Creative Technology",
    "Design Technology",
    "Amazon",
    "Brand Innovation Lab",
    "AI Enablement",
    "Creative Director",
    "Speaker",
  ],
  authors: [{ name: "Fitz Maro" }],
  openGraph: {
    title: "Fitz Maro | AI & Creative Technology Leader",
    description:
      "Creative Technology leader with 13+ years experience driving AI transformation at Amazon, Pinterest, and top agencies. Speaker, award-winner, team builder.",
    url: "https://fitzmaro.com",
    siteName: "Fitz Maro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitz Maro | AI & Creative Technology Leader",
    description:
      "Creative Technology leader driving AI transformation at Amazon. Speaker, award-winner, team builder.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/fill/style.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/duotone/style.css"
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {/* Noise texture overlay */}
        <div className="noise-overlay" />

        {/* Glow spots */}
        <div
          className="glow-spot animate-pulse-glow fixed"
          style={{ top: '-20%', right: '-10%' }}
        />
        <div
          className="glow-spot glow-spot-secondary animate-pulse-glow fixed"
          style={{ bottom: '-20%', left: '-10%', animationDelay: '2s' }}
        />

        {children}
      </body>
    </html>
  );
}
