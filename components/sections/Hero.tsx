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

const HERO_API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "");

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
    if (!HERO_API_BASE) {
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    fetch(`${HERO_API_BASE}/api/hero`, {
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
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }
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

  const changeSection = (key: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("portfolio-section-change", {
          detail: { key },
        }),
      );
      window.history.replaceState({}, "", `#${key}`);
    }
  };

  return (
    <FadeInSection>
      <section
        onMouseMove={(e) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 24;
          const y = (e.clientY / window.innerHeight - 0.5) * 24;

          setPosition({ x, y });
        }}
        className="relative isolate min-h-screen overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "url('/img/stars.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex: 1,
            opacity: 0.18,
          }}
        />

        <motion.div
          animate={{ x: position.x * 8, y: position.y * 8 }}
          transition={{ type: "spring", stiffness: 30 }}
          className="absolute left-10 top-20 h-[280px] w-[280px] rounded-full bg-pink-400/20 blur-[120px] md:left-40 md:top-24 md:h-[500px] md:w-[500px]"
        />

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="w-full max-w-4xl px-4 py-20 sm:px-6 md:px-10 lg:px-12">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-violet-200/80 sm:text-sm">
              Amjad Almagthawi
            </p>

            <h1
              className="text-3xl font-black leading-none tracking-[-0.06em] sm:text-5xl md:text-7xl lg:text-8xl"
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

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-3 py-2 text-xs font-medium text-pink-100 sm:text-sm">
                Software Engineer
              </span>

              <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-2 text-xs font-medium text-indigo-100 sm:text-sm">
                Frontend Developer
              </span>

              <span className="rounded-full border border-yellow-300/30 bg-yellow-500/10 px-3 py-2 text-xs font-medium text-yellow-100 sm:text-sm">
                AI Researcher
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
              I build thoughtful digital experiences blending frontend engineering,
              research, and product-focused problem solving.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                onClick={(event) => {
                  event.preventDefault();
                  changeSection("projects");
                }}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 sm:px-8"
              >
                View Projects
              </a>

              <a
                href="/Amjad.pdf"
                download="Amjad.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-yellow-300/40 px-6 py-3 text-sm font-semibold text-yellow-100 transition hover:bg-yellow-200 hover:text-black sm:px-8"
              >
                Download CV
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-xl border border-pink-300/10 bg-white/5 p-4 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white">
                  {isLoading ? "..." : <Counter end={2} />}
                </h3>
                <p className="mt-2 text-sm text-gray-400">Degrees</p>
              </div>

              <div className="rounded-xl border border-pink-300/10 bg-white/5 p-4 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white">
                  {isLoading ? "..." : <Counter end={3} />}
                </h3>
                <p className="mt-2 text-sm text-gray-400">Focus Areas</p>
              </div>

             
            </div>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}