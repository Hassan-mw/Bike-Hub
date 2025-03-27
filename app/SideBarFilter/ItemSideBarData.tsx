'use client';
import { Jost } from 'next/font/google'
import React, { useEffect, useState } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { TbBrand4Chan, TbCategory, TbShoppingBagDiscount } from "react-icons/tb";
const jost=Jost({
  weight:['400'],
  subsets:['latin']
})

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { IoResizeOutline } from 'react-icons/io5';

const ItemSideBarData = () => {
     const [category,setCategory]=useState('all')
     const [company,setCompany]=useState('all')
     const [size,setSize]=useState('all')
     const [discount,setDiscount]=useState('all')
     const [price,setPrice]=useState('0')
     const searchParams=useSearchParams();
     const pathname=usePathname()
     const router=useRouter();
  


      useEffect(()=>{
       
      const params=new URLSearchParams(searchParams)
     if (company!=="all")       params.set("company",company);         else params.delete("company");
     if (discount!=="all")       params.set("discount",discount);         else params.delete("discount");
     if(category!=="all")     params.set("category",category);   else params.delete("category");
     if (size!=="all")    params.set("size",size);   else params.delete("size");
     if (price !== "0") params.set("price[lt]", price); else params.delete("price[lt]");
         router.replace(`${pathname}?${params.toString()}`,{scroll:false})
      },[company,discount,category,size,price])




  return (
    <div>
        
        <div className='w-full h-full flex flex-col  space-y-8  bg-white lg:border lg:rounded-lg p-4  min-w-[350px]'>
      <div  className={`${jost.className} w-full  grid grid-cols-3 gap-4 text-sm text-[#898989]`}>
       {category!=='all' && <div onClick={()=>setCategory('all')} className='bg-[#eaeffa] rounde-lg px-3  py-2  flex items-center justify-between w-full hover:cursor-pointer'> {category } <span className='text-red-500'>x</span></div>} 
       {discount!=='all' && <div  onClick={()=>setDiscount('all')} className='bg-[#eaeffa] rounde-lg px-3  py-2 flex items-center justify-between w-full hover:cursor-pointer'> {discount}%<span className='text-red-500'>x</span></div>}
       {company!=='all' && <div  onClick={()=>setCompany('all')}  className='bg-[#eaeffa] rounde-lg px-3  py-2 flex items-center justify-between w-full hover:cursor-pointer'>{ company} <span className='text-red-500'>x</span> </div>}
       {size!=='all' && <div  onClick={()=>setSize('all')}  className='bg-[#eaeffa] rounde-lg px-3  py-2 flex items-center justify-between w-full hover:cursor-pointer'>{size} <span className='text-red-500'>x</span></div>}
       {price!=='0' && <div  onClick={()=>setPrice('0')}  className='bg-[#eaeffa] rounde-lg px-3  py-2 flex items-center justify-between w-full hover:cursor-pointer'>${price} <span className='text-red-500'>x</span></div>}

     </div>
   
    {/* input fields */}
    <div className='flex flex-col w-full space-y-7 p-4 rounded-md bg-slate-100'>


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
                                                     <SelectItem value="Helmet">Helmet</SelectItem>
                                                    <SelectItem value="Jacket">Jacket</SelectItem>
                                                    <SelectItem value="Gloves">Gloves</SelectItem>
                                                    <SelectItem value="Boots">Boots</SelectItem>
                                                    <SelectItem value="Pants">Pants</SelectItem>
                                                    <SelectItem value="Guards">Guards</SelectItem>
                                                    <SelectItem value="Goggles">Goggles</SelectItem>
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
                                <Select value={company} onValueChange={(v)=>setCompany(v)}>

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

           {/*  Select Size */}
           <div className='w-full flex flex-col space-y-1 group'>
              <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Size</div>
                     <div className='flex items-center justify-start  group-hover:border-blue-500 border rounded-lg duration-500 border-white bg-white p-2 space-x-3  w-full   px-4'>
                         <div className='text-[#7b7b7b]'><IoResizeOutline size={20} /></div>
                              
                                <div className='w-full'>
                                <Select value={size} onValueChange={(v)=>setSize(v)}>
                               
                                                   <SelectTrigger className="w-full  focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                                     <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-[10px]`}  placeholder="All" />
                                                   </SelectTrigger>
                                                   <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[180px]  w-full`}>
                                                     <SelectItem value="all">All</SelectItem>
                                                     <SelectItem value="Small">Small</SelectItem>
                                                     <SelectItem value="Medium">Medium</SelectItem>
                                                     <SelectItem value="Large">Large</SelectItem>
                                                </SelectContent>
                                           </Select>
                                               </div>
                                                     
                 </div>
           </div>
           {/*  Select Discount  */}
           <div className='w-full flex flex-col space-y-1 group'>
              <div style={{fontWeight:500}} className={` ${jost.className} text-lg`}>Discount</div>
                     <div className='flex items-center justify-start  group-hover:border-blue-500 border rounded-lg duration-500 border-white bg-white p-2 space-x-3  w-full   px-4'>
                         <div className='text-[#7b7b7b]'><TbShoppingBagDiscount size={20} /></div>
                              
                                <div className='w-full'>
                                <Select value={discount} onValueChange={(v)=>setDiscount(v)}>
                               
                                                   <SelectTrigger className="w-full  focus:ring-0 shadow-none border-none focus:outline-none text-[#7b7b7b] text-base">
                                                     <SelectValue className={`  placeholder:truncate  placeholder:${jost.className} placeholder:text-[10px]`}  placeholder="All" />
                                                   </SelectTrigger>
                                                   <SelectContent className={` ${jost.className} text-[#888888]  text-xs h-[180px]  w-full`}>
                                                     <SelectItem value="all">All</SelectItem>
                                                     <SelectItem value="10">10 %</SelectItem>
                                                     <SelectItem value="20">20 %</SelectItem>
                                                     <SelectItem value="40">40 %</SelectItem>
                                                     <SelectItem value="60">60 %</SelectItem>
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
                       <input type='range' min='0'   value={price} max='500'   onChange={(e) => setPrice(e.target.value)} placeholder='City or postcode' className={`w-full h-1 placeholder:${jost.className}`}  />       
                          </div>
                
           </div>

        </div>      
      </div>
    </div>
  )
}

export default ItemSideBarData