import React, { useState } from "react"
import Image from "next/image"
import Link from 'next/link'
import { INTRO, SOCIAL_LINKS } from '../constants';
import socialImg from '/public/profile.jpeg';
import { Icon } from "./Icon";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
    const intro = INTRO;
    const SocialLinks = SOCIAL_LINKS;

    return (
        <div 
            className="container px-4 mx-auto">
            <div
                className="flex flex-col-reverse text-center lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 lg:text-left">
                <div 
                    className="lg:px-4 lg:mt-12 ">
                    <h1 
                        // className="text-2xl font-bold pm-3 light:text-gray-900 lg:text-5xl dark:text-white">
                            className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
                            {intro.title} 
                    </h1>
                    <h2 className="prose mb-16 text-gray-600 dark:text-[#c2c2c2] dark:prose-dark">
                            {intro.subtitle}
                    </h2>
                    <p 
                        className="prose mb-16 text-gray-600 dark:text-[#c2c2c2] dark:prose-dark">
                            {`${intro.description + " "}`}
                    </p>
                    {/* <p>
                        <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500">
                            <span className="relative text-white"> 
                                {intro.company}.
                            </span>
                        </span>
                    </p> */}

                    {/* <p className="text-2xl italic font-semibold text-center text-slate-900 dark:text-white">
                        <br/> {`${" " + intro.company} - ${intro.companyLink}`}
                    </p> */}

                    {/* <p className="text-2xl italic font-semibold text-center text-slate-900 dark:text-white"> */}
                    <p className="prose mb-16 text-gray-600 dark:text-[#c2c2c2] dark:prose-dark">
                        <br/> {`${" " + intro.outro}`}
                    </p>
                    {/* <div className="mt-6 light:text-gray-800 dark:text-white">
                        <p className="mb-4">
                            { intro.subtitle }
                            <Link
                                href={intro.companyLink}
                                className="font-bold transition-colors hover:text-sky-500" target="_blank"
                                rel ="noopener">{intro.company}/>
                            </Link>
                        </p>

                        <p className="mb-4">
                            
                        </p>
                        <h2 className="font-bold">{intro.outro}</h2>
                    </div> */}
                </div>
                <div className="flex-shrink-0 mt-12 mb-10 lg:mt-12 lg:px-4 ">
                     <Image
                        src={socialImg}
                        alt="Profile"
                        priority={true}
                        className="mx-auto rounded-full"
                        width={250}
                        height={250}

                    />
                    <div className="flex justify-center mt-6 ">

                    </div>
                    <div className="flex justify-center mt-6 ">
                        <div
                            className="flex space-x-4 font-medium light:text-gray-800 md:flex lg:flex sm:flex sm:block dark:text-white">
                            {SocialLinks.map(({name,url, icon}, index) => (
                                <div key={index}>
                                    <Link target="_blank" rel="noreferrer" 
                                        href={url}
                                        className="transirion-colors hover:text-sky-500">
                                            <Icon icon={icon} children={" "}/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>  
        </div>  
    )
}

export default Main;