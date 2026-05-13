"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { references } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

export default function References() {
  return (
    <SectionWrapper id="kaynaklar" className="bg-base px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-12">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Akademik Kaynaklar
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Referanslar
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            SRMS&apos;in geliştirme sürecinde başvurulan temel akademik çalışmalar.
          </p>
        </motion.div>

        <div className="space-y-4">
          {references.map((ref, i) => (
            <motion.div
              key={ref.number}
              variants={fadeUp}
              custom={i}
              className="flex gap-5 p-5 rounded-xl bg-surface border border-border
                hover:border-accent/40 transition-colors duration-200 shadow-card"
            >
              <span className="shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20
                flex items-center justify-center text-accent text-sm font-bold">
                {ref.number}
              </span>
              <p className="text-sm text-text-muted leading-relaxed">{ref.citation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
