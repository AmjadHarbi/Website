"use client";

type Props = {
  name: string;
};

import { motion } from "framer-motion";

export default function SkillNode({ name }: Props) {
  return (
    <motion.div
      className="group inline-flex"
      whileHover={{
        scale: 1.15,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <motion.div
        initial={{
          boxShadow: "0px 0px 0px rgba(147,51,234,0.4)",
          filter: "drop-shadow(0 0 0px rgba(147,51,234,0.4))",
        }}
        animate={{
          boxShadow: [
            "0px 0px 0px rgba(147,51,234,0.4)",
            "0px 0px 20px rgba(147,51,234,0.85)",
            "0px 0px 0px rgba(147,51,234,0.4)",
          ],
          filter: [
            "drop-shadow(0 0 0px rgba(147,51,234,0.4))",
            "drop-shadow(0 0 20px rgba(147,51,234,0.85))",
            "drop-shadow(0 0 0px rgba(147,51,234,0.4))",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ willChange: "box-shadow, filter" }}
        className="
          w-20
          h-20
          rounded-full
          border
          border-purple-500
          bg-black
          flex
          items-center
          justify-center
          text-sm
          text-center
          p-2
          cursor-pointer
        "
      >
        {name}
      </motion.div>

      <span
        className="
          opacity-0
          group-hover:opacity-100
          text-xs
          text-yellow-400
          mt-2
          transition
        "
      >
        XP +250
      </span>
    </motion.div>
  );
}