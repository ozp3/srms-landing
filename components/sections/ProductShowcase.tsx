"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/lib/animations";

export default function ProductShowcase() {
  return (
    <SectionWrapper id="urun" className="bg-base px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Ürün Önizleme
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Çapraz Platform Deneyimi
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Mobil uygulama ile sahadan raporla, web dashboard ile yönet ve takip et.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-16">
          {/* iPhone - Mobile App */}
          <motion.div variants={fadeUp} className="w-full max-w-3xl mx-auto">
            <Image
              src="/mockup-mobile.png"
              alt="SRMS Mobil Uygulama"
              width={800}
              height={1000}
              className="w-full h-auto drop-shadow-2xl"
              priority
            />
            <div className="text-center mt-4">
              <p className="text-sm font-semibold text-text-primary">Mobil Uygulama</p>
              <p className="text-xs text-text-muted">Sorun bildir, takip et, harita</p>
            </div>
          </motion.div>

          {/* MacBook - Dashboard */}
          <motion.div variants={fadeUp} className="w-full max-w-3xl mx-auto">
            <Image
              src="/mockup-dashboard.png"
              alt="SRMS Web Dashboard"
              width={800}
              height={500}
              className="w-full h-auto drop-shadow-xl"
              priority
            />
            <div className="text-center mt-4">
              <p className="text-sm font-semibold text-text-primary">Web Yönetim Paneli</p>
              <p className="text-xs text-text-muted">Rapor kuyruğu, onay/red, istatistikler</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
