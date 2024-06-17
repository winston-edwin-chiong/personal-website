"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import WinstonBear from "../../../public/images/winston_bear.png"
import WinstonDrawing from "../../../public/images/winston_drawing.png"
import WinstonWhiteshirt from "../../../public/images/winston_whiteshirt.jpg"
import WinstonGrad from "../../../public/images/winston_grad.jpg"

const images = [WinstonGrad, WinstonBear, WinstonWhiteshirt, WinstonDrawing]

export default function About() {

  const[imageIndex, setImageIndex] = useState(0)

  const changeImage = () => {
    setImageIndex((imageIndex + 1) % images.length)
  }

  return (
  <>
  <div className="mx-auto md:px-20 lg:px-24 max-w-screen-xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-grow">
      <div className="flex justify-center relative px-12 md:pt-36 md:pb-20 pb-10 pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={imageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.15 }}
          >
            <Image
                key={imageIndex}
                src={images[imageIndex]} 
                alt="me :)" 
                onClick={changeImage} 
                className="cursor-pointer rounded-md"
                priority={true}
                placeholder="blur"
                quality={25}
              >
            </Image>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='flex flex-col justify-start px-12 lg:pt-20 md:pb-20 pt-0 text-xl tracking-wide'>
        <h1 className='text-center [word-spacing:10px] text-4xl tracking-[.25em] uppercase font-semibold pb-10'>About Me</h1>
        <div>
        <span>
          {"Hi, my name is Winston!"}<br/><br/>
          {"I recently from graduated UC Berkeley, where I studied civil engineering, computer science and data science!"}<br/><br/>
          {"I grew up in 🌉 San Francisco's Ingleside neighborhood and later made a quick trip across the bay to Berkeley after finishing at the City College of San Francisco."}<br/><br/>
        </span>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

