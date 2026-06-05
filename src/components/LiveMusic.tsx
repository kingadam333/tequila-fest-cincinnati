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
            Two acts. Six hours of music. The main stage never stops.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Equalizer bars */}
        <div className="flex items-end justify-center gap-1 h-12 mb-12">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 rounded-t-sm"
              style={{ backgroundColor: i % 3 === 0 ? "#F5A623" : i % 3 === 1 ? "#C8102E" : "#7B2FBE" }}
              animate={{ height: [`${Math.random() * 30 + 8}px`, `${Math.random() * 48 + 8}px`, `${Math.random() * 30 + 8}px`] }}
              transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.04 }}
            />
          ))}
        </div>

        {/* Lineup cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DJ Fusemania */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/40 via-black to-red-900/20 p-8"
          >
            <div className="absolute top-0 left-1/4 w-32 h-full bg-gradient-to-b from-yellow-500/10 via-transparent to-transparent pointer-events-none" style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)" }} />
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">3:00 PM – 6:00 PM</span>
            </div>
            <p className="font-display text-white text-4xl md:text-5xl mb-2">DJ FUSEMANIA</p>
            <p className="text-white/50">Kicking off the fiesta with high-energy beats to get the party started</p>
          </motion.div>

          {/* Apostle Jones Band */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-red-900/40 via-black to-purple-900/20 p-8"
          >
            <div className="absolute top-0 right-1/4 w-32 h-full bg-gradient-to-b from-red-500/10 via-transparent to-transparent pointer-events-none" style={{ clipPath: "polygon(20% 0, 80% 0, 100% 100%, 0% 100%)" }} />
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-red-400 text-xs font-bold tracking-widest uppercase">6:30 PM – 9:00 PM</span>
            </div>
            <p className="font-display text-white text-4xl md:text-5xl mb-2">APOSTLE JONES BAND</p>
            <p className="text-white/50">Closing out the night and bringing the house down on the main stage</p>
          </motion.div>
        </div>

        {/* Schedule summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-4 text-sm"
        >
          {[
            { time: "3:00 PM", event: "Doors Open" },
            { time: "3:00 PM", event: "DJ Fusemania" },
            { time: "4:00 PM", event: "Tequila Sampling Begins" },
            { time: "6:30 PM", event: "Apostle Jones Band" },
            { time: "8:00 PM", event: "Last Pour" },
            { time: "9:00 PM", event: "Event Ends" },
          ].map((item) => (
            <div key={item.event} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <span className="text-yellow-400 font-bold">{item.time}</span>
              <span className="text-white/60">{item.event}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 papel-picado-border opacity-40" />
    </section>
  );
}
