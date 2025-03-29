'use client';
import { Jost } from "next/font/google"
import { useState } from "react";
import ItemSideBarFilter from "../SideBarFilter/ItemSidebarFilter";
import ItemSideBarData from "../SideBarFilter/ItemSideBarData";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface BikeDataType {
    _id:number;
    name: string;
    category: string;
    price: number; // ✅ Fix: Change 'Number' to 'number'
    discount: string;
    subtitle: string;
    image:string;
    size:string;
  }


const ItemsBody = ({result}:{result:BikeDataType[]}) => {

  const [count,setCount]=useState(1)
 
 
  const bikePerPage=4;
  const initial=bikePerPage*(count-1);
  const final=count*bikePerPage;
  const paginatedData=result.slice(initial,final)

 const  number=[...Array(Math.ceil(result?.length/bikePerPage)).keys()]

  return (
       <>
        {/* Left Body */}
        <div className='w-full   max-w-screen-xl flex items-center justify-between  lg:justify-end pb-16'>
        <div className='lg:hidden p-6'> <ItemSideBarFilter/></div>
       {/* <div className={`${jost.className} md:text-xl lg:text-2xl lg:border-b lg:pb-1`}>Showing {initial} – {final} of {result.length} results</div> */}
        </div> 


       {/* Right Body */}
        <div className='w-full  flex  items-start justify-center lg:space-x-6'>
        <div className='hidden lg:block '><ItemSideBarData/></div>
           {/* data */}
            
            {
             paginatedData.length>0 ?(

            <div className='w-full max-w-screen-lg flex flex-col items-center justify-center space-y-8'>
               {/* Top NAv BAR */}
         <div className="w-full flex items-center justify-between">
         <div style={{fontWeight:300}} className={`${jost.className} text-smlg:border-b lg:pb-1`}>Showing {initial} – {final} of {result.length} results</div>

         
        
         <div className="">
  
          <select style={{fontWeight:300}} className={`${jost.className} w-36 md:w-52 border-4 px-3 py-2 rounded-md focus:border-blue-400`}>
            <option>All</option>
            <option>Oldest</option>
            <option>Newest</option>
          </select>

          </div>
          </div> 
             <div className='w-full max-w-screen-lg grid grid-cols-1 sm:grid-cols-2  xl: gap-10 '>
           { paginatedData.map((data,index:number)=>(
            
            <Link href="/" key={index} className='w-full border-4 flex flex-col items-center justify-center space-y-1 bg-[#f4f7fc] rounded-xl p-2 py-4 relative'>
                      <div className={`${jost.className} top-3 left-5 absolute bg-[#2d972f] size-9 flex items-center justify-center text-xs rounded-full text-white`}>{data.discount}%</div>
                      <div className={`${jost.className} top-5 right-5 absolute text-[#2d972f] text-xl hover:text-blue-600 duration-500 hover:cursor-pointer`}><FaHeart  /></div>
                  <img loading='lazy' className='size-48' src={` /${data.image}`}/>
                  <div className={`${jost.className} text-xl`}>{data.name}</div>
                  <div style={{fontWeight:300}} className={`${jost.className} text-sm`}> {data.subtitle}</div>
                  <div className={`${jost.className} flex items-end justify-end space-x-0.5 `}><span className='text-xl text-[#2d972f]'>${data.price*0.8}</span><span className='text-sm'>${data.price}</span></div>
                  <div className={`${jost.className} w-5/6 flex items-center justify-center bg-[#2d972f] rounded-lg p-3 text-white hover:cursor-pointer hover:bg-green-700 duration-500`}>Buy Now</div>
                  </Link>
             ))}
            </div>
          <div className="flex space-x-2 mt-6">
             {number.map((page) => (
           <button
             key={page}
             onClick={() => setCount(page + 1)}
         
              className={`${jost.className} hover:cursor-pointer text-[#696969]  border py-2 px-4 rounded-full ${page+1===count ? 'bg-[#1967d2] text-white' : 'hover:bg-[#1967d2] hover:text-white'}`}
            >
            {page + 1}
            </button>
           ))}
          </div>

            </div>
            )
            
              :
              <div className={`${jost.className}  w-full  h-full flex items-center min-h-[600px] max-w-screen-xl justify-center text-4xl`}>No Data</div>
           
           }
           
     </div></>
  )
}

export default ItemsBody







