"use client"
import { lotties } from '@/data/Cdn'
import { Player } from '@lottiefiles/react-lottie-player'


export const AISection = () => {
    return (
        <div className='text-black bg-white flex flex-col lg:flex-row p-5  justify-evenly pt-[50px] pb-8'>
             <div className='flex justify-center items-center'>
                <Player
                src={lotties.AiMlAnimated}
                autoplay
                loop
                className='h-[20rem] md:h-[25rem]'>

                </Player>
            </div>
            <div className='lg:w-1/2  flex justify-center items-center'>

                <div className=' p-8'>
                    <h2 className='font-bold text-2xl'>Artificial intelligence & Machine learning</h2>
                    <p className=' text-xs md:text-sm md:w-4/5'>GeekHub opens the door to the realm of intelligent systems and predictive analytics. Join us on a journey where algorithms learn, adapt, and innovate. Explore the intricacies of neural networks, deep learning, and natural language processing. Dive into the world of data-driven decision-making and pattern recognition. With GeekHub vibrant community and expert guidance, delve into the forefront of technology and shape the future of AI. Connect, collaborate, and unleash the power of intelligence with GeekHub</p>
                </div>
                
            </div>

        </div>
    )
}
