"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { educationEntries } from "@/data/education";

export default function Education() {
  return (
    <FadeInSection>
      <section id="education" className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            Education
          </h2>
          <p className="mb-10 max-w-2xl text-sm text-gray-400 sm:text-base">Academic background</p>

          <div className="space-y-8">
            {educationEntries.map((item) => (
              <div
                key={item.id}
                className="relative rounded-3xl border border-purple-500/20 bg-black/30 p-5 backdrop-blur-md sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-purple-300 sm:text-xs">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{item.degree}</h3>
                    <p className="text-sm text-gray-400 sm:text-base">{item.field}</p>
                  </div>

                  <div className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-medium text-purple-200 sm:text-sm">
                    {item.institution}
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-gray-300 sm:text-base">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
