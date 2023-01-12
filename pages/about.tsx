// about page
import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';




const About: NextPage = () => {
    const [hover, setHover] = React.useState(false);

    const onHover = () => {
        setHover(true);
    }
    const onLeave = () => {
        setHover(!hover);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <NextSeo
                title="About"
                description="About page"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center"
            >
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl font-bold"
                >
                    About
                </motion.h1>
                <motion.p
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-3 text-2xl"
                >
                    I'm a software engineer based in Norway. I have a passion for building web applications and learning new technologies. I'm currently working on a few projects and learning new technologies. I'm a huge fan of music and i love to play the guitar and recently started playing the piano.
                </motion.p>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full"
                >
                    <Link
                        href="/projects"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Projects &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Check out my projects.
                        </p>
                    </Link>

                    <Link

                        href="/blog"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Blog &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Read my blog.
                        </p>
                    </Link>

                    <Link
                        href="/contact"
                        className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-2xl font-bold">Contact &rarr;</h3>
                        <p className="mt-4 text-xl">
                            Contact me.
                        </p>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
 }

export default About;