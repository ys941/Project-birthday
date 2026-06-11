"use client";

import { motion } from "framer-motion";

/**
 * Shared pink-gradient pill button with a glow ring and a
 * sweeping shine that passes over it every few seconds.
 */
export default function GlowButton({ children, onClick, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      className={`group relative overflow-hidden rounded-full bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 px-10 py-4 text-lg font-semibold text-white shadow-[0_8px_30px_rgba(236,72,153,0.35)] hover:shadow-[0_8px_40px_rgba(236,72,153,0.55)] transition-shadow will-change-transform ${className}`}
    >
      {/* sweeping shine */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent"
        initial={{ left: "-40%" }}
        animate={{ left: "130%" }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 2.2,
          ease: "easeInOut",
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
