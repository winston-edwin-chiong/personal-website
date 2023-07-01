"use client"
import { React, useState } from 'react';
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Experience() {

  return (
    <>
      <div className="flex flex-col min-h-screen mx-auto max-w-screen-2xl">
        <div className='flex flex-col justify-start px-12 md:pt-20 md:pb-20 pt-12'>
          <h1 className='text-center [word-spacing:10px] text-4xl tracking-[.25em] uppercase font-semibold pb-10'>Experience</h1>
          <Collapse title={"Projects"}>
            <ProjectContent title="slrpEV Dashboard"
              techStack={["Bootstrap", "Plotly Dash", "Python", "Celery", "Redis", "DynamoDB"]}
              iconPaths={["/icons/bootstrap_logo.svg", "/icons/plotly_logo.svg", "/icons/python_logo.svg", "/icons/celery_logo.png", "/icons/redis_logo.svg", "/icons/dynamodb_logo.svg"]}
              description={
                <p className='text-sm md:text-base lg:text-lg'>
                  Shit about the project goes here. I don't what to write so I'm going to write a paragraph about Walter White.
                  Walter White was an overqualified high school chemistry teacher before being diagnoed with terminal lung cancer.
                  Walter White subsequently made the decision to cook methamphetamine with his former student,
                  Jesse Pinkman, to provide for his family before he passes. Walter White became so good at his job, it no longer
                  became a means to provide for his family; cooking methamphetamine became Walter White's life purpose, one of the few
                  aspects of Walter's life where he did not feel like a failure.
                </p>}
            >
            </ProjectContent>
            <ProjectContent title="Cooking something up..."
              techStack={[]}
              iconPaths={[]}
              description={
                <p className='text-sm md:text-base lg:text-lg'>
                  Shit about the project goes here. I don't what to write so I'm going to write a paragraph about Walter White.
                  Walter White was an overqualified high school chemistry teacher before being diagnoed with terminal lung cancer.
                  Walter White subsequently made the decision to cook methamphetamine with his former student,
                  Jesse Pinkman, to provide for his family before he passes. Walter White became so good at his job, it no longer
                  became a means to provide for his family; cooking methamphetamine became Walter White's life purpose, one of the few
                  aspects of Walter's life where he did not feel like a failure.
                </p>}
            >
            </ProjectContent>
          </Collapse>
          <Collapse title={"Work"}>
          </Collapse>
          <Collapse title={"Courses"}>
          </Collapse>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}


function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='py-5 lg:py-10'>
      <div tabIndex={0} className="collapse collapse-arrow">
        <input type='checkbox' onClick={handleClick} />
        <div className={`collapse-title text-3xl tracking-[.15em] transition ease-in-out duration-300 ${isOpen ? 'font-bold' : 'font-medium'}`}>
          {title}
        </div>
        <div className="collapse-content">
          {children}
        </div>
      </div>
    </div>
  )
}


function ProjectContent({ title, techStack, iconPaths, description }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div tabIndex={0} className="collapse collapse-arrow" key={title}>
        <input type='checkbox' onClick={handleClick} />
        <div className={`collapse-title text-xl tracking-widest transition ease-in-out duration-300 ${isOpen ? 'font-bold' : 'font-medium'}`}>
          {title}
        </div>
        <div className="collapse-content children:pl-6 children:py-3">
          <div className='flex justify-between items-center'>
            <p><span className='tracking-widest'>Technologies: </span><span className='italic'>{techStack.join(", ")}</span></p>
            <Link href={"https://www.github.com/winston-edwin-chiong"} target='_blank' className='group/github'>
              <button className='btn btn-primary'>
                <FontAwesomeIcon icon={faGithub} size='xl' className='group-hover/github:scale-125 transition ease-in-out duration-300' />
              </button>
            </Link>
          </div>
          <div className='flex flex-row justify-start children:px-2 items-center'>
            {iconPaths.map((item, index) => (
              <img key={index} src={item} className='h-4 md:h-7 w-auto'></img>
            ))}
          </div>
          {description}
        </div>
      </div>
    </>
  )
}


function WorkContent({ }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div>
        Work goes here! Time for bed though.
      </div>
    </>
  )
}

