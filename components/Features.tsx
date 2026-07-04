"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mist } from "./Ocean";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    title: "Segar Setiap Hari",
    desc: "Dipilih langsung setiap pagi — tidak pernah stok kemarin.",
    icon: "🌊",
  },
  {
    title: "Kualitas Premium",
    desc: "Hanya grade terbaik yang lolos seleksi kami.",
    icon: "◆",
  },
  {
    title: "Dipilih dengan Teliti",
    desc: "Setiap ekor diperiksa satu per satu sebelum dikirim.",
    icon: "✦",
  },
  {
    title: "Pengiriman Cepat",
    desc: "Rantai dingin terjaga sampai ke depan pintu Anda.",
    icon: "➤",
  },
  {
    title: "Penjual Terpercaya",
    desc: "Dipercaya pelanggan setia dan dapur profesional.",
    icon: "★",
  },
];

export default function Features() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section id="keunggulan" ref={ref} className="relative overflow-hidden py-32">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,#0a0d12_0%,#050505_80%)]"
        style={{ y: bgY }}
      />
      <Mist />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-blue-300/70">
            Standar Kami
          </p>
          <h2 className="text-glow mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Kenapa Pilih Tukang Seafood
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50, rotateX: 12, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.9, ease }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-7 transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(56,130,246,0.15)]"
            >
              <span className="text-2xl text-blue-300/80">{f.icon}</span>
              <h3 className="mt-5 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/45">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
