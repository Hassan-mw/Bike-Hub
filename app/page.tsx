import React from 'react'
import Hero from './HomepageComponents/Hero'
import PopularCompany from './HomepageComponents/PopularCompany'
import BikeDetails from './HomepageComponents/BikeDetails'
import Test from './HomepageComponents/Test'
import Testmonials from './HomepageComponents/Testmonials'
import Status from './HomepageComponents/Status'
import Carousels from './HomepageComponents/Carousels'
import HoverCard from './HomepageComponents/HoverCard'


const page = () => {
  return (
    <div className='flex flex-col space-y-24 md:space-y-32 scroll-smooth'>
      <Hero/>
      <BikeDetails/>
      <PopularCompany/>
      <Carousels/>
       <Status/>
      <Testmonials/>
    </div>
  )
}

export default page