import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <>
      <div className="flex space-x-4 lowercase">
        <Link href="/">Me</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Song</Link>
        <Link href="/">Story</Link>
      </div>
      <ThemeToggle />
    </>
  );
}
