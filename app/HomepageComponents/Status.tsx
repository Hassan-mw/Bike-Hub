// import { Jost } from "next/font/google"

// const jost=Jost({
//     weight:['500'],
//     subsets:['latin']
// })

// export default function Status() {
//     return (

//             <div className="w-full  mx-auto max-w-screen-xl space-y-8 px-6">
//                  <div className="w-full flex flex-col items-center justify-center">
//                         {/* <p className="text-end text-sm">Best Companies</p> */}
//                         <div className={`${jost.className} text-black/80 text-3xl md:text-4xl `}>Bike Hub in Numbers</div>
//                         <div style={{fontWeight:400}} className={`${jost.className}  text-md text-[#879099]  `}>Lorem ipsum  sit amet elit, sed  tempor </div> 
//                         </div>

//                 <div className="w-full grid gap-6 *:text-center grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 md:gap-16">
//                     <div className="rounded-(--radius) space-y-4 border py-8">
//                         <div className={`${jost.className} text-2xl font-bold`}>+10,000</div>
//                         <p className={`${jost.className} text-[#828282]`}>Motorcycles Listed</p>
//                     </div>
//                     <div className="rounded-(--radius) space-y-4 border py-8">
//                         <div className={`${jost.className} text-2xl font-bold`}>85%</div>
//                         <p  className={`${jost.className} text-[#828282]`}>Customer Satisfaction Rate</p>
//                     </div>
//                     <div className="rounded-(--radius) space-y-4 border py-8">
//                         <div className={`${jost.className} text-2xl font-bold`}>+5,000</div>
//                         <p className={`${jost.className} text-[#828282]`}>Accessories & Gear Available</p>
//                     </div>
//                     <div className="rounded-(--radius) space-y-4 border py-8">
//                         <div  className={`${jost.className} text-2xl font-bold`}>2015</div>
//                         <p className={`${jost.className} text-[#828282]`}>Trusted by Riders for Years</p>
//                     </div>
//                 </div>
//             </div>
//     )
// }

import { Jost } from 'next/font/google';
import React from 'react'
// import TestimonialsArray from './TestimonialsArray'
import { IoCheckmarkOutline } from "react-icons/io5";
// import IncreaseNumber from "./../../../components/IncreaseNumber"
import Link from 'next/link';
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const Status = () => {
  return (
    <div className='w-full flex items-center justify-center '>
    <div className='w-full h-full flex flex-col items-center space-y-14 lg:space-y-20 py-16 max-w-screen-xl'>
    
     <div className='w-full  flex items-start justify-start px-5 gap-x-8 py-8 lg:space-x-14'>
      {/* Image */}
     <div className='relative '>
      <img className=' hidden lg:block w-full' src="/c-2.jpeg"/>
    <div className='absolute -bottom-28 -right-44 z-0'> <img className='h-[220px] hidden lg:block' src="/jobFindNum.png"/></div> 

      </div>
     <div className='flex flex-col items-start justify-start space-y-6  w-full lg:w-[70%]'>
     <div className={`${jost.className} text-2xl lg:text-4xl font-semibold text-[#202124]`}>Millions of Jobs.Find the one that suits you.  </div>
     <div style={{fontWeight:300}} className={`${jost.className} font-light text-sm text-[#798490] flex  `}>Search all the open positions on the web. Get your  own <br/> personalized salary estimate. Read reviews on over 600,000 <br/> companies worldwide. </div>
      {/* Un-Order list */}
     <div className='flex flex-col items-start justify-start space-y-3 lg:space-y-6 w-full'>
     <div className='flex items-center justify-center space-x-3 text-sm text-[#202124]'><div><IoCheckmarkOutline /></div><div>Bring to the table win-win survival</div></div>           
     <div className='flex items-center justify-center space-x-3 text-sm text-[#202124]'><div><IoCheckmarkOutline /></div><div>Capitalize on low hanging fruit to identify</div></div>           
     <div className='flex items-center justify-center space-x-3 text-sm text-[#202124]'><div><IoCheckmarkOutline /></div><div>But I must explain to you how all this</div></div>           
    </div>
     <Link href='#' className='z-10 w-[170px] text-lg py-3 flex items-center hover:cursor-pointer justify-center duration-300 bg-[#1967d2] hover:bg-white hover:border border hover:text-[#1967d2] border-[#1967d2]  text-white rounded-lg '>Get Started</Link>
    </div>

        </div>   

     <div className='w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-center md:justify-between space-y-8 md:space-y-0 md:px-12'>
     <div className='flex flex-col items-center justify-center space-y-3'><div className='text-4xl lg:text-4xl font-semibold flex items-center gap-x-2'>4 M</div><div className='text-sm  lg:text-md text-[#798490] '>4 million daily active users</div></div>   
     <div className='flex flex-col items-center justify-center space-y-3'><div className='text-4xl lg:text-4xl font-semibold  flex items-center gap-x-2'>12 K</div><div className='text-sm lg:text-md text-[#798490] '>Over 12k open job positions</div></div>   
     <div className='flex flex-col items-center justify-center space-y-3'><div  className='text-4xl lg:text-4xl font-semibold flex items-center gap-x-2'>20 M</div><div className='text-sm lg:text-md text-[#798490] '>Over 20 million stories shared</div></div>   
        </div>   
       {/* <TestimonialsArray/> */}
 </div> 
 </div> 
  )
}

export default Status