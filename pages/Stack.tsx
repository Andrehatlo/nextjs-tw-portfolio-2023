import React from "react";
import Skills from "../components/Skills";

interface StackProps {
}

const Stack: React.FC<StackProps> = () => {
    return (            
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                <Skills />
            </div>
        </div>
    );
};

export default Stack;