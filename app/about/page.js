"use client"
import React from 'react'
import Link from 'next/link'

const about = () => {
    return (
        <>
            <div className='font-sans bg-gray-200 text-black min-h-screen p-[10px]'>
                <div className="bg-white w-[85vw] min-h-screen m-auto shadow-gray-700 shadow-lg rounded-3xl relative mt-10 mb-10 p-5">


                    <div className='bg-[#283D2C] h-[50px] w-[80vw] rounded-full flex justify-between p-3 items-center text-white m-auto'>
                        <div className='flex text-center items-center justify-center gap-2'>
                            <img src="design.png" alt="" className='h-[35px] rounded-full' />
                            <div className='font-bold'>Abhishek.</div>
                        </div>
                        <div className='flex gap-10 text-center items-center justify-center px-4'>
                            <Link className='transition-colors duration-200 ease-in-out hover:text-[#E19419]' href="/">Home</Link>
                            <Link className='transition-colors duration-200 ease-in-out hover:text-[#E19419]' href="/about">About</Link>
                            <Link className='transition-colors duration-200 ease-in-out hover:text-[#E19419]' href="/#projects">Projects</Link>
                            <Link className='transition-colors duration-200 ease-in-out hover:text-[#E19419]' href="/#skills">Skills</Link>
                        </div>
                        <div className='ml-10 flex justify-center bg-white text-[#283D2C] font-bold w-fit px-4 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300 h-[40px]'><Link className='flex  justify-center items-center font-bold' href="/#contact">Contact Me</Link></div>
                    </div>
                    <div className="grid grid-cols-2 justify-between items-center mt-20 gap-10">
                        <div>
                            <h2 className="text-4xl font-bold leading-tight">
                                I’m <span className="underline text-[#E19419] hover:text-[#bd7502]">Abhishek Tripathi ,</span><br />
                                MERN Stack Developer <br />
                                Based in INDIA.
                            </h2>
                            <p className="mt-4 text-darkText max-w-md">
                                I am a MERN Stack developer with 1.5 years of hands-on experience building various projects. I have worked on developing responsive, full-stack web applications and am actively seeking opportunities to contribute and grow in a dynamic team.
                            </p>
                        </div>
                        <div>
                            <img src="profile.png" alt="Profile Image" />
                        </div>
                    </div>
                    <div className='bg-[#283D2C] h-1 ml-[40vw] rounded-2xl w-[40vw] mt-0'></div>
                    <div className='bg-[#E19419]  w-full mt-0 h-4'></div>
                    <div className='bg-[#283D2C] h-1 ml-3 mr-[40vw] rounded-2xl w-[30vw] mt-0'></div>
                    <div className='mt-7 min-h-full' id='intern'>
                        <h2 className="text-3xl font-bold m-1  text-[#283D2C]">Internships & Certificates:</h2>
                        <section className="bg-[#283D2C] text-white px-10 py-20 mt-10">
                            <div>
                                <h3 className="text-2xl font-semibold">Internship at Launched Global</h3>
                                <p className="mt-2 text-sm">
                                    Completed a 2-month internship where I developed a full-stack web application using the MERN stack, gaining hands-on experience in building responsive user interfaces and secure backend APIs.
                                    Worked on a project that involved creating a task management application, implementing features such as user authentication, CRUD operations, and real-time talk using Socket.io and nodemailer.
                                </p>
                                <a className='font-bold text-[#E19419]' href="https://drive.google.com/file/d/1UWEcEDdd0YqG9PxExQIpmWcBjz7EqBdm/view?usp=drivesdk">View Certificate</a>
                            </div>
                            <div className='bg-[#E19419]  w-full mt-4 rounded-2xl h-1'></div>
                            <div className="grid grid-cols-2 gap-10 mt-10">
                                <div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Certificate in Full-Stack Development</h3>
                                        <p className="mt-2 text-sm">
                                            Earned a certificate in Full-Stack Development after completing a comprehensive course covering frontend technologies like React and backend development with Node.js and Express.
                                        </p>
                                        <a className='font-bold text-[#E19419]' href="https://drive.google.com/file/d/1ArifROLBH0HVl8KDtORmvlROcmew3_xY/view?usp=drivesdk">View Certificate</a>
                                    </div>
                                    <div className='my-10'>
                                        <h3 className="text-xl font-semibold">Certificate in Data Analytics and Visualization</h3>
                                        <p className="mt-2 text-sm">
                                            Earned a certificate in Data Analytics and Visualization after completing a comprehensive course covering data analysis techniques, visualization tools, and statistical methods.
                                        </p>
                                        <a className='font-bold text-[#E19419]' href="https://drive.google.com/file/d/1lBrlYm4THzJSyGGpOzv96slmcBk8IGqp/view?usp=drivesdk">View Certificate</a>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">Certificate in SIH</h3>
                                        <p className="mt-2 text-sm">
                                            Earned a certificate in SIH (Smart India Hackathon) after completing a comprehensive project involving problem-solving and software development.
                                        </p>
                                        <a className='font-bold text-[#E19419]' href="https://drive.google.com/file/d/13N4HBNaVgg7_wcd2etYtyaGbJyftiAqZ/view?usp=drivesdk">View Certificate</a>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3 className="text-xl font-semibold">CODECHEF Certificate in Problem solving</h3>
                                        <p className="mt-2 text-sm">
                                            Earned a certificate in Problem Solving from CodeChef, demonstrating proficiency in solving algorithmic challenges and improving problem-solving skills.
                                        </p>
                                        <div><a className='font-bold text-[#E19419]' href="https://drive.google.com/file/d/1dsaxQY1eCb7a1odGJYA7khHibOD5CGx5/view?usp=drivesdk">View Certificate</a></div>
                                    </div>
                                    <div className='mt-8'>
                                        <h3 className="text-xl font-semibold">Certificate in Cloud Computing</h3>
                                        <p className="mt-2 text-sm">
                                            Completed a certificate program in Cloud Computing, gaining knowledge of cloud platforms like AWS  and understanding how to deploy and manage applications in the cloud environment.
                                        </p>
                                        <div><a className='font-bold text-[#E19419]' href="https://www.credly.com/badges/03318949-4066-4890-bbf3-994aeed4a82b/linked_in?t=sow8j3">Introduction to cloud computing</a></div>
                                        <a className='font-bold text-[#E19419]' href="https://www.credly.com/badges/32180413-cb27-4df2-bd7c-0a815a61db1e/linked_in?t=t09afv">Cloud Foundation</a>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>

                    <div>
                        <div>
                            <section className="bg-[#283D2C] text-white px-10 py-20 mt-10">
                                <h3 className="text-3xl font-semibold">
                                    Who is <span className="text-[#E19419]">Abhishek Tripathi</span>?
                                </h3>

                                <p className="mt-4 max-w-xl text-sm">
                                    I have developed responsive, user-friendly full-stack applications and am actively looking for opportunities to apply my skills and contribute to innovative projects.
                                </p>

                                <div className="flex gap-10 mt-8">
                                    <div>
                                        <p className="text-accent text-2xl font-bold">10+</p>
                                        <p className="text-sm">Projects Completed</p>
                                    </div>
                                    <div>
                                        <p className="text-accent text-2xl font-bold">DSA-Focused</p>
                                        <p className="text-sm">Aspiring Software Engineer</p>
                                    </div>
                                    <div>
                                        <p className="text-accent text-2xl font-bold">1.5+</p>
                                        <p className="text-sm">Years Working with MERN Stack</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about
