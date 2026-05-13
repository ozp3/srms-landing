"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { teamMembers, siteConfig } from "@/lib/data";
import { fadeUp } from "@/lib/animations";

export default function Team() {
  return (
    <SectionWrapper id="takim" className="bg-elevated px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Takım
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Takım {siteConfig.teamName}
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            {siteConfig.university} - {siteConfig.course}
          </p>
        </motion.div>

        {/* Supervisor card */}
        <motion.div variants={fadeUp} className="mb-8">
          <div className="max-w-sm mx-auto rounded-2xl p-6 border border-accent/30 bg-surface
            flex flex-col items-center gap-3 text-center shadow-glow">
            <div className="w-16 h-16 rounded-full flex items-center justify-center
              text-xl font-bold text-white"
              style={{ background: "linear-gradient(135deg, #005BAA, #003F7A)" }}>
              AS
            </div>
            <div>
              <p className="font-bold text-text-primary text-lg">{siteConfig.supervisor}</p>
              <p className="text-accent text-sm font-medium">Proje Danışmanı</p>
            </div>
          </div>
        </motion.div>

        {/* Team members grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              custom={i}
              className="glow-border rounded-2xl p-4 bg-surface flex flex-col items-center gap-3 text-center shadow-card"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}88)` }}
              >
                {member.initials}
              </div>
              <p className="text-sm font-medium text-text-primary leading-tight">
                {member.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
