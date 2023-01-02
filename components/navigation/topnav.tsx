import React from 'react';
import Link from 'next/link';

const Topnav = () => {
    return(
        <div>
            {/* <!-- Create Navbar Menu --> */}
            <header className="min-h-screen bg-gray-100">
            <nav className="flex items-center justify-between h-20 p-6 bg-white shadow-sm">
                <div className="px-3 py-5 text-sm font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-indigo-700 to-blue-500 hover:cursor-pointer hover:shadow-lg">LOGO</div>
                <ul>
                <li className="space-x-5 text-xl">
                    <Link href="#" className="hidden text-gray-700 sm:inline-block hover:text-indigo-700">
                        Home
                    </Link>
                    <Link href="#" className="hidden text-gray-700 sm:inline-block hover:text-indigo-700">
                        About
                    </Link>
                    <Link href="#" className="hidden text-gray-700 sm:inline-block hover:text-indigo-700">
                        Servics
                    </Link>
                    <Link href="#" className="hidden text-gray-700 sm:inline-block hover:text-indigo-700">
                        Products
                    </Link>
                </li>
                <div className="space-y-1 sm:hidden hover:cursor-pointer">
                    <span className="block w-10 h-1 bg-gray-600 rounded-full"></span>
                    <span className="block w-10 h-1 bg-gray-600 rounded-full"></span>
                    <span className="block w-10 h-1 bg-gray-600 rounded-full"></span>
                </div>
                </ul>
            </nav>
            </header>
        </div>
    )
}
