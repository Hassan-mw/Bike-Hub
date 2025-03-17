
import { Jost } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-center p-3 '>
    <div className='w-full max-w-screen-xl flex  flex-col items-center justify-center '>
      {/* 1 */}
    <div className='w-full flex items-center justify-between border-b pb-5 '>
        <Link href="/"><img className='h-10 w-32 lg:w-40 rounded-4xl' src="./logo.png" alt='logo' /></Link>
        <div className='flex items-center justify-center gap-x-4'>
                 <div className=" text-[#929292]  hover:cursor-pointer  hover:scale-110 duration-300 hover:text-black"><FaFacebookF size={20} /></div>
                 <div className=" text-[#929292]  hover:cursor-pointer  hover:scale-110 duration-300 hover:text-black"><FaTwitch size={20}/></div>
                 <div className="  text-[#929292]  hover:cursor-pointer hover:scale-110 duration-300 hover:text-black"><FaLinkedinIn size={20}/></div>
                 <div className="  text-[#929292]  hover:cursor-pointer hover:scale-110 duration-300 hover:text-black"><FaInstagram size={20}/></div>
        </div>
    </div>
    {/* 2 */}
    <div className='w-full flex flex-col space-y-3 py-4'>
  

                    <form action="" className="w-full">
                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                            <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                            <input placeholder="Your mail address" className="h-14 w-full bg-transparent pl-12 focus:outline-none" type="email" />

                            <div className="md:pr-1.5 lg:pr-0">
                                <Button aria-label="submit" className="rounded-(--radius)">
                                    <span className="hidden md:block">Get Started</span>
                                    <SendHorizonal className="relative mx-auto size-5 md:hidden" strokeWidth={2} />
                                </Button>
                            </div>
                        </div>
                    </form>
    </div>
    </div>
    </div>
  )
}

export default Footer