'use client'
import { React } from 'react';
import Button from "@mui/material/Button"
import Link from 'next/link'
import Footer from '../app/components/Footer'

export default function Home() {

  return (
    
  <>
  <div className="flex flex-col min-h-screen">
    <main className="flex flex-col items-center justify-center flex-grow">
      <div className='text-white text-4xl tracking-widest uppercase text-center [word-spacing:10px] px-10 sm:text-5xl'>
        Hi, I'm Winston!
      </div>  
      <div className='flex flex-col items-center mt-6 sm:flex-row sm:space-x-8 children:pb-6'>
        <Link href={"/about"}>
          <Button variant='outlined' className='tracking-widest'>About</Button>
        </Link>
        <Link href={"/experience"}>
          <Button variant='outlined' className='tracking-widest'>Experience</Button>
        </Link>
        <Link href={"/blog"}>
          <Button variant='outlined' className='tracking-widest'>Blog</Button>
        </Link>
        </div>
    </main>
    <Footer></Footer>
  </div>
  </>
  )
}

