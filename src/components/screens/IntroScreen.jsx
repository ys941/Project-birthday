import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import GlowButton from "@/components/GlowButton";

export default function IntroScreen({ onNext }) {
  return (
    <div>
      <div className="place-items-center max-w-3xl text-center">
        {/* Avatar with glow rings */}
        <motion.div
          className="mb-10 relative inline-block"
          initial={{ scale: 0, rotate: -8 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 160, damping: 14 }}
        >
          {/* soft glow halo */}
          <div className="absolute -inset-6 rounded-full bg-pink-500/20 blur-2xl animate-glow-pulse" />

          {/* expanding ping rings */}
          {[0, 1].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-pink-400/40"
              animate={{ scale: [1, 1.45], opacity: [0.6, 0] }}
              transition={{
                duration: 2.4,
                delay: i * 1.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}

          <div className="relative w-36 h-36 mx-auto rounded-full bg-linear-to-br from-pink-700/20 to-rose-700/20 flex items-end justify-center border-2 border-pink-400/40 backdrop-blur-sm overflow-hidden shadow-[0_0_40px_rgba(236,72,153,0.25)]">
            <img
              loading="lazy"
              src="/gifs/waving.gif"
              className="h-28 -mb-2"
              alt="waving"
            />
          </div>

          {/* orbiting sparkles */}
          <motion.div
            className="absolute -top-2 -right-3"
            animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.25, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="w-6 h-6 text-pink-300" />
          </motion.div>
          <motion.div
            className="absolute -bottom-1 -left-4"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl w-full font-bold mb-5 text-shimmer font-dancing-script leading-tight pb-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          Hey Name!!
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-foreground/90 mb-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          There&rsquo;s something I want you to know&hellip;
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <GlowButton onClick={onNext}>
            Open this
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 fill-current" />
            </motion.span>
          </GlowButton>
        </motion.div>
      </div>
    </div>
  );
}
