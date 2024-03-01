import { Help, Links } from '@/data/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
   
            <div className='relative flex flex-col md:flex-row justify-around md:gap-5 w-full  p-5 bg-AthensGray text-black  pb-[60px]'>
                
                <div className=' flex flex-col justify-between '>
                    <div className=' flex flex-col md:p-5 justify-between '>
                        <div className='flex gap-2 items-center '>
                            
                                <Image alt='logo' width={100} height={100} src='/logo.jpg' className='rounded-full h-8 w-8'/>
                            
                            <h2 className='lg:text-4xl  font-bold text-blue'>GeekHub</h2>
                        </div>
                        <div className=' mt-5'>
                            <p className=' w-4/5'>Maharshi Dayanand University Rohtak, Haryana</p>
                        </div>
                    <p className='absolute md:static  left-0 bottom-0 text-sm font-semibold my-3 ml-3 md:ml-0 pb-[30px]'>&#9400; 2023 GeekHub. All rights reverved</p>

                    </div>
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
                        <p className='font-semibold'>Connect</p>
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
            </div>
            

      
    )
}
