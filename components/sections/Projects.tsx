"use client";

import { useState } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import { projectFilters, projects } from "@/data/projects";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter((project) => project.category === activeTab);

  return (
    <FadeInSection>
      <section id="projects" className="px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] rounded-[30px] border border-slate-200 bg-white px-4 py-8 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="mt-2 text-3xl font-bold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">Projects</h2>
            </div>

          </div>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Personal builds, professional delivery work, and research focused on LLM-based Solidity vulnerability detection.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {projectFilters.map((filter) => {
              const isActive = filter.value === activeTab;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveTab(filter.value)}
                  className={[
                    "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition cursor-pointer",
                    isActive
                      ? "border-violet-300 bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_8px_24px_rgba(124,58,237,0.2)]"
                      : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100",
                  ].join(" ")}
                >
                  <span className="font-medium">{filter.label}</span>
                  <span
                    className={[
                      "inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-semibold",
                      isActive ? "bg-white/15 text-white" : "bg-slate-200 text-slate-700",
                    ].join(" ")}
                  >
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-slate-50 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-white sm:p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg shadow-sm">
                      {project.category === "Personal" ? "✦" : project.category === "Research" ? "◉" : "▣"}
                    </div>
                  </div>

                  {project.badge && (
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className="mt-8 text-[10px] font-medium uppercase tracking-[0.28em] text-violet-700">
                  {project.category}
                </div>

                <h3 className="mt-4 text-xl font-semibold leading-tight text-slate-900 sm:text-[22px]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
