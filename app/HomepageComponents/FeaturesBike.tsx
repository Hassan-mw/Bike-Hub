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
    <div className={`${jost.className} text-[#252629] text-3xl md:text-4xl  `}>Featured Bikes</div>
   <div style={{fontWeight:400}} className={`${jost.className}  text-md text-[#879099] `}>Find the perfect ride that matches your lifestyle and adventure. </div> 
    </div>



    {/* Data */}
    <div className='w-full grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4'>
    
      {/* 1 */}
      <div className="flex flex-col border p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}> Electric-Powered for Effortless Rides</div>
      <img className="h-60 sm:h-40  lg:h-72 w-full object-cover rounded-t-md " src="./c-1.jpeg"/>
      <div className="flex flex-col items-center justify-center space-y-2 bg-white rounded-b-md border-t  p-3">
      <div className={`${jost.className} text-md`}>Harley-Davidson Sportster 883</div>
      <div style={{fontWeight:300}} className={`${jost.className} text-[#504d4d]`}>A classic cruiser motorcycle with a robust V-twin engine, known for its raw power and iconic design.</div>
      </div>
      </div>
     
      {/* 2 */}
      <div className="flex flex-col border p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Perfect for City Commuting</div>
      <img className="h-60 sm:h-40  lg:h-72 w-full object-cover rounded-t-md " src="./c-2.jpeg"/>
      <div className="flex flex-col items-center justify-center space-y-2 bg-white rounded-b-md border-t  p-3">
      <div className={`${jost.className} text-md`}>Harley-Davidson Sportster 883</div>
      <div style={{fontWeight:300}} className={`${jost.className} text-[#504d4d]`}>A classic cruiser motorcycle with a robust V-twin engine, known for its raw power and iconic design.</div>
      </div>
      </div>
     
      {/* 3*/}
      <div className="flex flex-col border p-3 rounded-md">
      <div className={`${jost.className} w-full flex items-center justify-center text-xl`}>Best for Off-Road Adventures</div>
      <img className="h-60 sm:h-40  lg:h-72 w-full object-cover " src="./c3.jpeg"/>
      <div className="flex flex-col items-center justify-center space-y-2 bg-white rounded-b-md border-t  p-3">
      <div className={`${jost.className} text-md`}>Harley-Davidson Sportster 883</div>
      <div style={{fontWeight:300}} className={`${jost.className} text-[#504d4d]`}>A classic cruiser motorcycle with a robust V-twin engine, known for its raw power and iconic design.</div>
      </div>
      </div>
     


    </div>
    </div>
    </div>
  )
}

export default FeaturesBike