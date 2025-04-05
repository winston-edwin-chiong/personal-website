import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function NotFound() {
  return (
    <>
      <div>{"There's nothing here!"}</div>
      <Link className="my-5" href="/">
        <div className="group decoration-primary inline-flex items-center decoration-1 underline-offset-4 transition-transform duration-300 hover:underline">
          {"Go home?"}
          <FiChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </Link>
    </>
  );
}
