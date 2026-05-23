import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Cursor from "@/components/ui/Cursor";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A.S.D. BOCA | Battipaglia",
  description:
    "Squadra di calcio di Battipaglia (SA). Campioni Lega B7 Serie A 25/26. Amicizia, Mentalità, Sacrificio.",
  keywords: "ASD BOCA, calcio Battipaglia, calcio a 7 Salerno, campioni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${bebasNeue.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
