export default function About() {

  return (
  <>
  <div className="flex flex-col min-h-screen mx-auto max-w-screen-2xl">
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
      <div className="relative">
        <img src='/images/Winston_Profile_Picture.JPEG' alt="Winston" className="h-full w-full object-cover object-top px-12 md:pt-36 md:pb-36 pt-12"></img>
      </div>
      <div className='flex flex-col justify-start px-12 md:pt-20 md:pb-20 pt-12 text-xl tracking-wide'>
        <h1 className='text-center [word-spacing:10px] text-4xl tracking-[.25em] uppercase font-semibold pb-10'>About Me</h1>
        <div>
        <p>
          Hi, my name is Winston and I'm a senior @ UC Berkeley studying civil engineering, computer science, and data science! 
        </p>
        <p className='pt-5'>
          I like cats, cereal, and football.
        </p>
        </div>
      </div>
    </main>
  </div>
  </>
  )
}

