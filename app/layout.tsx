import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gapoktan Ngudi Luhur — Pusat Agribisnis Salak Nglumut Premium",
  description:
    "Gapoktan Ngudi Luhur — pengelola sentra salak terbaik Indonesia. 800+ hektar lahan, ratusan petani berdaya, dan pengiriman ekspor ke Asia & Eropa setiap minggunya.",
  keywords: [
    "Gapoktan Ngudi Luhur",
    "salak nglumut",
    "salak premium",
    "agribisnis",
    "ekspor salak",
    "Magelang",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
