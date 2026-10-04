"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { educationEntries } from "@/data/education";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <FadeInSection>
      <section id="education" className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-indigo-700">
            <GraduationCap className="h-3.5 w-3.5" />
            Academic Profile
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
            Education
          </h2>
          <p className="mb-10 max-w-2xl text-sm text-slate-600 sm:text-base">Academic background</p>

          <div className="relative space-y-8 before:hidden before:md:block before:absolute before:left-[18px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-violet-400/80 before:via-indigo-300/60 before:to-transparent">
            {educationEntries.map((item) => (
              <div key={item.id} className="relative md:pl-12">
                <div className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border-4 border-[#f5f7fb] bg-gradient-to-br from-violet-500 to-indigo-500 shadow-[0_0_20px_rgba(109,40,217,0.25)] md:block" />

                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-[0_22px_50px_rgba(109,40,217,0.08)] sm:p-8">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-100 blur-3xl" />

                  <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-violet-700">
                        {item.period}
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">{item.degree}</h3>
                      <p className="mt-1 text-sm text-slate-600 sm:text-base">{item.field}</p>
                    </div>

                    <div className="max-w-[220px] rounded-2xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700 md:text-right">
                      {item.institution}
                    </div>
                  </div>

                  <div className="relative mt-6 grid gap-4 md:grid-cols-[1.5fr_0.8fr] md:items-start">
                    <p className="text-sm leading-relaxed text-slate-700 sm:text-base">{item.details}</p>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Academic focus</p>
                      <p className="mt-2 text-sm font-medium text-slate-900">{item.field}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
