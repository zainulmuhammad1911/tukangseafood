"use client";

import { useMemo } from "react";

/* Deterministic pseudo-random so SSR and client markup match */
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export function Bubbles({ count = 18 }: { count?: number }) {
  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (seeded(i, 1) * 100).toFixed(2),
        size: (3 + seeded(i, 2) * 9).toFixed(2),
        duration: (9 + seeded(i, 3) * 14).toFixed(2),
        delay: (seeded(i, 4) * -20).toFixed(2),
        drift: ((seeded(i, 5) - 0.5) * 80).toFixed(2),
        opacity: (0.15 + seeded(i, 6) * 0.3).toFixed(2),
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bubbles.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            ["--drift" as string]: `${b.drift}px`,
            ["--bubble-opacity" as string]: b.opacity,
          }}
        />
      ))}
    </div>
  );
}

export function Mist() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="mist left-[-10%] top-[20%] h-[40vh] w-[60vw]" />
      <div
        className="mist right-[-15%] top-[55%] h-[45vh] w-[55vw]"
        style={{ animationDelay: "-9s", animationDuration: "24s" }}
      />
    </div>
  );
}
