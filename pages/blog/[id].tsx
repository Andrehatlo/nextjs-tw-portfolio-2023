import React from 'react';
import md from 'markdown-it';
import { readFilesInPostFolder, parseFileContent } from '../../utils/utils'

interface BlogProps {
  post: {
    frontmatter: {
      title: string;
      date: string;
      socialImage: string;
    };
    content: string;
  }
}

const Blog: React.FC<BlogProps> = ({ post }) => {
  console.log(post.frontmatter.socialImage);
  return (
    <div className="justify-center align-middle w-100">
      <div className="w-3/4 mx-auto prose dark:prose-invert">
        <img
          src={post.frontmatter.socialImage}
          loading="lazy"
          alt={post.frontmatter.title}
          className="relative w-3/4 max-w-2xl mx-auto filter grayscale hover:grayscale-0"
        />
        <h1 className="text-3xl ">{post.frontmatter.title}</h1>          
        <div className="" dangerouslySetInnerHTML={{ __html: md().render(post.content) }} />
      </div>
    </div>
  );
}

interface Params {
  id: string;
}

 
export async function getStaticProps({ params }: { params: Params}) {
  const postFiles = await readFilesInPostFolder();
  const post = postFiles.find(({fileSlug}) => fileSlug === params.id);
  const {data, content} = await parseFileContent(post!.filePath);
  return {
    props: {
      post: {
        frontmatter: data,
        content
      }
    },
  };
}

export async function getStaticPaths() {
  const postFiles = await readFilesInPostFolder();
  const paths = postFiles.map(({fileSlug}) => ({
    params: { id: fileSlug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export default Blog;
