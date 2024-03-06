import React from 'react'

import Image from 'next/image'
import { images } from '@/data/Cdn'

export const AndroidSection = () => {
    return (
        <div className='text-black bg-white flex  flex-col lg:flex-row p-5  justify-evenly'>
             <div className='flex justify-center items-center ' >
                <Image alt='android' width={500} height={200} src={images.android} className='h-[300px] w-[300px] md:h-[500px] md:w-[500px]'/>
            </div>
            <div className='lg:w-1/2  flex justify-center items-center'>

                <div className=' p-8'>
                    <h2 className='font-bold text-2xl'>Android Development</h2>
                    <p className=' text-xs md:text-sm md:w-4/5'>GeekHub welcomes you to the vibrant world of Android Development, where innovation meets opportunity. Join our dynamic community to embark on a journey of app creation and mastery. Delve into the realms of Java/Kotlin, Android Studio, and cutting-edge frameworks like Flutter. From crafting captivating UI/UX experiences to seamless backend integration, GeekHub empowers you to turn your ideas into reality. Connect, collaborate, and chart your path to success with GeekHub - where creativity knows no bounds.</p>
                </div>
                
            </div>

           
        </div>
    )
}
