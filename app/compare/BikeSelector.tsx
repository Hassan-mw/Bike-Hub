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


const BikeSelector = ({value,type,border}:{value:string,type:string,border:string}) => {
    const [selectBike,setSelectBike]=useState('none')
    const pathname=usePathname();
    const searchParams=useSearchParams()
    const router=useRouter()
 

    function  updateBikeSelection (bike: string)  {
      setSelectBike(bike);
      const params = new URLSearchParams(searchParams);
      params.set(value, bike);
      router.replace(`${pathname}?${params.toString()}`);
    };
    
  return (

    <div className={`${jost.className} w-full flex items-center justify-center h-80 ${border} relative group hover:cursor-pointer `}>
{selectBike==='none' ?
    <DropdownMenu >
    <DropdownMenuTrigger asChild>
      <div  className='border-none hover:cursor-pointer bg-none hover:bg-none shadow-none'> 
      <div className='size-16 flex items-center justify-center border-4 text-2xl rounded-full group-hover:border-green-500  duration-500  '>+</div>
    </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuGroup>
        {/* 1 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Triump</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => updateBikeSelection('Tiger 900')}>Tiger 900</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('Bonneville T100')}>Bonneville T100</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('Speed Triple 1200 RS')}>Speed Triple 1200 RS</DropdownMenuItem>

              <DropdownMenuItem>Message</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     
        {/* 2 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Ducati</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => updateBikeSelection('Panigale V 4')}>Panigale V 4</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('multistrada V 4')}>multistrada V 4</DropdownMenuItem>
              <DropdownMenuItem>Message</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     
        {/* 2 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Ducati</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => updateBikeSelection('Panigale V 4')}>Panigale V 4</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('multistrada V 4')}>multistrada V 4</DropdownMenuItem>
              <DropdownMenuItem>Message</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     
        {/* 2 */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Harley Davidson</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
            <DropdownMenuItem onClick={() => updateBikeSelection('panigale-v-4')}>Panigale V 4</DropdownMenuItem>
            <DropdownMenuItem onClick={() => updateBikeSelection('multistrada-v-4')}>multistrada V 4</DropdownMenuItem>
              <DropdownMenuItem>Message</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     

      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>   
  :
<div className='flex flex-col space-y-3'>
  {selectBike}
  <div className='text-red-500' onClick={()=>updateBikeSelection('none')}>Cancel</div>
  </div>
  }
     <div className={`${jost.className} ${type} `}>vs</div>
      </div>

  )
}

export default BikeSelector