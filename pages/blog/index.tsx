import { useState, useEffect } from 'react';
import { GetStaticProps } from 'next'
import { readFilesInPostFolder, parseFileContent } from '../../utils/utils'
import Card from '../../components/Card';

interface Frontmatter {
  title: string;
  date: string;
  metaTitle: string;
  metaDesc: string;
  tags: string[];
  socialImage: string;
}

interface Post {
  slug: string;
  content: string;
  frontmatter: Frontmatter;
}

export const getStaticProps: GetStaticProps = async () => {
  try {
      const postFiles = await readFilesInPostFolder();
      const posts = await Promise.all(postFiles.map(async ({fileSlug, filePath}) => {
          const {data, content} = await parseFileContent(filePath);
          return {
              slug: fileSlug,
              frontmatter: data as Frontmatter,
              content
          }
      }));
            // Sort posts by date in descending order
      posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
      
      return {
          props: {
              posts,
          },
      };
  } catch (err) {
      throw err;
  }
};

interface BlogProps {
  posts: Post[];
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



