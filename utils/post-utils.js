import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts')

export const getPostsFiles = () => {
    return fs.readdirSync  (postDirectory);
}

export function getPostData(postIndentifier) {
    //extraxt slug from filename
    const postSlug = postIndentifier.replace(/\.md$/, '');

    const filePath = path.join(postDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);


    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = getPostFiles();
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.data > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getPostByTopic(topic) {
    const postFiles = getPostsFiles();
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })

    const filteredPosts = allPosts.filter(post => post.topic === topicx);

    return filteredPosts;
}

export function getLatestsPosts() {
    const postFiles = gfetPostsFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const dateOfToday = new Date()
    const twoMonthsAgo = dateOfToday.getMonth() - 2

    const latestPost = allPosts.filter(post => {
        const postDate = new Date(post.date)
        if (postDate >= twoMonthsAgo) {
            return true;
        }
    })

    const sortedPosts = latestPost.sort((postA, postB) => postA > postB ? -1 : 1);

    return sortedPosts;

}

