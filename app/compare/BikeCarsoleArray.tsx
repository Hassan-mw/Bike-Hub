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
  <CarouselContent className="gap-8">
    <CarouselItem className="md:basis-1/2   border h-36 ">
      <img className=" w-full object-cover  rounded-t-md " src="./honda-125.jpeg"/>
        <div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Honda CG 125</div>
      </div>
      </CarouselItem>
    <CarouselItem className="md:basis-1/2 h-1/2 bg-white border">
      <img className=" w-full object-cover rounded-t-md " src="./honda-pridor.jpg"/>
      <div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Honda Pridor</div>
      </div>
      </CarouselItem>
    <CarouselItem className="md:basis-1/2 h-1/2  bg-white border">
      <img className=" w-full object-cover rounded-t-md " src="./suzuki-150.jpg"/>
      <div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Suzuki GS 150</div>
      </div>
      </CarouselItem>
    <CarouselItem className="md:basis-1/2  h-1/2 bg-white border">
      <img className=" w-full object-cover rounded-t-md " src="./ybr-125.jpg"/>
      <div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Ybr 125</div>
      </div>
      </CarouselItem>
    <CarouselItem className="md:basis-1/2 h-1/2 bg-white border">
      <img className=" w-full object-cover rounded-t-md " src="./suzuki-gr.jpg"/>
      <div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Suzuki GR </div>
      </div>
      </CarouselItem>
    <CarouselItem className="md:basis-1/2 h-1/2 bg-white border">
      <div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Honda CB 150F</div>
      <img className=" w-full object-cover rounded-t-md " src="./handa-cb-150f.jpg"/>
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