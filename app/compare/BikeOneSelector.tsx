'use client';
import BikeSelector from "./BikeSelector"

const BikeLeft = () => {
    const value="left";
  return (
    <div className='w-full flex flex-col space-y-3'>

    <div>
      <BikeSelector border='border  rounded-r-none rounded-md border-[#e6e6e6] ' type='absolute top-1/2 -right-7 text-2xl  size-12 border-4 bg-white rounded-full text-red-400 flex items-center justify-center' value={value}/>
      </div> 
    </div>
  )
}

export default BikeLeft