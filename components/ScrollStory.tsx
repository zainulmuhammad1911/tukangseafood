"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bubbles } from "./Ocean";

/*
 * "Freshness Starts at the Source" — pinned editorial scene.
 * A large hero fish scales up out of the depth while a light
 * sweep crosses it; supporting products drift past in parallax layers.
 */
export default function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 1.15]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["18%", "-14%"]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [-4, 3]);
  const heroBlur = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    ["blur(14px)", "blur(0px)", "blur(0px)", "blur(6px)"]
  );

  const textY = useTransform(scrollYProgress, [0.1, 0.45], ["40%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0, 1, 1, 0]);

  const layerA = useTransform(scrollYProgress, [0, 1], ["30%", "-45%"]);
  const layerB = useTransform(scrollYProgress, [0, 1], ["55%", "-25%"]);

  /* cinematic light sweep */
  const sweepX = useTransform(scrollYProgress, [0.2, 0.8], ["-60%", "160%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-40 md:py-56">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,#0b0e13_0%,#050505_80%)]" />
      <Bubbles count={12} />

      {/* deep parallax layers */}
      <motion.div className="absolute left-[6%] top-[10%] w-28 opacity-40 blur-[2px] md:w-40" style={{ y: layerA }}>
        <Image src="/products/udang-vaname.png" alt="" width={300} height={300} className="h-auto w-full" />
      </motion.div>
      <motion.div className="absolute right-[8%] top-[20%] w-32 opacity-30 blur-[3px] md:w-44" style={{ y: layerB }}>
        <Image src="/products/ikan-kembung.png" alt="" width={300} height={300} className="h-auto w-full" />
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <p className="text-xs uppercase tracking-[0.4em] text-blue-300/70">
            Dari Laut, Langsung ke Dapur Anda
          </p>
          <h2 className="text-glow mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Kesegaran Dimulai
            <br />
            dari Sumbernya
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/55">
            Setiap ikan, udang, cumi, dan kepiting dipilih langsung setiap pagi.
            Tidak ada stok lama. Tidak ada kompromi. Hanya kesegaran laut yang
            sesungguhnya.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="reflection relative"
            style={{ scale: heroScale, y: heroY, rotate: heroRotate, filter: heroBlur }}
          >
            <Image
              src="/products/ikan-kerapu.png"
              alt="Ikan Kerapu segar"
              width={800}
              height={800}
              className="product-img h-auto w-full"
            />
            {/* light sweep across the product */}
            <motion.div
              className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{ left: sweepX }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
