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
                    <Link href="/projects/weekly-forecast" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                            <h3 className="text-2xl font-bold">
                                6 Day Weather Forecast &rarr;
                                </h3>
                            <p className="mt-4 text-xl">
                                OpenweatherApi, React, Tailwind CSS, Next.js
                            </p>
                    </Link>
                    <Link href="/projects/weather" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                            <h3 className="text-2xl font-bold">Weather Conditions &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Simple weather app made with React and Tailwind CSS.
                            </p>
                    </Link>
                    <Link href="/" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                            <h3 className="text-2xl font-bold">Next.js, Tailwind, Framer Motion Portfolio &rarr;</h3>
                            <p className="mt-4 text-xl">
                                Responsive Portfolio from scratch. Blog, Projects, Animations, Components, API, Styling, Themeswitching. Btw you're on it right now! 
                            </p>
                    </Link>
                    <Link href="https://awsm-dash.vercel.app/" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                        <h3 className="text-2xl font-bold">Crypto Dashboard &rarr;</h3>
                        <p className="mt-4 text-xl">
                            A dashboard for crypto currencies. Made with React, Tailwind CSS, Next.js, Framer Motion, CoinGecko API.
                        </p>
                    </Link>

                </div>
            </div>
        </motion.div>
    );
}

export default Projects;