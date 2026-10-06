"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { publications } from "@/data/publications";
import { Microscope } from "lucide-react";
import Link from "next/link";

export default function Publications() {
  return (
    <FadeInSection>
      <section className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-amber-700">
            <Microscope className="h-3.5 w-3.5" />
            Research Track
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-[-0.05em] text-slate-900 sm:text-4xl lg:text-5xl">
            Research & Publications
          </h2>

          <p className="mb-10 max-w-2xl text-sm text-slate-100 sm:text-base">
            Research focus: LLM-based Solidity smart contract vulnerability detection using GPT-3.5-Turbo, LLaMA-3 8B, and DeepSeek-R1-Distill-Qwen-14B.
          </p>

          <div className="space-y-8">
            {publications.map((publication) => (
              <div
                key={publication.title}
                className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-[0_22px_50px_rgba(234,179,8,0.08)] sm:p-8"
              >
                <div className="flex flex-col gap-3">
                  <h3 className="max-w-2xl text-xl font-medium text-slate-700 sm:text-xl">
                    <Link
                      href={publication.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-amber-100 underline-offset-5 transition-colors hover:text-amber-700"
                    >
                      {publication.title}
                    </Link>
                  </h3>
                </div>

                <p className="mt-5 inline-flex w-fit rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 sm:text-sm">
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