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
import AutoCompleteINput from '../components-usage/AutoCompleteInput';


const HeroData = () => {
  return (
    // <div className='flex space-y-3 xl:space-y-6 flex-col absolute  top-[50%]  left-9 text-white  font-extrabold w-full'>
    <div className='flex space-y-3 xl:space-y-8  flex-col lg:absolute lg:top-[30%] lg:left-9  lg:space-y-6  lg:text-white  font-extrabold w-full lg:w-5/6 bg-[#e5ebf5] lg:bg-transparent  text-[#494a4f]  px-7 lg:px-0 lg:py-0 py-14 '>
   <div className='w-full flex flex-col items-start justify-start space-y-3'>

    <div style={{fontWeight:600}} className={`${jost.className}  text-3xl  xl:text-4xl 2xl:text-5xl z-20 `}>Ride the Future, Own the Road</div>
    <div  style={{fontWeight:200}}  className={`${jost.className} text-black lg:text-white text-xl lg:text-sm xl:text-xl `}>Explore the best motorbikes, accessories, and gear. Find your perfect ride today!</div>
   </div>
   
   
<div className=' flex flex-col lg:flex-row lg:w-[65%] 2xl:w-[50%] items-center justify-center  bg-white  p-3 lg:p-2 rounded-md space-y-6 lg:space-y-0 lg:space-x-3'>

{/*//! Input field */}

<div className='w-full flex items-center justify-center space-x-6  border-b lg:border-none lg:border-r'>
<CiSearch size={25} />
<input style={{fontWeight:400}}  className=' bg-white py-5 lg:py-2 text-xl  text-black placeholder:text-slate-600 w-full focus:outline-none placeholder:text-lg'  placeholder='Search by name'/>
{/* <AutoCompleteINput/> */}
</div>    

{/*//! Select field */}
<div className='w-full flex items-center justify-center space-x-3 border-b lg:border-none lg:border-r'>
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

 <Link href="/bike" className='w-1/2 flex items-center justify-center lg:w-5/6 text-black '><Button  />
  </Link>

    </div>
  {/* //! Pppular Search */}
  <div className='w-full  flex items-start justify-start space-x-3'>
    <div style={{fontWeight:300}} className={`${jost.className} text-md text-black lg:text-white  border-b border-black  lg:border-white`}>Popular Searches : </div> 
    <div  style={{fontWeight:300}} className={`${jost.className} text-md text-black lg:text-white`}>Yamaha, Honda, BMW, Suzuki.  </div>
  </div>

</div>
  )
}

export default HeroData