'use client'
import React, { useState } from 'react'
import BikeLeft from './BikeLeft'
import BikeRight from './BikeRight'
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
  left:string;
  right:string;
  leftBike:BikeDataType;
  rightBike:BikeDataType;
}


const CompareBikeBody =({leftBike,rightBike,left,right}:parametersTyes) => {
  
   const [showResult,setShowResult]=useState(false)
  return (
    <div className='w-full  flex flex-col space-y-5 items-center justify-center '>
  {   !showResult ? (
<div className='w-full flex flex-col items-center justify-center space-y-8 py-14 px-5'>
  {/* Top */}
  <div className='w-full  max-w-screen-xl flex items-center justify-between bg-[#f0f5f7] px-4 rounded-md'>
 
      <Accordion type="single" collapsible>
         <AccordionItem value="item-1" className="group">
         <AccordionTrigger className="group-focus-visible:ring-0 group-focus-visible:border-0 outline-none">
        <div className={`${jost.className} text-2xl`}>Comparison History</div>
         </AccordionTrigger>
       <AccordionContent  className='w-full items-start justify-start flex flex-col space-y-2'>
       <div className={`${jost.className} flex items-center justify-center space-x-6  px-3 py-1 border rounded-md bg-white`}> <div>Honda 125</div> <div className='text-red-400'>vs</div><div>Yamaha 125</div><span className="pl-7 text-blue-600 hover:cursor-pointer"><VscGitStashApply size={16} /></span></div>
       </AccordionContent>
       </AccordionItem>
       </Accordion>

  </div>

  <div className="w-full max-w-screen-xl flex flex-col space-y-4   ">
    <div className='w-full flex flex-col bg-[#f0f5f7] spacey-2 p-3 rounded-md'>

    <div className={`${jost.className} text-2xl `}>Select Bike for Comparision</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-sm  `}>Compare any bike that you like</div>
    </div>
    <div className='w-full flex items-center justify-between  shadow-2xl bg-[#f2f3f3] p-3  '>
        <BikeLeft />
        <BikeRight/>
        <div className='flex flex-col w-1/2'>
           <div className='bg-green-500 w-full h-40 rounded-tr-md text-white flex items-center justify-center'>Compare</div>
           {/* <div className='bg-red-500  w-full h-20  rounded-br-md text-white  flex items-center justify-center'>Cancel</div> */}
        </div>
    </div>
    </div>


  {/* { (left!=='none' && right!=='none') &&  */}
  <div>
  <Button
    borderRadius="1rem"
     onClick={()=>setShowResult(true)} 
    className={`${jost.className}bg-white w-full font-bold text-blue-500 hover:cursor-pointer hover:bg-blue-700 hover:text-white text-xl duration-500 rounded-md`}
  >
    Compare Bike
  </Button>
</div>

  {/* } */}
   </div>)
 :
 
 
<CompareBothBike showResult={showResult} setShowResult={setShowResult} leftBike={leftBike} rightBike={rightBike} left={''} right={''}    />

 }
   
    </div>
  )
}

export default CompareBikeBody