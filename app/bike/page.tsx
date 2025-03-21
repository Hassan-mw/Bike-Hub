import { Jost } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import SideBarFilter from '../SideBarFilter/SideBarFilter'
import SideBarData from '../SideBarFilter/SideBarData'
import getAllBike from '../DataFetching/api'
import Pagination from '@/components/Pagination'
import BikeBody from './BikeBody'
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


const page = async({searchParams}:{searchParams:URLSearchParams}) => {

  const filter=await searchParams
 const result:{status:String,message:string,data:BikeDataType[]}=await getAllBike({filter})
 console.log(result)
 if(result.status==='fail'){
  return (
    <div className='w-full flex items-center justify-center h-[90vh] text-4xl'>
     There was some probleam in data fetching
    </div>
  )
 }
const number=[1,2,3,4,5,6]
  return (
    <div className='w-full '>
            {/* Upper Body */}
      <div className='w-full flex flex-col space-y-2 py-10 items-center justify-center bg-[#f4f7fc] border-t'>
       <div className={`${jost.className} text-3xl text-[#202124]`}>Bike List</div>
       <div style={{fontWeight:300}} className={`${jost.className} text- text-[#202124]`}> <Link className='text-[#888888]' href="/">Home</Link> / Bike List</div>
      </div>
      {/* Down Body */}
      <div className='w-full flex flex-col items-center justify-center p-3 py-10 bg-white'>
      <BikeBody  result={result.data} />
    </div>
    <Pagination/>
    </div>
  //  </div>
  )
}

export default page