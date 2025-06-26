import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barathidhasan A | Frontend Developer",
  description:
    "Portfolio of Barathidhasan A, a Frontend Developer specializing in React.js and Next.js with 1.5+ years of experience building dynamic web applications.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Barathidhasan",
    "Portfolio",
  ],
  authors: [{ name: "Barathidhasan A" }],
  creator: "Barathidhasan A",
  openGraph: {
    title: "Barathidhasan A | Frontend Developer",
    description:
      "Portfolio of Barathidhasan A, a Frontend Developer specializing in React.js and Next.js",
    url: "https://yourportfolio.com",
    siteName: "Barathidhasan Portfolio",
    images: [
      {
        url: "/projects/barathidhasan.png",
        width: 800,
        height: 600,
        alt: "Barathidhasan A Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barathidhasan A | Frontend Developer",
    description:
      "Portfolio of Barathidhasan A, a Frontend Developer specializing in React.js and Next.js",
    creator: "@hooked_on_dev",
    images: ["/projects/barathidhasan.png"],
  },
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
