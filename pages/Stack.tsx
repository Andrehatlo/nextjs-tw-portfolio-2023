import React from "react";
import Skills from "../components/Skills";
import { motion } from 'framer-motion';

interface StackProps {
}

const Stack: React.FC<StackProps> = () => {
    return (
        <div>
            <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                }}
            >
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <h1 className="text-6xl font-bold">
                        My Toolbelt.
                    </h1>
                    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                        <Skills />
                    </div>
                </div>
            </motion.div>   
        </div>
    );
};

export default Stack;