import React from 'react';
import Skills from '../components/Skills';
import { ABOUT } from '../constants';

interface Testprops {

}

const Test: React.FC<Testprops> = ({}) => {
    return (
        <div className='flex items-center min-h-screen p-10 bg-indigo-500'>
            <div className='max-w-2xl mx-auto'>
                <div className='w-40 h-4 mb-6 bg-indigo-400 rounded'></div>

                <div className='flex items-center space-x-6 lg:space-x-12'>
                    <div className='w-20 h-20 bg-white rounded-lg shadow-xl'>

                    </div>
                    <div className='w-20 h-20 bg-white rounded-lg shadow-xl'>

                    </div>
                    <div className='w-20 h-20 bg-white rounded-lg shadow-xl'>
                        <Skills />
                    </div>
                    <div className='w-20 h-20 bg-white rounded-lg shadow-xl'>

                    </div>
                </div>
            </div>
        </div>
    );
}    

export default Test;