"use client";

import { motion } from "framer-motion";

const details = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    label: "Date",
    value: "June 13, 2026",
    sub: "Saturday",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    label: "Hours",
    value: "3:00 PM – 9:00 PM",
    sub: "Tequila sampling 4PM – 8PM",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Location",
    value: "Fountain Square",
    sub: "Downtown Cincinnati, OH",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/>
        <path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/>
        <path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/>
      </svg>
    ),
    label: "Admission",
    value: "21+ Event",
    sub: "Valid ID required at entry",
  },
];

export default function EventDetails() {
  return (
    <section id="details" className="bg-[#F5A623] py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-black/70 mb-3">{item.icon}</div>
              <p className="text-black/50 text-xs font-bold tracking-[0.2em] uppercase mb-1">
                {item.label}
              </p>
              <p className="font-display text-black text-2xl md:text-3xl leading-tight">
                {item.value}
              </p>
              <p className="text-black/60 text-sm mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
