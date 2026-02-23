"use client"
import React from 'react'
import Link from 'next/link'

const about = () => {
    return (
        <>
            <div className='font-sans bg-gray-200 text-black min-h-screen p-2 md:p-[10px]'>
                <div className="bg-white w-full md:w-[85vw] min-h-screen m-auto shadow-gray-700 shadow-lg rounded-3xl relative mt-5 md:mt-10 mb-5 md:mb-10 p-4 md:p-5">

                    {/* Navbar */}
                    <div className='bg-[#283D2C] min-h-[60px] w-full md:w-[80vw] rounded-2xl md:rounded-full flex flex-col md:flex-row justify-between p-3 items-center text-white m-auto gap-4 md:gap-0'>
                        
                        <div className='flex flex-col md:flex-row text-center items-center justify-center gap-2'>
                            <img src="design.png" alt="" className='h-[35px] rounded-full' />
                            <div className='font-bold'>Abhishek.</div>
                        </div>

                        <div className='flex flex-wrap md:flex-nowrap gap-4 md:gap-10 text-center items-center justify-center px-2 md:px-4 text-sm md:text-base'>
                            <Link className='hover:text-[#E19419] transition-colors duration-200' href="/">Home</Link>
                            <Link className='hover:text-[#E19419] transition-colors duration-200' href="/about">About</Link>
                            <Link className='hover:text-[#E19419] transition-colors duration-200' href="/#projects">Projects</Link>
                            <Link className='hover:text-[#E19419] transition-colors duration-200' href="/#skills">Skills</Link>
                        </div>

                        <div className='flex justify-center bg-white text-[#283D2C] font-bold px-4 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300'>
                            <Link className='flex justify-center items-center font-bold' href="/#contact">Contact Me</Link>
                        </div>
                    </div>

                    {/* Hero Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center mt-10 md:mt-20 gap-10">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-center md:text-left">
                                I’m <span className="underline text-[#E19419] hover:text-[#bd7502]">Abhishek Tripathi ,</span><br />
                                MERN Stack Developer <br />
                                Based in INDIA.
                            </h2>
                            <p className="mt-4 text-sm md:text-base max-w-md text-center md:text-left mx-auto md:mx-0">
                                I am a MERN Stack developer with 1.5 years of hands-on experience building various projects. I have worked on developing responsive, full-stack web applications and am actively seeking opportunities to contribute and grow in a dynamic team.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img src="profile.png" alt="Profile Image" className="w-60 md:w-auto" />
                        </div>
                    </div>

                    {/* Decorative Lines */}
                    <div className='bg-[#283D2C] h-1 w-2/3 md:w-[40vw] ml-auto rounded-2xl mt-5'></div>
                    <div className='bg-[#E19419] w-full h-4'></div>
                    <div className='bg-[#283D2C] h-1 w-1/2 md:w-[30vw] rounded-2xl mt-0'></div>

                    {/* Internship Section */}
                    <div className='mt-7 min-h-full' id='intern'>
                        <h2 className="text-2xl md:text-3xl font-bold m-1 text-[#283D2C] text-center md:text-left">
                            Internships & Certificates:
                        </h2>

                        <section className="bg-[#283D2C] text-white px-4 md:px-10 py-10 md:py-20 mt-6 md:mt-10 rounded-2xl">
                            
                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold">Internship at Launched Global</h3>
                                <p className="mt-2 text-sm"> Completed a 2-month internship where I developed a full-stack web application using the MERN stack, gaining hands-on experience in building responsive user interfaces and secure backend APIs. Worked on a project that involved creating a task management application, implementing features such as user authentication, CRUD operations, and real-time talk using Socket.io and nodemailer. </p> <a className='font-bold text-[#E19419]' href="https://drive.google.com/file/d/1UWEcEDdd0YqG9PxExQIpmWcBjz7EqBdm/view?usp=drivesdk">View Certificate</a>
                            </div>

                            <div className='bg-[#E19419] w-full mt-4 rounded-2xl h-1'></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                                
                                {/* Left Column */}
                                <div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold">Certificate in Full-Stack Development</h3>
                                        <p className="mt-2 text-sm"> Earned a certificate in Full-Stack Development after completing a comprehensive course covering frontend technologies like React and backend development with Node.js and Express. </p> <a className='font-bold text-[#E19419]' href="https://drive.google.com/file/d/1ArifROLBH0HVl8KDtORmvlROcmew3_xY/view?usp=drivesdk">View Certificate</a>
                                    </div>

                                    <div className='my-8'>
                                        <h3 className="text-lg md:text-xl font-semibold">Certificate in Data Analytics and Visualization</h3>
                                        <p className="mt-2 text-sm"> Earned a certificate in Data Analytics and Visualization after completing a comprehensive course covering data analysis techniques, visualization tools, and statistical methods. </p> <a className='font-bold text-[#E19419]' href="https://drive.google.com/file/d/1lBrlYm4THzJSyGGpOzv96slmcBk8IGqp/view?usp=drivesdk">View Certificate</a>
                                    </div>

                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold">Certificate in SIH</h3>
                                        <p className="mt-2 text-sm"> Earned a certificate in SIH (Smart India Hackathon) after completing a comprehensive project involving problem-solving and software development. </p> <a className='font-bold text-[#E19419]' href="https://drive.google.com/file/d/13N4HBNaVgg7_wcd2etYtyaGbJyftiAqZ/view?usp=drivesdk">View Certificate</a>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold">CODECHEF Certificate in Problem solving</h3>
                                        <p className="mt-2 text-sm"> Earned a certificate in Problem Solving from CodeChef, demonstrating proficiency in solving algorithmic challenges and improving problem-solving skills. </p> <div><a className='font-bold text-[#E19419]' href="https://drive.google.com/file/d/1dsaxQY1eCb7a1odGJYA7khHibOD5CGx5/view?usp=drivesdk">View Certificate</a>
                                    </div>
                                    </div>

                                    <div className='mt-8'>
                                        <h3 className="text-lg md:text-xl font-semibold">Certificate in Cloud Computing</h3>
                                        <p className="mt-2 text-sm"> Completed a certificate program in Cloud Computing, gaining knowledge of cloud platforms like AWS and understanding how to deploy and manage applications in the cloud environment. </p> <div><a className='font-bold text-[#E19419]' href="https://www.credly.com/badges/03318949-4066-4890-bbf3-994aeed4a82b/linked_in?t=sow8j3">Introduction to cloud computing</a></div> <a className='font-bold text-[#E19419]' href="https://www.credly.com/badges/32180413-cb27-4df2-bd7c-0a815a61db1e/linked_in?t=t09afv">Cloud Foundation</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* About Section */}
                    <section className="bg-[#283D2C] text-white px-4 md:px-10 py-10 md:py-20 mt-10 rounded-2xl text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            About <span className="text-[#E19419]">Myself...</span>?
                        </h3>

                        <p className="mt-4 max-w-xl text-sm mx-auto md:mx-0">
                            I have developed responsive, user-friendly full-stack applications...
                        </p>

                        <div className="flex flex-col md:flex-row gap-8 md:gap-10 mt-8 items-center md:items-start">
                            <div>
                                <p className="text-2xl font-bold">10+</p>
                                <p className="text-sm">Projects Completed</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">DSA-Focused</p>
                                <p className="text-sm">Aspiring Software Engineer</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">1.5+</p>
                                <p className="text-sm">Years Working with MERN Stack</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}

export default about