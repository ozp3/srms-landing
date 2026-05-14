"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/lib/animations";

export default function DemoShowcase() {
  return (
    <SectionWrapper id="demo" className="bg-elevated px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Canlı Demo
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Sistemin Kullanımı
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Gerçek uygulama kayıtları, mobil raporlama ve web yönetim paneli.
          </p>
        </motion.div>

        <div className="flex flex-col items-center gap-16">
          {/* Mobile video */}
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-4">
            <video
              src="/mobile-loop.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[448px] h-auto rounded-2xl shadow-card"
            />
            <div className="text-center">
              <p className="text-sm font-semibold text-text-primary">Mobil Uygulama</p>
              <p className="text-xs text-text-muted mt-1">Sorun bildir, fotoğraf yükle, takip et</p>
            </div>
          </motion.div>

          {/* Web video */}
          <motion.div variants={fadeUp} className="w-full max-w-3xl flex flex-col items-center gap-4">
            <video
              src="/macbook-loop.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-2xl shadow-card"
            />
            <div className="text-center">
              <p className="text-sm font-semibold text-text-primary">Web Yönetim Paneli</p>
              <p className="text-xs text-text-muted mt-1">Rapor kuyruğu, onay/red, istatistikler</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
