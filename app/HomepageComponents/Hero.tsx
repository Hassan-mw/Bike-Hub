import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import HeroData from './HeroData'

import { Input } from "@/components/ui/input"
import { SiBmw, SiHonda, SiSuzuki } from "react-icons/si";
import { CiSearch } from "react-icons/ci";

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
import Showlarge from './Showlarge'
import ShowSmall from './ShowSmall'


const Hero = () => {
  return (
  <div>
    <div className='hidden lg:block'><Showlarge/></div>
    <div className=' lg:hidden '><ShowSmall/></div>
  </div>
  )
}

export default Hero