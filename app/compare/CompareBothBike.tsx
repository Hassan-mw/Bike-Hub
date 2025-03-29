'use client';
import React, { useEffect, useState } from 'react'
import ComparedBikeLeft from './ComparedBikeLeft'
import ComparedBikeRight from './ComparedBikeRight'

import { MdCompareArrows } from "react-icons/md";
import { Jost } from 'next/font/google';


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
  model:string;
}


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface parametersTyes{
  left:string;
  right:string;
  leftBike:BikeDataType;
  rightBike:BikeDataType;
  showResult:boolean;
  setShowResult:any
}

const CompareBothBike = ({showResult,setShowResult,leftBike,rightBike}:parametersTyes) => {


  return (
    <div className='w-full flex flex-col items-center justify-center space-y-6 py-20 px-5'>
    <div className='w-full max-w-screen-xl bg-[#f0f5f7] p-2 rounded-md  flex items-center justify-between'>
     <div onClick={()=>setShowResult(!showResult)}>Go Back</div>  
     <div  className={`${jost.className} bg-blue-500 rounded-md px-2 hover:cursor-pointer text-white hover:bg-blue-600`}>Save it</div>
     </div> 
    <div className='w-full max-w-screen-xl flex items-center justify-between space-x-4  '>
        <ComparedBikeLeft data={leftBike} />
        <MdCompareArrows />
        <ComparedBikeRight data={rightBike}/>
    </div>
 
   </div>)
  
}

export default CompareBothBike