"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiCloud } from "react-icons/fi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div>
        <FiCloud className="text-gray-500" />
      </div>
    );
  }

  return (
    <div>
      {theme === "dark" ? (
        <FiSun
          className={
            "transition-colors duration-200 ease-in-out hover:text-yellow-500"
          }
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      ) : (
        <FiMoon
          className={
            "transition-colors duration-200 ease-in-out hover:text-indigo-500"
          }
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </div>
  );
}
