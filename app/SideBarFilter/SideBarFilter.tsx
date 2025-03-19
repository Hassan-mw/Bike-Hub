import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


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
import SideBarData from './SideBarData'

const SideBarFilter = () => {
  return (
    <div> 
         <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Show Sidebar</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          <SideBarData/>
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

export default SideBarFilter