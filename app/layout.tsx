import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRMS - Akıllı Raporlama ve Yönetim Sistemi | Vexra",
  description:
    "SRMS, kampüs altyapı sorunlarını yapay zeka destekli iki aşamalı pipeline ile otomatik tespit eden, sınıflandıran ve önceliklendiren çapraz platform bir raporlama sistemidir. Atılım Üniversitesi, Takım Vexra.",
  keywords: [
    "SRMS", "Vexra", "akıllı raporlama", "kampüs altyapı", "yapay zeka",
    "smart city", "urban issue detection", "Atılım Üniversitesi",
  ],
  openGraph: {
    title: "SRMS - Akıllı Raporlama ve Yönetim Sistemi",
    description:
      "Fotoğraftan çözüme: AI destekli kampüs altyapı raporlama platformu.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
