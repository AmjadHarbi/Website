"use client";

import {
  ArrowDownToLine,
  BookOpenText,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  Globe,
  GraduationCap,
  House,
  Mail,
  UserRound,
  FileText,
} from "lucide-react";

const navGroups: Array<{
  title: string;
  items: Array<{
    label: string;
    icon: typeof House;
    active?: boolean;
    count?: number;
  }>;
}> = [
  {
    title: "OVERVIEW",
    items: [
      { label: "Home", icon: House },
    ],
  },
  {
    title: "WORK",
    items: [
      { label: "Experience", icon: BriefcaseBusiness },
      { label: "Projects", icon: FolderKanban, count: 12 },
      { label: "Publications", icon: BookOpenText, count: 3 },
    ],
  },
  {
    title: "BACKGROUND",
    items: [
      { label: "Education", icon: GraduationCap },
      { label: "Contact", icon: Mail },
    ],
  },
];

export default function Sidebar({
  onSelect,
  collapsed,
  onToggle,
}: {
  onSelect?: (label: string) => void;
  collapsed?: boolean;
  onToggle?: () => void;
}) {
  const isCollapsed = collapsed ?? false;

  return (
    <aside
      id="app-sidebar"
      className={[
        "relative fixed left-5 top-5 z-50 h-[88vh] overflow-hidden rounded-[32px] border border-[#6d4ca5]/40 bg-[#231b1b] text-white shadow-[0_0_30px_rgba(255,120,255,0.12)] transition-all duration-300",
        isCollapsed ? "w-[64px] p-2" : "w-[280px] px-3 py-3",
      ].join(" ")}
    >
      <div className={isCollapsed ? "relative flex justify-center pb-4" : "flex items-center justify-between pb-4"}>
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Collapse sidebar"
              onClick={onToggle}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff8fd8] via-[#d462ff] to-[#9d7bff] text-3xl font-bold text-white shadow-lg shadow-pink-500/25 transition hover:brightness-110"
            >
              A
            </button>

            <div className="leading-tight">
              <div className="text-[16px] font-medium tracking-tight text-white">Amjad</div>
              <div className="text-[11px] text-[#e6d9ff]">Software Engineer</div>
            </div>
          </div>
        )}

        {isCollapsed && (
          <button
            type="button"
            aria-label="Expand sidebar"
            onClick={onToggle}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff8fd8] via-[#d462ff] to-[#9d7bff] text-3xl font-bold text-white shadow-lg shadow-pink-500/25 transition hover:brightness-110"
          >
            A
          </button>
        )}

        {!isCollapsed && (
          <button
            type="button"
            aria-label="Collapse sidebar"
            onClick={onToggle}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
          >
            <ChevronLeft size={18} />
          </button>
        )}
      </div>

      {!isCollapsed && (
        <nav className="space-y-5 pb-4">
          {navGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c9bddf]">
                {group.title}
              </div>

              <div className="space-y-2">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.active;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        if (onSelect) {
                          onSelect(item.label);
                          return;
                        }

                        const keyMap: Record<string, string> = {
                          Home: "home",
                          About: "about",
                          Experience: "experience",
                          Projects: "projects",
                          Publications: "publications",
                          Education: "education",
                          Skills: "skills",
                          Achievements: "achievements",
                          Contact: "contact",
                        };

                        const key = keyMap[item.label] ?? item.label.toLowerCase();
                        const el = document.getElementById(key);
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className={[
                        "flex w-full items-center rounded-2xl px-2.5 py-2.5 text-left transition",
                        isActive
                          ? "bg-gradient-to-r from-[#5b2f7a] to-[#3b2b5e] text-white shadow-inner shadow-[#8d5ae0]/20"
                          : "text-[#f2ebff] hover:bg-white/5",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={22} className={isActive ? "text-white" : "text-[#f0e5ff] opacity-80"} />
                        <span className="text-[15px] font-medium leading-none tracking-[-0.04em]">{item.label}</span>
                      </div>

                     
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      )}

      {isCollapsed ? (
        <nav className="flex flex-col items-center gap-3 pt-2">
          {navGroups.flatMap((group) => group.items).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                type="button"
                title={item.label}
                onClick={() => onSelect?.(item.label)}
                className={[
                  "flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10",
                  item.active ? "bg-gradient-to-r from-[#5b2f7a] to-[#3b2b5e] text-white" : "",
                ].join(" ")}
              >
                <Icon size={20} />
              </button>
            );
          })}
        </nav>
      ) : (
        <div className="space-y-4 border-t border-white/10 pt-4">
          <div className="flex items-center gap-3 text-[13px] text-white/90">
            <span className="inline-block h-3 w-3 rounded-full bg-[#41d69a] shadow-[0_0_12px_rgba(65,214,154,0.9)]" />
            <span>Open to opportunities</span>
          </div>

          <a
            href="/Amjad.pdf"
            download="Amjad.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#c184ff] to-[#f49ad8] px-4 py-3 text-[15px] font-semibold text-white shadow-[0_10px_25px_rgba(255,120,210,0.3)]"
          >
            <ArrowDownToLine size={22} />
            <span>Download CV</span>
          </a>

          <div className="flex items-center justify-center gap-3 pt-2">
            <a
              href="https://github.com/AmjadHarbi"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#1d1131] text-white hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.26 5.67.41.35.78 1.04.78 2.1v3.12c0 .31.21.68.79.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/amjadalmaghthawi/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#1d1131] text-white hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
                <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.5 9.8h2.88v9.7H5.5V9.8Zm4.82 0h2.76v1.33h.04c.38-.73 1.32-1.5 2.72-1.5 2.91 0 3.45 1.92 3.45 4.4V19.5h-2.88v-18c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.5v18h-2.88V9.8Z" />
              </svg>
            </a>
           
           
          </div>
        </div>
      )}
    </aside>
  );
}