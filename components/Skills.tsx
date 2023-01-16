import React from 'react';
import Icon from './Icon';
import {SKILLS} from '../constants';
import { IconType } from 'react-icons/lib';
import { motion } from 'framer-motion';

interface SkillsProps {}


// Displays icons name on hover
const Skills: React.FC<SkillsProps> = ({}) => {
	const stack = SKILLS;

	const renderIcon = (icon: IconType, name: String, index: number) => {
		return(
			<div 
				className="m-2 text-xl text-black dark:text-blue-300" 
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
						</motion.h2>
					} 
					/> 
				</motion.div>
			</div>
		);
	}

    return (
		<div className="py-6 mt-12 lg:mt-18 sm:pb-36 sm:py-12">
			<div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-gray-100">
			<h1 className="mb-4 text-xl font-bold tracking-tight text-center text-black dark:text-white md:text-3xl">
            	 My Stack</h1>
				<div className="flex flex-col items-center justify-center flex-1 w-full space-x-4 text-center">
					{stack.map(({ title, skills }, index) => (
						<div key={index}>
							<h1 className="my-4 text-base tracking-widest uppercase">
								{title}
							</h1>
							<div className="flex flex-wrap gap-6 transform-gpu seq">
								{skills.map((skill, index) => (
									<div>{renderIcon(skill.icon, skill.name, index)}</div>
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

