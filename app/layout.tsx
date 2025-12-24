import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { basePath, name } from "@/constants";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: false });

export const metadata: Metadata = {
  title: `${name.split(" ")[0]}'s Portfolio`,
  description: "Modern & Minimalist portfolio",
  manifest: `${basePath}/manifest.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black-100 relative mx-auto flex flex-col items-center justify-center antialiased sm:px-10`}
      >
        {children}
      </body>
    </html>
  );
}
