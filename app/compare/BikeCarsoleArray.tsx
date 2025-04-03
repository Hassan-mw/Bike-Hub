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
<div className='w-full max-w-screen-xl flex flex-col py-4 space-y-9  rounded-lg px-3 lg:px-10 border-t  shadow-sm md:shadow-md'>

<div className={`${jost.className} w-full flex items-start justify-start text-4xl  `}>Check Out New Bike</div>



<Carousel>
  <CarouselContent className="gap-8">

  
    <CarouselItem className="sm:basis-1/2  md:basis-1/3 bg-white  rounded-lg ">
      <img className=" w-full object-cover rounded-t-md " src="./honda-125.jpeg"/>
      <div className="flex flex-col  p-3 rounded-md space-y-1">
      <div className="flex flex-col  p-3 rounded-md space-y-1/2">
      <div style={{fontWeight:300}} className={`${jost.className} w-full flex items-center justify-center text-xl text-blue-500`}>Honda CG 125</div>
      <div style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-sm text-green-500`}>PKR 157,900</div>
      </div>
      <div  style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-xs text-slate-500`}>⭐⭐⭐⭐ 64 REviews</div>
      </div>
      </CarouselItem>
    <CarouselItem className="sm:basis-1/2  md:basis-1/3 bg-white  rounded-lg">
      <img className=" w-full object-cover rounded-t-md " src="./honda-pridor.jpg"/>
      <div className="flex flex-col  p-3 rounded-md space-y-1">
      <div className="flex flex-col  p-3 rounded-md space-y-1/2">
      <div style={{fontWeight:300}} className={`${jost.className} w-full flex items-center justify-center text-xl text-blue-500`}>Honda Pridor</div>
      <div style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-sm text-green-500`}>PKR 157,900</div>
      </div>
      <div  style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-xs text-slate-500`}>⭐⭐⭐⭐ 64 REviews</div>
      </div>
      </CarouselItem>
    <CarouselItem className="sm:basis-1/2  md:basis-1/3  bg-white  rounded-lg">
      <img className=" w-full object-cover rounded-t-md " src="./suzuki-150.jpg"/>
      <div className="flex flex-col  p-3 rounded-md space-y-1">
      <div className="flex flex-col  p-3 rounded-md space-y-1/2">
      <div style={{fontWeight:300}} className={`${jost.className} w-full flex items-center justify-center text-xl text-blue-500`}>Suzuki GS 150</div>
      <div style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-sm text-green-500`}>PKR 157,900</div>
      </div>
      <div  style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-xs text-slate-500`}>⭐⭐⭐⭐ 64 REviews</div>
      </div>
      </CarouselItem>
    <CarouselItem className="sm:basis-1/2  md:basis-1/3  bg-white  rounded-lg">
      <img className=" w-full object-cover rounded-t-md " src="./ybr-125.jpg"/>
      <div className="flex flex-col  p-3 rounded-md space-y-1">
      <div className="flex flex-col  p-3 rounded-md space-y-1/2">
      <div style={{fontWeight:300}} className={`${jost.className} w-full flex items-center justify-center text-xl text-blue-500`}>YBR 125</div>
      <div style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-sm text-green-500`}>PKR 157,900</div>
      </div>
      <div  style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-xs text-slate-500`}>⭐⭐⭐⭐ 64 REviews</div>
      </div>
      
      </CarouselItem>
    <CarouselItem className="sm:basis-1/2  md:basis-1/3 bg-white  rounded-lg">
      <img className=" w-full object-cover rounded-t-md " src="./suzuki-gr.jpg"/>
      <div className="flex flex-col  p-3 rounded-md space-y-1">
      <div className="flex flex-col  p-3 rounded-md space-y-1/2">
      <div style={{fontWeight:300}} className={`${jost.className} w-full flex items-center justify-center text-xl text-blue-500`}>Suzuki GR</div>
      <div style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-sm text-green-500`}>PKR 157,900</div>
      </div>
      <div  style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-xs text-slate-500`}>⭐⭐⭐⭐ 64 REviews</div>
      </div>
      </CarouselItem>
    <CarouselItem className="sm:basis-1/2  md:basis-1/3 bg-white  rounded-lg">
      <img className=" w-full object-cover rounded-t-md " src="./handa-cb-150f.jpg"/>
      <div className="flex flex-col  p-3 rounded-md space-y-1">
      <div className="flex flex-col  p-3 rounded-md space-y-1/2">
      <div style={{fontWeight:300}} className={`${jost.className} w-full flex items-center justify-center text-xl text-blue-500`}>Honda Cb 150</div>
      <div style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-sm text-green-500`}>PKR 157,900</div>
      </div>
      <div  style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-xs text-slate-500`}>⭐⭐⭐⭐ 64 REviews</div>
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