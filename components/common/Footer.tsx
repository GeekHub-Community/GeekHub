import { Help, Links } from '@/data/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <div className='flex text-black justify-between gap-5 w-full pb-[60px] p-5 bg-AthensGray'>
            
            <div className=' flex flex-col justify-between '>
                <div className=' flex flex-col p-5 justify-between '>
                    <div className='flex gap-2 '>
                        <div>
                            <Image alt='logo' width={40} height={40} src='/logo.jpg' className='rounded-full'/>
                        </div>
                        <h2 className='text-4xl  font-bold text-blue'>GeekHub</h2>
                    </div>
                    <div className=' mt-5'>
                        <p className=' w-4/5'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                    </div>
                </div>
                <p className='  text-sm font-semibold ml-[50px]'>&#9400; 2023 Dogindar. All rights reverved</p>
            </div>

            <div className='grid grid-cols-2 align-items-center  p-5  w-2/6'>
                <div className='flex flex-col'>
                    <p className='font-semibold'>Links</p>
                    <div className='flex flex-col justify-evenly h-full'>
                        {
                            Links.map((link) => (
                                <Link key={link.href} href={link.href}>
                                    <p>{link.title}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col '>
                    <p className='font-semibold'>Help</p>
                    <div className='flex flex-col justify-evenly h-full'>
                        {
                            Help.map((link) => (
                                <Link key={link.href} href={link.href}>
                                    <p>{link.title}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='flex flex-col p-5 gap-5'>
                <p className='font-semibold'>Newsletter</p>
                <div className='flex flex-col gap-4'>
                    <input type='email' placeholder='Email Your Email Address' className=' outline-none p-2 border border-blue/80 bg-transparent'/>
                    <div className='flex justify-center'>
                    <button className='bg-blue p-3 text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
