import React from 'react';
import Icon from '../components/Icon';
import {SKILLS} from '../constants';
import { IconType } from 'react-icons/lib';
import { motion, useAnimation } from 'framer-motion';

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = ({}) => {
	const skills = SKILLS;

	

	const renderIcon = (icon: IconType, name: String, index: number) => {
		return(
			
			<div 
				className="m-2 text-4xl text-black dark:text-blue-300" 
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
							className="text-4xl font-bold tracking-tight"
					  	>
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
				<div className="flex flex-col items-center space-x-4">

				<h3 className="my-4 text-base font-medium tracking-widest uppercase text-gray-light-2 seq"> Languages </h3>
					<div className="flex flex-wrap flex-shrink-0 gap-6 transform-gpu seq">
						{skills.languages
							.map((skill, index) => (
								<div>{renderIcon(skill.icon, skill.name, index)}</div>
              			))}
					</div>
					<h1 className="my-4 text-base tracking-widest uppercase"> 
						Frameworks 
					</h1>
					<div className="flex flex-wrap gap-6 transform-gpu seq">
					
						{skills.langFrameworks
							.map((skill, index) => (
								<div>{renderIcon(skill.icon, skill.name, index)}</div>
						))}
					</div>	
					<h1 className="my-4 text-base tracking-widest uppercase">
						 Databases 
					</h1>
					<div className="flex flex-wrap gap-6 transform-gpu seq">
						{skills.databases
							.map((skill, index) => (
								<div>{renderIcon(skill.icon, skill.name, index)}</div>
						))}
					</div>
					<h1 className="my-4 text-base tracking-widest uppercase"> 
						Styling Frameworks 
					</h1>
					<div className="flex flex-wrap gap-6 transform-gpu seq">
						{skills.stylingFrameworks
							.map((skill, index) => (
								<div>{renderIcon(skill.icon, skill.name, index)}</div>
						))}
					</div>
					<h1 className="my-4 text-base tracking-widest uppercase"> 
						Testing Frameworks 
					</h1>
					<div className="flex flex-wrap gap-6 transform-gpu seq">
						{skills.testingFrameworks
							.map((skill, index) => (
								<div>{renderIcon(skill.icon, skill.name, index)}</div>
						))}
					</div>
					<h1 className="my-4 text-base tracking-widest uppercase">
						 Tools 
					</h1>
					<div className="flex flex-wrap gap-6 transform-gpu seq">
						{skills.tools
							.map((skill, index) => (
								<div>{renderIcon(skill.icon, skill.name, index)}</div>
						))}
					</div>
					<h1 className="my-4 text-base tracking-widest uppercase"> 
						Other 
					</h1>
					<div className="flex flex-wrap gap-6 transform-gpu seq">
						{skills.other
							.map((skill, index) => (
								<div>{renderIcon(skill.icon, skill.name, index)}</div>
						))} 
					</div>
				</div>
			</div>
		</div>
    );
};

export default Skills;

