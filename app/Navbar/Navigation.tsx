import { Jost } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { BsList } from 'react-icons/bs'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch } from 'react-icons/fa'



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})



const Navigation = () => {
  return (
    <div className={` ${jost.className} h-24 flex items-center justify-between w-full p-4  `}>
      <Link href="/"><img className='h-16 rounded-4xl' src="./logo.png" alt='logo' /></Link>
      
      <div className='hidden sm:block'>
      <div className='flex items-center justify-center space-x-6 lg:text-lg xl:text-xl hover:cursor-pointer '>
      
        <div className='border-2 py-2 px-5 duration-500 hover:border-white  rounded-2xl border-[#1967d2] hover:bg-[#1967d2] hover:text-white'>Login / Signup</div>
      </div>
      </div>
      <div className=" sm:hidden ">
       <Sheet >
     <SheetTrigger className='hover:cursor-pointer text-[#868787] '><BsList size={30} /></SheetTrigger>
     <SheetContent className='bg-[#202124] text-[#868787]  w-[300px]'>
     <SheetHeader  >
      
      <SheetTitle className='text-[#868787] bg-white min-w-full p-3'> <Link href="/"><img className='h-12 rounded-4xl' src="./logo.png" alt='logo' /></Link></SheetTitle>
      <SheetDescription className='py-3 px-8 flex flex-col  '>
      <div className='flex flex-col items-start justify-center space-y-5  text-md hover:cursor-pointer '>
      <div className={` ${jost.className} text-lg   hover:text-white duration-500 `}>Bikes</div>
        <div className={` ${jost.className} text-lg   hover:text-white duration-500 `}>Gears</div>
        <div className={` ${jost.className} text-lg   hover:text-white duration-500 `}>Campare</div>
        <div className={` ${jost.className} text-lg  hover:text-white duration-500 `}>FAQ</div>
    
     </div>
    
      </SheetDescription>
    </SheetHeader>
  
      <SheetFooter >
   <div className='flex flex-col space-y-3 '>
  <div className={`${jost.className} w-full bg-[#1967d2] duration-500 hover:cursor-pointer hover:bg-blue-700 text-white rounded-md flex items-center justify-center py-3 `}>Find Bike</div>
   <div className={`${jost.className} text-xl`}>Call us</div>
   <div className={`${jost.className} text-xl text-white`}>123 456 789</div>
   <div className={`${jost.className} text-sm`}>328 Queensberry Street, North Melbourne </div>
   <div className={`${jost.className} text-sm`}>3051, Australia. </div>
   <div className={`${jost.className} text-sm`}>support@bikehub.com</div>
   <div className="flex items-start  space-x-6">
     <div className=" text-[#929292]  hover:cursor-pointer  hover:scale-110 duration-300 hover:text-white"><FaFacebookF /></div>
     <div className=" text-[#929292]  hover:cursor-pointer  hover:scale-110 duration-300 hover:text-white"><FaTwitch /></div>
     <div className="  text-[#929292]  hover:cursor-pointer hover:scale-110 duration-300 hover:text-white"><FaLinkedinIn /></div>
     <div className="  text-[#929292]  hover:cursor-pointer hover:scale-110 duration-300 hover:text-white"><FaInstagram /></div>
    </div> 
   
   </div>
   
      </SheetFooter>
          </SheetContent>
      </Sheet>
      </div>
      </div>
  )
}



export default Navigation