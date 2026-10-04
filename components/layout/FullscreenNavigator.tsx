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
  Experience: "experience",
  Projects: "projects",
  Research: "publications",
  Education: "education",
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sidebarOffset = collapsed ? 110 : 320;

  const selectSection = (nextKey: string) => {
    const normalized = labelToKey[nextKey] ?? nextKey.toLowerCase();
    setActive(normalized in sections ? normalized : "home");
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "", `#${normalized}`);
    }
  };

  useEffect(() => {
    const updateViewport = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setCollapsed(true);
      }
    };

    const handleSectionRequest = (event: Event) => {
      const detail = (event as CustomEvent<{ key?: string }>).detail;
      if (detail?.key) {
        selectSection(detail.key);
      }
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    window.addEventListener("portfolio-section-change", handleSectionRequest as EventListener);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("portfolio-section-change", handleSectionRequest as EventListener);
    };
  }, []);

  const Section = sections[active] ?? Hero;

  return (
    <div className="relative isolate h-screen w-screen overflow-x-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/hero.png')" }}
      />
      <Sidebar
        isMobile={isMobile}
        mobileOpen={mobileNavOpen}
        collapsed={collapsed}
        activeKey={active}
        onToggle={() => {
          if (isMobile) {
            setMobileNavOpen((prev) => !prev);
            return;
          }

          setCollapsed((prev) => !prev);
        }}
        onSelect={(label) => {
          selectSection(label);
          if (isMobile) {
            setMobileNavOpen(false);
          }
        }}
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
            className="h-screen w-full overflow-y-auto overflow-x-hidden"
            style={{ scrollBehavior: "smooth" }}
          >
            <div
              className="min-h-screen w-full max-w-full transition-all duration-300"
              style={{
                paddingLeft: isMobile ? 16 : sidebarOffset,
                paddingRight: isMobile ? 16 : 28,
                paddingTop: isMobile ? 76 : 24,
                scrollBehavior: "smooth",
              }}
            >
              <Section />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
