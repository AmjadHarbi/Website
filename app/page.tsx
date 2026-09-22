import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import JourneyMap from "@/components/sections/JourneyMap";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Education from "@/components/sections/Education";
import SkillTree from "@/components/sections/SkillTree";
import Contact from "@/components/sections/Contact";
import AchievementHall from "@/components/sections/AchievementHall";
import Achievements from "@/components/sections/Achievements";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b10]">
      <section id="home"><Hero /></section>
      <About />
      <section id="journey-map"><JourneyMap /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="publications"><Publications /></section>
      <section id="education"><Education /></section>
      <section id="skills"><SkillTree /></section>
      <section id="achievements"><Achievements /></section>
      <section id="achievement-hall"><AchievementHall /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
