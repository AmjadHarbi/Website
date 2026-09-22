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
      <section id="projects" className="min-h-screen bg-[#120d1f] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(116,78,183,0.22),_rgba(18,13,31,0.96)_42%)] px-5 py-8 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              {/* <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-[#d3bee8]">Selected Work</p> */}
              <h2 className="mt-4 text-5xl font-bold tracking-[-0.05em] text-white">Projects</h2>
            </div>

          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#d4c9ec]">
            Personal builds, blockchain work at Taibah Valley, and product work across client engagements at Elm.
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
                      ? "border-purple-300/40 bg-gradient-to-r from-[#d292ff] to-[#cba3ff] text-[#1c1029] shadow-[0_0_25px_rgba(195,136,255,0.45)]"
                      : "border-white/15 bg-white/5 text-[#f3eaff] hover:bg-white/10",
                  ].join(" ")}
                >
                  <span className="font-medium">{filter.label}</span>
                  <span
                    className={[
                      "inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-semibold",
                      isActive ? "bg-[#1d1328] text-white" : "bg-white/10 text-[#efe6ff]",
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
                className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#1b1430]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-200 hover:border-purple-300/20 hover:bg-[#20163a]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg shadow-inner shadow-white/5">
                      {project.category === "Personal" ? "✦" : project.category === "Taibah Valley" ? "◈" : "▣"}
                    </div>
                  </div>

                  {project.badge && (
                    <span className="rounded-full border border-emerald-300/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                      {project.badge}
                    </span>
                  )}
                </div>

                <div className="mt-8 text-[10px] font-medium uppercase tracking-[0.28em] text-[#d4bae6]">
                  {project.category}
                </div>

                <h3 className="mt-4 text-[22px] font-semibold leading-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#d8cde6]">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#efe6ff]"
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
