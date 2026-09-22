"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="
      fixed
      top-6
      right-6
      z-50
      rounded-full
      p-3
      border
      "
    >
      {theme === "dark" ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </button>
  );
}