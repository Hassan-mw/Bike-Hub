'use client';
import { Jost } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TbBrand4Chan, TbCategory } from "react-icons/tb";
const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { BsFuelPump } from 'react-icons/bs';
const SideBarData = () => {
    const [currentPage,setCurrentPage]=useState(true)    
     const [name,setName]=useState('')
     const [brand,setBrand]=useState('all')
     const [category,setCategory]=useState('all')
     const [fuelType,setFuelType]=useState('all')
     const [milage,setMilage]=useState('10')
     const [topSpeed,setTopSpeed]=useState('10')
     const [price,setPrice]=useState('0')
     const [model,setModel]=useState('2000')
     const searchParams=useSearchParams();
     const pathname=usePathname()
     const router=useRouter();
     useEffect(()=>{
  if(pathname==='/gear'){
    setCurrentPage(false)
  }

     },[])


      useEffect(()=>{
      const params=new URLSearchParams(searchParams)
     if(name!=="")            params.set("name",name) ;          else params.delete("name");
     if (brand!=="all")       params.set("brand",brand);         else params.delete("brand");
     if(category!=="all")     params.set("category",category);   else params.delete("category");
     if (fuelType!=="all")    params.set("fuelType",fuelType);   else params.delete("fuelType");
     if (milage !== "10") params.set("mileage[lt]", milage); else params.delete("mileage[lt]");
     if (topSpeed !== "10") params.set("topSpeed[lt]", topSpeed); else params.delete("topSpeed[lt]");
     if (price !== "0") params.set("price[lt]", price); else params.delete("price[lt]");
     if (model !== "2000") params.set("model[lt]", model); else params.delete("model[lt]");

         router.replace(`${pathname}?${params.toString()}`,{scroll:false})
      },[name,brand,category,fuelType,milage,topSpeed,price,model])


     
function handleFuleTypeChange(){

}

  return (
    <div>
        
        <div className='w-full h-full flex flex-col  space-y-8  bg-white lg:border lg:rounded-lg p-4  min-w-[350px]'>
    {/* input fields */}
    <div className='flex flex-col w-full space-y-7 p-4 rounded-md bg-slate-100'>


           {/*  input Name  1*/}
           <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Search by Name</div>

                 <div className='border group-hover:border-blue-500 duration-500 p-3 space-x-3 rounded-md border-white bg-white flex items-center justify-center'>
                   <div className='text-[#7b7b7b]'><CiSearch size={25} /></div>
                    <div className='w-full'>
                      <input type='text'   value={name} onChange={(e) => setName(e.target.value)} placeholder='Search by name ...'  className={` placeholder:${jost.className} focus:outline-none lg:text-base text-[#7b8793]`}  />       
                        </div>
                             </div> 
           </div>

           {/*  Select Categroy  */}
           <div className='w-full flex flex-col space-y-1 group'>
              <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Category</div>
                     <div className='flex items-center justify-start  group-hover:border-blue-500 border rounded-lg duration-500 border-white bg-white p-2 space-x-3  w-full   px-4'>
                         <div className='text-[#7b7b7b]'><TbCategory size={20} /></div>
                                <div className='w-full'>
                                           <Select value={category} onValueChange={(v)=>setCategory(v)}>
                                                   <SelectTrigger className="w-full  focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                                     <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-xs`}  placeholder="All" />
                                                   </SelectTrigger>
                                                   <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[250px]  w-full`}>
                                                     <SelectItem value="all">All</SelectItem>
                                                     <SelectItem value="Sports">Sports</SelectItem>
                                                    <SelectItem value="Touring">Touring</SelectItem>
                                                    <SelectItem value="Adventure">Adventure</SelectItem>
                                                    <SelectItem value="Street">Street</SelectItem>
                                                    <SelectItem value="Cruiser">Cruiser</SelectItem>
                                                    <SelectItem value="Electric">Electric</SelectItem>
                                                    <SelectItem value="Classic">Classic</SelectItem>
                                                </SelectContent>
                                           </Select>
                                               </div>
                                                     
                 </div>
           </div>

           {/*  Select Company  */}
           <div className='w-full flex flex-col space-y-1 group'>
              <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Company</div>
                     <div className='flex items-center justify-start  group-hover:border-blue-500 border rounded-lg duration-500 border-white bg-white p-2 space-x-3  w-full   px-4'>
                         <div className='text-[#7b7b7b]'><TbBrand4Chan size={20} /></div>                       
                                <div className='w-full'>
                                <Select value={brand} onValueChange={(v)=>setBrand(v)}>

                                                   <SelectTrigger className="w-full  focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                                     <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-[10px]`}  placeholder="All" />
                                                   </SelectTrigger>
                                                   <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[180px]  w-full`}>
                                                     <SelectItem value="all">All</SelectItem>
                                                     <SelectItem value="Triumph">Triumph </SelectItem>
                                                     <SelectItem value="Ducati">Ducati</SelectItem>
                                                     <SelectItem value="Harley-Davidson">Harley Davidson</SelectItem>
                                                     <SelectItem value="BMW">BMW</SelectItem>
                                                     <SelectItem value="Honda">Honda</SelectItem>
                                                </SelectContent>
                                           </Select>
                                               </div>
                                                     
                 </div>
           </div>

           {/*  Select Fuel Type  */}
           <div className='w-full flex flex-col space-y-1 group'>
              <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Fuel Type</div>
                     <div className='flex items-center justify-start  group-hover:border-blue-500 border rounded-lg duration-500 border-white bg-white p-2 space-x-3  w-full   px-4'>
                         <div className='text-[#7b7b7b]'><BsFuelPump size={20} /></div>
                              
                                <div className='w-full'>
                                <Select value={fuelType} onValueChange={(v)=>setFuelType(v)}>
                               
                                                   <SelectTrigger className="w-full  focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                                     <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-[10px]`}  placeholder="All" />
                                                   </SelectTrigger>
                                                   <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[180px]  w-full`}>
                                                     <SelectItem value="all">All</SelectItem>
                                                     <SelectItem value="Petrol">Petrol</SelectItem>
                                                     <SelectItem value="Electric">Electric</SelectItem>
                                                </SelectContent>
                                           </Select>
                                               </div>
                                                     
                 </div>
           </div>

           {/* Radii Price*/}
           <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Price</div>
              <div style={{fontWeight:500}} className={` ${jost.className} w-full flex items-center justify-center text-sm text-blue-500`}>$ {price} </div>
                    <div className='w-full'>
                       <input type='range' min='0'   value={price} max='50000'   onChange={(e) => setPrice(e.target.value)} placeholder='City or postcode' className={`w-full h-1 placeholder:${jost.className}`}  />       
                          </div>
                
           </div>

           {/* Radii Model*/}
          {currentPage && <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Model</div>
              <div style={{fontWeight:500}} className={` ${jost.className} w-full flex items-center justify-center text-sm text-blue-500`}> {model} Model </div>
                    <div className='w-full'>
                       <input type='range' min='2000'   value={model} max='2025'   onChange={(e) => setModel(e.target.value)} placeholder='City or postcode' className={`w-full h-1 placeholder:${jost.className}`}  />       
                          </div>
                
           </div>}

           {/* Radii milage*/}
         {currentPage &&  <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Milage</div>
              <div style={{fontWeight:500}} className={` ${jost.className} w-full flex items-center justify-center text-sm text-blue-500`}> {milage} Milage </div>
                    <div className='w-full'>
                       <input type='range' min='10'   value={milage} max='400'   onChange={(e) => setMilage(e.target.value)} placeholder='City or postcode' className={`w-full h-1 placeholder:${jost.className}`}  />       
                          </div>
                
           </div>}

           {/* Radii TopSpeed*/}
          {currentPage && <div className='w-full flex flex-col space-y-1 group'>
          <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Top Speed</div>
              <div style={{fontWeight:500}} className={` ${jost.className} w-full flex items-center justify-center text-sm text-blue-500`}> {topSpeed} km/h </div>
                    <div className='w-full'>
                       <input type='range' min='10'   value={topSpeed} max='400'   onChange={(e) => setTopSpeed(e.target.value)} placeholder='City or postcode' className={`w-full h-1 placeholder:${jost.className}`}  />       
                          </div>
                
           </div>}
  
  
        </div>      
      </div>
    </div>
  )
}

export default SideBarData