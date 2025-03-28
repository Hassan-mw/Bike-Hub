import React from 'react'
import BikeLeft from './BikeLeft'
import BikeRight from './BikeRight'
import { Jost } from 'next/font/google'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const CompareBikeBody =() => {

  return (
    <div className='w-full flex flex-col space-y-5 items-center justify-center '> 

    <div className='w-full max-w-screen-xl flex items-center justify-between   '>
        <BikeLeft/>
        <BikeRight/>
    </div>
    <div className={`${jost.className} bg-green-400 text-white hover:cursor-pointer hover:bg-green-600 duration-500 rounded-md px-4 py-2`}>Compare Bikes</div>
    </div>
  )
}

export default CompareBikeBody