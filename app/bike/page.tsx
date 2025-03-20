'use client'
import { Jost } from 'next/font/google'
import Link from 'next/link'
import React, { useEffect } from 'react'
import SideBarFilter from '../SideBarFilter/SideBarFilter'
import SideBarData from '../SideBarFilter/SideBarData'
import getAllBike from '../DataFetching/api'
// import {getAllBike} from "@/app/DataFetching/api"


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const page = () => {
//  const data=await getAllBike()

 useEffect(()=>{
  const getAllBike=async()=>{
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/bike`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
    
    }
    getAllBike();
 },[])
//  console.log(data)
  return (
    <div className='w-full '>
            {/* Upper Body */}
      <div className='w-full flex flex-col space-y-2 py-10 items-center justify-center bg-white border-t'>
       <div className={`${jost.className} text-3xl text-[#202124]`}>Bike List</div>
       <div style={{fontWeight:300}} className={`${jost.className} text- text-[#202124]`}> <Link className='text-[#888888]' href="/">Home</Link> / Bike List</div>
      </div>
      {/* Down Body */}
      <div className='w-full flex flex-col items-center justify-center p-3 py-10 bg-white'>
        
        {/* Left Body */}
       <div className='w-full   max-w-screen-xl flex items-center justify-between  lg:justify-end pb-16'>
         <div className='lg:hidden'> <SideBarFilter/></div>
        <div className={`${jost.className} md:text-xl lg:text-2xl lg:border-b lg:pb-1`}>Showing 1 – 10 of 17 results</div>
         </div> 


        {/* Right Body */}
         <div className='w-full flex items-start justify-center lg:space-x-6'>
         <div className='hidden lg:block'><SideBarData/></div>
          <div className='w-full max-w-screen-xl grid grid-cols-1 2xl:grid-cols-2 xl: gap-4 '>
            {/* data */}
             <div className='flex flex-col items-center justify-center p-4 bg-white rounded-md overflow-hidden border relative shadow-xl'>
              <div className='absolute top-5 -right-14 bg-green-500 text-white rotate-45 w-40 flex itemscenter justify-center text-sm'>Honda</div>
              <div className='absolute top-5 -left-14 bg-green-500 text-white -rotate-45 w-40 flex itemscenter justify-center text-sm'>Sports</div>
              <img className='h-60  ' src="./b1.jpeg" />
              <div className='w-full flex flex-col items-center justify-center space-y-1 '>
              <div className={`${jost.className} text-xl`}> CBR250R</div>
              <div className={`${jost.className} flex items-center justify-between w-full text-[#635f5f]`}>
                <div >2021</div> <div >2,000 $</div><div >Honda</div>
                </div>

              </div>
             </div>

             <div className='flex flex-col items-center justify-center p-4 bg-white rounded-md overflow-hidden  relative shadow-xl'>
              <div className='absolute top-5 -right-14 bg-green-500 text-white rotate-45 w-40 flex itemscenter justify-center text-sm'>Honda</div>
              <div className='absolute top-5 -left-14 bg-green-500 text-white -rotate-45 w-40 flex itemscenter justify-center text-sm'>Sports</div>
              <img className='h-60  ' src="./b1.jpeg" />
              <div className='w-full flex flex-col items-center justify-center space-y-1 '>
              <div className={`${jost.className} text-xl`}> CBR250R</div>
              <div className={`${jost.className} flex items-center justify-between w-full text-[#635f5f]`}>
                <div >2021</div> <div >2,000 $</div><div >Honda</div>
                </div>

              </div>
             </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default page