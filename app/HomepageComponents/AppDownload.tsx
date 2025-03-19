import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
    weight:['500'],
    subsets:['latin']
})

const AppDownload = () => {
  return (
    <div>
        <div className='w-full flex flex-col space-y-5 items-center justify-center'>
        <div className={`${jost.className} text-[#4f8bdd]`}>DOWNLOAD & ENJOY</div>    
        <div className={`${jost.className} text-[#4f8bdd]`}>Get the Bike-Hub  Bike Search App</div>    
        </div>
    </div>
  )
}

export default AppDownload