import Image from "next/image";
import me from "../assets/images/me.jpg";
import { Footer, Header } from "@/components";

export default function Home() {
  return (
    <div className="flex h-full w-200 items-center justify-center">
      <div className="flex gap-30">
        <div className="flex flex-col">
          <Header />
          <div>something about me</div>
          <Footer />
        </div>
        <div className="aspect-auto w-[20vw]">
          <Image
            src={me}
            className="rounded-lg"
            alt="a picture of winston!"
            placeholder="blur"
            priority
          />
        </div>
      </div>
    </div>
  );
}
