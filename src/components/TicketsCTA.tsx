"use client";

import { motion } from "framer-motion";

export default function TicketsCTA() {
  return (
    <section className="relative bg-[#0d0500] py-32 px-4 overflow-hidden">
      {/* Marigold radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      {/* Spinning decorative ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-yellow-500/10 animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-red-500/10 animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-yellow-500 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            ¡La Fiesta Te Espera!
          </p>
          <h2
            className="font-display text-white leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            DON&apos;T MISS
            <br />
            <span className="text-shimmer">LA FIESTA</span>
          </h2>
          <p className="text-white/60 text-xl mb-10 max-w-xl mx-auto">
            Grab your tickets before they sell out. Cincinnati&apos;s biggest tequila celebration awaits.
          </p>

          <a
            href="https://www.tequilafestusa.com/events/cincinnati"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow cursor-pointer inline-flex items-center gap-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-2xl px-14 py-6 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <span>GET TICKETS NOW</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <p className="text-white/30 text-sm mt-6">
            All ticket sales managed by{" "}
            <a
              href="https://www.tequilafestusa.com/events/cincinnati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500/60 hover:text-yellow-400 underline underline-offset-4 transition-colors duration-200"
            >
              TequilaFestUSA.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
