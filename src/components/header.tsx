import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="flex h-max w-full justify-between">
      <div className="flex space-x-4 lowercase">
        <Link href="/">Me</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/song">Song</Link>
        <Link href="/story">Story</Link>
      </div>
      <ThemeToggle />
    </header>
  );
}
