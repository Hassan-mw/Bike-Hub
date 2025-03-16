import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-white w-full flex items-center justify-center '>
        <img className='bg-cover h-full w-full  2xl:max-h-[840px] max-w-[900px]'  src="/BMW2.png" alt='Home-page-bike'/>
    </div>
  )
}

export default Hero