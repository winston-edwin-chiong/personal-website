import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const links = [
    { href: "/", label: "Me" },
    { href: "/projects", label: "Projects" },
    { href: "/song", label: "Song" },
    { href: "/story", label: "Story" },
  ];
  const lastLinkIdx = links.length - 1;

  return (
    <header className="flex h-max w-full items-center justify-between">
      <div className="flex gap-4 lowercase">
        {links.map((link, i) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${i == 0 || i == lastLinkIdx ? "" : "mx-5"} decoration-lime-500 decoration-2 underline-offset-4 transition-colors duration-200 ease-in-out hover:underline`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </header>
  );
}
