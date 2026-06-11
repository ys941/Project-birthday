import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MoveRight, Sparkles, Mail } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";
import GlowButton from "@/components/GlowButton";

const message =
  "I just wanted to tell you something... you really are special in a way that’s hard to explain.\n\n" +
  "There’s a softness in the way you talk, a sweetness in the way you smile, and something genuine about you that just feels good to be around.\n\n" +
  "You don’t try to be anything extra, you’re just you, and that’s what makes you so lovely.";

export default function MessageScreen({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="flex flex-col items-center justify-center p-2 relative">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-dancing-script text-shimmer font-semibold leading-tight mb-8 pb-1"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        A little note for you
      </motion.h2>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="closed"
            type="button"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -14,
              scale: 0.96,
              transition: { duration: 0.35 },
            }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group max-w-md w-full text-left relative p-6 rounded-2xl bg-white/5 border border-pink-500/25 text-foreground shadow-[0_0_30px_rgba(236,72,153,0.12)] hover:shadow-[0_0_40px_rgba(236,72,153,0.25)] hover:border-pink-400/40 backdrop-blur-md overflow-hidden mb-8 focus:outline-none focus:ring-2 focus:ring-pink-500/30 transition-all"
            aria-label="Open the note"
          >
            {/* wax seal heart */}
            <div className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-pink-500/15 blur-xl" />
            <motion.div
              className="flex items-center justify-between gap-4"
              animate={{ y: [0, -4, 0] }}
              transition={{
                delay: 1,
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div>
                <div className="flex items-center gap-2 text-white/90">
                  <motion.span
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  >
                    <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                  </motion.span>
                  <span className="font-semibold">Tap to open</span>
                </div>
                <p className="mt-2 text-white/60 text-sm">
                  I wrote you something&hellip;
                </p>
              </div>
              <div className="relative">
                <Mail className="w-8 h-8 text-pink-300/80 group-hover:text-pink-300 transition-colors" />
                <motion.span
                  className="absolute -top-2 -right-2"
                  animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-pink-200" />
                </motion.span>
              </div>
            </motion.div>
          </motion.button>
        ) : (
          <motion.div
            key="open"
            initial={{ opacity: 0, scale: 0.94, rotateX: -12 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-md text-center relative p-6 rounded-2xl bg-linear-to-b from-white/8 to-pink-500/5 border border-pink-400/30 text-foreground shadow-[0_0_40px_rgba(236,72,153,0.18)] backdrop-blur-md overflow-hidden mb-8"
          >
            {/* corner hearts */}
            <Heart className="absolute top-3 left-3 w-3.5 h-3.5 text-pink-400/40 fill-pink-400/40" />
            <Heart className="absolute top-3 right-3 w-3.5 h-3.5 text-pink-400/40 fill-pink-400/40" />

            <TypewriterText
              start={isOpen}
              text={message}
              speed={26}
              delay={350}
              className="block text-white/85 leading-relaxed"
              cursorClassName="animate-pulse ml-0.5"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="text-center relative z-10 place-items-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <GlowButton onClick={onNext}>
          <span>One more thing</span>
          <MoveRight size={18} className="fill-current" />
        </GlowButton>
      </motion.div>
    </motion.div>
  );
}
