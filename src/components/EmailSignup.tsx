"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      if (!supabase) throw new Error("Service unavailable");
      const { error } = await supabase
        .from("email_subscribers")
        .insert([{ email, source: "tequilafest-cincinnati" }]);
      if (error) throw error;
      setStatus("success");
      setMessage("You're on the list! ¡Salud!");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again!");
    }
  };

  return (
    <section className="relative bg-[#C8102E] py-20 px-4 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-300 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Don&apos;t Miss Out
          </p>
          <h2 className="font-display text-white text-5xl md:text-6xl mb-4">
            STAY IN THE LOOP
          </h2>
          <p className="text-white/80 mb-8">
            Get early access to tickets, lineup announcements, and exclusive deals.
            Join the fiesta familia.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/20 rounded-2xl p-6 text-white font-bold text-xl"
            >
              {message} 🎉
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="email-input" className="sr-only">Email address</label>
              <input
                id="email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 focus:border-white/80 text-white placeholder-white/50 rounded-full px-6 py-4 text-lg outline-none transition-all duration-200"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="cursor-pointer bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-400/50 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                {status === "loading" ? "Joining..." : "Join La Fiesta"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="text-yellow-300 text-sm mt-3">{message}</p>
          )}

          <p className="text-white/40 text-xs mt-4">No spam, ever. Unsubscribe any time.</p>
        </motion.div>
      </div>
    </section>
  );
}
