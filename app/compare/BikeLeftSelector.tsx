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
import path from 'path';
import { useRouter } from 'next/navigation';
 



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const BikeLeftSelector = ({value,type,border}:{value:string,type:string,border:string}) => {
    const [selectBike,setSelectBike]=useState('none')
    console.log(selectBike)
    const pathname=usePathname();
    const searchParams=useSearchParams()
    const router=useRouter()
 

    useEffect(()=>{
        const params=new URLSearchParams(searchParams);
        params.set(value,selectBike)
          router.replace(`${pathname}?${params.toString()}`)
    },[selectBike])
  return (

    <div className={`${jost.className} w-full flex items-center justify-center h-80 ${border} relative group hover:cursor-pointer `}>

    <DropdownMenu >
    <DropdownMenuTrigger asChild>
      <div  className='border-none hover:cursor-pointer bg-none hover:bg-none shadow-none'> 
      <div className='size-16 flex items-center justify-center border-4 text-2xl rounded-full group-hover:border-green-500  duration-500  '>+</div>
    </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuGroup>
        
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={()=>setSelectBike('YBR 125')}>Email</DropdownMenuItem>
              <DropdownMenuItem>Message</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
     

      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>   
    
     <div className={`${jost.className} ${type} `}>vs</div>
      </div>

  )
}

export default BikeLeftSelector