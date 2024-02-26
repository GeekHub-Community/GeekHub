import React from 'react'

import Image from 'next/image'

export const DesignSection = () => {
    return (
        <div className='text-black bg-AthensGray flex  flex-col lg:flex-row p-5  justify-evenly pt-[100px] bg-[url("/design.svg")] bg-cover'>
            
            <div className='lg:w-1/2  flex justify-center items-center'>

                <div className=' p-8'>
                    <h2 className='font-bold text-2xl'>Design The dreams</h2>
                    <p className=' text-xs md:text-sm md:w-4/5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
                
            </div>
            <div className='flex justify-center items-center'>
                <Image alt='Designing' width={500} height={200} src='/home/designing.png' className='h-[300px] w-[300px] md:h-[500px] md:w-[500px]'/>
            </div>
           
        </div>
    )
}
