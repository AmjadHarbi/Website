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
      <section className="py-32 px-10">
        <h2 className="text-6xl font-bold mb-4">Achievements</h2>
        <p className="text-gray-400 mb-8">Milestones and achievements along the journey.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="p-6 rounded-2xl bg-black/30 border border-yellow-500/20"
            >
              <h3 className="font-bold text-xl">{a.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{a.description}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
