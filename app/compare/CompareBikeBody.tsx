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
}


const CompareBikeBody =({firstBike,secondBike,thirdBike}:parametersTyes) => {
       const [bike1,setBike1]=useState({id:'',name:''})
       const [bike2,setBike2]=useState({id:'',name:''})
       const [bike3,setBike3]=useState({id:'',name:''})
  
const [showResult,setShowResult]=useState(false)
const value1='first';
const value2='second';
const value3='third';

  const handleClearAll=()=>{
    setBike1({id:'',name:''})
    setBike2({id:'',name:''})
    setBike3({id:'',name:''})
  }

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
       <div className='w-full flex flex-col space-y-4  bg-white p-3'>
    <div className='w-full flex gap-x-6 items-center justify-between    '>

        {/* <BikeOneSelector />
        <BikeRight/>
        <BikeOneSelector /> */}
        <BikeSelector bike={bike1} setBike={setBike1}  value={value1}   />
        <BikeSelector bike={bike2}  setBike={setBike2} value={value2}    />
        <BikeSelector bike={bike3}  setBike={setBike3} value={value3}    />
        </div>
      <div className='w-full flex items-center justify-between'>
        <div onClick={handleClearAll} className={`${jost.className} bg-red-500 px-4 py-1 rounded-md text-white flex items-center justify-center`}>Clear All</div>
           <div onClick={(pre)=>setShowResult(!pre)} className={`${jost.className} hover:cursor-pointer bg-green-500 px-4 py-1 rounded-md text-white flex items-center justify-center`}>Compare</div>
        </div>  
    </div>
    </div>
   </div>)
 :
 
 
<CompareBothBike showResult={showResult} setShowResult={setShowResult} firstBike={firstBike} secondBike={secondBike} thirdBike={thiredBike}    />

 }
   
    </div>
  )
}

export default CompareBikeBody