"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Neden SRMS?", href: "#problem" },
  { label: "Nasıl Çalışır", href: "#nasil-calisir" },
  { label: "Ürün", href: "#urun" },
  { label: "Demo", href: "#demo" },
  { label: "Özellikler", href: "#ozellikler" },
  { label: "AI Pipeline", href: "#ai-pipeline" },
  { label: "Takım", href: "#takim" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
    return () => unsub();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-base/90 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/srms-logo.svg" alt="SRMS" className="h-9 w-auto" />
          <span className="text-text-muted text-sm font-medium hidden sm:inline">
            by Vexra
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
