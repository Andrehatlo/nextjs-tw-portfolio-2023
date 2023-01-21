import { useState, useEffect } from 'react';
import fs from 'fs'
import matter from "gray-matter";
import Card from '../components/Card';

interface BlogProps {
  posts: {
    slug: string;
    data: {
      title: string;
      date: string;
      metaTitle: string;
      metaDesc: string;
      tags: string[];
      socialImage: string;
    };
  }[];
}

const Blog: React.FC<BlogProps> = ({posts}) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (posts) setIsLoading(false);
  }, [posts]);

  return  isLoading ? (
    <div className="mt-12 text-center">
      <h3>Loading...</h3>
    </div>
  ) : (
    <div className="justify-center w-3/4 mx-auto align-middle w-100 ">
      <div className="grid gap-2 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(( post, index) => (

          <Card key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
export default Blog;

export async function getStaticProps(){
  // Getting all our posts at build time
  // Get all the posts from posts folder
  const files = fs.readdirSync("posts");
  // Loop over each post to extract the frontmatter which we need
  const posts = files.map((file) => {
    // getting the slug here which we will need as a URL query parameter
    const slug = file.replace(".md", "");
    // Reading the contents of the file
    const filecontent = fs.readFileSync(`./posts/${file}`, "utf-8");
    const parsedContent = matter(filecontent);
    //The parsed content contains data and content we only need the data which is the frontmatter
    const {data} = parsedContent
    return {
      slug,
      data,
    };
  });
    // sort posts by oldest to newest
    const sortedPosts = posts.sort(
      (firstEl, secondEl) => secondEl.data.date - firstEl.data.date
    ).reverse();
  
  return {
    props:{
      posts: sortedPosts
    }
  }
}