"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, MapPin } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { applicationAreas } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  "graduation-cap": <GraduationCap size={28} />,
  "building-2": <Building2 size={28} />,
  "map-pin": <MapPin size={28} />,
};

export default function ApplicationAreas() {
  return (
    <SectionWrapper id="kullanim-alanlari" className="bg-base px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Kullanım Alanları
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Nerede Kullanılır?
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            SRMS, farklı ölçeklerdeki yönetim ortamlarına uyarlanabilir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {applicationAreas.map((area, i) => (
            <motion.div
              key={area.title}
              variants={fadeUp}
              custom={i}
              className="rounded-2xl p-7 border bg-surface flex flex-col gap-4 glow-border shadow-card"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${area.color}18`, color: area.color }}>
                {iconMap[area.icon]}
              </div>
              <h3 className="text-lg font-bold text-text-primary">{area.title}</h3>
              <ul className="space-y-2">
                {area.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: area.color }} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
