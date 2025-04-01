import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const PopularBikeSearch = () => {
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
    <div className='flex items-center justify-start space-x-8 border rounded-md p-2'>
      {/* Image */}
      <div>
        <img className='h-24' src="./road.png"/>
      </div>
      <div className='flex flex-col space-y-2 '>
    <div className={`${jost.className} text-[#252629] text-2xl`}>Road Bikes </div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#a1a9b2] text-md`}>(5 avaliable) </div>
      
      </div>
    </div> 

    {/* 2 */}
    <div className='flex items-center justify-start space-x-8 border rounded-md p-2'>
      {/* Image */}
      <div>
        <img className='h-24' src="./classic.png"/>
      </div>
      <div className='flex flex-col space-y-2 '>
    <div className={`${jost.className} text-[#252629] text-2xl`}>Street Bikes </div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#a1a9b2] text-md`}>(5 avaliable) </div>
      
      </div>
    </div>
      
    {/* 3 */}
    <div className='flex items-center justify-start space-x-8 border rounded-md p-2'>
      {/* Image */}
      <div>
        <img className='h-24' src="./sports.png"/>
      </div>
      <div className='flex flex-col space-y-2 '>
    <div className={`${jost.className} text-[#252629] text-2xl`}>Sports Bikes </div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#a1a9b2] text-md`}>(5 avaliable) </div>
      
      </div>
    </div>

    {/* 4 */}
    <div className='flex items-center justify-start space-x-3 border rounded-md p-2'>
      {/* Image */}
      <div>
        <img className='h-24' src="./touring.png"/>
      </div>
      <div className='flex flex-col space-y-2 '>
    <div className={`${jost.className} text-[#252629] text-2xl truncate  max-w-40 lg:max-w-60`}>Adventure Bikes </div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#a1a9b2] text-md`}>(5 avaliable) </div>
      
      </div>
    </div>

    {/* 5 */}
     <div className='flex items-center justify-start space-x-8 border rounded-md p-3'>
      {/* Image */}
      <div>
        <img className='h-16' src="./electric.png"/>
      </div>
      <div className='flex flex-col space-y-2 '>
    <div className={`${jost.className} text-[#252629] text-2xl`}>Electric Bikes </div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#a1a9b2] text-md`}>(5 avaliable) </div>
      
      </div>
     </div>

    {/* 6 */}
    <div className='flex items-center justify-start space-x-8 border rounded-md p-3'>
      {/* Image */}
      <div>
        <img className='h-16' src="./curiser.png"/>
      </div>
      <div className='flex flex-col space-y-2 '>
    <div className={`${jost.className} text-[#252629] text-2xl`}>Cruiser Bikes </div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#a1a9b2] text-md`}>(5 avaliable) </div>
      
      </div>
    </div>

    </div>
    </div>
    </div>
  )
}

export default PopularBikeSearch