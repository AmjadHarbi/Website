"use client";

import Counter from "../ui/Counter";
import FadeInSection from "@/components/ui/FadeInSection";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type HeroData = {
  name?: string;
  title?: string;
  subtitle?: string;
  yearsExperience?: number;
};

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [hero, setHero] = useState<HeroData>({
    name: "AMJAD",
    title: "Software Engineer",
    subtitle: "AI Researcher",
    yearsExperience: 0,
  });

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    fetch("http://localhost:8080/api/hero", {
      signal: controller.signal,
      cache: "no-store",
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Backend status: ${response.status}`);
        }

        const data = (await response.json()) as HeroData;
        setHero({
          name: data.name ?? "AMJAD",
          title: data.title ?? "Software Engineer",
          subtitle: data.subtitle ?? "AI Researcher",
          yearsExperience: Number(data.yearsExperience ?? 0),
        });
      })
      .catch((error) => {
        console.warn("Hero backend unavailable:", error);
      })
      .finally(() => {
        setIsLoading(false);
        clearTimeout(timeoutId);
      });

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  const nameText = (hero.name ?? "AMJAD").toUpperCase();

  return (
    <FadeInSection>
      <section
        onMouseMove={(e) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 30;
          const y = (e.clientY / window.innerHeight - 0.5) * 30;

          setPosition({ x, y });
        }}
        className="relative min-h-screen overflow-hidden"
      >
        <motion.div
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 40 }}
          className="fixed inset-0 bg-cover bg-center scale-110 -z-10"
          style={{ backgroundImage: "url('/img/hero.png')" }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/img/stars.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex: -3,
            opacity: 0.2,
          }}
        />

        {/* removed colored gradient overlay to keep hero background transparent */}

        <motion.div
          animate={{ x: position.x * 8, y: position.y * 8 }}
          transition={{ type: "spring", stiffness: 30 }}
          className="absolute top-40 left-40 w-[500px] h-[500px] rounded-full blur-[140px] bg-pink-400/20"
        />

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="max-w-4xl px-12">
            <p className="mb-4 text-secondary tracking-widest uppercase">
              Welcome, Everyone 👋
            </p>

            <h1
              className="text-5xl md:text-8xl font-black leading-none"
              style={{
                background: "linear-gradient(90deg,#ffffff,#f9a8d4,#c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {nameText.split(" ").map((part, index) => (
                <span key={`${part}-${index}`} className="block">
                  {part}
                </span>
              ))}
            </h1>

            <div className="mt-5 flex gap-2 flex-wrap">
              <span className="rounded-full border border-pink-400/30 px-4 py-2 text-sm">
                {hero.title}
              </span>

              <span className="rounded-full border border-indigo-400/30 px-4 py-2 text-sm">
                {hero.subtitle}
              </span>

              <span className="rounded-full border border-yellow-300/30 px-4 py-2 text-sm">
                Frontend Developer
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-lg text-gray-300 leading-relaxed">
              You've entered the world of a software engineer driven by curiosity,
              research, and innovation. Explore completed quests, unlocked skills,
              and achievements earned throughout a journey spanning AI, Blockchain,
              and Frontend Development.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 border border-pink-400/30 hover:bg-pink-200 hover:scale-105 transition">
                ▶ Start Journey
              </button>

              <a
                href="/amjad.pdf"
                download="amjad.pdf"
                target="_blank"
                rel="noreferrer"
                className ="px-8 py-4 rounded-xl border border-yellow-300/40 hover:bg-yellow-200 hover:text-black transition inline-flex items-center justify-center"
              >
                Download CV
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 dark:bg-white/5 backdrop-blur-xl p-5 rounded-xl border border-pink-300/10">
                <h3 className="text-4xl font-bold">
                  {isLoading ? (
                    "..."
                  ) : (
                    <>
                      <Counter end={4} />
                      <span>+</span>
                    </>
                  )}
                </h3>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>

              <div className="bg-white/5 dark:bg-white/5 backdrop-blur-xl p-5 rounded-xl border border-pink-300/10">
                <h3 className="text-4xl font-bold">
                  <Counter end={2} />
                </h3>
                <p className="text-sm text-gray-400">Degrees Earned</p>
              </div>

              <div className="bg-white/5 dark:bg-white/5 backdrop-blur-xl p-5 rounded-xl border border-pink-300/10">
                <h3 className="text-3xl font-bold">
                  <Counter end={3} />
                </h3>
                <p className="text-sm text-gray-400">Publications</p>
              </div>

              {/* <div className="bg-white/5 dark:bg-white/5 backdrop-blur-xl p-5 rounded-xl border border-pink-300/10">
                <h3 className="text-3xl font-bold">
                  <Counter end={20} />
                </h3>
                <p className="text-sm text-gray-400">Projects</p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}