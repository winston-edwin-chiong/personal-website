import Image from "next/image";
// import me from "../assets/images/me.jpg";
import me2 from "../assets/images/me2.jpg";

export default function Home() {
  return (
    <div className="grid-rows-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <div className="order-2 text-center lg:order-1">
        <div className="text-lg font-thin">
          {"Hello stranger! I'm Winston!"}
        </div>
        <div className="my-5">{"🚧🚧🚧"}</div>
        <div>{"This site is a work in progress, but glad you're here!"}</div>
      </div>
      <div className="order-1 aspect-auto md:mx-15 lg:order-2 lg:mx-0">
        <Image
          src={me2}
          className="rounded-lg"
          alt="a picture of winston!"
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
}
