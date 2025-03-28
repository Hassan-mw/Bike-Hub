import React from 'react'
import BikeLeft from './BikeLeft'
import BikeRight from './BikeRight'

const CompareBikeBody = () => {
  return (
    <div className='w-full flex items-center justify-center '> 

    <div className='w-full max-w-screen-xl flex items-center justify-between  '>
        <BikeLeft/>
        <BikeRight/>
    </div>
    </div>
  )
}

export default CompareBikeBody