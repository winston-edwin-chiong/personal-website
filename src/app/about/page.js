import { React } from 'react';
import Footer from '../components/Footer'



export default function About() {

  return (
  <>
  {/* <div className="flex flex-col min-h-screen">
    <main className="flex flex-row justify-center items-center flex-grow">
      <div className='items-center px-20'>
        <img src='/images/ProfilePicture.JPEG' alt="Winston" className='w-96'></img>
      </div>
      <div className='px-20 text-center'>
        <h1>About Me</h1>
        <p>Hi, my name is Winston and I'm a senior studying Civil Engineering @ UC Berkeley!</p>
      </div>
    </main> */}
  <div className="flex flex-col min-h-screen">
    <main className="grid grid-cols-2 gap-4 flex-grow">
      <div className=''>
        <img src='/images/ProfilePicture.JPEG' alt="Winston" className='h-96 w-auto'></img>
      </div>
      <div className='text-center'>
        <h1>About Me</h1>
        <p>Hi, my name is Winston and I'm a senior studying Civil Engineering @ UC Berkeley!</p>
      </div>
    </main>
    <Footer></Footer>
  </div>
  </>
  )
}

