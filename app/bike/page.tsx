import { Jost } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import SideBarFilter from '../SideBarFilter/SideBarFilter'
import SideBarData from '../SideBarFilter/SideBarData'
import getAllBike from '../DataFetching/api'
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
          {/* <div className='w-full max-w-screen-xl grid grid-cols-1 2xl:grid-cols-2 xl: gap-4 '> */}
            {/* data */}
             
             {
              result.data.length>0 ?(

             
              <div className='w-full max-w-screen-xl grid grid-cols-1 2xl:grid-cols-2 xl: gap-10 '>
            { result.data.map((data,index:Number)=>(
             <div key={data._id} className='flex flex-col items-center justify-center p-4 bg-white rounded-md overflow-hidden border relative shadow-xl'>
              <div className='absolute top-5 -right-14 bg-green-500 text-white rotate-45 w-40 flex itemscenter justify-center text-sm'>{data.category}</div>
              {/* <div className='absolute top-5 -left-14 bg-green-500 text-white -rotate-45 w-40 flex itemscenter justify-center text-sm'>{data.category}</div> */}
              <img className='h-60  ' src={`${data.image} `} />
              <div className='w-full flex flex-col items-center justify-center space-y-1 '>
              <div className={`${jost.className} text-xl`}> {data.name}</div>
              <div className={`${jost.className} flex items-center justify-between w-full text-[#635f5f]`}>
                <div >{data.fuelType}</div> <div >{data.price} $</div><div >{data.brand}</div>
                </div>
                 </div>
              </div>
              ))}
             </div>
             )
             
               :
               <div className={`${jost.className}  w-full  h-full flex items-center min-h-[600px] max-w-screen-xl justify-center text-4xl`}>No Data</div>
            
            }
            
      </div>
    </div>
    </div>
  //  </div>
  )
}

export default page