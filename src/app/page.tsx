import Image from "next/image";
import me from "../assets/images/me.jpg";

export default function Home() {
  return (
    <div>
      <div className="w-[20vw] aspect-auto">
        <Image
          src={me}
          className="rounded-lg"
          alt="a picture of myself!"
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
}
