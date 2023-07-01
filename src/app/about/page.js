import { React } from 'react';
import Footer from '../components/Footer'



export default function About() {

  return (
  <>
  <div className="flex flex-col min-h-screen mx-auto max-w-screen-2xl">
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
      <div className="relative pb-2/3">
        <img src='/images/Winston_Profile_Picture.JPEG' alt="Winston" className="absolute h-full w-full object-cover object-top px-12 md:pt-36 md:pb-36 pt-12"></img>
      </div>
      <div className='flex flex-col justify-start px-12 md:pt-20 md:pb-20 pt-12 text-xl tracking-wide'>
        <h1 className='text-center [word-spacing:10px] text-4xl tracking-[.25em] uppercase font-semibold pb-10'>About Me</h1>
        <div className='indent-8'>
        <p>
          Hi, my name is Winston and I'm a senior @ UC Berkeley studying civil engineering, computer science, and data science! 
          The inclusion of the latter two studies only came about my junior year. 
          At Berkeley—and as much as you try—you can't escape the technology world. 
        </p>
        <p className='pt-5'>
          I was born and raised in San Francisco's Ingelside / Excelsior district, and have lived there my whole life. 
        </p>
        <p className='pt-5'>
          As of recently, I am sharpening my web development skills and cooking up some side projects. 
          I am currently interning at a technology consultant, <i>West Monroe</i>.
        </p>
        <p className='pt-5'>
          I like cats, cereal, and football.
        </p>
        </div>
      </div>
    </main>
    <Footer></Footer>
  </div>
  </>
  )
}

