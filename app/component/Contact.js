"use client";
import React, { useState } from 'react';

const Contact = () => {
    const [mail, setmail] = useState({
        name:"",
        email:"",
        message:""
    })
    const handelChange=(e)=>{
        setmail({...mail,[e.target.name]:e.target.value});
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
            fetch('http://localhost:5000/send',{
                method:'POST', 
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(mail)
            }).then(res=>res.json())
            .then(data=>{
                if(data.status==='success'){
                    alert('Message Sent');
                    setmail({
                        name:"",
                        email:"",
                        message:""
                    })
                }else if(data.status==='fail'){
                    alert('Message failed to send');
                }
            })
    }
  return (
    <div className='w-full h-[80vh] p-9 flex flex-col justify-center items-center gap-4 shadow-[0_0_20px_4px_rgba(168,85,247,0.4)]' id='contact'>
  <form onSubmit={handlesubmit} className='flex flex-col justify-center items-center text-center mx-5 p-8 h-full mb-3.5 gap-6 w-[70vw] rounded-3xl backdrop-blur-md bg-white/5 border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-500'>
    
    <div>
      <h2 className="text-3xl font-bold mt-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Contact Me
      </h2>
    </div>

    <div className='flex justify-center items-center gap-3 w-full'>
      <span className="font-semibold">Name:</span>
      <input className='p-3 rounded-2xl w-[80%] bg-black/40 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-105 transition-all duration-300 hover:border-purple-400' type="text" name="name" value={mail.name} onChange={handelChange} placeholder="Enter your name" />
    </div>

    <div className='flex justify-center items-center gap-3 w-full'>
      <span className="font-semibold">Email:</span>
      <input className='p-3 rounded-2xl w-[80%] bg-black/40 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-105 transition-all duration-300 hover:border-purple-400' type="email" name="email" value={mail.email} onChange={handelChange} placeholder="Enter your email" />
    </div>

    <div className='flex gap-3 justify-center items-center w-full'>
      <span className="font-semibold">Message:</span>
      <textarea className='p-3 rounded-2xl w-[80%] bg-black/40 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:scale-105 transition-all duration-300 hover:border-purple-400 resize-none' rows="4" name="message" value={mail.message} onChange={handelChange} placeholder="Write your message"></textarea>
    </div>

    <div className='m-auto'>
      <button className='font-bold bg-gradient-to-r from-purple-600 to-pink-500 px-10 py-3 rounded-3xl shadow-[0_0_15px_rgba(168,85,247,0.6)] hover:scale-110 hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] active:scale-95 transition-all duration-300' type="submit">
        Send Message
      </button>
    </div>

  </form>
</div>
  )
}

export default Contact
