import React, {useState} from 'react';
import Link from 'next/link';

const Nav = () => {
      const [isOpen, setIsOpen] = useState(false)
    
      const toggleMenu = () => {
        setIsOpen(!isOpen)
      }
    
    return (
    <nav className="w-full py-4 bg-black-500">
      <div className="container relative flex items-center justify-between mx-auto">
        <Link href="/"
           className="text-xl font-bold text-pink-500">
            My App
        </Link>
        <div className="flex items-center sm:hidden">
          <button
            className="block px-3 py-2 text-gray-300 rounded-full hover:text-gray-100 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-4 h-4 fill-current stroke-green-700" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } sm:block sm:items-center sm:w-full sm:text-gray-100 absolute top-0 right-10 mt-4 -mr-4 py-2 mx-4 px-4 bg-white-500 rounded-lg shadow-xl z-10`}
          >
            <Link href="/about"
               className="block mt-4 mr-4 font-medium sm:inline-block sm:mt-0 hover:text-black-100">
                About
            </Link>
            <Link href="/contact"
               className="block mt-4 font-medium sm:inline-block sm:mt-0 hover:text-gray-100">
                Contact
            </Link>
            <Link href="/weather"
               className="block mt-4 mr-4 font-medium sm:inline-block sm:mt-0 hover:text-gray-100">
                Weather
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
    