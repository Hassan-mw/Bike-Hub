"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/carousel"
import { Jost } from "next/font/google"

 
import Image from "next/image";
import React from "react";

import Link from "next/link";
 

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const Carousels = () => {
  return (
    <div className="w-full  flex items-center justify-center">
    <div className="w-full max-w-screen-xl  flex flex-col space-y-12  items-center justify-center p-9">
    <div className={`${jost.className} text-black/80 text-3xl md:text-4xl border-b-4 pb-2`}>Discover top motorcycle brands today!</div>
    <Carousel>
  <CarouselContent className=" m-2">
    <CarouselItem className="sm:basis-1/2 md:basis-1/3 hover:scale-90 duration-500  hover:cursor-pointer">
    <div className="flex flex-col ">
      <img className="h-60 sm:h-40  lg:h-72 w-full object-cover rounded-t-md border" src="./c-1.jpeg"/>
      <div className="flex flex-col space-y-2 bg-white rounded-b-md border  p-3">
     <div className={`${jost.className} text-xl`}>Harley-Davidson Sportster 883</div>
     <div style={{fontWeight:300}} className={`${jost.className} text-[#504d4d]`}>A classic cruiser motorcycle with a robust V-twin engine, known for its raw power and iconic design.</div>
      </div>
    </div>
    </CarouselItem>
    <CarouselItem className="sm:basis-1/2 md:basis-1/3  hover:scale-90 duration-500  hover:cursor-pointer">
    <div className="flex flex-col ">
      <img className="h-60 sm:h-40 lg:h-72 w-full object-cover rounded-t-md border" src="./c-2.jpeg"/>
      <div  className="flex flex-col space-y-2 bg-white rounded-b-md border  p-3">
     <div className={`${jost.className} text-xl`}>Kawasaki Z900</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-[#504d4d]`}>A naked sportbike with an aggressive design, and exceptional handling for thrilling rides.</div>
      </div>
    </div>
    </CarouselItem>
    <CarouselItem className="sm:basis-1/2 md:basis-1/3  hover:scale-90 duration-500 hover:cursor-pointer">
    <div className="flex flex-col ">
      <img className="h-60 sm:h-40  lg:h-72 w-full object-cover rounded-t-md border" src="./c3.jpeg"/>
      <div  className="flex flex-col space-y-2 bg-white rounded-b-md border  p-3">
     <div className={`${jost.className} text-xl`}>Suzuki V-Strom 650</div>
     <div style={{fontWeight:300}} className={`${jost.className} text-[#504d4d]`}>A versatile adventure-touring motorcycle that balances performance, comfort, and practicality for long rides.</div>
      </div>
    </div>
    </CarouselItem>
  </CarouselContent>
</Carousel>
    </div>
    </div>
  )
}

export default Carousels