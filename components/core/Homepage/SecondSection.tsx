"use client"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Image from 'next/image'

export const SecondSection = () => {
    return (
        <div className='text-black bg-AthensGray flex  flex-col lg:flex-row p-5 justify-evenly'>
            <div className='lg:w-1/2  flex justify-center items-center'>

                <div className='p-8  text-center md:text-left'>
                    <h2 className='font-bold text-xl md:text-2xl'>Light, Fast & Powerful</h2>
                    <p className='text-xs  md:text-sm md:w-4/5 ml-5 md:ml-0'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                    <div className='flex justify-between mt-5 gap-5'>
                        <div>
                            <div>🙂</div>
                            <h2 className='font-bold'>Title Goes Here</h2>
                            <p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus mollitia voluptates? Accusantium vitae.</p>
                        </div>

                        <div>
                            <div>🙂</div>
                            <h2 className='font-bold'>Title Goes Here</h2>
                            <p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus mollitia voluptates? Accusantium vitae.</p>
                        </div>



                    </div>
                </div>

            </div>

            <div>
                <Player
                    autoplay
                    loop
                    src="/home/web.json"
                    className=' h-[300px] w-[300px] md:h-[500px] md:w-[500px]'
                >
                </Player>
            </div>
        </div>
    )
}
