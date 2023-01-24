import React, { useState } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import {ABOUT}  from '../constants';


const About: NextPage = () => {

    const [activeSection, setActiveSection] = useState('PROF');
    const activeProperties = activeSection === 'PROF' ? ABOUT.PROF : ABOUT.PRIV;

    return (
        <div className="">
            <div className="flex flex-col justify-center px-8 md:mt-6">
            <div className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-16">
                    <h1 className="justify-center mb-4 text-3xl font-bold tracking-tight text-black place-self-center dark:text-white md:text-5xl">
                    {ABOUT.title}
                </h1>
                <h2 className="mb-16 text-gray-600 dark:text-[#c2c2c2]">
                    <p className="mb-6">
                        {ABOUT.PRIV.description}
                    </p>
                </h2>  
                <div className="place-self-center"> 
                    <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
                        Funfacts
                    </h1>
                    <h2 className="prose mb-16 text-gray-600 dark:text-white dark:prose-dark">
                        <ul className="list-disc">
                            <li>
                            {ABOUT.PRIV.description_2.map((item, key) =>    {
                                return (
                                    <ul className="list-disc" key={key}>
                                        <li>
                                        {item}
                                        </li>
                                    </ul>
                                    )
                                })}

                                <Link
                                    href="https://instagram.com/minitheboxer"
                                    className="text-primary hover:text-primary-dark dark:text-white dark:hover:text-primary-dark">
                                    Mini has his own Instagram account
                                </Link>
                            </li>
                        </ul>
                    </h2>
                    <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
                        Hobbies</h1>
                    <h2 className="prose mb-16 text-gray-600 dark:text-white-gray dark:prose-dark">
                    {ABOUT.PRIV.hobbies.map((item, key) =>  {
                        return (
                        <ul className="list-disc" key={key}>
                            <li>
                            {item}
                            </li>
                        </ul>
                        )
                    })}
                    </h2>
                </div>
                {/* <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
                    Phrases
                </h1>
                <h2 className="prose mb-16 text-gray-600 dark:text-[#c2c2c2] dark:prose-dark">
                {ABOUT.PRIV.phrases.map((item, key) =>    {
                    return (
                    <ul className="list-disc" key={key}>
                        <li>
                        {item}
                        </li>
                    </ul>
                    )
                })}
                </h2> */}

                <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
                    {ABOUT.PROF.title}
                    </h1>
                    <h2 className="mb-16 text-gray-500 dark:text-gray-600">
                    <p>
                        {ABOUT.PROF.description}
                    </p>
                    
                </h2>



                <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-white md:text-3xl">
                    At Work</h1>
                <h2 className="prose mb-16 text-gray-600 dark:text-gray-600 dark:prose-dark">
                {ABOUT.PROF.description_2.map((item, key) =>    {
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



                            
            