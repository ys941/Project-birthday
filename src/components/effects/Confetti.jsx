"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const COLORS = [
  "#f472b6", // pink-400
  "#fb7185", // rose-400
  "#fbbf24", // amber-400
  "#a78bfa", // violet-400
  "#34d399", // emerald-400
  "#60a5fa", // blue-400
  "#fda4af", // rose-300
];

/**
 * Gentle confetti rain falling from the top of the screen.
 * Generated after mount so SSR/client markup always match.
 */
export default function Confetti({ count = 40, once = false }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    setPieces(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 6 + Math.random() * 8,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * (once ? 0.8 : 8),
        drift: -40 + Math.random() * 80,
        rotate: 360 + Math.random() * 720,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        round: Math.random() > 0.5,
      }))
    );
  }, [count, once]);

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute block"
          style={{
            left: `${p.left}%`,
            top: -20,
            width: p.size,
            height: p.round ? p.size : p.size * 0.45,
            backgroundColor: p.color,
            borderRadius: p.round ? "50%" : "2px",
          }}
          animate={{
            y: ["0vh", "115vh"],
            x: [0, p.drift],
            rotate: [0, p.rotate],
            opacity: [0, 1, 1, 0.6],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: once ? 0 : Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
