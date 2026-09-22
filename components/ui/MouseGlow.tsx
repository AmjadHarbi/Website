"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        damping: 30,
      }}
      className="
      fixed
      pointer-events-none
      z-10

      w-[300px]
      h-[300px]

      rounded-full

      bg-pink-400/20

      blur-[120px]
      "
    />
  );
}