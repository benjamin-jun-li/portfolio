import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { Suspense } from "react";
import FloatingMenu from "@/components/floating-menu";
import { BackgroundBeams } from "@/components/ui/background-beam";
import MotionProvider from "@/providers/motion-provider";
const inter = Fira_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Benjamin's Portfolio",
  description:
    "Hey I'm Benjamin Li, I am a recent graduate from UNSW and a passionate software developer, this is my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("box-border bg-indigo-950", inter.className)}>
        <div className="min-h-screen">
          <Header />
          <Suspense>
            <MotionProvider>{children}</MotionProvider>
          </Suspense>
        </div>
        <FloatingMenu />
        <Footer />
        <BackgroundBeams />
      </body>
    </html>
  );
}
