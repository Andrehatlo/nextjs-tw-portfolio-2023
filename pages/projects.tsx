import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';


interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
    return(
        <motion.div

            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-6xl font-bold">
                    Projects
                </h1>
                <p className="mt-3 text-2xl">
                    Here are some of my projects
                </p>
                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <Link href="/projects/nextjs-blog" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                            <h3 className="text-2xl font-bold">Next.js Blog &rarr;</h3>
                            <p className="mt-4 text-xl">
                                A blog made with Next.js and Tailwind CSS.
                            </p>

                    </Link>
                    <Link href="/projects/nextjs-portfolio" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                            <h3 className="text-2xl font-bold">Next.js Portfolio &rarr;</h3>
                            <p className="mt-4 text-xl">
                                A portfolio made with Next.js and Tailwind CSS.
                            </p>

                    </Link>
                    <Link href="/projects/nextjs-ecommerce" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                            <h3 className="text-2xl font-bold">Next.js Ecommerce &rarr;</h3>
                            <p className="mt-4 text-xl">
                                An ecommerce made with Next.js and Tailwind CSS.
                            </p>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;