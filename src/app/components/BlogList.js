"use client"
import { useState } from "react";
import Link from 'next/link';


export function BlogList({ allPostsPreviews }) {
    const [hoveredPostId, setHoveredPostId] = useState(null)

    const handlePostHover = (postId) => {
        setHoveredPostId(postId);
    }

    return (
        <>
            {allPostsPreviews.map((post) => (
                <PostPreview
                    key={post.id}
                    id={post.id}
                    href={post.id}
                    title={post.title}
                    date={post.date}
                    hovered={hoveredPostId !== null && hoveredPostId !== post.id}
                    handleHover={handlePostHover}
                ></PostPreview>
            ))
            }
        </>
    )



}

function PostPreview({ id, href, title, date, hovered, handleHover }) {

    return (
        <>
            <div className={`flex justify-between items-center transition-all ease-in-out duration-125 ${hovered ? 'opacity-50' : ""}`}>
                <Link href={`/blog/${href}`} className="tracking-widest hover:font-bold px-4 py-1"
                    onMouseEnter={() => handleHover(id)}
                    onMouseLeave={() => handleHover(null)}
                >
                    <h2 className='text-sm md:text-base'>{title}</h2>
                </Link>
                <time className='italic'>{date}</time>
            </div>
        </>
    )
}