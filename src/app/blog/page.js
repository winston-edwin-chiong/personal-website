import { getSortedPostsPreviews } from '../utils/posts'
import { BlogList } from "../components/BlogList"


export default function Blog() {

  const allPostsPreviews = getSortedPostsPreviews()

  return (
    <>
      <div className="flex flex-col min-h-screen mx-auto max-w-screen-2xl">
        <div className='flex flex-col justify-start mx-12 md:mt-20 md:mb-20 mt-12'>
          <h1 className='text-center [word-spacing:10px] text-4xl tracking-[.25em] uppercase font-semibold pb-10'>Posts</h1>
            <BlogList allPostsPreviews={allPostsPreviews}/>
        </div>
      </div>
    </>
  )
}
