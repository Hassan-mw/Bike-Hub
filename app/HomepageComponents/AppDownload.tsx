import { Jost } from 'next/font/google'
import React from 'react'
import { FaApple, FaGooglePlay } from "react-icons/fa";
const jost=Jost({
    // weight:['500'],
    subsets:['latin']
})

const AppDownload = () => {
  return (
    <div>
        <div className='w-full flex items-center justify-center  px-2'>
        <div className='w-full max-w-screen-xl flex items-center justify-center lg:space-x-16 lg:px-16 '>
            <div><img className='hidden lg:block  ' src="./mobile.png"/></div>
        <div className='w-full  flex flex-col space-y-5 lg:space-y-10 items-center lg:items-start justify-center lg:justify-start p-5 '>
        <div className={`${jost.className} text-[#3579d7] text-md lg:text-xl`}>DOWNLOAD & ENJOY</div>    
        <div className={`${jost.className} text-[#252629] text-2xl md:text-3xl lg:text-5xl font-semibold `}>Get the Bike-Hub  Bike <br/> Search App</div>    
        <div className={`${jost.className} text-[#787878] text-sm lg:text-md`}>Search through millions of jobs and find the right fit. Simply swipe right to apply.</div>    
        <div className='flex  items-center justify-center space-x-4'>
            <div className='flex items-center justify-center space-x-4 bg-[#252629] hover:cursor-pointer duration-500 hover:bg-blue-500  rounded-md px-5 py-1'>
                <div className='text-white'><FaApple size={30} /></div>
                  <div className={`${jost.className} flex flex-col  text-white`}>
                    <div className='text-xs'>Download on the</div>
                    <div className='text-md'>Apple Store</div>  
                  </div>
            </div>
            <div className='flex items-center justify-center space-x-4 bg-[#252629]  hover:cursor-pointer duration-500 hover:bg-blue-500   rounded-md px-5 py-1'>
                <div className='text-white'><FaGooglePlay size={28} /></div>
                  <div className={`${jost.className} flex flex-col  text-white`}>
                    <div className='text-xs'>Get in on</div>
                    <div className='text-md'>Google play</div>  
                  </div>
            </div>

        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default AppDownload