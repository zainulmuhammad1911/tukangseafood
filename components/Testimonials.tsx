"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    quote:
      "Udangnya benar-benar segar, masih keras dan manis. Sekarang langganan tiap minggu.",
    name: "Rina S.",
    role: "Ibu Rumah Tangga, Jakarta Utara",
  },
  {
    quote:
      "Untuk restoran kami, kualitas kerapu dan kakapnya konsisten. Pengiriman selalu tepat waktu.",
    name: "Chef Andri",
    role: "Owner Seafood Resto",
  },
  {
    quote:
      "Kepitingnya masih hidup sampai rumah. Pelayanan lewat WhatsApp cepat dan ramah.",
    name: "Budi H.",
    role: "Pelanggan Setia",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-blue-300/70">
            Kata Mereka
          </p>
          <h2 className="text-glow mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Dipercaya Setiap Hari
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.9, ease }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-8"
            >
              <div className="text-blue-300/70" aria-hidden>
                ★★★★★
              </div>
              <blockquote className="mt-5 leading-relaxed text-white/70">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-medium">{t.name}</p>
                <p className="text-sm text-white/40">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
