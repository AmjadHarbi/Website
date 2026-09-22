"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { locations } from "@/data/worldMap";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function JourneyMap() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [activeId, setActiveId] = useState<number | null>(null);

    const getCardVisibility = (id: number) => hoveredId === id || activeId === id;

    return (
        <FadeInSection>
            <section className="relative py-12 px-6">

                <div className="mb-20">
                    <h2 className="text-6xl font-bold">Journey Map</h2>

                    <p className="text-gray-400 mt-4">
                        Explore the locations that shaped my journey.
                    </p>
                </div>

                <div className="relative min-h-[580px] overflow-hidden rounded-[20px] border border-pink-400/8 bg-gradient-to-br from-[#171727] via-[#131322] to-[#0f1023] shadow-[0_0_36px_rgba(192,132,252,.05)]">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(192,132,252,.12),transparent_35%)] z-0" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(249,168,212,.08),transparent_35%)] z-0" />

                    <div className="absolute right-6 top-6 flex gap-3 items-center z-40">
                        <div className="flex gap-2 items-center bg-[#0f1023]/60 px-3 py-2 rounded-full">
                            <span className="w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-emerald-500/30" />
                            <span className="text-sm text-gray-300">Completed</span>
                        </div>
                        <div className="flex gap-2 items-center bg-[#0f1023]/60 px-3 py-2 rounded-full">
                            <span className="w-3 h-3 rounded-full bg-yellow-400 ring-2 ring-yellow-500/30" />
                            <span className="text-sm text-gray-300">Current</span>
                        </div>
                    </div>

                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <span className="absolute left-[18%] top-[38%] h-1.5 w-1.5 rounded-full bg-white/20 blur-[1px]" />
                        <span className="absolute left-[33%] top-[50%] h-1.5 w-1.5 rounded-full bg-fuchsia-300/30 blur-[1px]" />
                        <span className="absolute left-[62%] top-[28%] h-1.5 w-1.5 rounded-full bg-sky-300/20 blur-[1px]" />
                        <span className="absolute left-[80%] top-[18%] h-1.5 w-1.5 rounded-full bg-pink-300/20 blur-[1px]" />
                    </div>

                    <svg className="absolute inset-0 top-4 w-full h-full z-0" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="pathGrad" x1="0%" x2="100%">
                                <stop offset="0%" stopColor="#60a5fa" />
                                <stop offset="50%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                        </defs>
                        <motion.path
                            d="M60 520 C220 420, 380 350, 520 300 S780 200, 1040 120"
                            stroke="url(#pathGrad)"
                            strokeWidth="3.5"
                            fill="none"
                            strokeLinecap="round"
                            style={{ filter: 'drop-shadow(0 0 12px rgba(139,92,246,0.22))' }}
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 2 }}
                        />
                    </svg>

                    {locations.map((location) => {
                        const isVisible = getCardVisibility(location.id);
                        const isActive = activeId === location.id;
                        const isHovered = hoveredId === location.id;
                        const cardSide = Number.parseFloat(location.x) >= 60 ? 'right-[calc(100%+16px)] left-auto' : 'left-[calc(100%+16px)]';

                        return (
                            <div
                                key={location.id}
                                className="absolute z-20"
                                style={{
                                    left: location.x,
                                    top: location.y,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <div
                                    className="relative flex flex-col items-center"
                                    onMouseEnter={() => setHoveredId(location.id)}
                                    onMouseLeave={() => {
                                        if (activeId === null) {
                                            setHoveredId(null);
                                        }
                                    }}
                                    onFocus={() => setHoveredId(location.id)}
                                    onBlur={() => {
                                        if (activeId === null) {
                                            setHoveredId(null);
                                        }
                                    }}
                                    onClick={() => setActiveId((current) => current === location.id ? null : location.id)}
                                    tabIndex={0}
                                >
                                    <div className="relative">
                                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-medium uppercase tracking-[0.32em] text-slate-400/75">
                                            {String(location.id).padStart(2, '0')}
                                        </span>

                                        <motion.div
                                            className={`relative flex h-[68px] w-[68px] items-center justify-center rounded-full border cursor-pointer z-20 backdrop-blur-sm ${location.status === 'current' ? 'border-yellow-300/40 bg-gradient-to-br from-yellow-200/10 to-amber-400/10' : location.status === 'completed' ? 'border-emerald-300/20 bg-gradient-to-br from-pink-400/8 to-purple-500/14' : 'border-pink-300/12 bg-gradient-to-br from-pink-400/8 to-purple-500/14'}`}
                                            animate={{
                                                scale: isActive ? 1.12 : isHovered ? 1.08 : 1,
                                                boxShadow: isActive
                                                    ? location.status === 'current'
                                                        ? '0 0 24px rgba(250, 204, 21, 0.28), 0 0 0 1px rgba(250, 204, 21, 0.25)'
                                                        : '0 0 24px rgba(192,132,252,0.28), 0 0 0 1px rgba(192,132,252,0.18)'
                                                    : isHovered
                                                        ? location.status === 'current'
                                                            ? '0 0 18px rgba(250, 204, 21, 0.2)'
                                                            : '0 0 18px rgba(192,132,252,0.16)'
                                                        : '0 0 0 rgba(0,0,0,0)',
                                            }}
                                            transition={{ type: 'spring', stiffness: 180, damping: 16 }}
                                        >
                                            <div className={`absolute inset-0 rounded-full ${location.status === 'completed' ? 'ring-2 ring-emerald-400/34' : location.status === 'current' ? 'ring-2 ring-yellow-400/30' : 'ring-2 ring-gray-600/16'}`} />
                                            <div className="absolute inset-[7px] rounded-full border border-white/10 bg-[#0d111d]/70" />
                                            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_45%)]" />
                                            <span className="relative z-10 text-[1.45rem] leading-none">{location.icon}</span>

                                            <div className="absolute -right-1 -bottom-1 z-30 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/6 bg-white/8">
                                                <span className="text-[8px]">
                                                    {location.status === 'completed' ? '✅' : location.status === 'current' ? '⭐' : '🔒'}
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={false}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: isActive ? 1.02 : isHovered ? 1.01 : 1,
                                        }}
                                        transition={{ duration: 0.2, ease: 'easeOut' }}
                                        className={`mt-3 w-36 rounded-xl border px-2.5 py-2 backdrop-blur-sm transition-all duration-200 ${
                                            isActive
                                                ? 'border-fuchsia-400/35 bg-[#111320]/88 shadow-[0_0_24px_rgba(192,132,252,0.18)]'
                                                : isHovered
                                                    ? 'border-purple-400/20 bg-[#101722]/80 shadow-[0_0_16px_rgba(192,132,252,0.12)]'
                                                    : 'border-white/5 bg-[#0f1023]/50 shadow-[0_0_0_rgba(0,0,0,0)]'
                                        }`}
                                    >
                                        <div className="mb-1 flex items-center justify-between gap-2">
                                            <span className="text-[8px] uppercase tracking-[0.22em] text-slate-400">
                                                {location.year}
                                            </span>
                                            {location.status === 'current' && (
                                                <span className="text-[7px] uppercase tracking-[0.2em] text-yellow-300/90">
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        <h3 style={{ fontFamily: "Space Grotesk, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }} className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${isActive || isHovered ? 'text-slate-50' : 'text-slate-300'} transition-colors duration-200`}>
                                            {location.title}
                                        </h3>
                                        <p className={`mt-1 text-[9px] ${isActive || isHovered ? 'text-slate-300' : 'text-slate-500'}`}>
                                            {location.subtitle}
                                        </p>
                                    </motion.div>

                                    <AnimatePresence initial={false}>
                                        {(isActive || isHovered) && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                                animate={{ opacity: 1, y: 0, scale: isActive ? 1.02 : 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                                transition={{ duration: 0.18, ease: 'easeOut' }}
                                                className={`pointer-events-none absolute ${cardSide} top-1/2 -translate-y-1/2 z-30 w-44 rounded-2xl border bg-[#0b0b14]/78 px-3 py-2 shadow-[0_0_18px_rgba(192,132,252,0.12)] backdrop-blur-sm ${
                                                    isActive
                                                        ? 'border-fuchsia-400/35 bg-[#111320]/88 shadow-[0_0_24px_rgba(192,132,252,0.18)]'
                                                        : 'border-purple-400/20 bg-[#0d1320]/82'
                                                }`}
                                            >
                                                <div className="mb-1 flex items-center justify-between gap-2">
                                                    <span className="text-[8px] uppercase tracking-[0.2em] text-slate-400">
                                                        {location.year}
                                                    </span>
                                                    {location.status === 'current' && (
                                                        <span className="text-[7px] uppercase tracking-[0.18em] text-yellow-300">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 style={{ fontFamily: "Space Grotesk, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }} className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-50">{location.title}</h3>
                                                <p className="mt-1 text-[9px] text-slate-300">{location.subtitle}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        );
                    })}

                    <div className="absolute bottom-6 right-6 z-40 text-[10px] uppercase tracking-[0.28em] text-gray-400">
                        5 milestones · 2022 — Present
                    </div>

                </div>
            </section>
        </FadeInSection>
    );
}