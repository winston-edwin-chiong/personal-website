import fs from 'fs'
import path from 'path'
import { getPostData } from '@/app/utils/posts';

// Refer here for valid Markdown syntax: https://showdownjs.com/docs/markdown-syntax/


function generateStaticParams() {
    // Generate routes at build time 

    const postsDirectory = path.join(process.cwd(), 'posts')
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsID = fileNames.map((fileName) => {

        const id = fileName.replace(/\.md$/, "");

        return {
            id
        };
    })

    return allPostsID
}


export default async function Page({ params }) {

    const data = await getPostData(params.id)

    const date = new Date(data.date)
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        day: 'numeric',
        day: '2-digit'
    }).format(date);


    return (
        <>
            <div className="flex flex-col min-h-screen mx-auto max-w-screen-lg">
                <div className='flex flex-col justify-center items-center my-5 md:my-10 children:my-3'>
                    <div className='text-3xl md:text-4xl  text-center font-bold'>{data.title}</div>
                    <div className='italic'>{formattedDate}</div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: data.htmlContent }} className='text-md md:text-lg mx-10' />
            </div>
        </>
    )
}

