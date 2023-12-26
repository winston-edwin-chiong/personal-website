import { React } from "react";
import Link from "next/link";
import AnimatedWinston from "./components/AnimatedWinston";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-grow justify-center items-center">
        <div className="text-4xl tracking-widest uppercase text-center [word-spacing:10px] px-10 sm:text-5xl">
          <AnimatedWinston />
        </div>
        <div className="flex flex-col items-center mt-8 sm:flex-row children:mb-10">
          <HomeNavButton href={"/about"} label={"ABOUT"} />
          <HomeNavButton href={"/experience"} label={"EXPERIENCE"} />
          <HomeNavButton href={"/blog"} label={"BLOG"} />
          <HomeNavButton href={"/song"} label={"SONG"} />
          <HomeNavButton href={"/cat"} label={"CAT"} />
        </div>
      </div>
    </>
  );
}

function HomeNavButton({ href, label }) {
  return (
    <Link href={href} className="my-1 mx-8">
      <div className="p-1 font-semibold text-sm tracking-widest hover:transition-all hover:ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
        {label}
      </div>
    </Link>
  );
}

