import React from 'react'
interface dataType{
    image:string
}


const CompareBikeData = ({image}:dataType) => {
  return (
    <div className='w-full flex flex-col space-y-3'>
        <img src={`/${image}`}/>
    

    </div>
  )
}

export default CompareBikeData