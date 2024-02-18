"use client"
import React from 'react';
import { IntroCards } from '@/components/common/IntroCards';
import { IntroCardsData } from '@/data/homeCard'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Numbers from './Numbers';


const Introduction = () => {


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const date = new Date();

    return (
        <div className='pt-[30px] bg-white text-black'>
            <div >
                <p className='text-center font-bold text-3xl text-blue' data-aos='fade-up'>
                    WHO ARE WE ?
                </p>
                <div className='flex justify-center mt-[30px]'>
                    <div className='grid gap-y-12 grid-cols-4 gap-4  justify-evenly w-4/5 md:grid-cols-4'>
                        {IntroCardsData.map((items, index) => {
                            return <IntroCards key={index} {...items} />;
                        })}
                    </div>
                </div>
            </div>

            <div className='sections objective-sec' data-aos='fade-up'>

                <div className='w-4/5 mx-auto mt-[60px]' data-aos='fade-up'>
                    <p className='text-center font-bold text-3xl text-blue uppercase p-3'>
                        Objectives
                        <hr className='mt-2 w-[170px] m-auto' />
                    </p>
                    <div className='w-4/5 text-center mx-auto mt-2 p-5'>
                        <p className='text-xs md:text-sm text-black/80'>
                            {` The GeekHub  Club started its journey on  2016. Its
            major objective is to motivate students' interest in learning
            various technologies and to obtain information about how
            technology will be used to project work. The club's goal is to
            encourage students to solve various challenging problems using
            demanding technologies which include Python, Java, C, C++,
            etc. Our approach will help students to become Industry Ready.
            This will boost them to get Job. The GeekHubClub actively
            organizes various activities like Online Coding Contest,
            Online Quiz Contest, etc. Other events like Expert's Talk,
            Alumni Talk, and Hands-on practical workshops for various
            programming basics are planned for the future.`}
                        </p>
                    </div>
                </div>

                <section>
                    <Numbers />
                </section>
            </div>
        </div>
    )
}

export default Introduction