import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { Suspense } from "react";
import FloatingMenu from "@/components/floating-menu";
import { BackgroundBeams } from "@/components/ui/background-beam";
import { AnimatePresence } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={cn("box-border bg-cyan-900", inter.className)}>
        <div className="min-h-screen">
          <Header />
          <Suspense>{children}</Suspense>
        </div>
        <FloatingMenu />
        <Footer />
        <BackgroundBeams />
      </body>
    </html>
  );
}
