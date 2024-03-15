"use client"
import RecentButton from '@/components/common/RecentButton';
import { Player } from '@lottiefiles/react-lottie-player';
import { X } from 'lucide-react';
import { useState } from 'react';

import TypewriterComponent from 'typewriter-effect'

const ShowCase = () => {
    const [show, setShow] = useState<boolean>(true);

    return (
        <div className="HeroBack h-[55vw] md:h-[45vw] relative" >
            <div className="h-full w-full bg-black/40 flex flex-col justify-end  items-center border md:justify-center pb-14 md:pb-0">
                <div className="flex w-full justify-center ">
                    <div className='flex-1 text-right font-black text-2xl md:text-7xl tracking-wide	'>
                        <h1 className='text-white mr-3'>Welcome to</h1>
                    </div>
                    <div className="text-2xl md:text-7xl font-black  flex-1 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-[#FFB700] to-blue/20">
                        <TypewriterComponent
                            options={{
                                strings: [
                                    "GeekHub.",
                                    "Community.",
                                    "Growth.",
                                    "Collaborate.",
                                ],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </div>
                </div>

                <div className=' absolute top-[120%] md:top-full '>
                    <div className={`${show ? 'fixed bottom-10 z-[3] left-[50%] -translate-x-[50%] ' : 'flex'}  justify-between gap-4`}>


                        <RecentButton text='View Problem Statements' link='/event' />
                        <div className={`${show ? '' : 'hidden'} absolute left-[101%] bottom-[101%] bg-sky-700 rounded-full text-white p-1 `}
                            onClick={(show) => setShow(!show)}
                        >
                            <X size={12} />


                        </div>



                    </div>
                    <Player
                        autoplay
                        loop
                        src="/slider/mouse.json"
                        className='h-14 md:h-20'
                    >
                    </Player>
                </div>



            </div>
        </div>

    );
}

export default ShowCase
