import React from 'react';

const Hamburger = () => {
    return(
        <div className="flex items-center justify-center w-full h-screen">
            <div className="flex items-center justify-center w-20 h-20 p-2 bg-white cursor-pointer group rounded-3xl hover:bg-slate-200">
                <div className="space-y-2">
                <span className="block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                <span className="block h-1 w-8 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
                </div>
            </div>
        </div>
    )
}

export default Hamburger;
