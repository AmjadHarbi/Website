"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import SkillNode from "@/components/ui/SkillNode";
import { skillTrees } from "@/data/skills";

export default function SkillTree() {
  return (
    <FadeInSection>
      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
              Skill Tree
            </h2>

            <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
              Skills unlocked throughout the journey.
            </p>
          </div>

          <div className="space-y-8">
            {skillTrees.map((tree) => (
              <div
                key={tree.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:p-10"
              >
                <h3 className="mb-10 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {tree.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
                  {tree.skills.map((skill) => (
                    <SkillNode
                      key={skill}
                      name={skill}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}