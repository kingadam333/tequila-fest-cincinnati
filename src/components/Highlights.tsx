"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    icon: (
      // Tequila bottle
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M9 3v1.5a3 3 0 00-1.5 2.6V9L6 12v7a2 2 0 002 2h8a2 2 0 002-2v-7l-1.5-3V7.1A3 3 0 0015 4.5V3M9 3h6M8.5 14h7"/>
      </svg>
    ),
    color: "#F5A623",
    bgColor: "rgba(245,166,35,0.12)",
    borderColor: "rgba(245,166,35,0.3)",
    number: "50+",
    label: "Premium Tequilas",
    desc: "Blanco, reposado, añejo & more from top distilleries",
    vip: false,
  },
  {
    icon: (
      // Taco / food bowl
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c0 5 3.5 8 9 8s9-3 9-8"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12c0-2.5 1.5-5 4-6.5C14.5 7 16 9.5 16 12"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 9.5c.5-.5 1-.8 2-.8s1.5.3 2 .8"/>
      </svg>
    ),
    color: "#C8102E",
    bgColor: "rgba(200,16,46,0.12)",
    borderColor: "rgba(200,16,46,0.3)",
    number: "∞",
    label: "Tacos & Mexican Food",
    desc: "Authentic street tacos, elotes, churros & more",
    vip: false,
  },
  {
    icon: (
      // Microphone
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a3 3 0 013 3v6a3 3 0 01-6 0V5a3 3 0 013-3z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 10a7 7 0 01-14 0"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v4M8 21h8"/>
      </svg>
    ),
    color: "#7B2FBE",
    bgColor: "rgba(123,47,190,0.12)",
    borderColor: "rgba(123,47,190,0.3)",
    number: "Live",
    label: "Music All Day",
    desc: "DJ Fusemania & Apostle Jones Band rocking the main stage",
    vip: false,
  },
  {
    icon: (
      // Crown
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18M3 18l2-8 4.5 4L12 6l2.5 8L19 10l2 8H3z"/>
      </svg>
    ),
    color: "#C0C0C0",
    bgColor: "rgba(192,192,192,0.1)",
    borderColor: "rgba(220,220,220,0.4)",
    number: "VIP",
    label: "VIP Area",
    desc: "Private area, 8 super premium tequilas & build your own taco bar",
    vip: true,
  },
];

export default function Highlights() {
  return (
    <section className="relative bg-[#120800] py-24 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 papel-picado-border opacity-40 rotate-180" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            What Awaits You
          </p>
          <h2 className="font-display text-white" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
            LA FIESTA GRANDE
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group cursor-default relative rounded-2xl p-7 text-center transition-all duration-300 ${
                item.vip
                  ? "border border-[#C0C0C0]/30 hover:border-[#E8E8E8]/60"
                  : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/40"
              }`}
              style={item.vip ? {
                background: "linear-gradient(145deg, rgba(40,40,40,0.9) 0%, rgba(20,20,20,0.95) 60%, rgba(35,35,35,0.9) 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 0 30px rgba(192,192,192,0.05)",
              } : {}}
            >
              {/* Platinum shimmer overlay for VIP */}
              {item.vip && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.15) 40%, transparent 60%, rgba(255,255,255,0.08) 100%)",
                  }}
                />
              )}

              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 mx-auto transition-transform duration-300 group-hover:scale-110 relative"
                style={{
                  backgroundColor: item.bgColor,
                  color: item.color,
                  border: `1px solid ${item.borderColor}`,
                  ...(item.vip ? { boxShadow: "0 0 12px rgba(192,192,192,0.2)" } : {}),
                }}
              >
                {item.icon}
              </div>

              <div
                className={`font-display text-4xl mb-1 ${item.vip ? "text-shimmer-platinum" : ""}`}
                style={item.vip ? {} : { color: item.color }}
              >
                {item.number}
              </div>

              <h3 className={`font-bold text-lg mb-2 ${item.vip ? "text-[#D8D8D8]" : "text-white"}`}>
                {item.label}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 papel-picado-border opacity-40" />
    </section>
  );
}
