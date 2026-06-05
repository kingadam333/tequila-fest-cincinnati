"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const media = [
  { src: "/gallery/2024-06-15 15.03.59.jpg", type: "image", span: "row-span-2" },
  { src: "/gallery/2024-06-15 15.04.44.jpg", type: "image", span: "" },
  { src: "/gallery/2024-06-15 16.08.30.jpg", type: "image", span: "" },
  { src: "/gallery/2024-06-15 16.11.06.mp4", type: "video", span: "row-span-2" },
  { src: "/gallery/2024-06-15 16.15.04.jpg", type: "image", span: "" },
  { src: "/gallery/2024-06-15 16.25.19.jpg", type: "image", span: "" },
  { src: "/gallery/2024-06-15 16.26.50.jpg", type: "image", span: "" },
];

function LightboxModal({ item, onClose }: { item: typeof media[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white cursor-pointer"
        aria-label="Close"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <div onClick={(e) => e.stopPropagation()} className="max-w-4xl max-h-[90vh] w-full">
        {item.type === "video" ? (
          <video
            src={item.src}
            controls
            autoPlay
            className="w-full max-h-[85vh] rounded-xl object-contain"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt="Festival photo"
            className="w-full max-h-[85vh] rounded-xl object-contain"
          />
        )}
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<typeof media[0] | null>(null);

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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {media.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}
              onClick={() => setLightbox(item)}
            >
              {item.type === "video" ? (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover"
                  />
                  {/* Play icon badge */}
                  <div className="absolute top-3 right-3 bg-black/60 rounded-full p-2">
                    <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt="Festival photo"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
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
          Tag us @TequilaFestCincinnati
        </motion.p>
      </div>

      {/* Lightbox */}
      {lightbox && <LightboxModal item={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}
