import React from "react";
import Link from 'next/link';
import { SOCIAL_LINKS } from "../constants";
import { IconType } from "react-icons";
import Icon from './Icon'

const Footer = () => {
    const social = SOCIAL_LINKS; 

    const renderIcon = (icon: IconType, name: String, index: number) => {
		return(
			<div className="m-2 text-black lg:text-4xl md:text-2xl sm:text-lg dark:text-blue-300" 
				key={index}>
					<Icon icon = {icon} children = {""}/>
			</div>
		);
	}
    return (
        <div className="py-6 mt-12 lg:mt-18 sm:pb-36 sm:py-12">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-gray-100">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-gray-300"/>
                <div className="flex flex-col items-center justify-between lg:flex-row">
                    <p>Built with Next.js, Tailwind and Typescript</p>
                    <div className="flex flex-wrap pt-2 space-x-2 font-medium sm:space-x-4 lg:pt-0">
                        {social.map(({name, url, icon}, index) => (
                            <Link
                                href={url}
                                className={"transition-colors hover:text-yellow-500"}
                                target="_blank"
                                rel="noreferrer"
                                >
                                    <div className="flex mx-auto text-xl cursor-pointer light:text-black dark:text-white">
                                        {renderIcon(icon, name, index)}
                                    </div> 
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;