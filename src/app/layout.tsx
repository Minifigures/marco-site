import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Marco Anthony Ayuste — Software Engineer & AI/ML Builder",
    template: "%s | Marco Anthony Ayuste",
  },
  description:
    "Portfolio of Marco Anthony Ayuste — Software Engineer, AI/ML Builder, and Full-Stack Developer. University of Toronto. Building intelligent systems at the intersection of ML and full-stack dev.",
  keywords: [
    "Marco Anthony Ayuste",
    "software engineer",
    "AI developer",
    "ML engineer",
    "full-stack developer",
    "University of Toronto",
    "React",
    "Next.js",
    "Python",
    "LangGraph",
    "portfolio",
  ],
  authors: [{ name: "Marco Anthony Ayuste" }],
  creator: "Marco Anthony Ayuste",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://marcoanthony.netlify.app",
    siteName: "Marco Anthony Ayuste",
    title: "Marco Anthony Ayuste — Software Engineer & AI/ML Builder",
    description:
      "Building intelligent systems at the intersection of ML and full-stack dev.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Anthony Ayuste — Software Engineer & AI/ML Builder",
    description:
      "Building intelligent systems at the intersection of ML and full-stack dev.",
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-bg-primary text-text-primary`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
