import React from 'react'
import Themes from './_components/theme'
import Timeline from './_components/Timeline'
import Event from './_components/Event'

const page = () => {

    return (
        <div className='min-h-screen  w-full pt-[80px] text-black bg-white'>
            <div className='flex justify-center'>
               <Event/>
            </div>
            <div>
                <Themes />
            </div>
            <div className='flex justify-center'>
                 <Timeline />
            </div>
        </div>
    )
}

export default page