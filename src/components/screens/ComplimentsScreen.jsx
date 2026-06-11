import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Lock, MoveRight, Sparkles } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";
import GlowButton from "@/components/GlowButton";

const compliments = [
  "You look adorable",
  "You have the sweetest vibe",
  "You make things feel lighter",
  "You are naturally charming",
  "You make everything feel more special",
];

function Card({ text, isOpen, onToggle, index }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 18, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.45 + index * 0.12, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onToggle}
      className={`relative w-full text-left px-4 py-3 rounded-2xl border text-foreground text-sm md:text-base backdrop-blur-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-pink-500/30 transition-colors duration-500 ${
        isOpen
          ? "bg-pink-500/10 border-pink-400/50 shadow-[0_0_25px_rgba(236,72,153,0.25)]"
          : "bg-white/5 border-pink-500/15 shadow-[0_0_20px_rgba(0,0,0,0.25)]"
      }`}
      aria-expanded={isOpen}
    >
      {!isOpen ? (
        <span className="flex items-center justify-between gap-3 text-white/70">
          <span className="italic">Tap to open</span>
          <motion.span
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1.5 }}
          >
            <Lock size={16} className="opacity-70" />
          </motion.span>
        </span>
      ) : (
        <span className="flex items-center justify-between gap-3">
          <TypewriterText
            start={isOpen}
            text={text}
            speed={32}
            className="block h-5 md:h-6 text-nowrap overflow-x-auto"
          />
          <motion.span
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.15 }}
          >
            <Heart size={16} className="text-pink-400 fill-pink-400 shrink-0" />
          </motion.span>
        </span>
      )}
    </motion.button>
  );
}

export default function ComplimentsScreen({ onNext }) {
  const [open, setOpen] = useState(() => compliments.map(() => false));
  const openedCount = open.filter(Boolean).length;

  const toggle = (index) => {
    setOpen((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  return (
    <motion.div className="flex flex-col items-center justify-center h-full w-full text-center">
      <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-7">
        {/* Center heart with heartbeat + glow */}
        <motion.div
          className="relative"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute -inset-4 rounded-full bg-pink-500/20 blur-2xl animate-glow-pulse" />
          <div className="relative w-28 h-28 rounded-full bg-linear-to-br from-pink-500/15 to-rose-500/15 border border-pink-400/40 flex items-center justify-center backdrop-blur-md shadow-[0_0_30px_rgba(236,72,153,0.2)]">
            <Heart className="w-14 h-14 text-pink-400 fill-pink-400 animate-heartbeat" />
          </div>
          <motion.div
            className="absolute -top-1 -right-2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-5 h-5 text-pink-200" />
          </motion.div>
        </motion.div>

        {/* Heading & counter */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-dancing-script text-shimmer font-semibold leading-tight pb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Just for you
          </motion.h2>
          <motion.p
            className="text-white/50 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {openedCount === 0
              ? "Five little secrets, sealed with love"
              : openedCount < compliments.length
              ? `${openedCount} of ${compliments.length} opened`
              : "All opened! Every word is true ✨"}
          </motion.p>
        </div>

        {/* Compliments */}
        <div className="grid grid-cols-1 gap-4 w-full px-4">
          {compliments.map((line, index) => (
            <Card
              key={index}
              index={index}
              text={line}
              isOpen={open[index]}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>

        {/* Next button */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <GlowButton onClick={onNext}>
            <span>See more</span>
            <MoveRight size={20} className="fill-current" />
          </GlowButton>
        </motion.div>
      </div>
    </motion.div>
  );
}
