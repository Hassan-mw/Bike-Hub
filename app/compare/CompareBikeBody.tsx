'use client'
import React, { useState } from 'react'
// import BikeOneSelector from './BikeOneSelector'
// import BikeRight from './BikeSecondSelector'
import { Jost } from 'next/font/google'
// import CompareBothBike from './CompareBothBike'

import { Button } from "@/components/ui/moving-border";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


import BikeSelector from './BikeSelector'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import BikeCarsoleArray from './BikeCarsoleArray';
import TextRelatedComparision from './TextRelatedComparision';
import HotBikeComparision from './HotBikeComparision';


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

     <div className='w-full max-w-screen-xl flex flex-col items-center justify-center space-y-16 py-12 px-3 lg:px-8  rounded-md  bg-[#f4f7fc]'>
  


     {/*//!     Comparision Select */}
    <div className='w-full flex flex-col space-y-7  py-6 rounded-md shadow-sm md:shadow-md border-t px-10'>
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
       <HotBikeComparision/>


      {/*//!   Text related comparision */}
      <TextRelatedComparision/>


       {/* //!   New Bikes */}
       <BikeCarsoleArray/>
       
    </div>
    </div>
  )
}

export default CompareBikeBody