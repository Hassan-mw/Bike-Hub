import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import HeroData from './HeroData'

import { Input } from "@/components/ui/input"
import { SiBmw, SiHonda, SiSuzuki } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { RiEBikeLine } from "react-icons/ri";

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

const ShowSmall = () => {
  return ( 
        <div className='flex flex-col space-y-3    bg-[#e5ebf5]   text-black  font-extrabold w-full px-7 py-14'>
    <div style={{fontWeight:800}} className={`${jost.className} text-3xl lg:text-5xl xk:text-6xl 2xl:text-8xl`}>Ride the Future, Own the Road</div>
    <div  style={{fontWeight:200}}  className='text-xl xl:text-4xl'>Explore the best motorbikes, accessories, and gear. Find your perfect ride today!</div>
   
   
<div className=' flex flex-col items-center justify-center bg-white  p-6 rounded-md'>

{/*//! Input field */}
<div className='w-full flex items-center justify-center space-x-2'>
<CiSearch size={25} />
<input style={{fontWeight:400}}  className='bg-white py-5 text-xl  text-black placeholder:text-slate-600 w-full focus:outline-none'  placeholder='Search by name'/>
</div>    

{/*//! Select field */}
<div>
<RiEBikeLine />

<Select >
<SelectTrigger style={{fontWeight:400}} className="w-full outline-none border-none shadow-none py-5 text-xl">
<SelectValue placeholder="Search by brand" />
</SelectTrigger>
<SelectContent>
<SelectItem value="Yahama">Yahama</SelectItem>
<SelectItem value="Honda">Honda</SelectItem>
<SelectItem value="Suzuki">Suzuki</SelectItem>
</SelectContent>
</Select>
</div>
{/*//! Button*/}

<div style={{fontWeight:300}} className={`${jost.className} w-full hover:cursor-pointer flex items-center justify-center bg-[#1967d2] hover:bg-blue-700 text-white duration-700 p-6 rounded-md`}>Find Bike</div>

    </div>

</div>

  )
}

export default ShowSmall