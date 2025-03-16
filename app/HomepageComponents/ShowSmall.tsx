import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import HeroData from './HeroData'

import { Input } from "@/components/ui/input"
import { SiBmw, SiHonda, SiSuzuki } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { RiEBikeLine } from "react-icons/ri";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ShowSmall = () => {
  return ( 
  
    <HeroData/>

  )
}

export default ShowSmall