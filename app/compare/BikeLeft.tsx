'use client';
import BikeSelector from "./BikeSelector"

const BikeLeft = () => {
    const value="left";
  return (
    <div className='w-full flex flex-col space-y-3'>

    <div>
      <BikeSelector border='z-20 bg-white border-slate-600 border-y-4 border-l-4 rounded-md rounded-r-none' type='absolute top-1/2 -right-7 text-2xl  size-12 border-4 bg-white rounded-full text-red-400 flex items-center justify-center' value={value}/>
      </div> 
    </div>
  )
}

export default BikeLeft