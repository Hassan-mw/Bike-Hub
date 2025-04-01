import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const PopularBikeSearch = () => {
  return (
    <div className='w-full flex  items-center justify-center'>
    <div className='w-full max-w-screen-xl flex flex-col items-center justify-center'>
        {/* Upper Test */}
    <div className={`${jost.className} flex flex-col items-center justify-center space-y-3 `}>
    <div className={`${jost.className} text-[#252629] text-3xl md:text-4xl border-b-4 pb-2 `}>Popular Bike Categories</div>
   <div style={{fontWeight:400}} className={`${jost.className}  text-md text-[#a1a9b2] `}>2025 bikes available – 50 added today. </div> 
    </div>
    {/* Data */}
    <div className='w-full grid grid-col-1 md:grid-cols-2 lg:grid-cols-3'>
     <div className='flex items-center justify-center border rounded-md p-3'>
      {/* Image */}
      <div>
        <img src="./offroad-category.jpeg"/>
      </div>
      <div className='flex flex-col space-y-2 '>
    <div className={`${jost.className} text-[#252629] text-xl`}>Road Bikes </div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#a1a9b2] text-md`}>(5 avaliable) </div>
      
      </div>
     </div>

    </div>
    </div>
    </div>
  )
}

export default PopularBikeSearch