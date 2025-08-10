import WhatsappButton from "@/components/WhatsappButton";
import "./globals.css";
import { Barlow_Condensed } from "next/font/google";

export const barlowCond = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-condensed",
});

export const metadata = {
  title: "Barber – Evde Saç & Sakal",
  description: "Evde veya hastanede profesyonel saç ve sakal tıraşı.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${barlowCond.variable} bg-white text-zinc-900 antialiased`}>
        {children}
        <WhatsappButton/>
      </body>
    </html>
  );
}