"use client"
import { Navlinks } from '@/data/Navbar'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export const Navbar = () => {
    const [isMenu, setisMenu] = useState<boolean>(false)
    return (

        <div className='flex justify-between  w-full lg:max-w-[1600px] shadow fixed top-0  bg-blue  text-black p-4 z-[10] h-16'>
            <div className='flex  ml-5'>
                <Link href='/' className='flex gap-2'>
                    <Image alt='Logo' width={1000} height={1000} src='/logo.jpg' className='rounded-full border-2 border-white/70 h-10 w-10' />
                    <h2 className='md:text-2xl font-bold text-white mt-2 md:mt-1'>GeekHub</h2>
                </Link>
            </div>
            <div className=' gap-8 mr-10   hidden md:flex'>
                {
                    Navlinks.map((link) => (
                        <Link key={link.title} href={link.href}>
                            <p className='text-base text-white font-semibold hover:text-AthensGray/80  p-1 transition-all duration-200'>{link.title}</p>
                        </Link>
                    ))
                }
            </div>
            <div className=' gap-2 mt-2 mr-2  md:hidden '>
                <Sheet>
                    <SheetTrigger className='text-white'><Menu /></SheetTrigger>
                    <SheetContent className='w-[250px]'>
                        <div className=' gap-5 mt-2  flex-col flex'>
                            {
                                Navlinks.map((link) => (
                                    <Link key={link.title} href={link.href}>
                                        <p className='text-base text-blue font-semibold hover:text-blue/80  p-1 transition-all duration-200'>{link.title}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>

    )
}
