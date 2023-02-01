import React from 'react';
import Link from 'next/link';
import NavBar from './NavBar'
import Footer from './Footer'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <div className="w-full min-h-screen">
            <div className='flex flex-row justify-around h-16 align-middle'>
                <NavBar/>
                <h1 className='my-auto font-mono text-2xl'>Simple Blog</h1>
                <Link href={`/`} className='my-auto'>
                    Github Code
                </Link>
            </div>
            <div className='container justify-center w-5/6 mx-auto mt-16 md:w-3/5'> 
                {children}
            </div>
        </div>
    );
};

export default Layout;
    