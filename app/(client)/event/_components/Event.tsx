import RecentButton from '@/components/common/RecentButton'
import React from 'react'

const Event = () => {
  return (
    <div className='flex gap-10 flex-col justify-center items-center my-16 mb-32'>
      <h1 className='text-4xl font-bold' data-aos= 'fade-upnote'>Active Event</h1>
      <div className='relative bg-red-400 '>
        <RecentButton showit={false} style='absolute' text='Register Now' link='https://docs.google.com/forms/d/1_hxhGJcTFERqIOzs-d6aEimKb9xL6zLNx_x0JGbkrg4/edit?usp=sharing_eip_se_dm&ts=65df44da'/>
      </div>
    </div>
  )
}

export default Event
