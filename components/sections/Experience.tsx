"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { quests } from "@/data/experience";
import { BriefcaseBusiness, Sparkles } from "lucide-react";

export default function Experience() {
  return (
    <FadeInSection>
      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-100 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-violet-700">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            Professional Journey
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
            Experience
          </h2>

          <p className="mb-10 max-w-2xl text-sm text-slate-600 sm:text-base">
            Professional roles, contributions, and core technology areas.
          </p>

          <div className="relative space-y-8 before:absolute before:bottom-3 before:left-3 before:top-3 before:w-px before:bg-gradient-to-b before:from-violet-400/0 before:via-violet-400/60 before:to-violet-400/0 sm:before:left-4">
            {quests.map((quest) => (
              <div
                key={quest.level}
                className="relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_22px_48px_rgba(109,40,217,0.08)] sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-violet-700">
                      <Sparkles className="h-3.5 w-3.5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{quest.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 sm:text-base">{quest.company}</p>
                    </div>
                  </div>

                  <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 sm:text-sm">{quest.year}</div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {quest.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">Focus:</span> {quest.reward}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}