import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/providers/query-provider";
import { SheetProvider } from "@/providers/sheet-provider";

import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Track your finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={`${inter.variable} ${inter.variable} antialiased`}>
          <QueryProvider>
            <SheetProvider />
            <Toaster />
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
