"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import SkillNode from "@/components/ui/SkillNode";
import { skillTrees } from "@/data/skills";

export default function SkillTree() {
  return (
    <FadeInSection>
      <section className="py-32 px-10">

        <div className="mb-20">
          <h2 className="text-6xl font-bold">
            Skill Tree
          </h2>

          <p className="text-gray-400 mt-4">
            Skills unlocked throughout the journey.
          </p>
        </div>

        <div className="space-y-24">

          {skillTrees.map((tree) => (
            <div
              key={tree.title}
              className="
            rounded-3xl
            border
            border-purple-500/20
            p-10
            bg-black/30
            backdrop-blur-md
            "
            >
              <h3 className="text-3xl font-bold mb-12">
                {tree.title}
              </h3>

              <div
                className="
              flex
              flex-wrap
              justify-center
              gap-12
              "
              >
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
      </section>
    </FadeInSection>
  );
}