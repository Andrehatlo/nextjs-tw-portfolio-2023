import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
    post: {
        slug: string;
        data: {
            title: string;
            date: string;
            metaTitle: string;
            metaDesc: string;
            tags: string[];
            socialImage: string;
        };
    };
}

const Card: React.FC<BlogCardProps> = ({post}) => {
    console.log(post.data.tags);
    console.log(post);
    return (
        <div className="container flex flex-wrap w-full p-6 mx-auto transition duration-500 transform hover:scale-110"> 
            <article className="max-w-md mt-4 duration-300 rounded-md shadow-lg dark:shadow-slate-50 dark:shadow-lg hover:shadow-sm hover:shadow-indigo-500/40">
            <Link href={`blog/${post.slug}`} >
                <img
                    src={post.data.socialImage}
                    loading="lazy"
                    alt={post.data.title}
                    className="object-cover w-full h-48 rounded-t-md " 
                    />
                    <div className="flex pt-3 mt-2 ml-4 mr-2">
                        <span className="block text-sm dark:text-gray-100 light:text-gray-400">{post.data.date}</span> 
                    </div>
                    <div className="pt-3 mb-3 ml-4 mr-2">
                        <h3 className="text-xl light:text-gray-900 dark:text-white" >
                            {post.data.metaTitle}
                        </h3>
                        <div className='mt-1 text-sm prose '>
                            <p className="dark:text-white light:text-gray-400">{post.data.metaDesc}</p>
                        </div>
                        <div className="flex flex-wrap">
                            {post.data.tags.map((tag) => (
                                <div className="pr-1 mt-2">
                                    <p className="flex px-1 space-x-4 text-sm font-medium text-center bg-pink-400 rounded-lg justify-star dark:bg-green-900 light:text-white dark:text-pink hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                    </p>
                                </div>
                            ))}
                          </div>
                    </div>
                </Link>
            </article>
        </div>
    )
}

export default Card;