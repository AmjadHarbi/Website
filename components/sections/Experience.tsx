"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { quests } from "@/data/experience";

export default function Experience() {
  return (
    <FadeInSection>
      <section className="py-32 px-10">

        <h2 className="text-5xl font-bold mb-4">Experience</h2>

        <p className="text-gray-400 mb-16">Major experiences throughout the journey</p>

        <div className="space-y-8">
          {quests.map((quest) => (
            <div
              key={quest.level}
              className="relative rounded-3xl border border-white/10 bg-[#0d0b16]/70 p-8 shadow-[0_0_35px_rgba(124,58,237,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-purple-400/50 bg-purple-500/10">
                    <span className="h-2.5 w-2.5 rounded-full bg-purple-300" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">{quest.title}</h3>
                    <p className="mt-1 text-base text-[#d8c7f7]">{quest.company}</p>
                  </div>
                </div>

                <div className="text-sm font-medium text-[#f3d77a]">{quest.year}</div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {quest.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-sm text-purple-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 text-sm text-[#e9d9ff]">
                <span className="font-semibold text-white">Focus:</span> {quest.reward}
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}