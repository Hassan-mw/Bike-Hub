import { Jost } from 'next/font/google'
import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const BikeLeft = () => {
  return (
    <div className='w-full flex flex-col space-y-3'>
        <div className={`${jost.className} w-full flex items-center justify-center h-80 border-4 rounded-md rounded-r-none`}>
       <img className='h-52' src="./bike-compare-icon.svg"/>
        </div>

    </div>
  )
}

export default BikeLeft