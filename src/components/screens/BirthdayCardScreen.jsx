"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Gift, PartyPopper } from "lucide-react";
import styles from "./BirthdayCardScreen.module.css";
import TypewriterText from "@/components/TypewriterText";
import GlowButton from "@/components/GlowButton";
import Confetti from "@/components/effects/Confetti";

const CARDS = [
  {
    heading: "Happy Birthday Name!",
    body: [
      "I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy!",
      "Hope your day goes great!",
    ],
  },
  {
    heading: "Happy Birthday Name",
    body: [
      '"Happy Birthday! May this day be as sunny as your smile, and as beautiful as your heart. You deserve all the happiness in the world today and every day. May your journey through life be an adventure of discovery and growth."!',
    ],
  },
  {
    heading: '"Alles Gute zum Geburtstag"!',
    body: [
      '"Möge dieser Geburtstagsgruß ein Lächeln bringen und der Feier eine besondere Note verleihen. 🌟🎉🎂"',
    ],
  },
];

const COVER_IMAGE =
  "https://1.bp.blogspot.com/-Mgj9-rbs65E/XfMoPSD5gtI/AAAAAAAAURk/NBokE2gSS2cTSJ2em5lZ5hJDuTtRN7UVwCLcBGAsYHQ/s1600/2713997.png";

export default function BirthdayCardScreen({ onNext }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [hasOpened, setHasOpened] = useState(false);

  const toggleCard = (i) => {
    const opening = openIndex !== i;
    setOpenIndex(opening ? i : null);
    if (opening) setHasOpened(true);
  };

  return (
    <div className="w-full max-w-6xl text-center relative">
      {/* Confetti celebrates the first card opening */}
      {hasOpened && <Confetti count={50} />}

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-3 text-shimmer font-dancing-script pb-1"
      >
        Birthday Cards{" "}
        <motion.span
          className="inline-block align-middle ml-1"
          animate={{ rotate: [0, -12, 12, -8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2 }}
        >
          <Gift className="inline-block text-pink-300" size={32} />
        </motion.span>
      </motion.h2>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="text-white/70 mb-8 flex items-center justify-center gap-2"
      >
        <PartyPopper size={16} className="text-pink-300" />
        Tap a card to open it
        <PartyPopper size={16} className="text-pink-300 -scale-x-100" />
      </motion.p>

      <div className={styles.grid}>
        {CARDS.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.3 + i * 0.18, duration: 0.6, ease: "easeOut" }}
            whileHover={openIndex === i ? {} : { y: -6 }}
            className={`${styles.card} ${openIndex === i ? styles.open : ""}`}
            onClick={() => toggleCard(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCard(i);
              }
            }}
            aria-label="Birthday card"
          >
            <div className={styles.back} />
            <div className={styles.front}>
              <div className={styles.imgset}>
                <img
                  width="100%"
                  src={COVER_IMAGE}
                  alt="Birthday illustration"
                />
              </div>
            </div>

            <div className={styles.textContainer}>
              <h3 className={styles.head}>
                <TypewriterText
                  start={openIndex === i}
                  text={card.heading}
                  speed={30}
                  delay={450}
                  showCursor={false}
                />
              </h3>

              <p>
                <TypewriterText
                  start={openIndex === i}
                  text={card.body.join("\n\n")}
                  speed={26}
                  delay={800}
                  showCursor={false}
                />
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10 flex justify-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <GlowButton onClick={onNext}>
          Continue <MoveRight size={18} />
        </GlowButton>
      </motion.div>
    </div>
  );
}
