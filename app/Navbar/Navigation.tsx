'use client'
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
import { IoPerson } from 'react-icons/io5'
import DarkModeButton from '../components-usage/DarkModeButton'
import { usePathname } from 'next/navigation'




const jost=Jost({
  weight:['500'],
  subsets:['latin']
})



const Navigation = () => {

 const pathName=usePathname()
 console.log(pathName,'😳😳🥶😦🙁☹🙁😧🥵😝')
  return (
    <div className='w-full flex items-center justify-center'>

    <div className={` ${jost.className} h-24 grid grid-cols-2 sm:grid-cols-4 items-center justify-center gap-6 w-full p-4 max-w-screen-2xl `}>
    
    
      {/* //!  1 */}
  
      <Link className=' col-span-1' href="/"><img className='h-12 w-32 lg:w-40 rounded-4xl' src="./logo.png" alt='logo' /></Link>
      
      
      {/* //!  2 */}
      
      <div className='hidden sm:block   col-span-2' >
      <div className='flex items-center justify-center space-x-7  lg:text-lg xl:text-xl hover:cursor-pointer '>
        <Link style={{fontWeight:200}} href='/bike' className={` ${jost.className} ${pathName==='/bike' && 'bg-blue-300 rounded-md px-3 py-1'} text-sm  hover:text-[#1967d2] duration-500 `}>Bikes</Link>
        <Link  style={{fontWeight:200}}  href='/gear' className={` ${jost.className} text-sm  hover:text-[#1967d2] duration-500 py-1 `}>Accessories        </Link>
        <Link  style={{fontWeight:200}} href='/compare'  className={` ${jost.className} text-sm  hover:text-[#1967d2] duration-500 py-1 `}>Compare</Link>
        <Link   style={{fontWeight:200}} href='/faq'   className={` ${jost.className} ${pathName==='/faq' && 'bg-blue-300 rounded-md px-3 py-1 text-white'} text-sm hover:text-[#1967d2] duration-500 `}>FAQ</Link>
      </div>
      </div>
      {/* //!  3 */}
      <div className='hidden sm:block'>
       <div className='w-full  flex  items-center justify-end   col-span-1'>
         <div  style={{fontWeight:300}}  className='border-2 w-32 text-xs lg:w-42  flex  items-center justify-center   py-2 px-5 duration-500 hover:border-white  rounded-2xl border-[#1967d2] hover:bg-[#1967d2] hover:text-white'>Login / Signup</div>
      </div>
      </div>


     {/* //! Shown small */}

      <div className=" sm:hidden ">
       <Sheet >
     <SheetTrigger className='hover:cursor-pointer text-[#868787] flex items-center justify-end  w-full space-x-3 '><Link href="/" className='hover:text-blue-500 duration-500'><IoPerson  size={20} /></Link><BsList size={30} /></SheetTrigger>
     <SheetContent className='bg-[#202124] text-[#868787]  w-[300px]'>
     <SheetHeader  >
      
      <SheetTitle className='text-[#868787] bg-white min-w-full p-3'>
      <Link href="/"><img className='h-8' src="./logo.png" alt='logo' /></Link>
         </SheetTitle>
      <SheetDescription className='py-4 px-8 flex flex-col  '>
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
    </div>

  )
}



export default Navigation