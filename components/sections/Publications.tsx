"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <FadeInSection>
      <section className="py-32 px-10">

        <h2 className="text-6xl font-bold mb-4">
          Publications
        </h2>

        <p className="text-gray-400 mb-16">
          Research published during the Master's program.
        </p>

        <div className="space-y-10">

          {publications.map((publication) => (
            <div
              key={publication.title}
              className="
            rounded-3xl
            border
            border-yellow-500/20
            bg-gradient-to-r
            from-yellow-500/5
            to-transparent
            p-10
            "
            >
              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold max-w-4xl">
                  {publication.title}
                </h3>

                <span
                  className={`
                    px-4 py-2 rounded-full
                    ${
                      publication.status === "Published"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }
                  `}
                >
                  {publication.status}
                </span>

              </div>

              <p className="text-purple-400 mt-4">
                {publication.conference}
              </p>

            </div>
          ))}

        </div>
      </section>
    </FadeInSection>
  );
}