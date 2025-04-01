import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const FeaturesBike = () => {
  return (
    <div className='w-full flex  items-center justify-center py-10'>
    <div className='w-full max-w-screen-xl flex flex-col items-center justify-center space-y-10'>


        {/* Upper Test */}
    <div className={`${jost.className} flex flex-col items-center justify-center space-y-3 `}>
    <div className={`${jost.className} text-[#252629] text-3xl md:text-4xl border-b-4 pb-2 `}>Featured Bikes</div>
   <div style={{fontWeight:400}} className={`${jost.className}  text-md text-[#a1a9b2] `}>Find the perfect ride that matches your lifestyle and adventure. </div> 
    </div>



    {/* Data */}
    <div className='w-full grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4'>
      {/* 1 */}
    <div   className='flex flex-col items-center justify-center p-4 bg-white rounded-md overflow-hidden border group relative border-green-500'>
        <div style={{fontWeight:400}} className={`${jost.className} text-xl border-b`}> Best for Off-Road Adventures</div>
         <img className='h-60  ' src="./user-1742579208356.jpeg" />
         <div className='w-full flex flex-col items-center justify-center space-y-5 '>
         <div className={`${jost.className} text-4xl tracking-widest `}>Honda 150</div>
       
    </div>
    </div>
      {/* 2 */}
    <div   className='flex flex-col items-center justify-center p-4 bg-white rounded-md overflow-hidden border group relative border-green-500'>
        <div style={{fontWeight:400}} className={`${jost.className} text-xl border-b`}>Perfect for City Commuting</div>
         <img className='h-60  ' src="./user-1742578949550.jpeg" />
         <div className='w-full flex flex-col items-center justify-center space-y-5 '>
         <div className={`${jost.className} text-4xl tracking-widest `}>Honda 150</div>
       
    </div>
    </div>
      {/* 3 */}
    <div   className='flex flex-col items-center justify-center p-4 bg-white rounded-md overflow-hidden border group relative border-green-500'>
        <div style={{fontWeight:400}} className={`${jost.className} text-xl border-b`}> Electric-Powered for Effortless Rides</div>
         <img className='h-60  ' src="./user-1742580402393.jpeg" />
         <div className='w-full flex flex-col items-center justify-center space-y-5 '>
         <div className={`${jost.className} text-4xl tracking-widest `}>Honda 150</div>
       
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default FeaturesBike