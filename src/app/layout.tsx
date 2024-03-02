import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TsParticlesBanner } from "@/components/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design N Dev",
  description: "Where design meets development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
