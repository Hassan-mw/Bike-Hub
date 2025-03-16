import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import HeroData from './HeroData'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})



const Hero = () => {
  return (
    <div className=' w-full flex items-center justify-center  relative'>
      
         <div className='hidden  w-full h-full lg:block  flex-col relative '>     
          {/* <div className='w-full object-fill h-full  z-30 '> */}
                 {/* f */}
          {/* </div> */}
         <img  className='object-cover  w-full h-full max-h-[80vh] ' src="./bg-images.jpeg"/>
        </div>
         <div className='flex flex-col absolute  top-1/3  left-9 text-white  font-extrabold'>
               <div className={`${jost.className} text-6xl`}>Ride the Future, Own the Road</div>
               <div>Explore the best motorbikes, accessories, and gear. Find your perfect ride today!</div>
         </div>
        
         {/* <HeroData/> */}
      
    </div>
  )
}

export default Hero