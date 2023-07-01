'use client'
import { React } from 'react';
import Link from 'next/link'
import Footer from '../app/components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faMusic } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  return (

    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex flex-col items-center justify-center flex-grow">
          <div className='text-white text-4xl tracking-widest uppercase text-center [word-spacing:10px] px-10 sm:text-5xl'>
            Hi, I'm Winston!
          </div>
          <div className='flex flex-col items-center mt-6 sm:flex-row sm:space-x-8 children:pb-6'>
            <HomeNavButton href={"/about"} label={"About"} />
            <HomeNavButton href={"/experience"} label={"Experience"} />
            <HomeNavButton href={"/blog"} label={"Blog"} />
            <HomeNavButton href={"/song"} label={"Song"} />
            <HomeNavButton href={"/cat"} label={"Cat"} />
          </div>
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

function HomeNavButton({ href, label }) {
  return (
    <Link href={href}>
      <button className='btn btn-primary tracking-widest hover:bg-slate-100/[.1] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'>{label}</button>
    </Link>
  )
}
