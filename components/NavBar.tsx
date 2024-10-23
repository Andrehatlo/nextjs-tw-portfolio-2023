import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MENULINKS } from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'
import ThemeSwitch from './ThemeSwitch';


interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [open, setOpen] = useState(false)
  
    return (
      <nav className="sticky top-0 left-0 right-0 z-20 w-full bg-white shadow dark:shadow-slate-400 md:py-1 md:mb-6 dark:bg-black">
          <div className="items-center justify-between py-4 md:flex md:px-10 px-7">
            {/* Logo Styling and Placement */}
            <div className="flex items-center text-2xl font-bold cursor-pointer light:text-gray-800 dark:text-white ">
              <span className="w-12 h-12 mr-1 light:text-black dark:text-white">
                <Link href="/" className="inline-flex m-3 font-extrabold uppercase hover:text-cyan-700 dark:hover:text-yellow-300">
                    {/* Logo Here */}
                    Dev.
                    {/* End Logo Here */}
                </Link> 
              </span>
              <div className="flex flex-col pl-4">
                <ThemeSwitch />
              </div>
            </div>
            {/* Hamburger icon */}
            <div onClick={() => setOpen(!open)} className="lg:hidden md:hidden">
   
              {open ? (
                <FontAwesomeIcon icon={faX} 
                  className="absolute w-10 h-10 cursor-pointer light:text-black right-8 top-8 md:hidden lg:hidden dark:text-white"/>
              ) : (
                <FontAwesomeIcon icon={faBars} id="hamburger"
                  className="absolute w-10 h-10 cursor-pointer light:text-black right-8 top-8 md:hidden lg:hidden dark:text-white"/>
              )}
            </div>        
            {/* END Hamburger icon */}            
            {/* Popout Menu */}  
            <ul
              className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white dark:bg-black  md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0 pl-9 ${
                open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"
              }`}
            >
            {/* END Popout Menu */}  
            {/* Links and Icons */}
              {MENULINKS.map((link, index) => (
                <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
                  <div className="flex items-center justify-between">
                    <Link className="flex items-center space-x-2 light:text-gray-800 hover:text-gray-400 dark:text-white dark:hover:text-blue-600" href={link.links}>
                      <span>
                        <p className="">
                          {link.name}
                        </p>
                      </span>
                    </Link>
                  </div>
                </li>
              ))}
            {/* END Links and Icons */}
            </ul>
          </div>
        </nav>
      // </div>
    );
};

export default Navbar;