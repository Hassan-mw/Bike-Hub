import React from 'react'
import BikeLeft from './BikeLeft'
import BikeRight from './BikeRight'

const CompareBikeBody = () => {
  return (
    <div className='w-full grid grid-cols-2'>
        <BikeLeft/>
        <BikeRight/>
    </div>
  )
}

export default CompareBikeBody