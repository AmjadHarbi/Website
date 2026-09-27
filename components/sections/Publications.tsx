"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <FadeInSection>
      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-bold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
            Research & Publications
          </h2>

          <p className="mb-10 max-w-2xl text-sm text-gray-400 sm:text-base">
            Research focus: LLM-based Solidity smart contract vulnerability detection using GPT-3.5-Turbo, LLaMA-3 8B, and DeepSeek-R1-Distill-Qwen-14B.
          </p>

          <div className="space-y-8">
            {publications.map((publication) => (
              <div
                key={publication.title}
                className="rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/5 to-transparent p-5 sm:p-8"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="max-w-4xl text-xl font-bold text-white sm:text-2xl">
                    {publication.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm text-purple-300 sm:text-base">
                  {publication.conference}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}