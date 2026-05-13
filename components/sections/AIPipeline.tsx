"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ImageIcon, Cloud, Cpu, GitBranch, Send, UserCheck } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Badge from "@/components/ui/Badge";
import { categories } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

const stages = [
  {
    id: "input",
    label: "Kullanıcı Fotoğrafı",
    sublabel: "Mobil uygulama",
    color: "#7B8EAC",
    icon: <ImageIcon size={22} />,
  },
  {
    id: "stage1",
    label: "Aşama 1",
    sublabel: "Gemini Vision API",
    color: "#005BAA",
    icon: <Cloud size={22} />,
    detail: "Açıklama üret • Kategori belirle • Geçersizleri filtrele",
  },
  {
    id: "stage2",
    label: "Aşama 2",
    sublabel: "Yerel LLM",
    color: "#003F7A",
    icon: <Cpu size={22} />,
    detail: "14 kategoriden sınıflandır • Öncelik skoru ata (0–5)",
  },
  {
    id: "check",
    label: "Güven Kontrolü",
    sublabel: "Eşik değeri",
    color: "#005BAA",
    icon: <GitBranch size={22} />,
  },
];

export default function AIPipeline() {
  const pathRef = useRef(null);
  const isInView = useInView(pathRef, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="ai-pipeline" className="bg-elevated px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            AI Pipeline
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            İki Aşamalı Yapay Zeka Akışı
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Her görüntü önce Gemini Vision API&apos;den geçer, ardından yerel
            Yerel LLM modeli kategori ve öncelik skoru atar.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                ref={i === 0 ? pathRef : undefined}
                className="relative rounded-2xl p-5 border bg-surface text-center flex flex-col items-center gap-2 shadow-card"
                style={{ borderColor: `${stage.color}50` }}
              >
                {i < stages.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                      style={{ color: stage.color, opacity: 0.8 }}
                    >
                      →
                    </motion.div>
                  </div>
                )}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${stage.color}18`, color: stage.color }}>
                  {stage.icon}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: stage.color }}>
                  {stage.label}
                </p>
                <p className="text-sm font-semibold text-text-primary">{stage.sublabel}</p>
                {stage.detail && (
                  <p className="text-xs text-text-muted leading-relaxed">{stage.detail}</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="rounded-2xl p-5 border bg-surface flex items-center gap-4 shadow-card"
              style={{ borderColor: "#05966940" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#059669] shrink-0"
                style={{ backgroundColor: "#05966918" }}>
                <Send size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#059669] mb-0.5">Güven ≥ Eşik</p>
                <p className="text-xs text-text-muted">Rapor ilgili birime otomatik yönlendirilir</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="rounded-2xl p-5 border bg-surface flex items-center gap-4 shadow-card"
              style={{ borderColor: "#D9770640" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#D97706] shrink-0"
                style={{ backgroundColor: "#D9770618" }}>
                <UserCheck size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#D97706] mb-0.5">Güven &lt; Eşik</p>
                <p className="text-xs text-text-muted">İnsan onayına gönderilir, manuel inceleme yapılır</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="text-center text-sm text-text-muted mb-4 uppercase tracking-widest font-medium">
            14 Sınıflandırma Kategorisi
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Badge key={cat} variant="accent">{cat}</Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
