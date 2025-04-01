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
import AboutWebsite from './HomepageComponents/AboutWebsite'
import PopularBikeSearch from './HomepageComponents/PopularBikeSearch'
import FeaturesBike from './HomepageComponents/FeaturesBike'



const page = () => {
  return (
    <div className='flex flex-col space-y-12 scroll-smooth'>
      <Hero/>
      <PopularBikeSearch/>
      <FeaturesBike/>
      <PopularCompany/>
      {/* <BikeDetails/> */}
      <AboutWebsite/>
      {/* <Carousels/> */}
       <Status/>
      <Testmonials/>
       <AppDownload/>
    </div>
  )
}

export default page