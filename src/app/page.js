'use client'
import { React } from 'react';
import Button from "@mui/material/Button"
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className=' text-white text-6xl tracking-widest uppercase text-center [word-spacing:10px]'>Hi, I'm Winston!</div>
        <div className='flex space-x-8 mt-6'>
          <Link href={"/about"}>
            <Button variant='outlined'>About</Button>
          </Link>
          <Link href={"/experience"}>
            <Button variant='outlined'>Experience</Button>
          </Link>
          <Link href={"/blog"}>
            <Button variant='outlined'>Blog</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

