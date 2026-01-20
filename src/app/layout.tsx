import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fitz Maro | Head of Design Technology @ Amazon",
  description:
    "Head of North America Design Technology at Amazon's Brand Innovation Lab. Globally recognized Creative Technology leader with 12+ years of experience. Builder of innovative brands, teams, products, and partnerships.",
  keywords: [
    "Fitz Maro",
    "Design Technology",
    "Creative Technology",
    "Amazon",
    "Brand Innovation Lab",
    "Innovation",
    "Creative Director",
  ],
  authors: [{ name: "Fitz Maro" }],
  openGraph: {
    title: "Fitz Maro | Head of Design Technology @ Amazon",
    description:
      "Globally recognized Creative Technology leader. Builder of innovative brands, teams, products, and experiences.",
    url: "https://fitzmaro.com",
    siteName: "Fitz Maro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitz Maro | Head of Design Technology @ Amazon",
    description:
      "Globally recognized Creative Technology leader. Builder of innovative brands, teams, products, and experiences.",
    creator: "@FitzMaro",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getTheme() {
                  const stored = localStorage.getItem('theme');
                  if (stored) return stored;
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                const theme = getTheme();
                if (theme === 'light') {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
