"use client";

import { motion } from "framer-motion";
import { Camera, Cpu, CheckCircle, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { howItWorksSteps } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  camera: <Camera size={32} />,
  cpu: <Cpu size={32} />,
  "check-circle": <CheckCircle size={32} />,
};

const stepColors = ["#005BAA", "#003F7A", "#005BAA"];

export default function HowItWorks() {
  return (
    <SectionWrapper id="nasil-calisir" className="bg-elevated px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Nasıl Çalışır
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Üç Adımda Çözüm
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Kullanıcıdan sorumlu birime - tamamen otomatik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {howItWorksSteps.map((step, i) => (
            <motion.div key={step.number} variants={fadeUp} custom={i} className="relative">
              {i < howItWorksSteps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    <ArrowRight size={20} style={{ color: stepColors[i], opacity: 0.7 }} />
                  </motion.div>
                </div>
              )}

              <div className="glow-border rounded-2xl p-7 bg-surface h-full flex flex-col shadow-card">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-5xl font-black leading-none"
                    style={{ color: stepColors[i] }}>
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stepColors[i]}18`, color: stepColors[i] }}>
                    {iconMap[step.icon]}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed flex-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
