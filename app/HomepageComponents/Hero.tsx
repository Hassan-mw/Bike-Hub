import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { IoSearch } from "react-icons/io5";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})



const Hero = () => {
  return (
    <div className=' w-full  flex items-center justify-center  px-11'>
       <div className='w-full max-w-screen-lg flex items-center justify-center '>
        <div className='flex flex-col justify-end space-y-3 w-[40%]'>
       <div  className={`${jost.className} text-3xl    `}>Ride the Future, Own the Road</div> 
       <div style={{fontWeight:400}}  className={`${jost.className} text-md  text-[#8c96a1]  `}>Explore the best motorbikes, accessories, and gear. Find your perfect ride today!</div> 
        <div className='flex flex-col space-y-2 w-[80%]'>
          <div  className={`${jost.className} flex items-center justify-center border rounded-lg px-3 py-1`} >
            <input style={{fontWeight:300}} className='text-[#969696] focus:outline-none w-full text-sm placeholder:sm placeholder:text-[#969696]' placeholder='Search by name' type='text'/>
            <IoSearch />
            </div>
          <div  className={`${jost.className} flex items-center justify-center border rounded-lg px-3 py-1`} >
            <input style={{fontWeight:300}} className='text-[#969696] focus:outline-none w-full text-sm placeholder:sm placeholder:text-[#969696]' placeholder='Search by name' type='text'/>
            <IoSearch />
            </div>

        </div>
        </div>

         <img className='h-[500px]  w-[60%]  pl-10'  src="/BMW2.png" alt='Home-page-bike'/>
      </div> 
    </div>
  )
}

export default Hero