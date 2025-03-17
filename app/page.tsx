import React from 'react'
import Hero from './HomepageComponents/Hero'
import PopularCompany from './HomepageComponents/PopularCompany'
import BikeDetails from './HomepageComponents/BikeDetails'
import Test from './HomepageComponents/Test'
import Testmonials from './HomepageComponents/Testmonials'
import Status from './HomepageComponents/Status'

const page = () => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <PopularCompany/>
      <BikeDetails/>
     <Status/>
      <Testmonials/>
    </div>
  )
}

export default page