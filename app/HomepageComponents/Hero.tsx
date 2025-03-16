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
    <div className=' w-full  flex items-center justify-center  px-11 pt-10'>
       <div className='w-full max-w-screen-xl flex items-center justify-center '>
     <HeroData/>
         <div className='hidden  lg:block  flex-col  w-[70%] '>
         
        <img className=' h-[500px] w-full'  src="/BMW3.png" alt='Home-page-bike'/>

      </div>
       </div> 
    </div>
  )
}

export default Hero