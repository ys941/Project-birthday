"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Gift } from "lucide-react";
import styles from "./BirthdayCardScreen.module.css";
import TypewriterText from "@/components/TypewriterText";

const CARDS = [
  {
    heading: "Happy Birthday Jaspreet Kaur!",
    body: [
      "I hope your special day will bring you lots of happiness, love, and fun. You deserve them a lot. Enjoy!",
      "Hope your day goes great!",
    ],
  },
  {
    heading: "Happy Birthday Jassi",
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

  return (
    <div className="w-full max-w-6xl text-center">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-3 text-white"
      >
        Birthday Card <Gift className="inline-block ml-2 -mt-1" size={28} />
      </motion.h2>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-white/70 mb-6"
      >
        Tap / click a card to open it ✨
      </motion.p>

      <div className={styles.grid}>
        {CARDS.map((card, i) => (
          <div
            key={i}
            className={`${styles.card} ${openIndex === i ? styles.open : ""}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpenIndex(openIndex === i ? null : i);
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
              {/* Text is fully hidden until open (CSS). When opened, we type it in. */}
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
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white border border-white/15 hover:bg-white/15 transition"
        >
          Continue <MoveRight size={18} />
        </button>
      </div>
    </div>
  );
}
