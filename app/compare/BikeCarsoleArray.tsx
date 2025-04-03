'use client'
import { Jost } from "next/font/google"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/carousel"

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const BikeCarsoleArray = () => {

  return (
<div className='w-full max-w-screen-xl flex flex-col py-4 space-y-9  rounded-lg px-10 border-t  shadow-md'>

<div className={`${jost.className} w-full flex items-start justify-start text-4xl  `}>Check Out New Bike</div>



<Carousel>
  <CarouselContent>
    <CarouselItem className="md:w-1/3">
        <div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Honda CG 125</div>
      <img className=" w-full object-cover rounded-t-md " src="./honda-125.jpeg"/>
      </div>
      </CarouselItem>
    <CarouselItem className="md:w-1/3">
      <div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Honda Pridor</div>
      <img className=" w-full object-cover rounded-t-md " src="./honda-pridor.jpg"/>
      </div>
      </CarouselItem>
    <CarouselItem className="md:w-1/3">
      <div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Suzuki GS 150</div>
      <img className=" w-full object-cover rounded-t-md " src="./suzuki-150.jpg"/>
      </div>
      </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>




      </div>
  )
}

export default BikeCarsoleArray