import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export default function Blog({ frontmatter, content }) {
  console.log(frontmatter)
  console.log(content)
  
  return (
      <div className="justify-center align-middle w-100">
        <div className="w-3/4 mx-auto prose dark:prose-invert">
          <img src={`${frontmatter.socialImage}`} className="relative w-3/4 max-w-2xl mx-auto filter grayscale hover:grayscale-0" />
        
          <h1 className="text-3xl ">{frontmatter.title}</h1>          
            <div className="" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            </div>
    </div>
  );
}
export async function getStaticPaths() {
  // get all the paths from slugs or file names
  const files = fs.readdirSync('posts');
  const paths = files.map(filename => ({
    params: {
      id: filename.replace('.md', '')
    },
  }));
  console.log('paths', paths)
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { id } }) {
  const fileName = fs.readFileSync(`posts/${id}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
        frontmatter,
        content
      }
    };
  }



      
