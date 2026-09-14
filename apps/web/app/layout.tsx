import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
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
  title: "CodeDeploy — Autonomous Cloud BaaS & Instant Deploys",
  description:
    "The deployment platform and Backend-as-a-Service built for modern developers. Serverless Postgres, Redis queues, instant git deploys, and real-time telemetry.",
  keywords: ["deploy", "CI/CD", "BaaS", "SaaS", "backend", "cloud", "serverless", "developer tools"],
  openGraph: {
    title: "CodeDeploy — Deploy at the Speed of Light",
    description: "Instant git deployments with serverless Postgres, Redis queues, and edge telemetry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("codedeply-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)||!t){document.documentElement.classList.add("dark");document.documentElement.style.colorScheme="dark";}else{document.documentElement.classList.remove("dark");document.documentElement.style.colorScheme="light";}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
