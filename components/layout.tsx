import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import { METADATA } from '../constants';



const Layout = ({children}) => {
    return(
        <div className="w-full min-h-screen">
            <div className='flex flex-row justify-around h-16 align-middle'>
                <NavBar/>
                <h1 className='my-auto font-mono text-2xl'>Simple Blog</h1>
                <Link href={`/`} className='my-auto'>
                    Github Code
                </Link>
            </div>
            <div className='container w-5/6 mx-auto mt-16 md:w-3/5'>
                {children}
            </div>
        </div>


        // <div className="flex flex-col"> {/* Flexbox Layout Container */}
        //     <div className="items-center justify-center min-h-screen ">  {/* Centering Content */}
        //         <Head>
        //             <title>{METADATA.title}</title><link rel="icon" href="/favicon.ico" />
        //         </Head>
        //         <div className="max-w-screen-sm px-4 mx-auto">

        //         <NavBar/>
        //         <main className="container flex-1 px-4 py-16 mx-auto"> 
        //             {children}
        //         </main>
        //         </div>
        //     </div>
        //     {/* </div> */}
        // </div>
    );
};

export default Layout;
    