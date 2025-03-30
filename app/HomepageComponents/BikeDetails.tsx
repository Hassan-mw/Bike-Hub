import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const BikeDetails = () => {
  return (
    <div className='w-full  flex items-center justify-center p-5  '>
    <div className='w-full  flex flex-col space-y-8 max-w-7xl  '>
   <div className=' w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
   <div className='md:w-1/2  flex flex-col space-y-3'>
    <div className={`${jost.className} text-black/80 text-3xl md:text-4xl`}>"Find Your Perfect Ride"</div>
    <div style={{fontWeight:400}} className={`${jost.className} text-xl md:text-md lg:text-xl  text-black/50 md:max-w-[500px]`}>At Bike-Hub, we bring the world of motorcycles to your fingertips. Explore a diverse range of motorcycle brands and models, all in one convenient location. Our platform simplifies your search, allowing you to compare specifications, features, and prices effortlessly. Based in Islamabad, PK, we are passionate about connecting riders with their perfect bikes. Whether you’re a seasoned rider or just starting out, Bike-Hub is your ultimate destination for motorcycle exploration.</div>
   </div>
   <div className=' md:w-[40%] '>
    
    
    <img className='object-cover min-h-full  rounded-md' src="./bike-detail-image.jpg"/>
    </div>
   </div>
    </div>
    </div>
  )
}

export default BikeDetails