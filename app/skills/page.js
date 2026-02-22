import React from 'react'

const page = () => {
    const leftBoxes = document.querySelectorAll(".box-left");
    const rightBoxes = document.querySelectorAll(".box-right");

    leftBoxes.forEach((box, i) => {
      setTimeout(() => {
        box.classList.remove("translate-x-[-200%]", "opacity-0");
        box.classList.add(
          "translate-x-[100%]",
          "opacity-100",
          "transition-all",
          "duration-700",
          "ease-out"
        );
      }, i * 300);
    });

    rightBoxes.forEach((box, i) => {
      setTimeout(() => {
        box.classList.remove("translate-x-[200%]", "opacity-0");
        box.classList.add(
          "translate-x-[-180%]",
          "opacity-100",
          "transition-all",
          "duration-700",
          "ease-out"
        );
      }, i * 300);
    });
  return (
  <div class="relative w-full">

    <div class="absolute left-1/2 top-0 h-full w-[2px] bg-white/30 -translate-x-1/2"></div>

    <div class="absolute left-0 top-1/2 -translate-y-1/2 space-y-4">
      <div class="box-left w-20 h-10 bg-blue-500 translate-x-[-200%] opacity-0"></div>
      <div class="box-left w-20 h-10 bg-blue-500 translate-x-[-200%] opacity-0"></div>
      <div class="box-left w-20 h-10 bg-blue-500 translate-x-[-200%] opacity-0"></div>
    </div>

    <div class="absolute right-0 top-1/2 -translate-y-1/2 space-y-4">
      <div class="box-right w-20 h-10 bg-pink-500 translate-x-[200%] opacity-0"></div>
      <div class="box-right w-20 h-10 bg-pink-500 translate-x-[200%] opacity-0"></div>
      <div class="box-right w-20 h-10 bg-pink-500 translate-x-[200%] opacity-0"></div>
    </div>

  </div>
    
  )
}

export default page
