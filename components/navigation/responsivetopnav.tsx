import React, {useState} from 'react';
import Link from 'next/link';
import Hamburger from './hamburger';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return(
            // {/* <!-- I've set max-w-screen-md, you may need to change it -->*/}
            <nav className="fixed inset-x-0 top-0 z-10 flex items-center justify-between max-w-screen-md mx-auto bg-white shadow">
              <button className="p-3 focus:outline-none md:hidden" title="Open side menu" onClick={toggleMenu}>
                {/* <!-- SVG For "x" button --> */}
                <svg id="mobileMenuButtonClose" className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {/* <!-- SVG For "Menu burger" button --> */}
                <svg id="mobileMenuButtonOpen" className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div id="sideMenuHideOnMobile" className={`bg-white font-semibold z-10 rounded-bl-md flex absolute top-0 right-0 transition-all duration-500 transform translate-x-0 w-1/2 md:w-auto px-3 md:px-0 flex-col md:flex-row ${isMenuOpen ? 'translate-y-0 mt-1' : '-translate-y-full'} md:items-center md:mx-1 md:uppercase`}>
                <Link href="#" className="py-1 mx-0 my-2 transition-all duration-500 border-b-2 border-transparent sm:mx-2 hover:border-pink-600 hover:text-pink-700 sm:p-0">Project</Link>
                <Link href="#" className="py-1 mx-0 my-2 transition-all duration-500 border-b-2 border-transparent sm:mx-2 hover:border-pink-600 hover:text-pink-700 sm:p-0">Resource</Link>
                <Link href="#" className="py-1 mx-0 my-2 transition-all duration-500 border-b-2 border-transparent sm:mx-2 hover:border-pink-600 hover:text-pink-700 sm:p-0">Blog</Link>
              </div>
            </nav>
        )
    }
        
export default NavBar;

        
        
        
        
        


//     )}

//     return(
//         // {/* <!-- I've set max-w-screen-md, you may need to change it -->*/}
//         <nav className="fixed inset-x-0 top-0 z-10 flex items-center justify-between max-w-screen-md mx-auto bg-white shadow">
            
//             <Link href="" className="inline-flex m-3 font-extrabold uppercase transition-all hover:text-pink-700 duration-500Link">
//                 <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path fill="fff" d="M12 14l9-5-9-5-9 5 9 5z" />
//                     <path fill="fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
//                 </svg>
//                 NEED JOB
//             </Link>
        
//             <button id="mobileMenuButton" className="p-3 focus:outline-none md:hidden" title="Open side menu">
//             {/* <!-- SVG For "x" button --> */}
//                 <svg id="mobileMenuButtonClose" className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
//             {/* <!-- SVG For "Menu burger" button --> */}
//                 <svg id="mobileMenuButtonOpen" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//             </button>
        
//         {/* //   <!-- List of nav item --> */}

//             <div id="sideMenuHideOnMobile" className="absolute top-0 right-0 z-10 flex flex-col w-1/2 px-3 font-semibold transition-all duration-500 transform translate-x-0 -translate-y-full bg-white rounded-bl-md md:w-auto md:px-0 md:flex-row md:translate-y-0 md:mt-1 md:items-center md:mx-1 md:uppercase">
//                 <Link href="" className="py-1 mx-0 my-2 transition-all duration-500 border-b-2 border-transparent sm:mx-2 hover:border-pink-600 hover:text-pink-700 sm:p-0">Project</Link>
//                 <Link href="" className="py-1 mx-0 my-2 transition-all duration-500 border-b-2 border-transparent sm:mx-2 hover:border-pink-600 hover:text-pink-700 sm:p-0">Resource</Link>
//                 <Link href="" className="py-1 mx-0 my-2 transition-all duration-500 border-b-2 border-transparent sm:mx-2 hover:border-pink-600 hover:text-pink-700 sm:p-0">About</Link>
//             </div>
        
//         </nav>
//     )
// }



//     <script>
//     var mobileMenuButton = document.getElementById("mobileMenuButton");
//     mobileMenuButton.onclick = function() {
//         document.getElementById("sideMenuHideOnMobile").classList.toggle("-translate-y-full");
//         document.getElementById("sideMenuHideOnMobile").classList.toggle("mt-12");
//         document.getElementById("sideMenuHideOnMobile").classList.toggle("shadow");
//         document.getElementById("mobileMenuButtonClose").classList.toggle("hidden");
//         document.getElementById("mobileMenuButtonOpen").classList.toggle("hidden");
//     }
//       // Hide element when click outside nav
//     var theElementContainer = document.getElementsByTagName("nav")[0];
//     document.addEventListener('click', function(event) {
//         if (!theElementContainer.contains(event.target)) {
//             document.getElementById("sideMenuHideOnMobile").classList.add("-translate-y-full");
//             document.getElementById("sideMenuHideOnMobile").classList.remove("mt-12");
//             document.getElementById("sideMenuHideOnMobile").classList.remove("shadow");
//             document.getElementById("mobileMenuButtonOpen").classList.remove("hidden");
//             document.getElementById("mobileMenuButtonClose").classList.add("hidden");
//         }
//     });
//     </script>