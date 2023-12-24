"use client"
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const HomeSection = () => {
    return (
        <div className='min-h-screen w-full bg-white text-black'>

            <div className='flex pt-[90px]'>

                <div className='flex flex-col gap-5 w-2/5  justify-center p-[60px]'>
                    <h2 className='text-3xl font-bold text-blue'>Learn, Grow, Connect,Collaborate 👏</h2>
                    <p className='text-black/80'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    <div className='flex gap-5 font-semibold mt-2'>
                        <button className='p-2 bg-black px-7 text-white rounded'>Get Started</button>
                        <button className='p-2 border border-black px-7  rounded'>Learn More</button>
                    </div>
                </div>

                <div className=' w-3/5 flex justify-end'>
                    <Player
                        autoplay
                        loop
                        src="/home/world.json"
                        className='h-[700px] w-[700px]'
                    >
                    </Player>
                </div>
            </div>

        </div>
    )
}
