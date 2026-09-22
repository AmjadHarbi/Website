"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { educationEntries } from "@/data/education";

export default function Education() {
  return (
    <FadeInSection>
      <section id="education" className="py-32 px-10">
        <h2 className="text-5xl font-bold mb-4">Education</h2>
        <p className="text-gray-400 mb-16">Academic background</p>

        <div className="space-y-8">
          {educationEntries.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl border border-purple-500/20 bg-black/30 backdrop-blur-md p-8"
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-purple-300">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-bold">{item.degree}</h3>
                  <p className="text-gray-400">{item.field}</p>
                </div>

                <div className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-200">
                  {item.institution}
                </div>
              </div>

              <p className="mt-6 text-gray-300 leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}
