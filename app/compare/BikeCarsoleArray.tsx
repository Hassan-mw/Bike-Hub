'use client'
import { Jost } from "next/font/google"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/carousel"
import Image from "next/image"

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const BikeCarsoleArray = () => {

const data=[
  {image:"/Aprilia RSV4-c.jpeg",name:"Aprilia RSV4",price:"234",review:"45",url:"aprilia-rsv4"},
  {image:"/user-1742578404876.jpeg",name:"Triump  Tiger 900",price:"333",review:"34",url:"triumph-tiger-900"},
  {image:"/user-1742580567136.jpeg",name:"Ducatio Multistrada V4  ",price:"234",review:"33",url:"ducati-multistrada-v4"},
  {image:"/Suzuki SV650.jpeg",name:"Suzuki SV650 ",price:"234",review:"33",url:"ducati-multistrada-v4"},
  {image:"/BMW F850GS.jpeg",name:"BMW F850GS",price:"234",review:"44",url:"aprilia-tuono-rsv4"},
  {image:"/Ducati Multistrada 1260 Enduro.jpeg",name:" Ducati Multistrada 1260 Enduro",price:"",review:"35",url:"ktm-duke-390"},
]

  return (
<div className='w-full max-w-screen-xl flex flex-col py-4 space-y-9  rounded-lg px-3 lg:px-10 border-t  shadow-sm md:shadow-md'>

<div className={`${jost.className} w-full flex items-start justify-start text-4xl  `}>Check Out New Bike</div>



<Carousel>
  <CarouselContent className="gap-8">

  {
    data.map((data,index)=>
    <CarouselItem key={data.name}  className="sm:basis-1/2  md:basis-1/3 bg-white  rounded-lg ">
      <Image height={300} width={300} alt={data.name} className=" w-full object-cover rounded-t-md " src={data.image}/>
      <div className="flex flex-col  p-3 rounded-md space-y-1">
      <div className="flex flex-col  p-3 rounded-md space-y-1/2">
      <div style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-xl text-blue-500`}>{data.name}</div>
      <div style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-sm text-green-500`}>PKR {data.price}</div>
      </div>
      <div  style={{fontWeight:300}}  className={`${jost.className} w-full flex items-center justify-center text-xs text-slate-500`}>⭐⭐⭐⭐ {data.review} REviews</div>
      </div>
      </CarouselItem>
      )}


    {/* <CarouselItem className="sm:basis-1/2  md:basis-1/3 bg-white  rounded-lg">
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
      </CarouselItem> */}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>




      </div>
  )
}

export default BikeCarsoleArray