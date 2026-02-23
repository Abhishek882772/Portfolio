"use client";

import { useState } from "react";

const cards = [

  {
    id: 1,
    title: "Amazon AWS",
    about: "Cloud computing",
    img: "https://static.vecteezy.com/system/resources/previews/060/306/089/non_2x/amazon-aws-logo-on-a-white-square-free-png.png",
  },
  {
    id: 2,
    title: "MongoDB",
    about: "Database management",
    img: "https://cdn.simpleicons.org/mongodb",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    about: "CSS framework",
    img: "https://cdn.simpleicons.org/tailwindcss",
  },
  {
    id: 4,
    title: "Express.js",
    about: "Backend framework",
    img: "https://cdn.simpleicons.org/express",
  },
  {
    id: 5,
    title: "Next.js",
    about: "Frontend framework",
    img: "./next.svg",
  },
  {
    id: 6,
    title: "Java",
    about: "Programming language",
    img: "https://cdn.worldvectorlogo.com/logos/java.svg",
  },
  {
    id: 7,
    title: "C",
    about: "Programming language",
    img: "https://cdn.simpleicons.org/c",
  },
  {
    id: 8,
    title: "Bootstrap",
    about: "CSS framework",
    img: "https://cdn.simpleicons.org/bootstrap",
  },
  {
    id: 9,
    title: "HTML",
    about: "Markup language",
    img: "https://cdn.simpleicons.org/html5",
  },
  {
    id: 10,
    title: "CSS3",
    about: "Styling language",
    img: "https://images.seeklogo.com/logo-png/18/1/css3-logo-png_seeklogo-186678.png",
  },
  {
    id: 11,
    title: "React.js",
    about: "Frontend framework",
    img: "https://cdn.simpleicons.org/react",
  },
  {
    id: 12,
    title: "Node.js",
    about: "Backend runtime environment",
    img: "https://cdn.simpleicons.org/nodedotjs",
  },
  {
    id: 13,
    title: "Javascript",
    about: "Programming language",
    img: "https://cdn.simpleicons.org/javascript",
  },
  {
    id: 14,
    title: "Figma",
    about: "Design tool",
    img: "https://cdn.simpleicons.org/figma",
  },
  {
    id: 15,
    title: "Canva",
    about: "Design tool",
    img: "https://static.vecteezy.com/system/resources/previews/056/850/847/non_2x/canva-app-logo-on-a-transparent-background-free-png.png",
  },
  {
    id: 16,
    title: "Three.js",
    about: "3D graphics library",
    img: "https://cdn.simpleicons.org/threedotjs",
  },
  {
    id: 17,
    title: "Railway",
    about: "Deployment platform for developers",
    img: "https://cdn.simpleicons.org/railway",
  },
  {
    id: 18,
    title: "Vercel",
    about: "Deployment platform",
    img: "https://cdn.simpleicons.org/vercel",
  },
  {
    id: 19,
    title: "Vite",
    about: "Build tool",
    img: "https://cdn.simpleicons.org/vite",
  },
  {
    id: 20,
    title: "Microsoft Word",
    about: "Word processing software",
    img: "https://static.vecteezy.com/system/resources/previews/027/179/344/non_2x/microsoft-word-icon-logo-symbol-free-png.png",
  },
  {
    id: 21,
    title: "Microsoft Excel",
    about: "Spreadsheet software",
    img: "https://www.logo.wine/a/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.svg"
  },
  {
    id: 22,
    title: "Powerpoint",
    about: "Presentation software",
    img: "https://cdn.pixabay.com/photo/2021/12/13/06/33/powerpoint-6867647_640.png"
  },
  {
    id: 23,
    title: "DSA",
    about: "Data Structures and Algorithms",
    img: "https://www.vlrtraining.in/wp-content/uploads/2020/10/logo-data-structure.png"
  },
  {
    id: 24,
    title: "MySQL",
    about: "Database management system",
    img: "https://cdn.simpleicons.org/mysql",
  },
  {
    id: 25,
    title: "ChatGPT",
    about: "AI-powered language model",
    img: "https://www.shutterstock.com/image-vector/chatgpt-logo-vector-illustration-chat-600nw-2659160215.jpg",
  },
  {
    id: 26,
    title: "Git",
    about: "Version control system",
    img: "https://cdn.simpleicons.org/git",
  },
  {
    id: 27,
    title: "Github",
    about: "Version control platform",
    img: "https://cdn.simpleicons.org/github",
  },
  {
    id: 28,
    title: "githubcopilot",
    about: "AI-powered code completion tool",
    img: "https://cdn.simpleicons.org/githubcopilot",
  },
  {
    id: 29,
    title: "Postman",
    about: "API testing and development platform",
    img: "https://cdn.simpleicons.org/postman",
  },
   {
    id:30,
    title: "Socket.io",
    about: "Real-time communication platform",
    img: "https://cdn.simpleicons.org/socketdotio",
  },
   {
    id:31,
    title: "Spline",
    about: "3D design tool",
    img: "data:image/png;base64,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",
  },

];

export default function HorizontalOverlap() {
  const [index, setIndex] = useState(1);
  const prev = () =>
    setIndex((i) => (i - 1 + cards.length) % cards.length);

  const next = () =>
    setIndex((i) => (i + 1) % cards.length);

  return (
    <div className="bg-purple-400/50 shadow-lg rounded-2xl px-0.5 mt-10">
      <div className="h-[80vh] md:h-screen m-1 bg-[url('/gradient.jpg')] bg-cover bg-center bg-[black] flex items-center justify-center relative overflow-hidden">
        
        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-10 z-30 bg-gray-800 w-10 h-10 md:w-12 md:h-12 rounded-full shadow flex items-center justify-center"
        >
          ←
        </button>

        <div className="absolute top-6 md:top-10 text-xl md:text-3xl font-bold mt-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Skills Known:
        </div>

        {/* CARDS */}
        <div className="relative rounded-2xl h-[300px] md:h-[400px] flex items-center justify-center">
          {cards.map((card, i) => {
            let position = i - index;

            if (position > cards.length / 2) {
              position -= cards.length;
            }
            if (position < -cards.length / 2) {
              position += cards.length;
            }

            return (
              <div
                key={card.id}
                className="absolute p-6 md:p-10 border-2 border-[#5300a0] shadow-xl shadow-purple-500 bg-[#ffffff] w-[250px] md:w-[330px] h-[320px] md:h-[400px] rounded-2xl shadow-2xl opacity-0 transition-all duration-500"
                style={{
                  transform: `
                   translateX(${position * 100}%)
                    scale(${1 - Math.abs(position) * 0.20})
                  `,
                  zIndex: cards.length - Math.abs(position),
                  opacity: Math.abs(position) > 2 ? 0 : 1,
                }}
              >
                <img
                  src={card.img}
                  className="w-full flex items-center justify-center"
                  alt=""
                />

                <div className="absolute rounded-b-2xl bottom-0 left-0 right-0 bg-purple-300/60 text-white p-3 md:p-5 flex flex-col md:flex-row justify-between items-center">
                  <h2 className="text-lg md:text-xl font-bold text-black text-center">
                    {card.title}
                  </h2>
                  <p className="text-xs md:text-sm text-purple-800 font-bold text-center md:text-left">
                    {card.about}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-2 md:right-10 z-30 bg-gray-800 w-10 h-10 md:w-12 md:h-12 rounded-full shadow flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
}