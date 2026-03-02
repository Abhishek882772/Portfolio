"use client"
import React from 'react'
import Link from 'next/link';

const content = () => {
    return (
        <div className='text-white flex flex-col justify-center 
        h-auto md:h-[80vh] 
        m-4 md:m-8 
        gap-4 border border-2 rounded-xl shadow-xl shadow-purple-500 border-[#ffffff20] p-6'>

            <div className='w-full md:max-w-[40vw] md:ml-[10%] w-[90vw] z-[999]'>

                <div className='relative w-[180px] md:w-[200px] rounded-[50px] bg-gradient-to-r 
                from-[#656565] via-[#7f42a7] via-[#6600c5] via-[#5300a0] via-[#757575] to-[#656565] 
                bg-[length:200%_auto] animate-[animationGradient_2.5s_linear_infinite] 
                bg-[position:200%_50%] shadow-[0_0_15px_#7f42a7] '>

                    <div className='flex justify-center items-center h-[30px] 
                    transition-transform duration-500 hover:text-[#5300a0]
                    rounded-2xl bg-black '>
                        I'm Abhishek <span className='text-purple-800'> Tripathi</span>
                    </div>
                </div>

                <div className='text-2xl md:text-4xl mt-5'>DEVELOPER</div>

                <div className='mt-5 text-base md:text-lg text-gray-400'>
                    Software Developer
                </div>

                <div className='mt-5 text-sm text-gray-500'>
                    I am a Full-Stack Web Developer with experience in building responsive frontend applications using React and developing secure backend APIs using Node.js and Express.
                    I have a strong foundation in Data Structures and Algorithms and actively practice problem-solving to improve performance optimization and clean code practices.
                    I am passionate about building real-world applications that solve practical problems.
                </div>

                {/* Social Icons */}
                <div className='flex flex-wrap gap-4 mt-5'>
                    <a href='https://github.com/Abhishek882772' className='bg-purple-500 w-[40px] h-[40px] md:w-[45px] md:h-[45px] p-1 rounded-full'>
                        <img src="https://cdn.simpleicons.org/github/000000" alt="" />
                    </a>

                    <a href='https://mail.google.com/mail/u/0/#inbox' className='bg-purple-500 w-[40px] h-[40px] md:w-[45px] md:h-[45px] p-1 rounded-full'>
                        <img src="https://cdn.simpleicons.org/gmail/000000" alt="" />
                    </a>

                    <a href='https://www.linkedin.com/in/abhishek-tripathi-a548142b8/' className='bg-purple-500 w-[40px] h-[40px] md:w-[45px] md:h-[45px] overflow-hidden rounded-full'>
                        <img className='invert' src="https://cdn.pixabay.com/photo/2017/11/10/05/05/linkedin-2935407_1280.png" alt="" />
                    </a>

                    <a href='https://x.com/AbhishekTr66198' className='bg-purple-500 w-[40px] h-[40px] md:w-[45px] md:h-[45px] p-2 rounded-full'>
                        <img src="https://cdn.simpleicons.org/x/000000" alt="" />
                    </a>

                    <a href='https://leetcode.com/u/Abhi_882/' className='bg-purple-500 w-[40px] h-[40px] md:w-[45px] md:h-[45px] p-2 rounded-full'>
                        <img src="https://cdn.simpleicons.org/leetcode/000000" alt="" />
                    </a>
                </div>

                {/* Buttons */}
                <div className='flex flex-col md:flex-row gap-4 mt-5'>

                    <a href="#" className='border border-[#2a2a2a] 
                    w-full md:w-[140px] h-[35px] md:h-[30px] 
                    flex justify-center items-center 
                    rounded-2xl font-bold text-[#5300a0] 
                    hover:bg-[#5300a0] hover:text-white 
                    transition-colors duration-300'>
                        RESUME
                    </a>

                    <Link href="/about#intern" className="bg-gray-200 
                    w-full md:w-[240px] h-[35px] md:h-[30px] md:text-2xs text-[12px]
                    flex justify-center items-center 
                    text-black px-4 py-2 rounded-[50px] 
                    font-bold hover:bg-[#5300a0] hover:text-white 
                    transition-colors duration-300">
                        Internships & Certificates
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default content