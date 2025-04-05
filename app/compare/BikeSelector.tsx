'use client';
import { Jost } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
 

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface dataType {
  
  bike:{name:string;id:string}
  value:string;
  setBike: React.Dispatch<React.SetStateAction<{name:string;id:string}>>
}


const BikeSelector = ({bike,setBike,value}:dataType) => {

  
  const pathname=usePathname();
  const searchParams=useSearchParams()
  const router=useRouter()

    function  updateBikeSelection (id: string,name:string)  {
      setBike(pre=>({...pre,id,name}))
      //  setFirst(id)
      // setSelectBike(bike);
     
    };


    useEffect(() => {
      const params = new URLSearchParams(searchParams);

     console.log(bike.id,)
      if (bike.id!=='') {
        params.set(value,bike.id);
        console.log(value,bike.id)
      } else {
        console.log("Before deletion:", params.toString());
        console.log("Deleting key:", value);
        params.delete(value);
        console.log("After deletion:", params.toString());
        
      }
    
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    }, [value]);

// useEffect(()=>{


// },[])
    
    
  return (

    <div className={`${jost.className} w-full flex items-center justify-center h-16 border  rounded-md border-[#e6e6e6]  bg-white relative group hover:cursor-pointer `}>
{bike.name==='' ?


    <DropdownMenu >
    <DropdownMenuTrigger asChild>
      <div  className='w-full   h-full rounded-md hover:cursor-pointer bg-none hover:bg-none shadow-none flex flex-col items-center justify-center '> 
      {/* <div className='size-12 md:size-16 flex items-center justify-center   text-xl md:text-2xl rounded-full group-hover:border-green-500  duration-500  '>+</div> */}
      <div style={{fontWeight:300}} className={`${jost.className} text-xl`}>Select Bike</div>
    </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent side='top' className={`${jost.className}  w-56  text-2xl`}>
      <DropdownMenuGroup>
        {/* 1 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger style={{fontWeight:400}}  className={`${jost.className} text-md`}>Triump</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent  style={{fontWeight:300}} className={`${jost.className} text-md`}>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda2e4c92b5fdeb986ba1f','Triump Tiger 900')}>Triump Tiger 900</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda9c7f089a983c560ee93','Triump Bonneville T100')}>Triump Bonneville T100</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('67ddadb5f089a983c560eebd','Triumpt Speed Triple 1200 RS')}>Triump Speed Triple 1200 RS</DropdownMenuItem>

  
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     
        {/* 2 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger  className={`${jost.className} text-xl`}>Ducati</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent  style={{fontWeight:300}} className={`${jost.className} text-sm`}>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda6eaf089a983c560ee6b','Ducati Panigale V4')}> Ducati Panigale V 4</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('67ddab57f089a983c560eea5','Ducati Multistrada V4')}>Ducati Multistrada V 4</DropdownMenuItem>
  
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     
        {/* 3 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={`${jost.className} text-xl`}>Harley Davidson</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent  style={{fontWeight:300}} className={`${jost.className} text-sm`}>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda7d3f089a983c560ee73','Harley Davidson Iron 883')}>Harley Davidson Iron 883</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('67ddac46f089a983c560eeb1','Harley Davidson Street 750')}>Harley Davidson Street 750</DropdownMenuItem>
  
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     
     
        {/* 4 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={`${jost.className} text-xl`}>Honda</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent style={{fontWeight:300}} className={`${jost.className} text-sm`}>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda3a8f089a983c560ee50','Honda CBR 500R')}>Honda CBR500R</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('67dda8f8f089a983c560ee83','Honda Gold Wing')}>Honda Gold Wing</DropdownMenuItem>
  
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     

      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>   
  :
<div className='flex flex-col items-center justify-center space-y-3'>
  {bike.name}
  </div>
  }
     
      </div>

  )
}

export default BikeSelector


function getBikeNameById(storedBike:string){
const data=[
  {url:'67dda2e4c92b5fdeb986ba1f',name:"Triump Tiger 900"},
  {url:'67dda9c7f089a983c560ee93',name:'Triump Bonneville T100'},
]
const {name}=data.filter(el=>el.url===storedBike)[0] || []

return name;
}
