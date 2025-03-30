import Link from "next/link";
import { FiLinkedin, FiGithub, FiMail, FiFileText } from "react-icons/fi";
export default function Footer() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Link
        href="https://www.linkedin.com/in/winstonechiong/"
        target="_blank"
        className="mx-5 transition-colors duration-200 ease-in-out hover:text-[#0077B5]"
      >
        <FiLinkedin strokeWidth={1.5} size={20} />
      </Link>
      <FiMail strokeWidth={1.5} className="mx-5" size={20} />
      <Link
        href="https://www.github.com/winston-edwin-chiong"
        target="_blank"
        className="mx-5 transition-colors duration-200 ease-in-out hover:text-slate-500"
      >
        <FiGithub strokeWidth={1.5} size={20} />
      </Link>
      <Link
        href="/assets/resume.pdf"
        target="_blank"
        className="mx-5 transition-colors duration-200 ease-in-out hover:text-red-400"
      >
        <FiFileText strokeWidth={1.5} size={20} />
      </Link>
    </div>
  );
}
