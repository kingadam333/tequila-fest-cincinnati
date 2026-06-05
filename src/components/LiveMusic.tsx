"use client";

import { motion } from "framer-motion";

export default function LiveMusic() {
  return (
    <section className="relative bg-[#120800] py-24 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 papel-picado-border opacity-40 rotate-180" />

      {/* Purple glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            All Day · All Night
          </p>
          <h2 className="font-display text-white" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
            LIVE MUSIC
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Latin beats, mariachi, cumbia, and more. The main stage never stops.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Stage visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/40 via-black to-red-900/20 p-12 text-center"
        >
          {/* Spotlight effect */}
          <div className="absolute top-0 left-1/4 w-48 h-full bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent pointer-events-none" style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)" }} />
          <div className="absolute top-0 right-1/4 w-48 h-full bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)" }} />

          {/* Equalizer bars */}
          <div className="flex items-end justify-center gap-1 h-16 mb-10">
            {Array.from({ length: 32 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-2 rounded-t-sm"
                style={{ backgroundColor: i % 3 === 0 ? "#F5A623" : i % 3 === 1 ? "#C8102E" : "#7B2FBE" }}
                animate={{ height: [`${Math.random() * 40 + 10}px`, `${Math.random() * 60 + 10}px`, `${Math.random() * 40 + 10}px`] }}
                transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
              />
            ))}
          </div>

          <p className="font-display text-5xl md:text-7xl text-white mb-4">LINEUP</p>
          <p className="font-display text-3xl text-yellow-400 mb-6">COMING SOON</p>
          <p className="text-white/50 max-w-md mx-auto">
            Artists being announced soon. Follow us on social media for the big reveal.
          </p>

          <div className="flex gap-4 justify-center mt-8">
            {["Instagram", "Facebook", "TikTok"].map((s) => (
              <span
                key={s}
                className="border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-5 py-2 rounded-full text-sm cursor-pointer transition-all duration-200"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 papel-picado-border opacity-40" />
    </section>
  );
}
