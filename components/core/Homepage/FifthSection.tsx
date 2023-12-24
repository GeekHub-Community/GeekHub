import React from 'react'

import Image from 'next/image'

export const FifthSection = () => {
    return (
        <div className='text-black bg-white flex p-5  justify-evenly pt-[50px] pb-8'>
             <div >
                <Image alt='girlimage2' width={500} height={200} src='/home/girl3.svg'/>
            </div>
            <div className='w-1/2  flex justify-center items-center'>

                <div className=' p-8'>
                    <h2 className='font-bold text-2xl'>Light, Fast & Powerful</h2>
                    <p className='text-sm w-4/5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                </div>
                
            </div>

           
        </div>
    )
}
