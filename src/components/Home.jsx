import React, { useEffect, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-300'>Hello there, my name is</p>
                <h1 className='text-3xl sm:text-6xl font-bold text-[#ccd6f6]'>Charles So</h1>
                <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0]'>Computer Science | Data Science</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a 2nd year computer sciecne and data science student studying at
                    University of Western Australia. I'm looking to sharpen my skill as being a full-stack developer specializing in building exceptional
                    digital experiences to the users. Currently I'm focused on building responsive full-stack web applications.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home