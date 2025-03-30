'use client';
import BikeSelector from "./BikeSelector"

const BikeLeft = () => {
    const value="left";
  return (
    <div className='w-full flex flex-col space-y-3'>

    <div>
      <BikeSelector border='border  rounded-r-none rounded-md border-[#e6e6e6] '  value={value}/>
      </div> 
    </div>
  )
}

export default BikeLeft