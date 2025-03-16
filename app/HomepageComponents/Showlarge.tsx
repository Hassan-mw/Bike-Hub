import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import HeroData from './HeroData'

import { Input } from "@/components/ui/input"
import { SiBmw, SiHonda, SiSuzuki } from "react-icons/si";
import { CiSearch } from "react-icons/ci";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Showlarge = () => {
  return (
    <div className=' w-full flex items-center justify-center bg-green-500 relative'>
      
    <div className='hidden  w-full h-full lg:block  flex-col relative '>     
    <img  className=' object-cover  w-full h-full max-h-[1500px] ' src="./bg-images.jpeg"/>
   </div>
    <div className='flex space-y-3 xl:space-y-6 flex-col absolute  top-[50%]  left-9 text-white  font-extrabold w-full'>
          <div style={{fontWeight:800}} className={`${jost.className} text-5xl xk:text-6xl 2xl:text-8xl`}>Ride the Future, Own the Road</div>
          <div  style={{fontWeight:200}}  className='text-xl xl:text-4xl'>Explore the best motorbikes, accessories, and gear. Find your perfect ride today!</div>
         
         
  <div className=' flex items-center justify-center bg-white w-5/6 p-3  rounded-md'>

  {/*//! Input field */}
 <div className='w-full flex items-center justify-center spac-x-2'>
 <CiSearch />
 <input style={{fontWeight:400}}  className='bg-white py-5   text-black placeholder:text-slate-600 w-full focus:outline-none'  placeholder='Search by name'/>
 </div>    

 {/*//! Select field */}
  <Select >
<SelectTrigger className="w-full outline-none border-none shadow-none py-5">
 <SelectValue placeholder="Search by brand" />
</SelectTrigger>
 <SelectContent>
   <SelectItem value="Yahama">Yahama</SelectItem>
 <SelectItem value="Honda">Honda</SelectItem>
 <SelectItem value="Suzuki">Suzuki</SelectItem>
</SelectContent>
  </Select>

 {/*//! Button*/}

    <div style={{fontWeight:300}} className={`${jost.className} w-full hover:cursor-pointer flex items-center justify-center bg-[#1967d2] hover:bg-blue-700 text-white duration-700 p-6 rounded-md`}>Find Bike</div>
   
          </div>
  
    </div>
   

 
</div>
  )
}

export default Showlarge