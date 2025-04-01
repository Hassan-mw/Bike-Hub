import { Jost } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const BikeDetails = () => {
  return (
    <div className={` w-full  flex items-center justify-center p-5 `}>
    <div className='w-full  flex flex-col space-y-8 max-w-7xl  '>
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 lg:gap-y-0 gap-x-16">
  {/* Image Section */}
  <div className="w-full lg:h-full  ">
    <img
      className="object-cover w-full h-full xl  rounded-lg lg:rounded-l-lg"
      src="./bike-detail-image.jpg"
      alt="Bike"
    />
  </div>

  {/* Text Section (Make width match the image) */}
  <div className="w-full lg:h-full flex items-start justify-start lg:justify-between flex-col  space-y-5 ">
    <div className={`${jost.className} text-black/80 text-5xl md:text-4xl lg:text-5xl`}>
      Find Your Perfect Ride
    </div>
    <p
      style={{ fontWeight:400 }}
      className={`${jost.className} text-xl text-black/60 lg:max-w-[500px]`}
    >
      At Bike-Hub, we bring the world of motorcycles to your fingertips. Explore
      a diverse range of motorcycle brands and models, all in one convenient
      location. Our platform simplifies your search, allowing you to compare
      specifications, features, and prices effortlessly. Based in Islamabad, PK,
      we are passionate about connecting riders with their perfect bikes.
      Whether you’re a seasoned rider or just starting out, Bike-Hub is your
      ultimate destination for motorcycle exploration.
    </p>
    <div className="w-full  flex items-center lg:items-start justify-center lg:justify-start">
      <Link
        href="/bike"
        style={{ fontWeight: 400 }}
        className={`${jost.className} hover:cursor-pointer text-white w-full xl:w-5/6 flex items-center justify-center bg-blue-500 duration-500 hover:bg-blue-700 text-xl py-3 rounded-md`}
      >
        Explore Bikes
      </Link>
    </div>
  </div>
</div>

    </div>
    </div>
  )
}

export default BikeDetails