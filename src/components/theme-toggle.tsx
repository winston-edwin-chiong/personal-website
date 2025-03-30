"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <FiMoon
        className={cn(
          `${theme === "dark" ? "hidden" : "block"}`,
          "transition-colors duration-200 ease-in-out hover:text-slate-500",
        )}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <FiSun
        className={cn(
          `${theme === "dark" ? "block" : "hidden"}`,
          "transition-colors duration-200 ease-in-out hover:text-yellow-500",
        )}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
}
