import React from 'react'
import Hero from './HomepageComponents/Hero'
import PopularCompany from './HomepageComponents/PopularCompany'
import BikeDetails from './HomepageComponents/BikeDetails'
import Test from './HomepageComponents/Test'
import Testmonials from './HomepageComponents/Testmonials'
import Status from './HomepageComponents/Status'
import Carousels from './HomepageComponents/Carousels'
import HoverCard from './HomepageComponents/HoverCard'
import AppDownload from './HomepageComponents/AppDownload'
import BrowseByStyle from './HomepageComponents/BrowseByStyle'


const page = () => {
  return (
    <div className='flex flex-col space-y-24 md:space-y-32 scroll-smooth'>
      <Hero/>
      <BikeDetails/>
      <PopularCompany/>
      <Carousels/>
       <Status/>
       <AppDownload/>
       <BrowseByStyle/>
      <Testmonials/>
    </div>
  )
}

export default page