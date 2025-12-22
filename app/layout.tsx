import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap",preload:false });

export const metadata: Metadata = {
  title: "Alex's Portfolio",
  description: "Modern & Minimalist portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-x-hidden antialiased sm:px-10`}
      >
        {children}
      </body>
    </html>
  );
}
