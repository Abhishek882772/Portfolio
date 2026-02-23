import Navbar from "./component/Navbar";
import Content from "./component/content";
import SplineScene from "./component/SplineScene";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

export default function Home() {
  return (
   <div className="relative w-full mt-0 min-h-[120vh] bg-black text-[#e7e7e7] leading-normal">
    <div className="mt-0 py-5 md:px-8"><Navbar /></div>
   <img src="gradient.png" alt="Gradient Background" className="w-full h-full object-cover absolute top-0 right-0 opacity-0.5 z-[-1]" />
   <div className="relative h-0 w-[30rem] top-[20%] right-0 shadow-[0_0_700px_15px_white] rotate-[-30deg] "></div>
   <div className="flex md:flex-row flex-col justify-center items-center gap-10 mt-10" id="home">
    <div className="w-[60vw] bg-black " id="content"><Content /></div>
    <div className="w-[40vw]   md:mt-0"><SplineScene /></div>
   </div>
   <div className="w-full h-20 bg-gradient-to-t from-black to-transparent " id="skills"><Skills /></div>
   <div className="bg-black h-[80vh]"></div>
   <div className="my-2 md:px-10" id="projects"><Projects /></div>
   <div className="scroll-mt-20 min-h-screen md:px-10" id="contact"><Contact /></div>
   </div>
  );
}
