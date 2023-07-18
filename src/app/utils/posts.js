import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import showdown from 'showdown'

// Showdown.js configs 
showdown.setOption("parseImgDimensions", true)
showdown.setOption("emoji", true)
showdown.setOption("ghCodeBlocks", true)
showdown.setOption("openLinksInNewWindow", true)
showdown.setOption("tables", true)


export function getSortedPostsPreviews() {

    const postsDirectory = path.join(process.cwd(), 'posts')
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {

        const id = fileName.replace(/\.md$/, "");

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const frontMatter = matter(fileContents)

        return {
            id, 
            ...frontMatter.data,
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}


export async function getPostData(id) {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const fullPath = path.join(postsDirectory, `${id}.md`);

    if (!fs .existsSync(fullPath)) {
        notFound()
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const frontMatter = matter(fileContents);

    const markdownContent = frontMatter.content;
    const converter = new showdown.Converter();
    const htmlContent = converter.makeHtml(markdownContent)

    return {
        id,
        htmlContent,
        ...frontMatter.data,
    };
}
