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
console.log(x,'👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾👾')
const handleClearAll = () => {
  console.log(bike1,bike2,bike3,'😈😈😈😈😈😈😈😈😈😈😈😈😈😈😈😈😈')
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
    <div className='w-full  flex flex-col space-y-5 items-center justify-center '>
  {/* {   !showResult ? ( */}
<div className='w-full flex flex-col items-center justify-center space-y-8 py-14 px-5'>
  {/* Comparision History */}
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

{/* Comparision Select */}
  <div className="w-full max-w-screen-xl flex flex-col space-y-4   ">
    <div className='w-full flex flex-col items-center justify-center spacey-2 p-3 rounded-md'>

    </div>
       <div className='w-full flex flex-col space-y-4  p-5 rounded-md  border-1 bg-[#f2f3f3]'>
    <div className={`${jost.className} text-3xl w-full flex items-center  justify-center `}>Select Bike for Comparision</div>
    <div className='w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:gap-x-6 items-center justify-center  p-6  '>
        <BikeSelector bike={bike1} setBike={setBike1}  value={value1}   />
        <BikeSelector bike={bike2}  setBike={setBike2} value={value2}    />
        <BikeSelector bike={bike3}  setBike={setBike3} value={value3}    />
        </div>
      <div className='w-full flex items-center justify-between px-6'>
        <div onClick={handleClearAll} className={`${jost.className} bg-red-500 px-4 py-1 rounded-md text-white flex items-center justify-center`}>Clear All</div>
           <Link href={`/nestedcompare/${bike1.id}-vs-${bike2.id}`}  className={`${jost.className} hover:cursor-pointer bg-green-500 px-4 py-1 rounded-md text-white flex items-center justify-center w-32`}>Compare</Link>
        </div>  
    </div>
    </div>
  
{/*Hot Comparision  */}

<div className="w-full max-w-screen-xl flex flex-col space-y-4   ">
    <div className='w-full flex flex-col items-center justify-center spacey-2 p-3 rounded-md'>

    </div>
       <div className='w-full flex flex-col space-y-4  p-5 rounded-md  border-1 bg-[#f2f3f3]'>
    <div className={`${jost.className} text-3xl w-full flex items-center  justify-center `}>Select Bike for Comparision</div>
    <div className='w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:gap-x-6 items-center justify-center  p-6  '>
        <BikeSelector bike={bike1} setBike={setBike1}  value={value1}   />
        <BikeSelector bike={bike2}  setBike={setBike2} value={value2}    />
        <BikeSelector bike={bike3}  setBike={setBike3} value={value3}    />
        </div>
      <div className='w-full flex items-center justify-between px-6'>
        <div onClick={handleClearAll} className={`${jost.className} bg-red-500 px-4 py-1 rounded-md text-white flex items-center justify-center`}>Clear All</div>
           <Link href={`/nestedcompare/${bike1.id}-vs-${bike2.id}`}  className={`${jost.className} hover:cursor-pointer bg-green-500 px-4 py-1 rounded-md text-white flex items-center justify-center w-32`}>Compare</Link>
        </div>  
    </div>
   
</div>
    </div>
    </div>
  )
}

export default CompareBikeBody