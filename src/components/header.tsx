"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const links = [
    { href: "/", label: "Me" },
    { href: "/projects", label: "Projects" },
    { href: "/song", label: "Song" },
    { href: "/story", label: "Story" },
    { href: "/writings", label: "Writings" },
  ];
  const lastLinkIdx = links.length - 1;
  const pathName = usePathname();

  return (
    <header className="flex h-max w-full items-center justify-between">
      <div className="flex gap-2 lowercase md:gap-4">
        {links.map((link, i) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              `${i == 0 ? "mr-2.5 lg:mr-5" : i == lastLinkIdx ? "ml-2.5 lg:ml-5" : "mx-2.5 lg:mx-5"} text-xs transition-colors duration-200 ease-in-out hover:text-slate-500 sm:text-sm md:text-base`,
              pathName === link.href ? "text-slate-500" : "",
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex h-full items-center justify-center">
        <ThemeToggle />
      </div>
    </header>
  );
}
