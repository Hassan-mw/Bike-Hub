'use client'
import React, { useState } from 'react'
import BikeOneSelector from './BikeOneSelector'
import BikeRight from './BikeSecondSelector'
import { Jost } from 'next/font/google'
import CompareBothBike from './CompareBothBike'

import { Button } from "@/components/ui/moving-border";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import { VscGitStashApply } from "react-icons/vsc";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import BikeSelector from './BikeSelector'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'


interface BikeDataType {
  _id:number;
  name: string;
  brand: string;
  category: string;
  price: number; // ✅ Fix: Change 'Number' to 'number'
  mileage: number; // ✅ Fix: Change 'Number' to 'number'
  topSpeed: number; // ✅ Fix: Change 'Number' to 'number'
  weight: number; // ✅ Fix: Change 'Number' to 'number'
  url: string;
  fuelType: string;
  slug: string;
  status: string;
  image:string;
  model:string
}

interface parametersTyes{
  firstBike:BikeDataType;
  secondBike:BikeDataType;
  thirdBike:BikeDataType;
  first:string;
  second:string;
  third:string;
}


const CompareBikeBody =({ first,second,third,firstBike,secondBike,thirdBike}:parametersTyes) => {
    const pathname=usePathname();
    const searchParams=useSearchParams()
    const router=useRouter()
       const [bike1,setBike1]=useState({id:'',name:''})
       const [bike2,setBike2]=useState({id:'',name:''})
       const [bike3,setBike3]=useState({id:'',name:''})
  
const [showResult,setShowResult]=useState(false)
const value1='first';
const value2='second';
const value3='third';
const x=searchParams.get('first')


const handleClearAll = () => {

  const params = new URLSearchParams(searchParams.toString()); // Clone search params

  // Remove parameters from the URL
  params.delete("first");
  params.delete("second");
  params.delete("third");

  // Reset state for selected bikes
  setBike1({ id: "", name: "" });
  setBike2({ id: "", name: "" });
  setBike3({ id: "", name: "" });

  // Push new URL without selected bikes
  router.replace(`${pathname}`, { scroll: false });
};


  return (
    <div className='w-full  flex flex-col py-14 items-center justify-center '>

     <div className='w-full max-w-screen-xl flex flex-col items-center justify-center space-y-16 py-12 px-8  rounded-md  bg-[#f4f7fc]'>
  


     {/*//!     Comparision Select */}
    <div className='w-full flex flex-col space-y-7  py-6 rounded-md shadow-md border-t px-10'>
    <div className={`${jost.className} text-4xl w-full flex items-start  justify-start `}>Select Bike for Comparision</div>
    <div className='w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:gap-x-6 items-center justify-center pt-6   '>
        <BikeSelector bike={bike1} setBike={setBike1}  value={value1}   />
        <BikeSelector bike={bike2}  setBike={setBike2} value={value2}    />
        <BikeSelector bike={bike3}  setBike={setBike3} value={value3}    />
        </div>
      <div className='w-full flex items-center justify-between '>
        <div onClick={handleClearAll} className={`${jost.className} text-red-500  flex items-center justify-center`}>Clear All</div>
           <Link href={`/nestedcompare/${bike1.id}-vs-${bike2.id}`}  className={`${jost.className} hover:cursor-pointer bg-green-500 px-4 py-1 rounded-md text-white flex items-center justify-center w-32`}>Compare</Link>
        </div>  
    </div>
    
  


      {/* //!  Hot Comparision  */}
      <div className='w-full max-w-screen-xl flex flex-col py-4 space-y-9  rounded-lg px-10 border-t  shadow-md'>

<div className={`${jost.className} w-full flex items-start justify-start text-4xl  `}>Hot Bike Comparisons</div>

<div className="w-full grid grid-cols-1  md:grid-cols-2 gap-6   pb-6 max-w-screen-xl  ">
{/* 1 */}
  <div className='flex items-center justify-center rounded-lg  bg-white  shadow-sm'>
<div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl border-b`}>Suzuki GS 150</div>
      <img className=" w-full object-cover rounded-t-md " src="./suzuki-150.jpg"/>
      </div>
      <div className='h-full flex items-center justify-center  '>
    <span className='size-12 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl'>vs</span>
      </div>
<div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl border-b`}>Yamaha YBR 125</div>
      <img className=" w-full object-cover rounded-t-md " src="./ybr-125.jpg"/>
      </div>
      </div> 
     {/* 2 */}
  <div className='flex items-center justify-center  rounded-lg   bg-white shadow-sm'>
<div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Honda CG 125</div>
      <img className=" w-full object-cover rounded-t-md " src="./honda-125.jpeg"/>
      </div>
      <div className='h-full flex items-center justify-center  '>
    <span className='size-12 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl'>vs</span>
      </div>
<div className="flex flex-col  p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Honda Pridor</div>
      <img className=" w-full object-cover rounded-t-md " src="./honda-pridor.jpg"/>
      </div>
      </div> 
</div>
      </div>


        {/*//!   Text related comparision */}
      <div className='w-full max-w-screen-xl py-6 px-10   flex flex-col space-y-5 items-center border-t justify-center shadow-md bg-[#f4f7fc]  rounded-md '>
 <div className='w-full items-start justify-start flex flex-col space-y-2'>
<div className={`${jost.className} w-full flex items-start justify-start text-4xl  `}>Bikes Comparison in Pakistan</div>
 <div className={`${jost.className} text-2xl text-[#434343]`}></div>
  <div style={{fontWeight:300}} className={`${jost.className} text-[#3b3939] text-md max-w-screen-lg`}>If you’re still in a dilemma on purchasing a new bike, BikeHub is here to help you in choosing you the best bike in your desired budget. BikeHub bike comparison tool made with comprehensive research and practicality. Although there is no direct naming of the brand in regards to which one is better or not we still try to make it clear to the assumed rational customers with a good list of points. </div>
 </div>
 <Accordion type="single" collapsible className='w-full '>
    <AccordionItem value="item-1" className="group">
    <AccordionTrigger className="w-f group-focus-visible:ring-0 group-focus-visible:border-0 outline-none">
   <div className={`${jost.className} text-2xl`}>Comparison History</div>
    </AccordionTrigger>
  <AccordionContent  className='w-full space-y-10'>
  <div style={{fontWeight:300}} className={`${jost.className} text-[#3b3939] text-md max-w-screen-lg `}>All you need to do is filling in the name of at least two automakers and their respective models, and you have a good list of comparison. Some of the top Companies Models you might wish to compare, however; you can always change it according to your needs and desire. You'll be able to see bike comparison of Honda 125, Yamaha YBR 125, Suzuki GS 150 and Honda Deluxe, if that's what you were looking for, all you need to do is just click anywhere on the two bikes, and you'll have a healthy list of comparison. </div>
 {/*  */}
 <div className='w-full flex flex-col space-y-6'>
{/* 2-1 */}
  <div className='w-full items-start justify-start flex flex-col space-y-3'>
  <div className={`${jost.className} text-2xl`}>Top Comparisons</div>
  <div  className={`${jost.className} text-sm flex flex-col space-y-1 items-start justify-start`}>
   <div style={{fontWeight:300}} className={`${jost.className} text-md flex items-center justify-center space-x-2`}><div>1. </div><div className='text-blue-400'>Compare Yamaha YBR 125 and Honda CG 125</div>  </div>
   <div style={{fontWeight:300}}  className={`${jost.className} text-md flex items-center justify-center space-x-2`}><div>2.</div><div className='text-blue-400'>Compare Ravi Piaggio and Honda 125 Deluxe</div>  </div>
   <div style={{fontWeight:300}}  className={`${jost.className} text-md flex items-center justify-center space-x-2`}><div>3.</div><div className='text-blue-400'>Compare Suzuki 150 and Honda CG 125</div>  </div>
 
   </div>
 </div>
 {/*2-2*/}
  <div className='w-full items-start justify-start flex flex-col space-y-3'>
  <div className={`${jost.className} text-2xl`}>Popular Manufacturers</div>
  <div style={{fontWeight:300}} className={`${jost.className} text-[#3b3939] text-md max-w-screen-lg`}>The Pakistan market is very unpredictable, and one cannot easily determine what the next move of customers will be. There are few companies which are magnificent, but they fail in the Pakistani market and few companies are not at all expected to flourish, but they do. However, the most famous manufacturers are Honda, Yamaha, Suzuki, Metro, Unique and Super Power. </div>

 </div>
 </div>
  </AccordionContent>
  </AccordionItem>
  </Accordion>

       </div>
    </div>
    </div>
  )
}

export default CompareBikeBody