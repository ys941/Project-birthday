import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, MoveRight, Sparkles } from "lucide-react"
import TypewriterText from "@/components/TypewriterText"

const message =
  "I just wanted to tell you something... you really are special in a way that’s hard to explain.\n\n" +
  "There’s a softness in the way you talk, a sweetness in the way you smile, and something genuine about you that just feels good to be around.\n\n" +
  "You don’t try to be anything extra, you’re just you, and that’s what makes you so lovely."

export default function MessageScreen({ onNext }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            className="flex flex-col items-center justify-center p-2 relative"
        >
            {/* Heading */}
            <motion.h2
                className="text-4xl md:text-5xl font-dancing-script text-zinc-50 font-semibold leading-tight mb-8"
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
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: 0.45, duration: 0.5 }}
                        className="max-w-md w-full text-left relative p-6 rounded-2xl bg-white/5 border border-pink-500/15 text-foreground shadow-[0_0_20px_rgba(0,0,0,0.25)] backdrop-blur-md overflow-hidden mb-8 focus:outline-none focus:ring-2 focus:ring-pink-500/30"
                        aria-label="Open the note"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-white/90">
                                    <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                                    <span className="font-semibold">Tap to open</span>
                                </div>
                                <p className="mt-2 text-white/60 text-sm">
                                    I wrote you something…
                                </p>
                            </div>
                            <Sparkles className="w-5 h-5 text-pink-300" />
                        </div>
                    </motion.button>
                ) : (
                    <motion.div
                        key="open"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.45 }}
                        className="max-w-md text-center relative p-5 rounded-2xl bg-white/5 border border-pink-500/15 text-foreground shadow-[0_0_20px_rgba(0,0,0,0.25)] backdrop-blur-md overflow-hidden mb-8"
                    >
                        {/* message (typed) */}
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
                <motion.button
                    className="bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 text-lg rounded-full font-medium shadow-2xl hover:shadow-pink-500/25 transition-all flex items-center gap-2 will-change-transform"
                    onClick={onNext}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>One more thing</span>
                    <MoveRight size={18} className="fill-current" />
                </motion.button>
            </motion.div>
        </motion.div>
    )
}