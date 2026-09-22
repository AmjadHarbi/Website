"use client";

import { motion } from "framer-motion";

type Props = {
  icon: string;
  title: string;
  unlocked: string;
  xp: number;
  rarity: string;
};

export default function AchievementMedal({
  icon,
  title,
  unlocked,
  xp,
  rarity,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 3,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
      group
      relative
      flex
      flex-col
      items-center
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        w-40
        h-40
        rounded-full
        bg-pink-400/20
        blur-3xl
        opacity-0
        group-hover:opacity-100
        transition
        "
      />

      {/* Medal */}

      <div
        className="
        relative
        w-36
        h-36

        rounded-full

        border-4
        border-yellow-300

        bg-gradient-to-br
        from-yellow-200/20
        via-pink-300/10
        to-purple-400/20

        flex
        items-center
        justify-center

        text-6xl

        shadow-[0_0_40px_rgba(253,224,71,.25)]
        "
      >
        {icon}
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="text-sm text-pink-300">
        {rarity}
      </p>

      <div
        className="
        opacity-0
        group-hover:opacity-100
        transition
        mt-4
        text-center
        "
      >
        <p className="text-gray-400 text-sm">
          Unlocked via
        </p>

        <p className="text-purple-300">
          {unlocked}
        </p>

        <p className="mt-2 text-yellow-300">
          +{xp} XP
        </p>
      </div>
    </motion.div>
  );
}