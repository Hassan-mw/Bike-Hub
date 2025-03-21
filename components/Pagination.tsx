'use client'
import React, { useState } from 'react'

const Pagination = () => {
 const [count,setCount]=useState(1)


 const bikePerPage=5;
 const initial=bikePerPage*(count-1);
 const final=count*bikePerPage;

    return (
    <div className='flex flex-colspace-y-5'>
        <div>{initial},{final},{count}</div>
          <div onClick={()=>setCount(count+1)} className='bg-green-400 p-3 rounded-lg'>Click Me</div>

    </div>
  )
}

export default Pagination