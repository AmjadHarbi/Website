"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { quests } from "@/data/experience";

export default function Achievements() {
  const achievements = quests.map((q) => ({
    title: q.title,
    description: `${q.year ?? ""} — ${q.reward}`,
  }));

  return (
    <FadeInSection>
      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-bold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">Achievements</h2>
          <p className="mb-8 max-w-2xl text-sm text-slate-600 sm:text-base">Milestones and achievements along the journey.</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {achievements.map((a) => (
              <div
                key={a.title}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)]"
              >
                <h3 className="text-xl font-bold text-slate-900">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
