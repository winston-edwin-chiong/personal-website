"use client";

import Image from "next/image";
import me from "../assets/images/me.jpg";
import me2 from "../assets/images/me2.jpg";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="grid-rows-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-0">
      <div className="order-2 lg:order-1">
        <div className="font-light">
          {
            "Hello stranger! I'm Winston! \
            This site is a work in progress, but glad you're here! 🚧🚧🚧"
          }
        </div>
      </div>
      <div className="order-1 aspect-auto md:mx-15 lg:order-2 lg:mx-0">
        <Image
          src={theme === "light" ? me2 : me}
          className="rounded-lg"
          alt="a picture of winston!"
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
}
