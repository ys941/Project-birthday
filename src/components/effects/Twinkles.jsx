"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * Soft twinkling sparkles scattered across the screen.
 * Generated after mount so SSR/client markup always match.
 */
export default function Twinkles({ count = 18 }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 6 + Math.random() * 10,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 5,
      }))
    );
  }, [count]);

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute"
          style={{ left: `${s.left}%`, top: `${s.top}%` }}
          animate={{ opacity: [0, 0.7, 0], scale: [0.4, 1, 0.4] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles
            style={{ width: s.size, height: s.size }}
            className="text-pink-200/70"
          />
        </motion.div>
      ))}
    </div>
  );
}
