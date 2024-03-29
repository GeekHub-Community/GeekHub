'use client'

import { lotties } from '@/data/Cdn'
import { Player } from '@lottiefiles/react-lottie-player'

export const GameSection = () => {
    return (
        <div className='text-black bg-white flex  flex-col lg:flex-row p-5  justify-evenly'>
             <div className='flex justify-center items-center ' >
                <Player
                 src = {lotties.GameDevelopmentAnimated}
                 autoplay
                 loop
                 className=' md:h-[36rem] '
                >

                </Player>
            </div>
            <div className='lg:w-1/2  flex justify-center items-center'>

                <div className=' p-8'>
                    <h2 className='font-bold text-2xl'>Game Development</h2>
                    <p className=' text-xs md:text-sm md:w-4/5'>Venturing into the mesmerizing world of Game Development, GeekHub transforms learning into an exhilarating journey, where every challenge is a level waiting to be conquered. Prepare to dive into a realm where coding becomes as immersive as exploring a fantasy landscape, and problem-solving feels like cracking a puzzle in your favorite game. With GeekHub, explore game engines like Unity and Unreal, Unleashing boundless creativity, where every project is an opportunity to create something extraordinary. Join forces, co-create, and set your imagination free with GeekHub - where learning becomes an epic adventure.</p>
                </div>
            </div>
        </div>
    )
}
