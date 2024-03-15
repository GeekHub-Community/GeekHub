"use client"
import { Cross, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

interface RecentButtonPops {

    text?: string,
    link?: string

}

const RecentButton = ({ text, link }: RecentButtonPops) => {

    return (
        <div>
            <div className={`relative p-[1px] overflow-hidden shadow-sky-700 shadow-[0px_0px_10px_px] rounded-lg bg-sky-700 z-[3]`}>
                
                    <div className='absolute -z-[1] rounded-lg  h-[80%] w-[110%] bg-sky-100  animate-rotate'></div>
                    {
                        link ? (
                            <Link href={link || '/'} className={``}>
                        <button className='py-3  px-3 rounded-lg bg-sky-700  text-white text-xs md:text-base w-60 font-semibold '>{text}</button>
                    </Link>
                        ):(
                            <button className='py-3 px-3 rounded-lg bg-sky-700  text-white text-xs md:text-base w-60 font-semibold '>{text}</button>
                        )
                    }
                    
                </div>
            

        </div>

    )
}

export default RecentButton;