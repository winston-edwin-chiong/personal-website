import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="mx-auto md:px-5 lg:px-10 max-w-screen-xl">
      <div className="flex flex-col justify-start mx-10 md:mx-20 mt-12 md:mt-20 md:mb-20">
        <h1 className="text-center [word-spacing:10px] text-4xl tracking-[.25em] uppercase font-semibold mb-10">
          Experience
        </h1>
        <h2 className="my-5 lg:my-10 text-2xl md:text-3xl tracking-[.15em] font-semibold uppercase">
          Projects
        </h2>
        <ProjectContent
          title="slrpEV Dashboard"
          techStack={["Bootstrap", "Plotly Dash", "Python", "Celery", "Redis", "DynamoDB",]}
          iconPaths={["/icons/bootstrap_logo.svg", "/icons/plotly_logo.svg", "/icons/python_logo.svg", "/icons/celery_logo.png", "/icons/redis_logo.svg", "/icons/dynamodb_logo.svg",]}
          repository={ "https://github.com/winston-edwin-chiong/slrpEV-data-dashboard" }
          description={
            <p className="text-sm md:text-base lg:text-lg">
              • Developed a data dashboard using Plotly Dash, providing
              real-time visualization and 3 years of historical on-campus EV
              power and energy consumption data.
              <br />
              • Integrated AWS DynamoDB as the backend database and leveraged
              Redis as a broker and caching layer. Frontend built with
              DashI&#39;s HTML library and the Bootstrap framework.
              <br />
              • Created data pipelines with sklearn and pandas. Implemented task
              queuing and cron jobs with PythonI&#39;s Celery library, enabling
              hourly asynchronous processing of data querying and usage
              forecasts, and bi-weekly hyperparameter cross-validation. Employed
              k-NN and ARIMA models to generate forecasts of EV power and energy
              consumption patterns.
            </p>
          }
        />
        <ProjectContent
          title="This Website 😊"
          techStack={["Tailwind", "Three.js", "React", "Next.js", "Javascript"]}
          iconPaths={["/icons/tailwind_logo.svg", "/icons/three-js_logo.png", "/icons/react_logo.png", "/icons/next-js_logo.png", "/icons/javascript_logo.png",]}
          repository={ "https://github.com/winston-edwin-chiong/personal-website" }
          description={
            <p className="text-sm md:text-base lg:text-lg">
              • Developed this website using React, Next.js, and Tailwind CSS.
              <br />
              • Implemented a 3D space background with Three.js and WebGL.
              Might do some more of this in the &#34;Cat&#34; and &#34;Song&#34;
              pages.
            </p>
          }
        />
        <ProjectContent
          title="Cooking something up..."
          techStack={["Caffeine", "Oatmeal"]}
          iconPaths={["/icons/cooking_logo.png"]}
          description={
            <p className="text-sm md:text-base lg:text-lg">Working on it...</p>
          }
        />
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral to-transparent opacity-100" />
        <h2 className="my-5 lg:my-10 text-2xl md:text-3xl tracking-[.15em] font-semibold uppercase">
          Coursework
        </h2>
        <CoursesContent />
      </div>
    </div>
  );
}

function ProjectContent({title, techStack, iconPaths, repository, description,}) {
  return (
    <>
      <div className="mb-20 px-5 border border-primary-content rounded-lg 
        shadow-[7px_-3.5px_6px_1px_var(--neutral),15px_-7.5px_0px_1px_var(--primary-content)] 
        md:shadow-[14px_-7px_6px_1px_var(--neutral),30px_-15px_0px_1px_var(--primary-content)]">
        <div className="relative">
          <h3 className="text-lg md:text-xl tracking-widest font-semibold mt-4">{title}</h3>
          <div className="absolute bottom-0 left-0 w-full md:w-2/4 h-px bg-neutral"></div>
        </div>
        <div className="children:my-3">
          <div className="flex justify-between items-center">
            <p className="text-xs md:text-sm lg:text-md">
              <span className="tracking-widest">Technologies: </span>
              <span className="italic">{techStack.join(", ")}</span>
            </p>
            <Link href={repository || "https://github.com/winston-edwin-chiong/"} target="_blank" className="group/github ml-2" >
              <button>
                <FontAwesomeIcon icon={faGithub} size="xl" className="group-hover/github:scale-125 transition ease-in-out duration-300" />
              </button>
            </Link>
          </div>
          <div className="flex flex-row justify-start children:mx-2 items-center">
            {iconPaths.map((path, index) => (
              <img key={index} src={path} alt="_" className="h-4 md:h-7 w-auto" ></img>
            ))}
          </div>
          {description}
        </div>
      </div>
    </>
  );
}

function CoursesContent({ }) {
  const courses = [
    { code: "CS 61A", title: "The Structure and Interpretation of Computer Programs", description: "",},
    { code: "CS 61B", title: "Data Structures and Algorithms", description: "", },
    { code: "DATA 8", title: "Foundations of Data Science", description: "", },
    { code: "DATA 140", title: "Probability for Data Science", description: "", },
    { code: "DATA 100", title: "Principles & Techniques of Data Science", description: "", },
    { code: "CIVENG 191", title: "Civil and Environmental Engineering Systems Analysis", description: "", },
    { code: "CIVENG 190", title: "Electric Mobility Engineering", description: "", },
    { code: "CIVENG 167", title: "Engineering Project Management", description: "", },
  ];

  return (
    <div className="children:my-4 children:mr-4 grid md:grid-cols-2">
      {courses.map((course, index) => (
        <div key={index}>
          <ul>
            {course.code} - {course.title}
          </ul>
          <div className="italic text-xs">{course.description || ""}</div>
        </div>
      ))}
    </div>
  );
}
