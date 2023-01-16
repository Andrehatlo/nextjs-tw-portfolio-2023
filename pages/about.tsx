// about page
import React, { useState } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Skills from '../components/Skills';
import { ABOUT } from '../constants';

const About: NextPage = () => {
    const about = ABOUT;
    const [activeSection, setActiveSection] = useState('PROF');
    const activeProperties = activeSection === 'PROF' ? ABOUT.PROF : ABOUT.PRIV;

    return (
        <div className="bg-gray-50 dark:bg-gray-800">
            <div className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-800 md:mt-6">
            <div className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-16">
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                    {about.title}
                </h1>
                <h2 className="mb-16 text-gray-600 dark:text-[#c2c2c2]">
                    <p className="mb-6">
                        {about.PRIV.description}
                    </p>
                </h2>  
                <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
                    Funfacts
                </h1>
                <h2 className="prose mb-16 text-gray-600 dark:text-[#c2c2c2] dark:prose-dark">
                    <ul className="list-disc">
                        <li>
                        {about.PRIV.description_2.map((item, key) =>    {
                            return (
                                <ul className="list-disc">
                                    <li key={key}>
                                    {item}
                                    </li>
                                </ul>
                                )
                            })}

                            <Link
                                href="https://instagram.com/minitheboxer"
                                className="text-primary hover:text-primary-dark dark:text-white dark:hover:text-primary-dark dark:">
                                Mini has his own Instagram account
                            </Link>
                        </li>
                    </ul>
                </h2>
                <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
                    Hobbies</h1>
                <h2 className="prose mb-16 text-gray-600 dark:text-[#c2c2c2] dark:prose-dark">
                {about.PRIV.hobbies.map((item, key) =>    {
                    return (
                    <ul className="list-disc">
                        <li key={key}>
                        {item}
                        </li>
                    </ul>
                    )
                })}
                </h2>
                {/* <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
                    Phrases
                </h1>
                <h2 className="prose mb-16 text-gray-600 dark:text-[#c2c2c2] dark:prose-dark">
                {about.PRIV.phrases.map((item, key) =>    {
                    return (
                    <ul className="list-disc">
                        <li key={key}>
                        {item}
                        </li>
                    </ul>
                    )
                })}
                </h2> */}

                <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
                    {about.PROF.title}
                    </h1>
                    <h2 className="mb-16">
                    <p className="text-gray-500 dark:text-[#c2c2c2]">
                        {about.PROF.description}
                    </p>
                    <Skills />
                </h2>



                <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
                    At Work</h1>
                <h2 className="prose mb-16 text-gray-600 dark:text-[#c2c2c2] dark:prose-dark">
                {about.PROF.description_2.map((item, key) =>    {
                    return (
                    <ul className="list-disc">
                        <li key={key}>
                        {item}
                        </li>
                    </ul>
                    )
                })}
                </h2>
            </div>
        </div>
    </div>       
)}

export default About;



                            
            