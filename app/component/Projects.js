"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Projects() {
    const slides = [
        { id: 1, title: "Music app: Spotify Clone", desc:"A responsive music streaming application ", images: ["/Spotify clone.png"] },
        { id: 2, title: "Movie4U movie app", desc:"A movie app responsive design.", images: ["/Netflix like.png"] },
        { id: 3, title: "Twitter Clone", desc:"A Frontend Project .", images: ["/twitter clone.png" ]},
        { id: 4, title: "Todo using Vite",desc:"A task management application built with Vite and React.", images: ["/todo.png" ]},
        { id: 5, title: "Password Manager",desc:"A secure password manager application.", images: ["/Pasword.png"] },
        { id: 6, title: "Get Me Chai: Full stack Project", link: "https://share.vidyard.com/watch/GcNvCmaKjApjtgNRXkdTb8",desc:"A full stack project built with React, Node.js, MongoDB.", images: ["/get me chai2.png", "/Get me chai.png"] },
        { id: 7, title: "Bitlink: URL Shortener",desc:"A URL shortening service built with React and Node.js.", images: ["/bitlink3.png","/bitlink2.png"] },
        { id: 8, title: "Bittree: Tree Structure (MERN Project)",desc:"A tree structure visualization project built with MERN stack.", images: ["/bittree.png","/bittree1.png"] },
        { id: 9, title: "Hospital Management System",desc:"A full stack project using React , Node.js , Mongo , Socket.io and Next.js", images: ["/hospital (1).png","/hospital (3).png"] },
];

    return (
        <div className="relative">
            {slides.map((slide, index) => (
                <AnimatedSlide
                    key={slide.id}
                    slide={slide}
                    index={index}
                />
            ))}
        </div>
    );
}

function AnimatedSlide({ slide, index }) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

    return (
        <section
            ref={ref}
            className="h-screen sticky top-0 flex items-center justify-center"
            style={{ zIndex: 10 + index }}
        >
            
            <motion.div
                style={{ scale, opacity }}
                className="w-[85%] h-[80vh] bg-black opacity-0 rounded-3xl mb-2  flex flex-col items-center justify-center gap-6 p-10 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] shadow-white"
            >
                <h1 className="text-4xl font-bold text-center hover:scale-105 transition-transform duration-300 cursor-pointer text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
                    {slide.title}
                </h1>
                <p className="text-gray-300">{slide.desc}</p>
                <div
                    className={`w-full h-[90%] grid gap-6 ${slide.images.length === 1
                            ? "grid-cols-1"
                            : slide.images.length === 2
                                ? "grid-cols-2"
                                : "grid-cols-3"
                        }`}
                >
                    {slide.images.map((img, i) => (
                        <div key={i} className="relative w-full h-full">
                            <Image src={img} alt={`Project image ${i}`} fill className="object-contain rounded-2xl"/>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}