"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import ScrollGuard from "./ScrollGuard";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import JourneyMap from "@/components/sections/JourneyMap";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Education from "@/components/sections/Education";
import SkillTree from "@/components/sections/SkillTree";
import Achievements from "@/components/sections/Achievements";
import AchievementHall from "@/components/sections/AchievementHall";
import Contact from "@/components/sections/Contact";

const labelToKey: Record<string, string> = {
  Home: "home",
  Map: "journey-map",
  Quests: "experience",
  Academy: "education",
  Skills: "skills",
  Achievements: "achievements",
  Contact: "contact",
};

const sections: Record<string, React.FC<any>> = {
  home: Hero,
  about: About,
  "journey-map": JourneyMap,
  experience: Experience,
  projects: Projects,
  publications: Publications,
  education: Education,
  skills: SkillTree,
  achievements: Achievements,
  "achievement-hall": AchievementHall,
  contact: Contact,
};

export default function FullscreenNavigator() {
  const [active, setActive] = useState<string>("home");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    return () => {
      // Intentionally left blank: normal page scrolling is allowed so section content can scroll.
    };
  }, []);

  const Section = sections[active] ?? Hero;

  return (
    <div className="w-screen h-screen relative overflow-x-hidden">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((prev) => !prev)}
        onSelect={(label) => setActive(labelToKey[label] ?? label.toLowerCase())}
      />
      <ScrollGuard />

      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.28 }}
            className="w-screen h-screen overflow-y-auto overflow-x-hidden"
            style={{ scrollBehavior: "smooth" }}
          >
            <div
              className="w-full min-h-screen"
              style={{ paddingLeft: collapsed ? 90 : 300, paddingRight: 16, scrollBehavior: "smooth" }}
            >
              <Section />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
