import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { METADATA } from '../constants';

export default function MetaContainer({children, ...customMeta}) {
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
                <meta name="twitter:description" content={meta.description}/>
                <meta name="twitter:image" content={meta.image}/>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date}/>
                )}
            </Head>
            <main className="w-full">
                <Navbar/>
                <div>{children}</div>
                <Footer/>
            </main>
        </div>
    );
}