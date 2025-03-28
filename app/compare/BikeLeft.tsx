import BikeLeftSelector from "./BikeLeftSelector"

const BikeLeft =async () => {
    const value="left";
  return (
    <div className='w-full flex flex-col space-y-3'>

    <div>
      <BikeLeftSelector value={value}/>
      </div> 
    </div>
  )
}

export default BikeLeft