"use client";

import { motion } from "framer-motion";
import { Mist } from "./Ocean";
import {
  ORDER_URL,
  THREADS_HANDLE,
  THREADS_URL,
  waLink,
  WHATSAPP_NUMBER,
} from "@/lib/products";
import { GlobeIcon, WhatsAppIcon } from "./ProductShowcase";

const ease = [0.22, 1, 0.36, 1] as const;

export function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className ?? ""}`} aria-hidden>
      <path d="M12.19 24h-.01c-3.58-.02-6.33-1.2-8.18-3.51C2.36 18.44 1.51 15.59 1.48 12v-.01c.03-3.58.88-6.43 2.52-8.48C5.85 1.21 8.6.03 12.18 0h.02c2.75.02 5.05.73 6.83 2.11 1.68 1.3 2.86 3.16 3.51 5.52l-2.04.57c-1.1-4.01-3.9-6.06-8.31-6.09-2.92.02-5.12.94-6.55 2.72C4.3 6.5 3.6 8.91 3.58 12c.02 3.09.72 5.5 2.06 7.17 1.43 1.78 3.63 2.7 6.55 2.72 2.63-.02 4.37-.64 5.82-2.08 1.65-1.64 1.62-3.66 1.09-4.89-.31-.72-.88-1.32-1.63-1.78-.19 1.4-.62 2.52-1.28 3.37-.89 1.14-2.15 1.77-3.75 1.85-1.21.07-2.38-.22-3.28-.81-1.07-.7-1.69-1.77-1.76-3.02-.13-2.45 1.83-4.21 4.88-4.39.9-.05 1.75 0 2.53.14-.1-.62-.31-1.11-.62-1.47-.43-.49-1.09-.74-1.97-.75h-.03c-.71 0-1.67.2-2.28 1.11l-1.71-1.15c.95-1.42 2.5-2.2 4.02-2.2h.04c2.87.02 4.58 1.78 4.75 4.85l.01.14c.55.24 1.06.53 1.5.87 1.06.8 1.83 1.85 2.24 3.02.57 1.65.62 4.34-1.6 6.55-1.87 1.86-4.14 2.7-7.27 2.72zm-.87-9.87c-1.56.09-2.98.86-2.9 2.4.05.98 1.05 1.86 2.94 1.75 1.83-.1 2.79-1.32 3.05-3.85-.71-.16-1.5-.27-2.35-.32-.25-.01-.5 0-.74.02z" />
    </svg>
  );
}

const channels = [
  {
    label: "WhatsApp",
    value: WHATSAPP_NUMBER,
    desc: "Respon cepat setiap hari. Langsung terhubung dengan tim kami.",
    href: waLink(),
    icon: WhatsAppIcon,
    accent: "text-[#25D366]",
    glow: "hover:shadow-[0_0_60px_rgba(37,211,102,0.2)]",
    ring: "border-[#25D366]/30 bg-[#25D366]/10",
  },
  {
    label: "Threads",
    value: THREADS_HANDLE,
    desc: "Ikuti update stok harian, promo, dan inspirasi masakan seafood.",
    href: THREADS_URL,
    icon: ThreadsIcon,
    accent: "text-white",
    glow: "hover:shadow-[0_0_60px_rgba(255,255,255,0.14)]",
    ring: "border-white/25 bg-white/10",
  },
  {
    label: "Pesan Online",
    value: "tukangseafood.netlify.app/pesan",
    desc: "Pesan kapan saja lewat halaman pemesanan online kami.",
    href: ORDER_URL,
    icon: GlobeIcon,
    accent: "text-blue-300",
    glow: "hover:shadow-[0_0_60px_rgba(56,130,246,0.22)]",
    ring: "border-blue-400/30 bg-blue-500/10",
  },
];

export default function Contact() {
  return (
    <section id="kontak" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_50%,#0a0e14_0%,#050505_80%)]" />
      <Mist />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-blue-300/70">
            Hubungi Kami
          </p>
          <h2 className="text-glow mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Selalu Siap Melayani
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.9, ease }}
              whileHover={{ y: -8 }}
              className={`glass group flex flex-col items-center rounded-3xl p-8 text-center transition-shadow duration-500 ${c.glow}`}
            >
              <motion.span
                className={`flex h-16 w-16 items-center justify-center rounded-full border ${c.ring} ${c.accent}`}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              >
                <c.icon className="h-7 w-7 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
              </motion.span>
              <h3 className="mt-5 text-lg font-medium">{c.label}</h3>
              <p className={`mt-1 break-all text-sm font-semibold ${c.accent}`}>
                {c.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/45">
                {c.desc}
              </p>
              <span className="mt-5 text-sm text-white/60 underline-offset-4 transition-colors group-hover:text-white group-hover:underline">
                Buka {c.label} →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
