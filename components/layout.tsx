import React from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar';

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
                {/* <div className='grid gap-2 mt-12 sm:grid-cols-2 lg:grid-cols-3'> */}
                    {children}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Layout;
    