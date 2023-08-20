import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Experience() {
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
          <ProjectContent
            title="slrpEV Dashboard⚡"
            techStack={["Bootstrap", "Plotly Dash", "Python", "Redis", "Modal", "DynamoDB",]}
            iconPaths={["https://getbootstrap.com/favicon.ico", "https://dash.plotly.com/assets/favicon.ico", "https://www.python.org/favicon.ico", "https://redis.com/favicon.ico", "https://modal.com/assets/favicon.svg", "https://whatthelogo.com/storage/logos/aws-dynamodb-274465.webp",]}
            repository={ "https://github.com/winston-edwin-chiong/slrpEV-data-dashboard" }
            link={ "https://slrpev-data-dashboard.onrender.com/" }
            description={
              <p className="text-sm md:text-base lg:text-lg">
                A data dashboard for the EV chargers at UC Berkeley.
                <br />
                Five minute, hourly, daily and monthly charging data + forecasts. Slide into my DM's for access (data privacy concerns).
                <br />
              </p>
            }
          />
          <ProjectContent
            title="This Website😊"
            techStack={["Tailwind CSS", "Three.js", "React", "Next.js", "Javascript"]}
            iconPaths={["https://tailwindcss.com/favicons/favicon-32x32.png?v=3", "https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png", "https://react.dev/favicon.ico", "https://nextjs.org/favicon.ico", "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",]}
            repository={ "https://github.com/winston-edwin-chiong/personal-website" }
            link={ "https://winstonchiong.com" }
            description={
              <p className="text-sm md:text-base lg:text-lg">
                My home on the interwebs 🕸️. 
                <br />
                Comes with a 3D space background made with Three.js.
                Might do some more of this in the &#34;Cat&#34; and &#34;Song&#34;
                pages.
              </p>
            }
          />
          <ProjectContent
            title="Ten Diez Dieci Десять Shí عشرة mười Jū Zehn decem"
            techStack={["A Lot (21 Savage style)"]}
            iconPaths={[]}
            repository={ "https://github.com/winston-edwin-chiong/" }
            description={
              <p className="text-sm md:text-base lg:text-lg">
                Gonna to build the same CRUD app in 10 different languages.
                <br />
                Inspired by <a href="https://www.youtube.com/watch?v=FQPlEnKav48" target="_blank" className="hover:text-neutral transition ease-out">Fireship.io</a>.
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
        </div>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral to-transparent opacity-100" />
        <h2 className="my-5 lg:my-10 text-2xl md:text-3xl tracking-[.15em] font-semibold uppercase">
          Coursework
        </h2>
        <CoursesContent />
      </div>
    </div>
  );
}

function ProjectContent({title, techStack, iconPaths, repository, description, link}) {
  return (
    <>
      <div className="px-5 border border-primary-content rounded-lg transition ease-out
        shadow-[7px_-3.5px_6px_1px_var(--neutral),15px_-7.5px_0px_1px_var(--primary-content)] 
        md:shadow-[14px_-7px_6px_1px_var(--neutral),30px_-15px_0px_1px_var(--primary-content)]
        hover:shadow-[12px_-6px_0px_1px_var(--neutral),20px_-10px_0px_1px_var(--primary-content)]
        md:hover:shadow-[24px_-12px_0px_1px_var(--neutral),40px_-20px_0px_1px_var(--primary-content)]">
        <div className="relative">
          <a href={link || "https://github.com/winston-edwin-chiong"} target="_blank">
             <h3 className="inline-block my-1 px-2 py-1 text-lg md:text-xl tracking-widest font-semibold mt-4 rounded-xl
              transition ease-in-out hover:bg-neutral hover:bg-opacity-60">{title}</h3>
          </a>
          <div className="absolute bottom-0 left-0 w-full h-px bg-neutral"></div>
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
              <img key={index} src={path} alt="_" className="h-4 md:h-7" ></img>
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
