import { Help, Links } from '@/data/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row text-black justify-between md:gap-5 w-full pb-[60px] p-5 bg-AthensGray'>
            
            <div className=' flex flex-col justify-between '>
                <div className=' flex flex-col md:p-5 justify-between '>
                    <div className='flex gap-2 items-center '>
                        
                            <Image alt='logo' width={100} height={100} src='/logo.jpg' className='rounded-full h-8 w-8'/>
                        
                        <h2 className='lg:text-4xl  font-bold text-blue'>GeekHub</h2>
                    </div>
                    <div className=' mt-5'>
                        <p className=' w-4/5'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                    </div>
                </div>
                <p className='  text-sm font-semibold ml-3 md:ml-[50px]'>&#9400; 2023 GeekHub. All rights reverved</p>
            </div>

            <div className='grid grid-cols-2 align-items-center gap-20  md:gap-0 p-5  w-2/6'>
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

            <div className='flex flex-col gap-5'>
                <p className='font-semibold'>Newsletter</p>
                <div className='flex flex-col gap-4'>
                    <input type='email' placeholder='Email Your Email Address' className=' outline-none p-2 border border-blue/80 bg-transparent rounded'/>
                    <div className='flex justify-center'>
                    <button className='bg-blue p-3 text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
