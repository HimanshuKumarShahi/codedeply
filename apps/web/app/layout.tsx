import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeDeploy — Deploy at the Speed of Thought",
  description:
    "The modern deployment platform for developers. Push code, deploy instantly. Built for speed, scale, and simplicity.",
  keywords: ["deploy", "CI/CD", "GitHub", "cloud", "developer tools"],
  openGraph: {
    title: "CodeDeploy",
    description: "Deploy your projects instantly — like Vercel, but yours.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Futuristic scan line */}
        <div className="scan-line" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
