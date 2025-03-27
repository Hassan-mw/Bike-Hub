import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IoMdClose } from "react-icons/io";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import { Jost } from 'next/font/google';
import { RxHamburgerMenu } from "react-icons/rx";
import ItemSideBarData from './ItemSideBarData';
const ItemSidebarFilter = () => {
  return (
    <div> 
         <Sheet>
    <SheetTrigger asChild>
      <Button className='border-none hover:cursor-pointer shadow-none bg-[#f3f6fb] text-blue-500' variant="outline"><RxHamburgerMenu /> Show Sidebar</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle> <div className="flex items-center justify-center  border-b py-3 ">
           <SheetClose className={` ${jost.className} hover:cursor-pointer  flex items-center justify-center text-sm text-red-600 `}><div><IoMdClose  size={20} /> </div>Close</SheetClose>
           </div></SheetTitle>
        <SheetDescription>
          <ItemSideBarData/>
        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet></div>
  )
}

export default ItemSidebarFilter