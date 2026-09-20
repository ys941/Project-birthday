import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import Confetti from "@/components/effects/Confetti";

export default function FinalScreen() {
  return (
    <motion.div className="flex flex-col items-center justify-center h-full w-full text-center px-2">
      {/* Celebration confetti */}
      <Confetti count={55} />

      {/* GIF with glow rings */}
      <motion.div
        className="relative"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 140, damping: 14 }}
      >
        <div className="absolute -inset-6 rounded-full bg-pink-500/25 blur-2xl animate-glow-pulse" />
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-pink-400/40"
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{
              duration: 2.6,
              delay: i * 1.3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
        <div className="relative w-40 h-40 p-4 rounded-full bg-pink-900/10 border-2 border-pink-400/40 backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.3)]">
          <Image
            loading="lazy"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/gifs/cute.gif`}
            width={130}
            height={130}
            alt="cute gif"
            className="object-contain"
            unoptimized
          />
        </div>
      </motion.div>

      {/* Final Text */}
      <motion.h2
        className="mt-10 text-4xl md:text-5xl font-dancing-script text-shimmer font-semibold leading-tight pb-2"
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        You&rsquo;ll always be special to me!!
      </motion.h2>

      {/* Trio of beating hearts */}
      <motion.div
        className="mt-6 flex items-center gap-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ scale: [1, 1.3, 1], y: [0, -4, 0] }}
            transition={{
              duration: 1.4,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart
              className={`text-pink-400 fill-pink-400 ${
                i === 1 ? "w-7 h-7" : "w-5 h-5"
              }`}
            />
          </motion.span>
        ))}
      </motion.div>

      {/* Sign-off */}
      <motion.p
        className="mt-6 text-white/50 text-sm tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        Made with all my heart, just for you
      </motion.p>
    </motion.div>
  );
}
