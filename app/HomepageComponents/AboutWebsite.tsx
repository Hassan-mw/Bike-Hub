"use client";

import Carousel from "@/components/ui/carousel";
import { Jost } from "next/font/google";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const AboutWebsite=() =>{
  const slideData = [
    {
      title: "Find Your Perfect Bike",
      button: "Explore Bike",
      src: "./1-carsole.jpeg",
      url:'/bike'
    },
    {
      title: " Gear Up for the Ride",
      button: "Explore Bike Items",
      src: "./2-carsole.jpeg",
      url:'/gear'  },
    {
      title: "Compare & Choose the Best Ride",
      button: "Start Compareing",
      src: "./3-carsole.jpeg",
        url:'/compare'
    },
    {
      title: "Got Questions? We’ve Got Answers!",
      button: "Visit FAQs",
      src: "./4-carsole.jpeg",
        url:'/'
   
    },
  ];
  return (
    <div className="w-full flex items-center justify-center">

    <div className=" overflow-hidden w-full max-w-screen-xl h-1/2 py-20  flex flex-col space-y-14 items-center justify-center">
    <div className={`${jost.className} text-black/80 text-3xl md:text-4xl border-b-4 pb-2`}> Your Ultimate Bike Hub</div>

      <Carousel slides={slideData} />
    </div>
    </div>
  );
}

export default AboutWebsite
