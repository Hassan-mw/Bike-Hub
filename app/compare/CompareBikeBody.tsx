'use client'
import React, { useState } from 'react'
import BikeLeft from './BikeLeft'
import BikeRight from './BikeRight'
import { Jost } from 'next/font/google'
import CompareBothBike from './CompareBothBike'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface ParametersTyoes{
  left:string;
  right:string;
  leftBike:bikeParamsDataType[]
  rightBike:bikeParamsDataType[]
}


const CompareBikeBody =({leftBike,rightBike,left,right}:{left:string,right:string}) => {
   const [showResult,setShowResult]=useState(false)
  return (
    <div className='w-full flex flex-col space-y-5 items-center justify-center '>
  {   !showResult ? (
<div className='w-full flex flex-col items-center justify-center space-y-4 py-20 px-5'>
    <div className='w-full max-w-screen-xl flex items-center justify-between   '>
        <BikeLeft />
        <BikeRight/>
    </div>
  { (left!=='none' && right!=='none') && <div onClick={()=>setShowResult(true)} className={`${jost.className} bg-[#1967d2] text-white hover:cursor-pointer hover:bg-blue-700 duration-500 rounded-md px-4 py-2`}>Compare Bikes</div>}
   </div>)
 :
 
 
<CompareBothBike/>

 }
   
    </div>
  )
}

export default CompareBikeBody