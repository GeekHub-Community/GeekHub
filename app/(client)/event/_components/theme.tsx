"use client"
import { ThemesData } from '@/data/Themes'
import { Player } from '@lottiefiles/react-lottie-player'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Themes = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>

            <div className='flex justify-center mt-10'>
                <h1 className='text-4xl font-bold' data-aos= 'fade-upnote'>Ideas</h1>
            </div>
            <div className='flex justify-center items-center  mt-[50px] mb-[50px] w-full'>
                <div className='lg:w-4/5 flex gap-8 flex-wrap justify-center items-center'>
                    {
                        ThemesData.map((theme) => (
                            <div key={theme.id} className='flex flex-col gap-4 shadow rounded bg-yellow-100/20 w-[20rem]' data-aos='flip-right'>
                                <div className="w-full h-[7px] bg-blue  rounded-t p-0"></div>
                                <Player
                                    src='/event/comingSoon.json'
                                    autoplay
                                    loop
                                    className='h-56'
                                >

                                </Player>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>


    )
}

export default Themes