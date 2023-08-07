"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function About() {

  const[imageIndex, setImageIndex] = useState(0)

  const images = [
    '/images/Winston_Profile_Picture.JPEG', 
    '/images/Winston_Profile_Picture_2.png', 
    '/images/Winston_Profile_Picture_3.png',
    '/images/Winston_Profile_Picture_4.png'
  ]

  const changeImage = () => {
    setImageIndex((imageIndex + 1) % images.length)
  }

  return (
  <>
  <div className="mx-auto max-w-screen-2xl">
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-grow">
      <div className="relative px-12 md:pt-36 md:pb-36 pt-12">
        <AnimatePresence mode="wait">
          <motion.img
            key={imageIndex}
            src={images[imageIndex]} 
            alt="me :)" 
            onClick={changeImage} 
            className="w-full object-cover object-top cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.15 }}
          >
          </motion.img>
        </AnimatePresence>
      </div>
      <div className='flex flex-col justify-start px-12 lg:pt-20 md:pb-20 pt-0 text-xl tracking-wide'>
        <h1 className='text-center [word-spacing:10px] text-4xl tracking-[.25em] uppercase font-semibold pb-10'>About Me</h1>
        <div>
        <p>
          Hi, my name is Winston and I&#39;m a senior @ UC Berkeley studying civil engineering, computer science, and data science! 
        </p>
        <p className='pt-5'>
          bio goes here!
        </p>
        </div>
      </div>
    </main>
  </div>
  </>
  )
}

