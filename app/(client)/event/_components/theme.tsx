import { ThemesData } from '@/data/Themes'
import Image from 'next/image'
import React from 'react'

const Themes = () => {
    return (
        <>
            <div className='flex justify-center mt-5'>
                <h1 className='text-4xl font-bold'>Themes</h1>
            </div>
            <div className='flex justify-center  mt-[50px] mb-[50px]'>
                <div className='w-4/5 px-8 grid grid-cols-3 gap-8 mb-7'>
                    {
                        ThemesData.map((theme) => (
                            <div key={theme.id} className='flex flex-col gap-4 shadow rounded bg-yellow-100/20'>
                                <div className="w-full h-[7px] bg-blue  rounded-t p-0"></div>
                                <div className='flex justify-center'>
                                    <Image src={theme.img} alt='Image' width={100} height={30} className='rounded-full' />
                                </div>

                                <div className=' text-center p-1'>
                                    <p className='text-lg font-semibold'>{theme.title}</p>
                                    <p className='text-left text-sm p-4 text-gray-500'>{theme.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Themes