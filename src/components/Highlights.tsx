"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.75H6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 006 21.75h12a2.25 2.25 0 002.25-2.25V6l-3.75-2.25H9.75z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5M9.75 3.75v5.25"/>
      </svg>
    ),
    color: "#F5A623",
    number: "50+",
    label: "Premium Tequilas",
    desc: "Blanco, reposado, añejo & more from top distilleries",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5M3 15l.75-4.5m16.5 4.5-.75-4.5M3 15h18m-9 3.75h.008v.008H12v-.008z"/>
      </svg>
    ),
    color: "#C8102E",
    number: "∞",
    label: "Tacos & Mexican Food",
    desc: "Authentic street tacos, elotes, churros & more",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"/>
      </svg>
    ),
    color: "#7B2FBE",
    number: "Live",
    label: "Music All Day",
    desc: "Latin, mariachi & more rocking the main stage",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"/>
      </svg>
    ),
    color: "#00A878",
    number: "20+",
    label: "Vendors & Artisans",
    desc: "Local vendors, artisan crafts & festival merch",
  },
];

export default function Highlights() {
  return (
    <section className="relative bg-[#120800] py-24 px-4 overflow-hidden">
      {/* Top papel picado */}
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
              className="group cursor-default relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/40 rounded-2xl p-7 text-center transition-all duration-300"
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 mx-auto transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                {item.icon}
              </div>
              <div
                className="font-display text-4xl mb-1"
                style={{ color: item.color }}
              >
                {item.number}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.label}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 papel-picado-border opacity-40" />
    </section>
  );
}
