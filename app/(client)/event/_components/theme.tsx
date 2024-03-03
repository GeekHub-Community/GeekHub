"use client"
import { Player } from '@lottiefiles/react-lottie-player'
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface problemStatementType{
    id?: number,
    title?: string,
    description?: string[]
    tag?: string

}


const Themes = () => {
    const [problemStatements, setProblemStatements] = useState<problemStatementType[]>([]);




    useEffect(() => {
        AOS.init({ duration: 1000 });

        const fetchData = async () => {
            try {
              const response = await fetch('https://api.npoint.io/8ca94fe4486941247f15');
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
                    {
                        problemStatements.map((problemStatement) => (
                            <Dialog key={problemStatement.id} >
                                <DialogTrigger >
                                    <div className='flex flex-col shadow rounded bg-yellow-100/20 w-[20rem] '              data-aos='flip-right'>
                                        <div className="w-full h-[7px] bg-blue  rounded-t p-0"></div>
                                        
                                            {/* <Player
                                            src='/event/comingSoon.json'
                                            autoplay
                                            loop
                                            className='h-56'
                                        >
                                        </Player> */}

                                        <div className='h-56 flex gap-2 flex-col p-3 overflow-y-auto testimonials'>

                                            <div className='text-xl font-bold '>Problem Statement</div>
                                            <div className=' flex gap-x-3 text-left '>
                                                <div className='font-semibold text-slate-900'>PS:</div>
                                                <div className='font-medium'>{problemStatement.id}</div>
                                            </div>
                                         

                                            <div className='font-medium text-left'>{problemStatement.title}</div>
                                            
                                            
                                        </div>
                                      
                                        

                                    </div>
                                </DialogTrigger>

                                <DialogContent className='bg-white '>
                                    <DialogHeader>
                                        <DialogTitle>
                                            <div className='flex flex-col gap-3 text-base'>
                                                <div className='text-center text-2xl'>Problem Statement</div>
                                                <div className='flex gap-3'>
                                                    <div>PS: </div>
                                                    <div className=''>{problemStatement.id}</div>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <div className=''>Title:</div>
                                                    <div className='text-sm text-left'>{problemStatement.title}</div>
                                                </div>
                                            </div>
                                            
                                        </DialogTitle>
                                        <DialogDescription>
                                                <div className='my-2'>
                                                    <div className='font-semibold text-black text-left'>Description</div>
                                                    <div 
                                                    
                                                    className='text-slate-800 max-h-[60vh] overflow-y-auto testimonials text-left'>{problemStatement.description}</div>
                                                </div>
                                                <div className='flex mt-4 gap-3'>
                                                    <div className='font-semibold text-black'>Tags: </div>
                                                    <div className='flex gap-2 flex-wrap text-slate-800'>
                                                        <div>{problemStatement.tag}</div>

                                                    </div>
                                                </div>
                                                

                                            
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>












                        ))
                    }
                </div>
            </div>
        </div>


    )
}

export default Themes