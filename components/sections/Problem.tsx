"use client";

import { motion } from "framer-motion";
import { Construction, Lightbulb, Trash2, Clock } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { problemCards } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  construction: <Construction size={28} />,
  lamp: <Lightbulb size={28} />,
  trash: <Trash2 size={28} />,
  clock: <Clock size={28} />,
};

export default function Problem() {
  return (
    <SectionWrapper id="problem" className="bg-base px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Problem
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Neden SRMS?
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Kampüslerdeki altyapı sorunları çoğu zaman geç bildirilir ya da hiç
            bildirilmez. Mevcut mekanizmalar kullanıcılar için zahmetli,
            yönetim için verimsizdir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problemCards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="glow-border rounded-2xl p-6 bg-surface flex flex-col gap-4 cursor-default shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                {iconMap[card.icon]}
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
