"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IntroScreen from "@/components/screens/IntroScreen";
import ComplimentsScreen from "@/components/screens/ComplimentsScreen";
import MessageScreen from "@/components/screens/MessageScreen";
import BirthdayCardScreen from "@/components/screens/BirthdayCardScreen";
import FinalScreen from "@/components/screens/FinalScreen";
import FloatingHearts from "@/components/effects/FloatingHearts";
import Twinkles from "@/components/effects/Twinkles";
import { Analytics } from "@vercel/analytics/next";

const TOTAL_SCREENS = 5;

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    <IntroScreen key="intro" onNext={() => setCurrentScreen(1)} />,
    <ComplimentsScreen key="compliments" onNext={() => setCurrentScreen(2)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(3)} />,
    <BirthdayCardScreen
      key="birthday-card"
      onNext={() => setCurrentScreen(4)}
    />,
    <FinalScreen key="final" />,
  ];

  return (
    <div
      className="min-h-screen overflow-hidden relative"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #050505 40%, #3f031cbb 100%)",
      }}
    >
      {/* Drifting aurora blobs */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="aurora-blob bg-pink-600/15"
          style={{ width: 420, height: 420, top: "-10%", left: "-8%" }}
        />
        <div
          className="aurora-blob bg-rose-500/10"
          style={{
            width: 380,
            height: 380,
            bottom: "-12%",
            right: "-6%",
            animationDelay: "-6s",
          }}
        />
        <div
          className="aurora-blob bg-fuchsia-600/10"
          style={{
            width: 300,
            height: 300,
            top: "30%",
            right: "20%",
            animationDelay: "-12s",
          }}
        />
      </div>

      {/* Ambient effects */}
      <FloatingHearts count={14} />
      <Twinkles count={16} />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-6 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 24, scale: 0.97, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -24, scale: 0.97, filter: "blur(6px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {Array.from({ length: TOTAL_SCREENS }, (_, i) => (
          <motion.span
            key={i}
            className="rounded-full"
            animate={{
              width: i === currentScreen ? 24 : 8,
              backgroundColor:
                i === currentScreen
                  ? "rgba(244,114,182,0.9)"
                  : i < currentScreen
                  ? "rgba(244,114,182,0.45)"
                  : "rgba(255,255,255,0.18)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ height: 8 }}
          />
        ))}
      </div>

      <Analytics />
    </div>
  );
}
