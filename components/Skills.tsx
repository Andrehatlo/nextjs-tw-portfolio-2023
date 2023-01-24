import React from 'react';
import { SKILLS } from '../constants';
import { IconType }   from 'react-icons/lib';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon }  from '../components/Icon';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = ({}) => {


	const renderIcon = (name: string, icon: IconType, index: number) => {
		return(
			<div className="m-2 text-black lg:text-4xl md:text-2xl sm:text-lg dark:text-blue-300" key={index}>
		
				<motion.div className="flex justify-between mb-8" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }}>   
                    <Icon icon = {icon} children = {
						<motion.h2 initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="font-bold tracking-tight lg:text-2xl md:text-xl sm:text-lg">
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
			
				<div className="flex flex-col items-center justify-center flex-1 w-full space-x-4 text-center">
					{SKILLS.map(({ title, skills }, index) => (
						<div key={index}>
							<h1 className="my-4 text-base tracking-widest uppercase">
								{title}
							</h1>
							<div className="flex flex-wrap gap-6 transform-gpu seq">
								{skills.map(({name, icon, url}, index) => (
									<Link href={url} className="href" key={index}>
										<div key={index}>
											{renderIcon(name, icon, index)}
										</div>
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
    );
};

export default Skills;


