'use client';
import { Jost } from "next/font/google"
import { useState } from "react";
import SideBarFilter from "../SideBarFilter/SideBarFilter";
import SideBarData from "../SideBarFilter/SideBarData";
import { BsDropletHalf, BsFuelPumpFill } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { IoMdSpeedometer } from "react-icons/io";
import Link from "next/link";
import RightBody from "./RightBody";


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface BikeDataType {
    _id:number;
    name: string;
    brand: string;
    category: string;
    price: number; // ✅ Fix: Change 'Number' to 'number'
    mileage: number; // ✅ Fix: Change 'Number' to 'number'
    topSpeed: number; // ✅ Fix: Change 'Number' to 'number'
    weight: number; // ✅ Fix: Change 'Number' to 'number'
    url: string;
    fuelType: string;
    slug: string;
    status: string;
    image:string;
  }

  interface APIResponse {
    data:BikeDataType[]
  }

const BikeBody = ({result}:{result:BikeDataType[]}) => {

  const [count,setCount]=useState(1)
 
 
  const bikePerPage=4;
  const initial=bikePerPage*(count-1);
  const final=count*bikePerPage;
  const paginatedData=result.slice(initial,final)

 const  number=[...Array(Math.ceil(result?.length/bikePerPage)).keys()]

  return (
       <div className="w-full flex items-center justify-center flex-col">
        {/* Left Body */}
        <div className='w-full   max-w-screen-lg flex items-center justify-between lg:px-16  pb-16'>
        <div className='lg:hidden'> <SideBarFilter/></div>
       
       </div>

       {/* Right Body */}
      <RightBody initial={initial} final={final} result={result} paginatedData={paginatedData}  number={number} setCount={setCount} count={count} />
     </div>
  )
}

export default BikeBody






