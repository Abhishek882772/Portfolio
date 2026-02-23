"use client"
import React, {useState} from 'react'
import { Link } from "react-scroll";
import content from './content'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'

const Navbar = () => {
    return (
        <div className='bg-black mt-[20px] h-[50px] w-[80vw] rounded-full flex justify-between p-3  items-center text-[#a7a7a7] m-auto'>
            <div><img src="logo.png" alt="Logo" className=" h-40 filter invert" /></div>
            <div>
                <nav className='flex gap-10 text-center items-center justify-center px-4'>
                    <Link className='transition-colors duration-200 ease-in-out hover:text-purple-800 hover:cursor-pointer' to="http://localhost:3000"  spy={true} smooth={true} duration={800}>Home</Link>
                    <a className='transition-colors duration-200 ease-in-out hover:text-purple-800 hover:cursor-pointer' href="http://localhost:3000/about">About</a>
                    <Link className='transition-colors duration-200 ease-in-out hover:text-purple-800 hover:cursor-pointer' to="projects"  spy={true} smooth={true} duration={800}>Projects</Link>
                    <Link className='transition-colors duration-200 ease-in-out hover:text-purple-800 hover:cursor-pointer' to="skills"  spy={true} smooth={true} duration={800}>Skills</Link>
                    
                </nav>
            </div>
            <div className='ml-10 flex justify-center bg-[#a7a7a7] text-black font-bold w-fit px-4 py-1 rounded-full
             text-sm hover:bg-white  transition-colors duration-300 h-[40px] flex justify-center items-center'><Link className='hover:cursor-pointer' to="contact"  spy={true} smooth={true} duration={800}>Contact Me</Link></div>

        </div>
    )
}

export default Navbar
