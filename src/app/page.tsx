import Image from "next/image";
// import me from "../assets/images/me.jpg";
import me2 from "../assets/images/me2.jpg";

export default function Home() {
  return (
    <div className="grid-rows-auto grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <div className="order-2 lg:order-1">
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="text-3xl font-extralight tracking-wide">
              {"Hello! I'm Winston!"}
            </div>
            <div className="my-5">
              <span>
                {"I like making things. I'm currently a software engineer at "}
              </span>
              <span className="underline decoration-[#E31937] decoration-2 underline-offset-2">
                {"Tesla"}
              </span>
              <span>
                {
                  ". Previously, I was born and grew up in San Francisco, attended the City College of San Francisco, and graduated from "
                }
              </span>
              <span className="underline decoration-[#002676] decoration-2 underline-offset-2">
                {"UC Be"}
              </span>
              <span className="underline decoration-[#FDB515] decoration-2 underline-offset-2">
                {"rkeley"}
              </span>
              <span>
                {
                  ", where I studied civil engineering and (informally) computer science."
                }
              </span>
            </div>
            <div className="my-5">
              {
                "Outside of work, I enjoy flavor of the month hobbies, and meeting new people!"
              }
            </div>
          </div>
          <div className="text-center italic">
            <div>{"🚧🚧🚧"}</div>
            <div>{"*This site is a work in progress :D"}</div>
            <div>{"🚧🚧🚧"}</div>
          </div>
        </div>
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
