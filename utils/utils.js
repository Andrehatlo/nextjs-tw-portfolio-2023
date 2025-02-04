import path from 'path';
import matter from 'gray-matter';

const rootDir = './';
const postDir = 'posts';
const fs = require('fs');


export const readFilesInPostFolder = async () => {
  try {
    const folder = path.join(rootDir, postDir);
    const files = await fs.promises.readdir(folder);
    const fileData = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(folder, file);
        const data = await fs.promises.readFile(filePath, 'utf8');
        const destination = path.join(rootDir, postDir, file);
        await fs.promises.writeFile(destination, data);
        console.log(` was posted to .`);
        return { fileSlug: file.replace('.md', ''), filePath };
      })
    );
    return fileData;
  } catch (err) {
    throw err;
  }
};

export const parseFileContent = async (filePath) => {
  try {
    const fileContent = await fs.promises.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return { data, content };
  } catch (err) {
    throw err;
  }
};

export const parseContent = async () => {
    try {
        const postFiles = await readFilesInPostFolder();
        const posts = await Promise.all(postFiles.map(async ({fileSlug, filePath}) => {
            const { data } = await parseFileContent(filePath);
            return {
                slug: fileSlug,
                frontmatter: data,
                content
            }
        }));
        return posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    } catch (err) {
        throw err;
    }
};
