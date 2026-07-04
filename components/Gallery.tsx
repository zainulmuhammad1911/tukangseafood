"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/lib/products";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <section id="galeri" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-blue-300/70">
            Semua Produk Kami
          </p>
          <h2 className="text-glow mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Galeri
          </h2>
        </motion.div>

        {/* uniform 2 / 3 / 4-column layout; flex-wrap so a partial last row centers */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {products.map((p, i) => (
            <motion.button
              key={p.slug}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.9, ease }}
              whileHover={{ y: -8 }}
              className="glass group relative aspect-square w-[calc((100%-1rem)/2)] cursor-zoom-in overflow-hidden rounded-3xl transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(56,130,246,0.18)] md:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)]"
              aria-label={`Lihat ${p.name}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(56,130,246,0.1),transparent_60%)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <Image
                src={p.src}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="product-img object-contain p-5 transition-transform duration-700 ease-out group-hover:scale-110 sm:p-6"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3.5 pt-8 text-left text-sm font-medium text-white/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {p.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="relative h-[70vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={products[active].src}
                alt={products[active].name}
                fill
                sizes="90vw"
                className="product-img object-contain"
              />
              <div className="absolute inset-x-0 -bottom-2 text-center">
                <p className="text-glow text-xl font-medium">
                  {products[active].name}
                </p>
                <p className="mt-1 text-sm text-white/50">
                  {products[active].note}
                </p>
              </div>
            </motion.div>
            <button
              onClick={close}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:text-white"
              aria-label="Tutup"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
