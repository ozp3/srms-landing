"use client";

import { motion } from "framer-motion";
import { Grid3x3, Zap, Layers, Send, Smartphone, Shield } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { features } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  grid: <Grid3x3 size={24} />,
  zap: <Zap size={24} />,
  layers: <Layers size={24} />,
  send: <Send size={24} />,
  smartphone: <Smartphone size={24} />,
  shield: <Shield size={24} />,
};

export default function Features() {
  return (
    <SectionWrapper id="ozellikler" className="bg-base px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Özellikler
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Sistemi Güçlü Kılan Özellikler
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Uçtan uca otomasyon, akıllı sınıflandırma ve çapraz platform erişim.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              custom={i}
              className="group glow-border rounded-2xl p-6 bg-surface
                hover:bg-elevated hover:scale-[1.02] transition-all duration-300 cursor-default shadow-card"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4
                group-hover:bg-accent/20 transition-colors duration-200">
                {iconMap[feature.icon]}
              </div>
              <h3 className="text-base font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
