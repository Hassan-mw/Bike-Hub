'use client'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import Link from "next/link"
import SideBarData from "../SideBarFilter/SideBarData"
import { BsDropletHalf, BsFuelPumpFill } from "react-icons/bs"
import { GiSteeringWheel } from "react-icons/gi"
import { IoMdSpeedometer } from "react-icons/io"
import { Jost } from "next/font/google"

interface DataTypepaginatedData{
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

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";

interface DataTypes{
    count:number;
    setCount:React.Dispatch<React.SetStateAction<number>>;
    number:number[];
    paginatedData:DataTypepaginatedData[]
    initial:number;
    final:number;
    result:DataTypepaginatedData[]
    
}


const RightBody = ({paginatedData,number,setCount,count,initial,final,result}:DataTypes) => {
  return (
    <div className='w-full  flex  items-start justify-center lg:space-x-6'>
      
    <div className='hidden lg:block'><SideBarData/></div>
       {/* data */}
        
        {
         paginatedData.length>0 ?(

        <div className='w-full max-w-screen-xl flex flex-col items-center justify-center space-y-8'>
         {/* Top NAv BAR */}
         <div className="w-full flex items-center justify-between">
         <div style={{fontWeight:300}} className={`${jost.className} text-smlg:border-b lg:pb-1`}>Showing {initial} – {final} of {result.length} results</div>
         
        
         <div className="">
  
          <select className="w-36 md:w-52 border-4 px-3 py-2 rounded-md focus:border-blue-400">
            <option>All</option>
            <option>Oldest</option>
            <option>Newest</option>
          </select>

          </div>
          </div> 




         <div className='w-full max-w-screen-xl grid grid-cols-1 2xl:grid-cols-2 xl: gap-10 '>
       { paginatedData.map((data,index:number)=>(
        <Link href={`/singleBike/${data._id}`} key={data._id} className='flex flex-col items-center justify-center p-4 bg-white rounded-md overflow-hidden border-4 group relative '>
         <div className='absolute top-8 -right-10 bg-green-500 text-white rotate-45 w-40 flex itemscenter justify-center text-lg'>{data.category}</div>
         {/* <div className='absolute top-5 -left-14 bg-green-500 text-white -rotate-45 w-40 flex itemscenter justify-center text-sm'>{data.category}</div> */}
         <img className='h-60  ' src={`${data.image} `} />
         <div className='w-full flex flex-col items-center justify-center space-y-5 '>
         <div className={`${jost.className} text-4xl tracking-widest `}> {data.name}</div>
         <div className={`${jost.className} flex items-center justify-between w-full text-[#635f5f]`}>
             {/* 1 */}
           <div className="flex flex-col gap-y-1 items-center justify-center" >
            <span className="text-blue-400"><BsDropletHalf size={20} /></span> 
            {data.mileage} MPG </div> 
            {/* 2 */}
           <div className="flex flex-col gap-y-1 items-center justify-center" >
            <span className="text-green-400">{data.fuelType==="Petrol" ? <BsFuelPumpFill/> :<GiSteeringWheel  size={20}/>}</span> 
            {data.fuelType}  </div> 
            {/* 3 */}
           <div className="flex flex-col gap-y-1 items-center justify-center" >
            <span className="text-[#E60000]"><IoMdSpeedometer  size={25}/></span> 
            {data.topSpeed} km/h </div> 
            
            {/* <div  className="flex items-center justify-center"> {data.price} $</div><div  className="flex items-center justify-center"><IoSpeedometerOutline /> {data.brand}</div> */}
           </div>
            </div>
         </Link>
         ))}
        </div>
      <div className="flex space-x-2 mt-6">
         {number.map((page) => (
       <button
         key={page}
         onClick={() => setCount(page + 1)}
     
          className={`${jost.className} hover:cursor-pointer text-[#696969]  border py-2 px-4 rounded-full ${page+1===count ? 'bg-[#1967d2] text-white' : 'hover:bg-[#1967d2] hover:text-white'}`}
        >
        {page + 1}
        </button>
       ))}
      </div>

        </div>
        )
        
          :
          <div className={`${jost.className}  w-full  h-full flex items-center min-h-[600px] max-w-screen-xl justify-center text-4xl`}>No Data</div>
       
       }
       
 </div>
  )
}

export default RightBody