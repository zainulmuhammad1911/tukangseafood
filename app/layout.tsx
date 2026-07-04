import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/config";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tukang Seafood | Seafood Segar Berkualitas Premium",
  description:
    "Tukang Seafood menyediakan cumi, udang, kepiting, dan berbagai ikan laut segar dengan kualitas premium. Pesan melalui WhatsApp atau website.",
  openGraph: {
    title: "Tukang Seafood | Seafood Segar Berkualitas Premium",
    description:
      "Cumi, udang, kepiting, dan berbagai ikan laut segar dengan kualitas premium. Pesan melalui WhatsApp atau website.",
    locale: "id_ID",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${geist.variable} ${inter.variable}`}>
      <body>
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
