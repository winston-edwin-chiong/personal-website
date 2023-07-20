import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Experience() {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-screen-2xl">
      <div className='flex flex-col justify-start mx-12 md:mt-20 md:mb-20 mt-12'>
        <h1 className='text-center [word-spacing:10px] text-4xl tracking-[.25em] uppercase font-semibold mb-10'>Experience</h1>
        <h2 className='my-5 lg:my-10 text-2xl md:text-3xl tracking-[.15em] font-medium uppercase'>Projects</h2>
        <ProjectContent
          title="slrpEV Dashboard"
          techStack={["Bootstrap", "Plotly Dash", "Python", "Celery", "Redis", "DynamoDB"]}
          iconPaths={["/icons/bootstrap_logo.svg", "/icons/plotly_logo.svg", "/icons/python_logo.svg", "/icons/celery_logo.png", "/icons/redis_logo.svg", "/icons/dynamodb_logo.svg"]}
          description={
            <p className='text-sm md:text-base lg:text-lg'>
              Shit about the project goes here. I don't what to write so I'm going to write a paragraph about Walter White:
              Walter White was an overqualified high school chemistry teacher before being diagnoed with terminal lung cancer.
              Walter White subsequently made the decision to cook methamphetamine with his former student,
              Jesse Pinkman, to provide for his family before he passes. Walter White became so good at his job, it no longer
              became a means for financial security; cooking methamphetamine became Walter White's life purpose, one of the few
              aspects of Walter's life where he did not feel like a failure.
            </p>}
        />
        <ProjectContent
          title="This Website 😊"
          techStack={["Tailwind", "Three.js", "React", "Next.js", "Javascript"]}
          iconPaths={["/icons/tailwind_logo.svg", "/icons/three-js_logo.png", "/icons/react_logo.png", "/icons/next-js_logo.png", "/icons/javascript_logo.png"]}
          description={
            <p className='text-sm md:text-base lg:text-lg'>
              Shit about the project goes here. I don't what to write so I'm going to write a paragraph about Walter White:
              Walter White was an overqualified high school chemistry teacher before being diagnoed with terminal lung cancer.
              Walter White subsequently made the decision to cook methamphetamine with his former student,
              Jesse Pinkman, to provide for his family before he passes. Walter White became so good at his job, it no longer
              became a means for financial security; cooking methamphetamine became Walter White's life purpose, one of the few
              aspects of Walter's life where he did not feel like a failure.
            </p>}
        />
        <ProjectContent
          title="Cooking something up..."
          techStack={["Caffeine", "99¢ Ramen, Squats"]}
          iconPaths={["icons/cooking_logo.png"]}
          description={
            <p className='text-sm md:text-base lg:text-lg'>
              Working on it...
            </p>}
        />
        <h2 className='my-5 lg:my-10 text-2xl md:text-3xl tracking-[.15em] font-medium uppercase'>Coursework</h2>
        <CoursesContent />
      </div>
    </div>
  )
}

function ProjectContent({ title, techStack, iconPaths, description }) {

  return (
    <>
      <h3 className='text-lg md:text-xl tracking-widest my-4 underline'>{title}</h3>
      <div className='children:ml-6 children:my-3'>
        <div className='flex justify-between items-center'>
          <p><span className='tracking-widest'>Technologies: </span><span className='italic'>{techStack.join(", ")}</span></p>
          <Link href={"https://www.github.com/winston-edwin-chiong"} target='_blank' className='group/github ml-2'>
            <button>
              <FontAwesomeIcon icon={faGithub} size='xl' className='group-hover/github:scale-125 transition ease-in-out duration-300' />
            </button>
          </Link>
        </div>
        <div className='flex flex-row justify-start children:mx-2 items-center'>
          {iconPaths.map((path, index) => (
            <img key={index} src={path} className='h-4 md:h-7 w-auto'></img>
          ))}
        </div>
        {description}
      </div>
    </>
  )
}

function CoursesContent({ }) {

  const courses = [
    { code: "CS 61A", title: "The Structure and Interpretation of Computer Programs", description: "Python, Scheme" },
    { code: "CS 61B", title: "Data Structures and Algorithms", description: "Java" },
    { code: "DATA 8", title: "Foundations of Data Science", description: "Python, Statistics" },
    { code: "DATA 140", title: "Probability for Data Science", description: "Probability Theory" },
    { code: "DATA 100", title: "Principles & Techniques of Data Science", description: "Python, Machine Learning, pandas, sklearn" },
    { code: "CIVENG 191", title: "Civil and Environmental Engineering Systems Analysis", description: "MATLAB, Linear, Dynamic, and Nonlinear Programs" },
    { code: "CIVENG 190", title: "Electric Mobility Engineering", description: "EV's, Batteries" },
    { code: "CIVENG 167", title: "Engineering Project Management", description: "Construction Law" }
  ]

  return (
    <div className='pl-6 children:my-4'>
      {courses.map((course, index) => (
        <div>
          <ul key={index}>{course.code} - {course.title}</ul>
          <div className='italic text-xs'>{course.description}</div>
        </div>
      )
      )}
    </div>
  )
}

