"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { formatPrice, ORDER_URL, products, waLink } from "@/lib/products";

const ease = [0.22, 1, 0.36, 1] as const;

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60, scale: 0.92, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.9, ease }}
      whileHover={{ y: -10 }}
      className="glass group relative flex flex-col overflow-hidden rounded-3xl p-5 transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(56,130,246,0.18)] sm:p-6"
    >
      {/* hover glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(56,130,246,0.14),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="reflection relative aspect-square">
        <Image
          src={product.src}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
          className="product-img object-contain transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-rotate-2"
        />
      </div>

      <div className="relative mt-4 flex flex-1 flex-col">
        <p className="text-[10px] uppercase tracking-[0.3em] text-blue-300/60">
          {product.category}
        </p>
        <h3 className="mt-1 text-lg font-medium">{product.name}</h3>
        <div className="glass mt-3 w-fit rounded-2xl px-4 py-2.5">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
            Harga mulai
          </p>
          <p className="mt-0.5 text-xl font-bold tracking-tight text-blue-200">
            {formatPrice(product.price)}
          </p>
        </div>
        <p className="mt-3 text-sm text-white/45">{product.note}</p>

        <div className="mt-5 flex flex-col gap-2.5 pt-1 sm:mt-auto sm:pt-5">
          <a
            href={waLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.04]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pesan via WhatsApp
          </a>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-100 transition-all duration-300 hover:scale-[1.04] hover:bg-blue-500/20"
          >
            <GlobeIcon className="h-4 w-4" />
            Pesan via Website
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className ?? ""}`} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.57-.35zM12.05 21.79h-.01a9.8 9.8 0 0 1-4.98-1.36l-.36-.21-3.7.97.99-3.6-.24-.37a9.77 9.77 0 0 1-1.5-5.22c0-5.41 4.4-9.8 9.81-9.8a9.75 9.75 0 0 1 9.8 9.81c0 5.41-4.4 9.78-9.81 9.78zm8.35-18.13A11.71 11.71 0 0 0 12.04.2C5.54.2.25 5.5.25 12a11.75 11.75 0 0 0 1.58 5.9L.16 24l6.25-1.64a11.78 11.78 0 0 0 5.63 1.43h.01c6.5 0 11.79-5.29 11.79-11.8 0-3.15-1.22-6.11-3.44-8.33z" />
    </svg>
  );
}

export function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-none stroke-current ${className ?? ""}`} strokeWidth="1.8" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </svg>
  );
}

export default function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="produk" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-blue-300/70">
            11 Produk Pilihan
          </p>
          <h2 className="text-glow mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Koleksi Kami
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}

          {/* CTA tile completes the 12-cell grid */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease }}
            whileHover={{ y: -10 }}
            className="flex min-h-64 flex-col items-center justify-center rounded-3xl border border-blue-400/25 bg-gradient-to-b from-blue-500/10 to-transparent p-6 text-center"
          >
            <span className="text-glow text-2xl font-semibold">
              Pesan Sekarang
            </span>
            <span className="mt-2 text-sm text-white/50">
              Stok segar terbatas setiap hari
            </span>
            <div className="mt-6 flex w-full max-w-56 flex-col gap-2.5">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.04]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Pesan via WhatsApp
              </a>
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-100 transition-all duration-300 hover:scale-[1.04] hover:bg-blue-500/20"
              >
                <GlobeIcon className="h-4 w-4" />
                Pesan via Website
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
