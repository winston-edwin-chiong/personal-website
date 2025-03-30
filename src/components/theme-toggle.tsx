"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <FiMoon
        className={`${theme === "dark" ? "hidden" : "block"}`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <FiSun
        className={`${theme === "dark" ? "block" : "hidden"}`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
}
