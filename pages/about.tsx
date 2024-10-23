import React, { useState } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import {ABOUT}  from '../constants';
import Skills from '../components/Skills'


const About: NextPage = () => {

    const [activeSection, setActiveSection] = useState('PROF');
    const activeProperties = activeSection === 'PROF' ? ABOUT.PROF : ABOUT.PRIV;

    return (
        <div className="">
            <div className="flex flex-col items-start justify-center w-full max-w-3xl mx-auto mb-16 md:mt-6 px-8 ">
                <h1 className="justify-center m-4 text-3xl font-bold tracking-tight text-black place-self-center dark:text-blue-300 md:text-5xl">
                    {ABOUT.title}
                </h1>
                <h2 className="mb-4 text-gray-600 dark:text-gray-600 tracking-widest">
                    <p>
                        {ABOUT.PRIV.description}
                    </p>
                </h2>  

                    <h1 className="m-4 text-xl font-bold tracking-widest text-black dark:text-blue-300 md:text-3xl">
                        Funfacts
                    </h1>
                    <h2 className="prose mb-16 text-gray-600 dark:text-gray-600 dark:prose-dark tracking-widest">
                        <ul>
                            <li>
                                <p>{"I have a Boxer, his name is Mini and weighs 35kg :) "}
                                    <Link
                                        href="https://instagram.com/minitheboxer"
                                        className="text-primary hover:text-primary-dark dark:text-gray-600 dark:hover:text-primary-dark">
                                        {"His Instagram."}
                                    </Link>
                                </p>
                            </li>
                        </ul>
                        {ABOUT.PRIV.description_2.map((item, key) =>    {
                            return (
                                <ul className="list-disc" key={key}>
                                    <li>
                                        <p className="tracking-widest">
                                            {item}
                                        </p>
                                    </li>
                                </ul>
                                )
                            })}
                    </h2>
                    <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-blue-300 md:text-3xl">
                        Hobbies
                    </h1>
                    <h2 className="prose mb-16 text-gray-600 dark:text-white-gray dark:prose-dark tracking-widest">
                        {ABOUT.PRIV.hobbies.map((item, key) =>  {
                            return (
                            <ul className="list-disc" key={key}>
                                <li>
                                    <p className="tracking-widest dark:text-gray-600">
                                        {item}
                                    </p>
                                </li>
                            </ul>
                            )
                        })}
                    </h2>

                <h1 className="mb-4 text-xl font-bold text-black dark:text-blue-300 md:text-3xl tracking-widest">
                    Phrases i Live by:
                </h1>
                <h2 className="prose mb-16 text-gray-600 dark:text-gray-600 dark:prose-dark tracking-widest">
                    {ABOUT.PRIV.phrases.map((item, key) =>    {
                        return (
                        <ul className="list-disc" key={key}>
                            <li>
                                {item}
                            </li>
                        </ul>
                        )
                    })}
                </h2>

                <h1 className="mb-4 text-xl font-bold text-black md:text-3xl tracking-widest dark:text-blue-300">
                    {ABOUT.PROF.title}
                </h1>
                <h2 className="mb-1 text-gray-500 dark:text-gray-600 tracking-widest">
                    <p>
                        {ABOUT.PROF.description}
                    </p>
                </h2>
                <Skills/>
                <h1 className="mb-4 text-xl font-bold tracking-tight text-black dark:text-gray-400 md:text-3xl">
                    At Work
                </h1>
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
)}

export default About;



                            
            