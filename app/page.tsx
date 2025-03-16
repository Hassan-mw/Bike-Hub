import React from 'react'
import Hero from './HomepageComponents/Hero'
import PopularCompany from './HomepageComponents/PopularCompany'
import BikeDetails from './HomepageComponents/BikeDetails'

const page = () => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <PopularCompany/>
      <BikeDetails/>
    </div>
  )
}

export default page