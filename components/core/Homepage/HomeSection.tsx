"use client"
import { lotties } from '@/data/Lotties';
import { Navlinks } from '@/data/Navbar';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion'
import Link  from 'next/link';
import { useEffect, useState } from 'react';

export const HomeSection = () => {
    const [isDraggable, setIsDraggable] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 768) {
                setIsDraggable(true);
            } else {
                setIsDraggable(false);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='min-h-screen w-full bg-white text-black'>

            <div className=' flex flex-col lg:flex-row pt-[80px]'>

                <div className='flex   w-full justify-center  md:justify-end items-center p-5  md:p-[60px]'>

                    <div className=' flex flex-col gap-3 lg:w-4/5 p-1 text-center lg:text-right items-center lg:items-end'>
                        <h2 className='text-xl md:text-3xl font-bold text-blue '>Learn, Teach, Grow, Collaborate 👏</h2>
                        <p className='text-xs md:text-sm text-black/80 w-4/5 md:w-full lg:text-right'>GeekHub: Learn, teach, grow. A vibrant tech community for enthusiasts, developers, and entrepreneurs. Explore trends, collaborate on projects, and connect with like-minded individuals. Unleash your geekiness and make a difference in technology. Join us to innovate, learn, and grow together.</p>
                        <div className='flex gap-5 font-semibold mt-2  justify-center lg:justify-end'>
                            <button className='p-2 bg-black px-7 text-white rounded'>Get Started</button>
                            <Link href='/members'>
                            <button className='p-2 border border-black px-7  rounded'>Learn More</button>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className=' lg:w-3/5 flex justify-center items-center lg:justify-end'>
                    <motion.div
                        
                        transition={{ type: "spring", duration: 4 }}
                        drag={isDraggable}
                        dragTransition={{
                            min: 0,
                            max: 10,
                            bounceStiffness: 100
                        }}
                    >
                        <Player
                            autoplay
                            loop
                            src={lotties.world}
                            className='h-[400px] w-[400px] md:h-[450px] md:w-[450px] lg:h-[700px] lg:w-[700px]'
                        >
                        </Player>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}
