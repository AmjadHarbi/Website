"use client";

import FadeInSection from "@/components/ui/FadeInSection";

export default function About() {
	return (
		<FadeInSection>
			<section id="about" className="px-4 py-20 sm:px-6 lg:px-10">
				<div className="mx-auto max-w-5xl rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)] sm:p-8">
					<h2 className="mb-4 text-3xl font-bold tracking-[-0.05em] text-slate-900 sm:text-4xl">About</h2>
					<p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
						Short about section.
					</p>
				</div>
			</section>
		</FadeInSection>
	);
}
