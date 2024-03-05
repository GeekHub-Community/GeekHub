"use client"
import { Player } from '@lottiefiles/react-lottie-player'
import React, { useEffect, useState } from 'react'
import { ThemesData } from '@/data/Themes';
import AOS from "aos";
import "aos/dist/aos.css";
import {
    Dialog,

    DialogTrigger,
} from "@/components/ui/dialog"
import ContentDialog from './ContentDialog';




const Themes = () => {
    const [problemStatements, setProblemStatements] = useState<problemStatementType[]>([]);




    useEffect(() => {
        AOS.init({ duration: 1000 });

        const fetchData = async () => {
            try {
                const url = process.env.NEXT_PUBLIC_PROBLEMAPI || ''
                const response = await fetch(url);
                const data = await response.json();
                setProblemStatements(data.problemStatement);

            } catch (error) {
                console.error("Error fetching Problem Statement data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>

            <div className='flex justify-center mt-10'>
                <h1 className='text-3xl font-bold' data-aos='fade-upnote'>Problem Statements</h1>
            </div>
            <div className='flex justify-center items-center  mt-[50px] mb-[50px] w-full'>
                <div className='lg:w-4/5 flex gap-8 flex-wrap justify-center items-center'>
                    {(problemStatements && problemStatements.length > 0) ?

                        (problemStatements.map((problemStatement) => (
                            <Dialog key={problemStatement.id} >
                                <DialogTrigger >
                                    <div className='flex flex-col shadow rounded bg-yellow-100/20 w-[20rem] ' data-aos='flip-right'>
                                        <div className="w-full h-[7px] bg-blue  rounded-t p-0"></div>

                                

                                        <div className='h-56 flex gap-2 flex-col p-3 overflow-y-auto testimonials justify-between'>
                                            <div className='text-xl font-bold '>Problem Statement</div>
                                            <div className=' flex gap-x-3 text-left '>
                                                <div className='font-semibold text-slate-900'>PS:</div>
                                                <div className='font-medium'>{problemStatement.id}</div>
                                            </div>
                                            <div className=' font-medium text-left'>{problemStatement.title}</div>
                                            <div className='flex justify-between text-sm '>
                                                <p>Tags: {problemStatement.tag}</p>
                                                <p className='text-blue underline'>Read More</p>
                                            </div>
                                        </div>



                                    </div>
                                </DialogTrigger>

                                <ContentDialog  {...problemStatement}/>

                               
                            </Dialog>


                        ))) : (
                            ThemesData.map((Theme) => (
                                <div key={Theme.id} className='flex flex-col shadow rounded bg-yellow-100/20 w-[20rem] ' data-aos='flip-right'>
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

                        )
                    }
                </div>
            </div>
        </div>


    )
}

export default Themes