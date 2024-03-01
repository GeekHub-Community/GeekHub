import RecentButton from '@/components/common/RecentButton'
import React from 'react'

const Event = () => {
  return (
    <div className='flex gap-10 flex-col justify-center items-center my-16 mb-32'>
      <h1 className='text-4xl font-bold' data-aos= 'fade-upnote'>Active Event</h1>
      <div className='relative bg-red-400 '>
        <RecentButton showit={false} style='absolute' text='Register Now'/>
      </div>
    </div>
  )
}

export default Event
