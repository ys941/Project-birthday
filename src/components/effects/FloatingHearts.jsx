"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

/**
 * Ambient hearts that drift up from the bottom of the screen forever.
 * Generated after mount so SSR/client markup always match.
 */
export default function FloatingHearts({ count = 14 }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    setHearts(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 18,
        duration: 12 + Math.random() * 14,
        delay: Math.random() * 12,
        drift: -30 + Math.random() * 60,
        opacity: 0.12 + Math.random() * 0.25,
      }))
    );
  }, [count]);

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      aria-hidden="true"
    >
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute"
          style={{ left: `${h.left}%`, bottom: -40 }}
          animate={{
            y: ["0vh", "-115vh"],
            x: [0, h.drift, 0, -h.drift, 0],
            rotate: [0, 20, -15, 10, 0],
          }}
          transition={{
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: h.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Heart
            style={{
              width: h.size,
              height: h.size,
              opacity: h.opacity,
            }}
            className="text-pink-400 fill-pink-400"
          />
        </motion.div>
      ))}
    </div>
  );
}
