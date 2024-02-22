"use client"
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion'

export const HomeSection = () => {
    return (
        <div className='min-h-screen w-full bg-white text-black'>

            <div className=' flex flex-col lg:flex-row pt-[80px]'>

                <div className='flex   w-full justify-center  md:justify-end items-center p-5  md:p-[60px]'>

                    <div className=' flex flex-col gap-3 lg:w-4/5 p-1 text-center lg:text-right items-center lg:items-end'>
                        <h2 className='text-xl md:text-3xl font-bold text-blue '>Learn, Grow, Connect,Collaborate 👏</h2>
                        <p className='text-xs md:text-sm text-black/80 w-4/5 md:w-full lg:text-right'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        <div className='flex gap-5 font-semibold mt-2  justify-center lg:justify-end'>
                            <button className='p-2 bg-black px-7 text-white rounded'>Get Started</button>
                            <button className='p-2 border border-black px-7  rounded'>Learn More</button>
                        </div>
                    </div>

                </div>

                <div className=' lg:w-3/5 flex justify-center items-center lg:justify-end'>
                    <motion.div
                        animate={{ x: [200, 0] }}
                        transition={{ type: "spring", duration: 4 }}
                        drag
                        dragTransition={{
                            min: 0,
                            max: 10,
                            bounceStiffness: 100
                        }}
                    >
                        <Player
                            autoplay
                            loop
                            src="/home/world.json"
                            className='h-[400px] w-[400px] md:h-[450px] md:w-[450px] lg:h-[700px] lg:w-[700px]'
                        >
                        </Player>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}
