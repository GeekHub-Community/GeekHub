"use client"

import { lotties } from '@/data/Lotties'
import { Player } from '@lottiefiles/react-lottie-player'

export const BlockChain = () => {
    return (
        <div className='text-black bg-AthensGray flex  flex-col lg:flex-row p-5  justify-evenly pt-[100px]'>
            
            <div className='lg:w-1/2  flex justify-center items-center'>

                <div className=' p-8'>
                    <h2 className='font-bold text-2xl'>Web3 & Blockchain</h2>
                    <p className=' text-xs md:text-sm md:w-4/5'>Wandering into the wild and wacky world of Web3 & Blockchain, GeekHub extends an invitation to become a digital pioneer - where every block marks a step toward reshaping the digital landscape. Explore smart contracts, decentralized finance (DeFi), and the transparency of distributed ledgers. With GeekHub as your navigator and our tech-savvy community as companions, traverse the decentralized wilderness and unlock the secrets of Web3. Connect, collaborate, and realize your digital aspirations with us, riding the waves of innovation through the ever-changing crypto landscape.</p>
                </div>
                
            </div>
            <div className='flex justify-center items-center'>
                
                <Player 
                src={lotties.BlockChainAnimated}
                autoplay
                loop
                className='h-[22rem]'
                >

                </Player>
            </div>
        </div>
    )
}
