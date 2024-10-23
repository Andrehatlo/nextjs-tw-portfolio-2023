import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { METADATA } from '../constants';
import { motion } from "framer-motion";

interface MetaContainerProps {
    children: React.ReactNode;
}

const MetaContainer: React.FC<MetaContainerProps> = ({children}) => {
    const router = useRouter();
    const meta = METADATA;

    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index"/>
                <meta content={meta.description} name="description"/>
                <meta
                    property="og:url"
                    content={`${meta.siteurl}${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`${meta.siteurl}${router.asPath}`}
                />
                <meta property="og:type" content={meta.type}/>
                <meta property="og:site_name" content={meta.sitename}/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:image" content={meta.image}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@andrehatlo"/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description" content={meta.description}/>w
                <meta name="twitter:image" content={meta.image}/>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date}/>
                )}
            </Head>
            <main className="w-full">
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
                    <Navbar/>
                    <div>{children}</div>
                </motion.div>
                <Footer/>
            </main>
        </div>
    );
}

export default MetaContainer;