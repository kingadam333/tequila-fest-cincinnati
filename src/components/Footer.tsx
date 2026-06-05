"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-yellow-400 text-2xl">TEQUILA FEST CINCINNATI</p>
          <p className="text-white/30 text-sm mt-1">© {year} · All Rights Reserved</p>
        </div>

        <div className="flex gap-6 text-white/40 text-sm">
          <a
            href="https://tequilafestusa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
          >
            TequilaFestUSA.com
          </a>
          <span>·</span>
          <a href="mailto:info@tequilafestusa.com" className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
            Contact
          </a>
          <span>·</span>
          <span>21+ Only</span>
        </div>

        <div className="flex gap-4">
          {[
            { name: "Instagram", href: "#" },
            { name: "Facebook", href: "#" },
            { name: "TikTok", href: "#" },
          ].map((s) => (
            <a
              key={s.name}
              href={s.href}
              className="w-9 h-9 rounded-full border border-white/20 hover:border-yellow-500/60 flex items-center justify-center text-white/40 hover:text-yellow-400 transition-all duration-200 cursor-pointer text-xs font-bold"
              aria-label={s.name}
            >
              {s.name[0]}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-white/15 text-xs">
          Please drink responsibly. Must be 21+ to attend. Tickets sold at TequilaFestUSA.com.
        </p>
      </div>
    </footer>
  );
}
