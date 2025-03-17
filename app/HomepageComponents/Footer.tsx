
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

  const Resources  = [
    { href: '#', label: 'Buying Guide' },
    { href: '#', label: 'Bike Reviews ' },
    { href: '#', label: 'Top Motorcycle Brands' },
    { href: '#', label: 'Find a Dealer' }
]

const productLinks = [
    { href: '#', label: 'Security' },
    { href: '#', label: 'Customization' },
    { href: '#', label: 'Enterprise' },
    { href: '#', label: 'Partners' },
]

const Legal = [
    { href: '#', label: ' Privacy Policy' },
    { href: '#', label: ' Terms & Conditions' },
    { href: '#', label: ' Refund & Return Policy' }
]

const CustomerSupport = [
    { href: '#', label: 'Phone: +1 800-123-4567' },
    { href: '#', label: 'Email: support@bikehub.com' },
    { href: '#', label: 'Address: 123 Biker Lane, Los Angeles, CA' }
]

const QuickLinks = [
    { href: '#', label: 'Motorcycle' },
    { href: '#', label: ' Compare Bikes' },
    { href: '#', label: ' Gear' },
    { href: '#', label: 'Blog & Reviews' },
    { href: '#', label: 'FAQ' }
]

const footerLinks = [
    { 
       name: 'Quick Links',
        links: QuickLinks,
        
    },
    {
      name: 'Resources',
      links: Resources,
    },
    {
      name: 'Customer Support',
      links: CustomerSupport,
    },
    {
       name: ' Legal & Policies', 
       links:  Legal,
    },
]
  return (
    <div className='w-full flex items-center justify-center p-3 '>
    <div className='w-full max-w-screen-xl flex  flex-col space-y-8 items-center justify-center '>
      {/* 1 */}
    <div className='w-full flex items-center justify-between border-b pb-5  '>
        <Link href="/"><img className='h-12 w-32 lg:w-40 rounded-4xl' src="./logo.png" alt='logo' /></Link>
        <div className='flex items-center justify-center gap-x-4'>
                 <div className=" text-[#929292]  hover:cursor-pointer  hover:scale-110 duration-300 hover:text-black"><FaFacebookF size={20} /></div>
                 <div className=" text-[#929292]  hover:cursor-pointer  hover:scale-110 duration-300 hover:text-black"><FaTwitch size={20}/></div>
                 <div className="  text-[#929292]  hover:cursor-pointer hover:scale-110 duration-300 hover:text-black"><FaLinkedinIn size={20}/></div>
                 <div className="  text-[#929292]  hover:cursor-pointer hover:scale-110 duration-300 hover:text-black"><FaInstagram size={20}/></div>
        </div>
    </div>
    {/* 2 */}
    <div className='w-full  flex items-center justify-center flex-col space-y-3 py-4   border-b pb-5'>
  

                    <form action="" className="w-full max-w-screen-md">
                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                            <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                            <input placeholder="Your mail address" className="h-10 w-full bg-transparent pl-12 focus:outline-none" type="email" />

                            <div className="md:pr-1.5 lg:pr-0">
                                <Button aria-label="submit" className="rounded-(--radius) h-7">
                                    <span className="hidden md:block">Get Started</span>
                                    <SendHorizonal className="relative mx-auto size-3 md:hidden" strokeWidth={2} />
                                </Button>
                            </div>
                        </div>
                    </form>
    </div>
    {/* 3 */}
    <div className="w-full grid grid-cols-2 gap-6 sm:grid-cols-4  md:gap-x-20 lg:gap-x-28">
                    {footerLinks.map((linksGroup, index) => (
                        <div key={index}>
                            <span className="font-medium">{linksGroup.name}</span>
                            <ul className="mt-4 list-inside space-y-4">
                                {linksGroup.links.map((link, index) => (
                                    <li key={index}>
                                        <Link href={link.href} className="hover:text-primary text-muted-foreground text-sm duration-150">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                            ))}
                    </div>
    </div>
    </div>
  )
}

export default Footer