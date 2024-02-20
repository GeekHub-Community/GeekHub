"use client"
import { getAllMentorsByYear } from '@/Services/apillist'
import React, { useEffect, useState } from 'react'
import MentorCards from './_component/MentorCards'

const Page = () => {
  const [AllMembers, setAllMembers] = useState<any[]>()

  const call = async () => {
    const response = await getAllMentorsByYear();
    // console.log(response);
    const sortedMembers = response.sort((a: any, b: any) => b.mentors.length - a.mentors.length);
    console.log("sortedMembers: ", sortedMembers)
    setAllMembers(sortedMembers);
  }

  useEffect(() => {
    call();
  }, [])

  return (
    <div className="min-h-screen bg-white w-full text-black overflow-hidden">
    <div className="mt-28 mb-24">
      {AllMembers?.map((members) => (
        <div key={members.year} className="flex flex-col gap-5 items-center justify-center">
          <p className="font-bold text-3xl pt-5">
            Geeks Of <span className="text-blue">{members.year}</span>
          </p>
          <div className="grid lg:grid-cols-3 gap-5 items-center justify-center w-4/5">
            {members.mentors?.map((mentor: any) => (
              <MentorCards key={mentor} mentor={mentor} membersYear={members.year} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
export default Page
