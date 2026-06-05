"use client";

import { motion } from "framer-motion";

// Placeholder colored panels representing photos from past events
const panels = [
  { bg: "from-red-900 to-orange-800", label: "Tasting Time", aspect: "row-span-2" },
  { bg: "from-purple-900 to-indigo-800", label: "The Crowd", aspect: "" },
  { bg: "from-yellow-700 to-orange-600", label: "Live on Stage", aspect: "" },
  { bg: "from-green-900 to-teal-800", label: "Agave & You", aspect: "row-span-2" },
  { bg: "from-red-800 to-pink-700", label: "Taco Heaven", aspect: "" },
  { bg: "from-indigo-900 to-purple-800", label: "Dancing All Night", aspect: "" },
];

export default function Gallery() {
  return (
    <section className="bg-[#0d0500] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-500 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Past Fests
          </p>
          <h2 className="font-display text-white" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}>
            THE VIBE
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A taste of what to expect. Pure fiesta energy from previous years.
          </p>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[180px]">
          {panels.map((panel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${panel.bg} ${panel.aspect} group cursor-default`}
            >
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)`,
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display text-white text-xl">{panel.label}</p>
              </div>
              {/* Placeholder text for no-image state */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" className="w-12 h-12">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-sm mt-6"
        >
          Gallery photos coming soon · Tag us @TequilaFestCincinnati
        </motion.p>
      </div>
    </section>
  );
}
