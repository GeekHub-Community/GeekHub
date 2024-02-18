"use client"
import { getAllMentors, getAllMentorsByYear } from '@/Services/apillist'
import React, { useEffect, useState } from 'react'

 const Page = () => {
  const [AllMembers, setAllMembers]= useState<any[]>()

  const call = async()=>{
    const response = await getAllMentorsByYear();
    // console.log(response);
    setAllMembers(response)

  }

    useEffect(()=>{
        call();

    },[])
  return (
    <div className='min-h-screen bg-white w-full '> 
      <div className='mt-24'>
        <p  className='text-black'>{JSON.stringify(AllMembers)}</p>
      </div>
    </div>
  )
}
export default Page
