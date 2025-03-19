import React from 'react'
import { IoSearch } from "react-icons/io5";
import { SiBmw, SiHonda, SiSuzuki } from "react-icons/si";

import { Input } from "@/components/ui/input"


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import Button from "@/components/Button"
 
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Jost } from 'next/font/google'
import { CiSearch } from 'react-icons/ci';
import { RiEBikeLine } from 'react-icons/ri';
import Link from 'next/link';


const HeroData = () => {
  return (
    // <div className='flex space-y-3 xl:space-y-6 flex-col absolute  top-[50%]  left-9 text-white  font-extrabold w-full'>
    <div className='flex space-y-3 xl:space-y-6  flex-col lg:absolute lg:top-[50%] lg:left-9  lg:text-white  font-extrabold w-full bg-[#e5ebf5] lg:bg-transparent  text-[#494a4f]  px-7 lg:px-0 lg:py-0 py-14 '>
    <div style={{fontWeight:500}} className={`${jost.className} text-2xl lg:text-5xl xl:text-6xl z-20 `}>Ride the Future, Own the Road</div>
    <div  style={{fontWeight:400}}  className='text-[#8a95a0] lg:text-white text-sm lg:text-2xl '>Explore the best motorbikes, accessories, and gear. Find your perfect ride today!</div>
   
   
<div className=' flex flex-col lg:flex-row lg:w-[65%] 2xl:w-[50%] items-center justify-center bg-white  p-3 rounded-md space-y-6 lg:space-y-0 lg:space-x-3'>

{/*//! Input field */}
<div className='w-full flex items-center justify-center space-x-6'>
<CiSearch size={25} />
<input style={{fontWeight:400}}  className=' bg-white py-5 text-xl  text-black placeholder:text-slate-600 w-full focus:outline-none'  placeholder='Search by name'/>
</div>    

{/*//! Select field */}
<div className='w-full flex items-center justify-center space-x-3'>
<RiEBikeLine size={25} />

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

 <Link href="/bike" className='w-full text-black'><Button  />
  </Link>
    </div>

</div>
  )
}

export default HeroData