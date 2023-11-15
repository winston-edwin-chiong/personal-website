"use client"
import { useState } from "react";

export default function Resume() {

    const [isLoading, setIsLoading] = useState(true)

    return (
    <>
    <div className="mx-auto md:px-5 lg:px-10 max-w-screen-xl flex flex-col justify-center">
      {isLoading? <div className="text-center">Loading...</div> : <></>}
        <iframe
          src="https://drive.google.com/file/d/1rwQ4FUuSHJDMOcl7toc1LffgPebBD4d5/preview"
          allow="autoplay"
          className="xxl:w-[35vw] xl:w-[40vw] lg:w-[50vw] md:w-[70vw] w-[80vw] aspect-[3/4]"
          onLoad={() => setIsLoading(false)}
        />
        </div>
    </>        
    )
}