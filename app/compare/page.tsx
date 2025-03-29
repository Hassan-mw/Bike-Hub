import { Jost } from 'next/font/google'
import Link from 'next/link'
import React, { Suspense } from 'react'
import SideBarFilter from '../SideBarFilter/SideBarFilter'
import SideBarData from '../SideBarFilter/SideBarData'
import getAllBike, { getBikeById } from '../DataFetching/api'
import Pagination from '@/components/Pagination'
import CompareBikeBody from './CompareBikeBody'

// import {getAllBike} from "@/app/DataFetching/api"

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
}

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const Loading=()=>{

return (
  <div className='w-full h-full flex items-center justify-center'>

    
    <div className="flex w-52 flex-col gap-4">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
  </div>

)



}



const page = async({searchParams}:{searchParams:{left:string,right:string}}) => {

  const left = searchParams.left || "none";  // ✅ No need to await
  const right = searchParams.right || "none"; 
  const leftBike=await getBikeById({bikeNames:left})
  const rightBike=await getBikeById({bikeNames:right})
console.log(leftBike,'😈😈😈😈😈😈😈😈😈😈😈😈😈')
console.log(rightBike,'😈👺👺👺👺👺👺👺👺👺👺💩💩💩💩💩💩💩💩💩')
  return (
    <div className='w-full '>
            {/* Upper Body */}
      <div className='w-full flex flex-col space-y-2 py-10 items-center justify-center bg-[#f4f7fc] border-t'>
       <div className={`${jost.className} text-3xl text-[#202124]`}>Bike Compare</div>
       <div style={{fontWeight:400}} className={`${jost.className} text-xl text-[#202124]`}> <Link className='text-[#888888]' href="/">Home</Link> / Bike Compare</div>
      </div>
      {/* Down Body */}
      <div className='w-full flex flex-col items-center justify-center p-3  bg-white'>
  

      <CompareBikeBody leftBike={leftBike} rightBike={rightBike}  left={left} right={right}/>


    </div>

    </div>

  )
}


export default page