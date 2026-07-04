"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Bubbles, Mist } from "./Ocean";
import { ORDER_URL, waLink } from "@/lib/products";
import { GlobeIcon, WhatsAppIcon } from "./ProductShowcase";

/* Floating product constellation around the centered logo */
const orbit = [
  { src: "/products/udang-tiger.png", cls: "left-[2%] top-[11%] w-28 md:left-[4%] md:top-[18%] md:w-52", depth: 30, delay: 0 },
  { src: "/products/cumi.png", cls: "right-[2%] top-[9%] w-24 md:right-[5%] md:top-[15%] md:w-48", depth: -40, delay: 1.5 },
  { src: "/products/kepiting.png", cls: "left-[10%] bottom-[12%] hidden w-56 md:block", depth: 50, delay: 2.5 },
  { src: "/products/ikan-kakap-merah.png", cls: "right-[8%] bottom-[16%] hidden w-60 md:block", depth: -25, delay: 0.8 },
  { src: "/products/udang-vaname.png", cls: "left-[38%] top-[8%] hidden w-40 md:block", depth: 20, delay: 2 },
];

const ease = [0.22, 1, 0.36, 1] as const;

type OrbitProps = {
  item: (typeof orbit)[number];
  index: number;
  smx: ReturnType<typeof useSpring>;
  smy: ReturnType<typeof useSpring>;
};

function OrbitItem({ item, index, smx, smy }: OrbitProps) {
  const x = useTransform(smx, (v: number) => v * item.depth);
  const y = useTransform(smy, (v: number) => v * item.depth * 0.7);

  return (
    <motion.div className={`absolute ${item.cls}`} style={{ x, y }}>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.85, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ delay: 2 + index * 0.15, duration: 1.2, ease }}
        className="reflection animate-float"
        style={{ animationDelay: `${item.delay}s` }}
      >
        <Image
          src={item.src}
          alt=""
          width={400}
          height={400}
          priority
          className="product-img h-auto w-full"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  /* mouse parallax */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 40, damping: 20 });
  const smy = useSpring(my, { stiffness: 40, damping: 20 });

  /* scroll exit — hero content sinks and blurs as the story begins */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentBlur = useTransform(scrollYProgress, [0, 0.7], ["blur(0px)", "blur(12px)"]);

  const onMouseMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className="vignette relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* deep charcoal gradient stage */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_38%,#101318_0%,#050505_75%)]" />
      <Mist />
      <Bubbles count={22} />

      {/* floating products with mouse parallax */}
      {orbit.map((p, i) => (
        <OrbitItem key={p.src} item={p} index={i} smx={smx} smy={smy} />
      ))}

      {/* centered content */}
      <motion.div
        className="relative z-10 flex flex-col items-center px-6 text-center"
        style={{ y: contentY, opacity: contentOpacity, filter: contentBlur }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.9, duration: 1, ease }}
          className="logo-glow"
        >
          <Image src="/logo.png" alt="Tukang Seafood" width={180} height={180} priority />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1, ease }}
          className="text-glow mt-4 text-5xl font-semibold tracking-tight md:text-7xl"
        >
          Tukang Seafood
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 1, ease }}
          className="mt-4 text-lg text-white/60 md:text-xl"
        >
          Seafood Segar Premium — Segar Setiap Hari
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 1, ease }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-3.5 font-semibold text-black shadow-[0_0_40px_rgba(37,211,102,0.25)] transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Pesan via WhatsApp
          </a>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex items-center justify-center gap-2.5 rounded-full border-blue-400/40 px-8 py-3.5 font-semibold text-blue-100 shadow-[0_0_40px_rgba(56,130,246,0.15)] transition-all hover:scale-105 hover:bg-blue-500/15"
          >
            <GlobeIcon className="h-5 w-5" />
            Pesan Melalui Website
          </a>
        </motion.div>

        <motion.a
          href="#produk"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="mt-6 text-sm text-white/40 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          Lihat Semua Produk
        </motion.a>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        style={{ opacity: contentOpacity }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.div
            className="h-2 w-1 rounded-full bg-white/60"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
