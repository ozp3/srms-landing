"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroTaglines, siteConfig } from "@/lib/data";
import Image from "next/image";

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % heroTaglines.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-base">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid opacity-70" />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #005BAA 0%, #003F7A 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Team badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/8 text-accent text-sm font-medium mb-8"
          style={{ backgroundColor: "rgba(0,91,170,0.08)" }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Takım {siteConfig.teamName} - {siteConfig.university}
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4"
        >
          <Image
            src="/srms-logo.svg"
            alt="SRMS Logo"
            width={280}
            height={280}
            className="mx-auto drop-shadow-lg"
            priority
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl text-text-muted font-medium mb-8 max-w-2xl mx-auto"
        >
          {siteConfig.projectFullName}
        </motion.p>

        {/* Animated tagline */}
        <div className="h-10 flex items-center justify-center mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={taglineIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-base sm:text-lg text-text-muted italic"
            >
              &ldquo;{heroTaglines[taglineIndex]}&rdquo;
            </motion.span>
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#nasil-calisir"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-base
              text-white hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-glow"
            style={{ background: "linear-gradient(135deg, #005BAA 0%, #003F7A 100%)" }}
          >
            Sistemi Keşfet
          </a>
          <a
            href="#takim"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-base
              border border-border text-text-primary bg-surface
              hover:border-accent/50 hover:shadow-card transition-all duration-200"
          >
            Takımı Tanı
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex items-center justify-center gap-8 sm:gap-12 mt-16 text-center"
        >
          {[
            { value: "14", label: "Kategori" },
            { value: "2", label: "AI Aşaması" },
            { value: "0–5", label: "Öncelik Skoru" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-black text-gradient">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
      >
        <span className="text-xs uppercase tracking-widest">Kaydır</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
