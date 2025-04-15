import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const FeaturesBike = () => {

  const data=[
    {name:"Harley-Davidson Sportster 883",url:"/user-1742580402393.jpeg",category:" Electric-Powered for Effortless Rides",description:"A classic cruiser motorcycle with a robust V-twin engine, known for its raw power and iconic design."},
    {name:"Harley-Davidson Sportster 883",url:"/user-1742575691427.jpeg",category:"Best for Off-Road Adventures",description:"A classic cruiser motorcycle with a robust V-twin engine, known for its raw power and iconic design."},
    {name:"Harley-Davidson Sportster 883",url:"/user-1742580688893.jpeg",category:"Perfect for City Commuting",description:"A classic cruiser motorcycle with a robust V-twin engine, known for its raw power and iconic design."},
  ]
  return (
    <div className='w-full flex  items-center justify-center py-10'>
    <div className='w-full max-w-screen-xl flex flex-col items-center justify-center space-y-10'>


        {/* Upper Test */}
    <div className={`${jost.className} flex flex-col items-center justify-center space-y-3 `}>
    <div className={`${jost.className} text-[#252629] text-3xl md:text-5xl  `}>Featured Bikes</div>
   <div style={{fontWeight:400}} className={`${jost.className}  text-md text-[#879099] `}>Find the perfect ride that matches your lifestyle and adventure. </div> 
    </div>



    {/* Data */}
    <div className='w-full grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4'>
    
    {
     data.map((data,index)=>
      <div key={index} className="flex flex-col border  rounded-md">
      <div className={`italic w-full flex items-center justify-center text-xl text-orange-500 border-b p-3`}>{data.category}</div>
      <Image layout="intrinsic"   height={300} width={300}  className="h-60 sm:h-40  lg:h-60 w-full object-cover px-4 " src={data.url} alt='Bike Image'/>
      <div className="flex flex-col items-center justify-center rounded-b-md border-t   bg-blue-400">
      <div style={{fontWeight:400}} className={`${jost.className} text-md text-xl text-white p-3`}>{data.name}</div>
      {/* <p style={{fontWeight:400}} className={`${jost.className} text-black text-sm `}>{data.description}</p> */}
      </div>
      </div>
     
            )}

    </div>
    </div>
    </div>
  )
}

export default FeaturesBike