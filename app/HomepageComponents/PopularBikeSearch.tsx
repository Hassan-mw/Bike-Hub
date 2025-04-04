import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const PopularBikeSearch = () => {

  const  popularBikeData=[
    {url:"/road.jpg",name:"Road Bikes ",avalibale:'3'},
    {url:"/classic.jpg",name:"Street Bikes  ",avalibale:'3'},
    {url:"/sports.jpg",name:"Sports Bikes  ",avalibale:'3'},
    {url:"/adventure-.png",name:"Adventure Bikes  ",avalibale:'3'},
    {url:"/electric.jpg",name:"Electric Bikes  ",avalibale:'3'},
    {url:"/curiser.jpg",name:"Cruiser Bikes ",avalibale:'3'},
  ]



  return (
    <div className='w-full flex  items-center justify-center'>
    <div className='w-full max-w-screen-xl flex flex-col items-center justify-center space-y-10'>


        {/* Upper Test */}
    <div className={`${jost.className} flex flex-col items-center justify-center space-y-3 `}>
    <div className={`${jost.className} text-[#252629] text-3xl md:text-4xl `}>Popular Bike Categories</div>
   <div style={{fontWeight:400}} className={`${jost.className}  text-md text-[#879099]  `}>2025 bikes available – 50 added today. </div> 
    </div>



    {/* Data */}
    <div className='w-full grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4'>
        {/* 1 */}
        {
          popularBikeData.map((data,index)=>
        
     <div key={index} className='flex items-center justify-start space-x-8 border rounded-md p-2'>
      {/* Image */}
      <div>
        <Image  loading='lazy' height={60} width={60} alt='Bike Image'  src={data.url}/>
      </div>
      <div className='flex flex-col space-y-2 '>
    <div className={`${jost.className} text-[#252629] text-2xl`}>{data.name}</div>
    <div style={{fontWeight:400}} className={`${jost.className} text-[#a1a9b2] text-md`}>(${data.avalibale} avaliable) </div>
      
      </div>
     </div> 
    )
        }
    </div>
    </div>
    </div>
  )
}

export default PopularBikeSearch