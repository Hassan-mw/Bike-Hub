import { Jost } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const BikeDetails = () => {
  return (
    <div className='w-full  flex items-center justify-center p-5 md:bg-green-600 md-lg:bg-blue-500 '>
    <div className='w-full  flex flex-col space-y-8 max-w-7xl  '>
   <div className=' w-full flex flex-col md-lg:flex-row space-y-8 lg:space-y-0 md:space-x-14'>
   
    {/* 2 */}
   <div className=' w-full lg:w-[40%]  flex items-center justify-center'>
    
    
    <img className='object-cover w-full min-h-full h-96 rounded-lg lg:rounded-l-lg' src="./bike-detail-image.jpg"/>
    </div>
     {/* 1 */}
   <div className='w-full lg:w-1/2  flex items-start justify-start flex-col space-y-8  '>
    <div className={`${jost.className} text-black/80 text-3xl md:text-5xl`}> Find Your Perfect Ride </div>
    <div style={{fontWeight:300}} className={`${jost.className} text-md text-black lg:max-w-[500px]`}>At Bike-Hub, we bring the world of motorcycles to your fingertips. Explore a diverse range of motorcycle brands and models, all in one convenient location. Our platform simplifies your search, allowing you to compare specifications, features, and prices effortlessly. Based in Islamabad, PK, we are passionate about connecting riders with their perfect bikes. Whether you’re a seasoned rider or just starting out, Bike-Hub is your ultimate destination for motorcycle exploration.</div>
   <div className='w-full flex items-center lg:items-start  justify-center lg:justify-start md:max-w-[500px] '>

      <Link href="/bike"  style={{fontWeight:400}} className={`${jost.className} hover:cursor-pointer text-white   w-5/6 flex items-center justify-center bg-green-500  text-xl py-3  rounded-md`}>Explore Bikes</Link>
   </div>
   </div>
   </div>
    </div>
    </div>
  )
}

export default BikeDetails