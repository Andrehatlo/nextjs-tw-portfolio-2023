import React from 'react';
import { motion } from 'framer-motion';

interface PageLoaderProps {}

const PageLoader: React.FC<PageLoaderProps> = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-white"
        >
            <h1 className="text-2xl font-bold">Loading...</h1>
        </motion.div>
    );
};

export default PageLoader;