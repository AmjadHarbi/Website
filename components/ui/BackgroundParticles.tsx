"use client";

import { motion } from "framer-motion";

export default function BackgroundParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          initial={{
            x: Math.random() * 1800,
            y: 1200,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 10,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
