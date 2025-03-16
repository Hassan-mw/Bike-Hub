import React from 'react'
import Hero from './HomepageComponents/Hero'
import PopularCompany from './HomepageComponents/PopularCompany'

const page = () => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <PopularCompany/>
    </div>
  )
}

export default page