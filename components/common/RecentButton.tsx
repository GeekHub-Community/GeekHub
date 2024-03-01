"use client"
import { Cross, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

interface RecentButtonPops{
    showit: boolean,
    style?: string,
    text?: string,
    link?: string

}

 const RecentButton = ({showit, style, text, link}:RecentButtonPops) => {
  const [show, setShow] = useState<boolean>(showit);

  return (
        <div className={`${show? 'fixed bottom-10': style}  left-[50%] translate-x-[-50%] shadow-sky-700 shadow-[0px_0px_10px_px] rounded-lg bg-sky-700 z-[3] `}>
        <div className={`${show? 'flex':'hidden'} flex  absolute left-[101%] bottom-[101%] bg-sky-700 rounded-full text-white p-1 `} 
          onClick={(show)=> setShow(!show)}
          >
                    <X size={12}/>
                </div>
            <div className='relative p-[1px] overflow-hidden rounded-lg '>
                <div className='absolute -z-[1] rounded-lg  h-[80%] w-[110%] bg-sky-100  animate-rotate'></div>
            <Link href={link || '/'} className={``}>   
                <button className='py-3 px-4 rounded-lg bg-sky-700  text-white text-xs md:text-base w-60 font-semibold '>{text}</button>
            </Link>
            </div>
        </div>
    
  )
}

export default RecentButton;