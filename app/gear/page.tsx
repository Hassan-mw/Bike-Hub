import { Jost } from 'next/font/google'
import Link from 'next/link'
import React, { Suspense } from 'react'
import SideBarFilter from '../SideBarFilter/SideBarFilter'
import SideBarData from '../SideBarFilter/SideBarData'
import { getAllItems } from '../DataFetching/api'
import Pagination from '@/components/Pagination'
import ItemsBody from './ItemsBody'
// import BikeBody from './BikeBody'
// import {getAllBike} from "@/app/DataFetching/api"

interface BikeDataType {
  _id:number;
  name: string;
  category: string;
  price: number; // ✅ Fix: Change 'Number' to 'number'
  discount: string;
  subtitle: string;
  image:string;
  size:string;
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



const page = async({searchParams}:{searchParams:URLSearchParams}) => {

  const filter=await searchParams
 const result:{status:String,message:string,data:BikeDataType[]}=await getAllItems({filter})
 console.log(result)
 if(result.status==='fail'){
  return (
    <div className='w-full flex items-center justify-center h-[90vh] text-4xl'>
     There was some probleam in data fetching
    </div>
  )
 }


  return (
    <div className='w-full '>
            {/* Upper Body */}
      <div className='w-full flex flex-col space-y-2 py-10 lg:py-20 items-center justify-center bg-[#f4f7fc] border-t'>
       <div className={`${jost.className} text-3xl md:text-4xl text-[#202124]`}> Accessories</div>
       <div style={{fontWeight:400}} className={`${jost.className} text-md md:text-xl text-[#202124]`}> <Link className='text-[#888888]' href="/">Home</Link> /  Accessories</div>
      </div>
      {/* Down Body */}
      <div className='w-full flex flex-col items-center justify-center p-3 py-0 bg-white'>
     <Suspense  fallback={<div className='w-full h-full flex items-center justify-center'>

    
<div className="flex w-52 flex-col gap-4">
<div className="skeleton h-32 w-full"></div>
<div className="skeleton h-4 w-28"></div>
<div className="skeleton h-4 w-full"></div>
<div className="skeleton h-4 w-full"></div>
</div>
</div>}>

    
      <ItemsBody  result={result.data} />
     </Suspense>
    </div>

    </div>

  )
}


export default page