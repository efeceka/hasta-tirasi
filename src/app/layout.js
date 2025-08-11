import WhatsappButton from "@/components/WhatsappButton";
import "./globals.css";
import { Barlow_Condensed } from "next/font/google";

export const metadata = {
  metadataBase: new URL("https://hastatrasi.com"),
  title: "Hasta Tıraşı – Evde ve Hastanede Profesyonel Hizmet",
  description:
    "Hijyen kurallarına uygun, evde ve hastanede saç & sakal tıraşı. Deneyimli berberlerimiz kapınıza gelir.",
  keywords: [
    "hasta tıraşı",
    "evde berber",
    "hastanede saç tıraşı",
    "evde saç sakal tıraşı",
    "hijyenik berber hizmeti",
    "berber çağır",
    "istanbul hasta tıraşı",
    "istanbul hasta berber",
    "istanbul eve berber",
    "hasta traşı",
    "hasta tras"
  ],
  openGraph: {
    title: "Hasta Tıraşı – Evde ve Hastanede Profesyonel Hizmet",
    description: "Hijyen kurallarına uygun, evde ve hastanede saç & sakal tıraşı.",
    url: "/",
    siteName: "Hasta Tıraşı",
    images: [
      {
        url: "https://hastatrasi.com/images/mainlogo.png", 
        width: 1200,
        height: 630,
        alt: "Hasta Tıraşı Hizmeti",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasta Tıraşı – Evde ve Hastanede Profesyonel Hizmet",
    description: "Hijyen kurallarına uygun, evde ve hastanede saç & sakal tıraşı.",
    images: ["https://hastatrasi.com/images/mainlogo.png"]
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export const barlowCond = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-condensed",
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${barlowCond.variable} bg-white antialiased`}>
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}