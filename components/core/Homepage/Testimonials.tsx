import { TestimonialsData } from '@/data/Testimonials'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
    return (
            <div className='bg-white text-black '>
                <h1 className='text-3xl font-bold text-center mb-5'>Testimonials</h1>
                <div className='flex justify-center items-center '>
                    <div className='w-11/12 px-1 md:w-4/5 lg:w-7/12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[1000px] overflow-y-auto testimonials'>
                        {
                            TestimonialsData.map((tes) => (
                                <div key={tes.id} className='border p-5 rounded-lg h-60 flex justify-between flex-col'>
                                    <div className='flex'>
                                        <div>
                                            <Image src={tes.img} width={40} height={40} alt="image" className='rounded-full' />
                                        </div>
                                        <div className='flex flex-col ml-5'>
                                            <p className='text-sm font-semibold'>{tes.name}</p>
                                            <div className='text-[10px] md:text-xs font-medium text-gray-500 flex gap-2 o'>
                                                <p >{tes.profession}</p>
                                                <p className='font-semibold'>@{tes.currentCompany}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className='text-gray-500 text-sm leading-4 overflow-hidden'>{tes.thoughts}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
    )
}

export default Testimonials