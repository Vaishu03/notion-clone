"use client";

import { ChevronLeft,ChevronRight } from "react-feather"
import { useState } from "react";

export const Carousel = () => {
    const slides = [
        {
          url: "/AI.png"
        },
        {
            url: "/wiki.png"
        },
        {
            url: "/projects.png"
        },
        {
          url:  "/docs.png"
        }
      ];

      const [currentIdx, setCurrentIdx] = useState(0);

      const prevSlide = () => {
        const isFirst = currentIdx === 0;
        const newIdx = isFirst ? slides.length-1 : currentIdx - 1;
        setCurrentIdx(newIdx);
      }

      const nextSlide = () => {
        const isLast = currentIdx === slides.length-1;
        const newIdx = isLast ? 0 : currentIdx + 1;
        setCurrentIdx(newIdx);
      }


    return(
        <div className="max-w-[980px] h-[560px] w-full m-auto relative group ">
        <div style={{backgroundImage: `url(${slides[currentIdx].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full 
        p-2 bg-white text-black cursor-pointer">
          <ChevronLeft onClick={prevSlide} size={30}/>
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full
        p-2 bg-white text-black cursor-pointer">
          <ChevronRight onClick={nextSlide} size={30}/>
        </div>
      </div>
    )
}