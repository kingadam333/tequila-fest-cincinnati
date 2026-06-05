"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "./Confetti";

function Countdown() {
  const eventDate = new Date("2025-09-20T14:00:00");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 justify-center mt-8">
      {units.map(({ label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center bg-black/40 backdrop-blur-sm border border-yellow-500/30 rounded-xl px-4 py-3 min-w-[70px]"
        >
          <span className="font-display text-3xl md:text-4xl text-yellow-400">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-xs text-white/60 uppercase tracking-widest mt-1">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d0500]">
      {/* Background agave pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #7B2FBE 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #C8102E 0%, transparent 40%),
                            radial-gradient(circle at 60% 80%, #00A878 0%, transparent 40%)`,
        }}
      />

      {/* Agave silhouette left */}
      <div className="absolute left-0 bottom-0 w-48 md:w-72 h-full z-5 opacity-20 pointer-events-none select-none">
        <svg viewBox="0 0 200 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 500 C80 400 40 350 20 250 C10 200 30 150 60 120 C40 180 60 220 80 280 C80 200 50 150 70 80 C85 30 100 10 100 10 C100 10 90 50 95 100 C100 150 120 180 120 260 C140 200 160 170 140 100 C160 140 170 190 150 250 C130 310 120 360 120 500 Z" fill="#00A878"/>
        </svg>
      </div>

      {/* Agave silhouette right */}
      <div className="absolute right-0 bottom-0 w-48 md:w-72 h-full z-5 opacity-20 pointer-events-none select-none scale-x-[-1]">
        <svg viewBox="0 0 200 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 500 C80 400 40 350 20 250 C10 200 30 150 60 120 C40 180 60 220 80 280 C80 200 50 150 70 80 C85 30 100 10 100 10 C100 10 90 50 95 100 C100 150 120 180 120 260 C140 200 160 170 140 100 C160 140 170 190 150 250 C130 310 120 360 120 500 Z" fill="#00A878"/>
        </svg>
      </div>

      {/* Confetti canvas */}
      <Confetti />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/40 rounded-full px-5 py-2 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
            Cincinnati · Annual Festival
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-shimmer leading-none"
          style={{ fontSize: "clamp(4rem, 14vw, 12rem)" }}
        >
          TEQUILA
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-display text-white leading-none -mt-4"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
        >
          FEST
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="font-display tracking-[0.3em] text-yellow-400 mt-2"
          style={{ fontSize: "clamp(1.2rem, 4vw, 3rem)" }}
        >
          CINCINNATI
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-6 text-white/70 text-lg md:text-xl max-w-xl mx-auto font-light"
        >
          50+ premium tequilas · Authentic tacos · Live music · Vendors
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Countdown />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://tequilafestusa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow cursor-pointer inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xl px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <span>GET TICKETS</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="#details"
            className="cursor-pointer inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white text-lg px-8 py-4 rounded-full transition-all duration-200"
          >
            Learn More
          </a>
        </motion.div>

        {/* Date pill */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-white/40 text-sm tracking-wider"
        >
          Tickets sold exclusively at TequilaFestUSA.com
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent animate-float" />
      </motion.div>

      {/* Papel picado bottom border */}
      <div className="absolute bottom-0 left-0 right-0 z-20 papel-picado-border opacity-60" />
    </section>
  );
}
