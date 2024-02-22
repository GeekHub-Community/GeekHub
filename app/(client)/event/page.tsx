import React from 'react'
import Themes from './_components/theme'
import Timeline from './_components/Timeline'

const page = () => {

    return (
        <div className='min-h-screen  w-full pt-[80px] text-black bg-white'>
            <div className='flex justify-center'>
                <Timeline />
            </div>
            <div>
                <Themes />
            </div>
        </div>
    )
}

export default page