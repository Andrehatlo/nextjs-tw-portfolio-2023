import React from "react";
import Link from 'next/link';
import { SOCIAL_LINKS } from "../constants";
import { IconType } from "react-icons";
import { Icon } from './Icon'
import {motion} from 'framer-motion';

interface FooterProps { 
}

const Footer: React.FC<FooterProps> = ({}) => {
    const social = SOCIAL_LINKS; 

    const renderIcon = (icon: IconType, name: string, index: number) => {
		return(
			<div 
				className="m-2 text-black lg:text-4xl md:text-2xl sm:text-lg dark:text-blue-300" 
				key={index} 
			>
                <motion.div
				className="flex justify-between mb-8"
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{
					delay: 0.1,
				}}
                >   
                    <Icon icon = {icon} children = {
						<motion.h2
							initial={{ x: 100, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
							delay: 0.2,
							}}
							className="font-bold tracking-tight lg:text-2xl md:text-xl sm:text-lg">
								{name}
						</motion.h2>} 
					/> 
				</motion.div>
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

                        {/* Running through constants.js SOCIAL_LINKS and rendering icoins through `renderIcon method */}
                        {social.map(({icon, name, url}, index) => (
                            <Link href={url} key={index}>
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