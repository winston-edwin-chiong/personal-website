import { React } from "react";
import Link from "next/link";
import AnimateWinston from "./components/AnimateWinston";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-grow justify-center items-center">
        <div className="text-4xl tracking-widest uppercase text-center [word-spacing:10px] px-10 sm:text-5xl">
          <AnimateWinston text={"Hi I'm Winston!"} />
        </div>
        <div className="flex flex-col items-center mt-6 sm:flex-row sm:space-x-8 children:pb-6">
          <HomeNavButton href={"/about"} label={"About"} />
          <HomeNavButton href={"/experience"} label={"Experience"} />
          <HomeNavButton href={"/blog"} label={"Blog"} />
          <HomeNavButton href={"/song"} label={"Song"} />
          <HomeNavButton href={"/cat"} label={"Cat"} />
        </div>
      </div>
    </>
  );
}

function HomeNavButton({ href, label }) {
  return (
    <Link href={href}>
      <button className="btn btn-primary tracking-widest hover:bg-secondary-focus/[.1] hover:transition-all hover:ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        {label}
      </button>
    </Link>
  );
}

