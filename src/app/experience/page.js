import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import courses from "../../../data/courses.json";
import projects from "../../../data/projects.json";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {

  const courselist = courses["courses"];
  const projectslist = projects["projects"];

  return (
    <div className="mx-auto md:px-5 lg:px-10 max-w-screen-xl">
      <div className="flex flex-col justify-start mx-10 md:mx-20 mt-12 md:mt-20 md:mb-20">
        <h1 className="text-center [word-spacing:10px] text-4xl tracking-[.25em] uppercase font-semibold mb-10">
          Experience
        </h1>
        <h2 className="my-5 md:my-10 text-2xl md:text-3xl tracking-[.15em] font-semibold uppercase">
          Projects
        </h2>
        <div className="grid gap-16 lg:gap-20 lg:grid-cols-2">
          {projectslist.map((project, index) => (
            <ProjectContent
              key={index}
              title={project.title}
              techStack={project.techStack}
              iconPaths={project.iconPaths}
              repository={project.repository}
              link={project.link}
              description={project.description.split("\n").map((paragraph, index) => (
                  <p key={index} className="text-sm md:text-base lg:text-lg">
                    {paragraph}
                  </p>
                ))}
            />
          ))}
        </div>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral to-transparent opacity-100" />
        <h2 className="my-5 lg:my-10 text-2xl md:text-3xl tracking-[.15em] font-semibold uppercase">
          Coursework
        </h2>
        <div className="children:my-4 children:mr-4 grid md:grid-cols-2">
          {courselist.map((course, index) => (
            <div key={index}>
              <ul>
                {course.code} - {course.title}
              </ul>
              <div className="italic text-xs">{course.description || ""}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectContent({title, techStack, iconPaths, repository, description, link}) {
  return (
    <>
      <div
        className="px-5 border border-primary-content rounded-lg transition ease-out
        shadow-[7px_-3.5px_6px_1px_var(--neutral),15px_-7.5px_0px_1px_var(--primary-content)] 
        md:shadow-[14px_-7px_6px_1px_var(--neutral),30px_-15px_0px_1px_var(--primary-content)]
        hover:shadow-[12px_-6px_0px_1px_var(--neutral),20px_-10px_0px_1px_var(--primary-content)]
        md:hover:shadow-[24px_-12px_0px_1px_var(--neutral),40px_-20px_0px_1px_var(--primary-content)]"
      >
        <div className="relative">
          <a
            href={link || "https://github.com/winston-edwin-chiong"}
            target="_blank"
          >
            <h3
              className="inline-block my-1 px-2 py-1 text-lg md:text-xl tracking-widest font-semibold mt-4 rounded-xl
              transition ease-in-out hover:bg-neutral hover:bg-opacity-60"
            >
              {title}
            </h3>
          </a>
          <div className="absolute bottom-0 left-0 w-full h-px bg-neutral"></div>
        </div>
        <div className="children:my-3">
          <div className="flex justify-between items-center">
            <p className="text-xs md:text-sm lg:text-md">
              <span className="tracking-widest">Technologies: </span>
              <span className="italic">{techStack.join(", ")}</span>
            </p>
            <Link
              href={repository || "https://github.com/winston-edwin-chiong/"}
              target="_blank"
              className="group/github ml-2"
            >
              <button>
                <FontAwesomeIcon
                  icon={faGithub}
                  size="xl"
                  className="group-hover/github:scale-125 transition ease-in-out duration-300"
                />
              </button>
            </Link>
          </div>
          <div className="flex flex-row justify-start children:mx-2 items-center">
            {iconPaths.map((path, index) => (
              <div key={index} className="w-4 md:w-7 h-4 md:h-7 relative">
                <Image key={index} src={path} alt="_" fill={true} className="object-contain"></Image>
              </div>
            ))}
          </div>
          {description}
        </div>
      </div>
    </>
  );
}
