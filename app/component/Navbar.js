"use client"
import React from 'react'
import { Link } from "react-scroll";
import Link2 from 'next/link';

const Navbar = () => {
    return (
        <div className='bg-black mt-[20px] h-[50px] w-[80vw] rounded-full flex justify-between p-3  items-center text-[#a7a7a7] m-auto'>
            <div><img src="logo.png" alt="Logo" className=" h-40 filter invert hidden md:block" /></div>
            <div className='justify-center items-center flex md:justify-between md:flex-row flex-col '>
                <div className='justify-center items-center flex  gap-10 text-center'>
                    <nav className='flex gap-10 text-center items-center justify-center px-4'>
                        <Link className='transition-colors duration-200 ease-in-out hover:text-purple-800 hover:cursor-pointer' to="http://localhost:3000" spy={true} smooth={true} duration={800}>Home</Link>
                        <Link2 href="/about" className='transition-colors duration-200 ease-in-out hover:text-purple-800 hover:cursor-pointer'>About</Link2>
                        <Link className='transition-colors duration-200 ease-in-out hover:text-purple-800 hover:cursor-pointer' to="projects" spy={true} smooth={true} duration={800}>Projects</Link>
                        <Link className='transition-colors duration-200 ease-in-out hover:text-purple-800 hover:cursor-pointer' to="skills" spy={true} smooth={true} duration={800}>Skills</Link>

                    </nav>
                </div>
                <div className='ml-10  bg-[#a7a7a7] text-black font-bold w-fit px-4 py-1 rounded-full
             text-sm hover:bg-white  transition-colors duration-300 h-[40px] flex justify-center items-center md:mt-0 mt-4'><Link className='hover:cursor-pointer' to="contact" spy={true} smooth={true} duration={800}>Contact Me</Link></div>
            </div>
        </div>
    )
}

export default Navbar
