import React from 'react'

import Image from 'next/image'

export const DesignSection = () => {
    return (
        <div className='text-black bg-AthensGray flex  flex-col lg:flex-row p-5  justify-evenly pt-[100px] bg-[url("/design.svg")]'>
            
            <div className='lg:w-1/2  flex justify-center items-center'>

                <div className=' p-8'>
                    <h2 className='font-bold text-2xl'>Light, Fast & Powerful</h2>
                    <p className=' text-xs md:text-sm md:w-4/5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
                
            </div>
            <div className='flex justify-center items-center'>
                <Image alt='girlimage2' width={500} height={200} src='/home/phone.svg'/>
            </div>
           
        </div>
    )
}
