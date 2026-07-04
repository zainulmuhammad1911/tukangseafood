"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bubbles, Mist } from "./Ocean";
import {
  ORDER_URL,
  THREADS_HANDLE,
  THREADS_URL,
  waLink,
  WHATSAPP_NUMBER,
} from "@/lib/products";
import { GlobeIcon, WhatsAppIcon } from "./ProductShowcase";
import { ThreadsIcon } from "./Contact";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <footer ref={ref} className="relative overflow-hidden pt-28 md:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,#0d1420_0%,#050505_75%)]" />
      <Mist />
      <Bubbles count={16} />

      {/* Final CTA */}
      <motion.div
        style={{ scale }}
        className="relative mx-auto max-w-4xl px-5 text-center sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="logo-glow mx-auto w-fit"
        >
          <Image src="/logo.png" alt="Tukang Seafood" width={140} height={140} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease }}
          className="text-glow mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
        >
          Bawa Pulang
          <br />
          Kesegaran Laut
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 1, ease }}
          className="mt-6 text-lg text-white/55"
        >
          Pesan hari ini, terima segar hari ini.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full bg-[#25D366] px-9 py-4 text-lg font-semibold text-black shadow-[0_0_50px_rgba(37,211,102,0.3)] sm:w-auto"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Pesan via WhatsApp
          </motion.a>
          <motion.a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="glass inline-flex w-full max-w-xs items-center justify-center gap-3 rounded-full border-blue-400/40 px-9 py-4 text-lg font-semibold text-blue-100 shadow-[0_0_50px_rgba(56,130,246,0.2)] transition-colors hover:bg-blue-500/15 sm:w-auto"
          >
            <GlobeIcon className="h-6 w-6" />
            Pesan Melalui Website
          </motion.a>
        </motion.div>
      </motion.div>

      {/* contact details */}
      <div className="relative mx-auto mt-24 max-w-7xl px-5 sm:px-6 md:mt-32">
        <div className="grid gap-8 border-t border-white/10 py-10 sm:grid-cols-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366]">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.25em] text-white/35">
                WhatsApp
              </span>
              <span className="block text-sm font-medium text-white/75 transition-colors group-hover:text-white">
                {WHATSAPP_NUMBER}
              </span>
            </span>
          </a>
          <a
            href={THREADS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white">
              <ThreadsIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.25em] text-white/35">
                Threads
              </span>
              <span className="block text-sm font-medium text-white/75 transition-colors group-hover:text-white">
                {THREADS_HANDLE}
              </span>
            </span>
          </a>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300">
              <GlobeIcon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.25em] text-white/35">
                Pesan Online
              </span>
              <span className="block break-all text-sm font-medium text-white/75 transition-colors group-hover:text-white">
                tukangseafood.netlify.app/pesan
              </span>
            </span>
          </a>
        </div>

        {/* footer bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 md:flex-row">
          <p className="text-center text-sm text-white/35">
            © {new Date().getFullYear()} Tukang Seafood. Seafood Segar Berkualitas Premium.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/45 sm:gap-8">
            <a href="#produk" className="transition-colors hover:text-white">Produk</a>
            <a href="#galeri" className="transition-colors hover:text-white">Galeri</a>
            <a href="#kontak" className="transition-colors hover:text-white">Kontak</a>
            <a href={THREADS_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              Threads
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
