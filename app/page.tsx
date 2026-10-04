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
      <section className="bg-[#f5f7fb]"><About /></section>
      <section id="journey-map" className="bg-[#f5f7fb]"><JourneyMap /></section>
      <section id="experience" className="bg-[#f5f7fb]"><Experience /></section>
      <section id="projects" className="bg-[#f5f7fb]"><Projects /></section>
      <section id="publications" className="bg-[#f5f7fb]"><Publications /></section>
      <section id="education" className="bg-[#f5f7fb]"><Education /></section>
      <section id="skills" className="bg-[#f5f7fb]"><SkillTree /></section>
      <section id="achievements" className="bg-[#f5f7fb]"><Achievements /></section>
      <section id="achievement-hall" className="bg-[#f5f7fb]"><AchievementHall /></section>
      <section id="contact" className="bg-[#f5f7fb]"><Contact /></section>
    </main>
  );
}
