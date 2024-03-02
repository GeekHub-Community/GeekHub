"use client"

import Image from 'next/image'
import { Player } from '@lottiefiles/react-lottie-player'

export const CyberSecurity = () => {
    return (
        <div className='text-black bg-white flex  flex-col lg:flex-row p-5  justify-evenly'>
             <div className='flex justify-center items-center ' >
                {/* <Image alt='girlimage2' width={500} height={200} src='/home/cyber.png' className='h-[300px] w-[300px] md:h-[500px] md:w-[500px]'/> */}
                <Player
                    src='/home/CyberSecurity.json'
                    autoplay
                    loop
                >

                </Player>
            </div>
            <div className='lg:w-1/2  flex justify-center items-center'>

                <div className=' p-8'>
                    <h2 className='font-bold text-2xl'>Cyber Security</h2>
                    <p className=' text-xs md:text-sm md:w-4/5'>Entering the labyrinth of Cyber Security with GeekHub, wielding cutting-edge tools and techniques to safeguard digital domains and every byte holds the promise of protection, Explore algorithms as shields and encryption as an impenetrable cloak. Navigate network fortifications, delve into cryptography, and dance on ethical hacking edge. With GeekHub as your bastion and our community as your allies, stand as the vanguard against digital threats. Connect, collaborate, and let your vigilance sculpt a safer cyber frontier with GeekHub, securing data and futures alike.</p>
                </div>
                
            </div>
        </div>
    )
}
