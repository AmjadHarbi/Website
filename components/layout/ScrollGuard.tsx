"use client";

import { useEffect } from "react";

export default function ScrollGuard() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      // only care about link clicks
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // find nearest anchor
      const anchor = (e.composedPath ? e.composedPath() : [])
        .filter((n) => (n as Element).nodeType === 1)
        .map((n) => n as Element)
        .find((el) => el.tagName?.toLowerCase() === "a") as HTMLAnchorElement | undefined;

      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      // only block fragment links
      if (!href.startsWith("#") && !href.includes(window.location.pathname + "#")) return;

      // allow if click originated from inside the sidebar
      const path = e.composedPath ? e.composedPath() : [];
      const fromSidebar = path.some((n) => (n as Element).id === "app-sidebar");
      if (fromSidebar) return; // allow

      // otherwise block default fragment navigation
      e.preventDefault();
      e.stopPropagation();
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
