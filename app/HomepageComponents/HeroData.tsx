import React from 'react'
import { IoSearch } from "react-icons/io5";
import { SiBmw, SiHonda, SiSuzuki } from "react-icons/si";

import { Input } from "@/components/ui/input"


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
import { Jost } from 'next/font/google'


const HeroData = () => {
  return (
    <div className=' flex flex-col justify-end space-y-3 w-full lg:w-[40%] pb-24'>
    <div  className={`${jost.className} text-4xl    `}>Ride the Future, Own the Road</div> 
    <div style={{fontWeight:400}}  className={`${jost.className} text-md  text-[#8c96a1]  `}>Explore the best motorbikes, accessories, and gear. Find your perfect ride today!</div> 
     <div className='flex flex-col space-y-8 lg:w-[80%] bg-white p-4 rounded-md'>
       {/*//! Input field */}
       <Input  placeholder='Search by name'/>
       {/*//! Select field */}
         
       <Select>
     <SelectTrigger className="w-full">
      <SelectValue placeholder="Search by brand" />
     </SelectTrigger>
      <SelectContent>
        <SelectItem value="Yahama">Yahama</SelectItem>
      <SelectItem value="Honda">Honda</SelectItem>
      <SelectItem value="Suzuki">Suzuki</SelectItem>
    </SelectContent>
       </Select>
         
         <div style={{fontWeight:300}} className={`${jost.className} hover:cursor-pointer flex items-center justify-center bg-[#1967d2] hover:bg-blue-700 text-white duration-700 p-3 rounded-xl`}>Find Bike</div>
         <div className='hidden   w-full   items-center justify-center space-x-7'>
       <SiBmw size={70} />
       <SiHonda size={70} />
       <SiSuzuki size={65} />
       </div>
     </div>
     </div>
  )
}

export default HeroData