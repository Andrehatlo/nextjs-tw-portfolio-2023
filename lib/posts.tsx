import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// from GitRepo *React/NextJS_tutorial*
import {remark} from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {

  const files = fs.readdirSync(postsDirectory);
  // Loop over post to extract frontmatter needed
  const posts = files.map((file) => {
    // formating slug for URL parameter
    const slug = file.replace(".md", "");
    // Read contents of file
    const fileContents = fs.readFileSync(`posts/${file}`, "utf8");
    const parsedContent = matter(fileContents);
    // Parsed content contains data and content, we only need data = frontmatter
    const {data} = parsedContent;
    console.log(data);
    return {
      slug,
      data,
    };
  });
  return {
    props:{
      posts
    }
  }
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}