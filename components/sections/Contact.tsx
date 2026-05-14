"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp } from "@/lib/animations";

export default function Contact() {
  return (
    <SectionWrapper id="iletisim" className="bg-elevated px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div variants={fadeUp}>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            İletişim
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Bize Ulaşın
          </h2>
          <p className="text-text-muted text-lg mb-10">
            SRMS hakkında sorularınız veya iş birliği talepleriniz için bize yazın.
          </p>
        </motion.div>

        <motion.a
          variants={fadeUp}
          href="mailto:vexra2026@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-accent/30
            bg-accent/8 hover:bg-accent/15 hover:border-accent/60
            transition-all duration-300 group shadow-card"
          style={{ backgroundColor: "rgba(0,91,170,0.06)" }}
        >
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center
            text-accent group-hover:bg-accent/20 transition-colors duration-200">
            <Mail size={20} />
          </div>
          <span className="text-text-primary font-semibold text-lg">
            vexra2026@gmail.com
          </span>
        </motion.a>
      </div>
    </SectionWrapper>
  );
}
