"use client"
import { getAllMentorsByYear } from '@/Services/apillist'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [AllMembers, setAllMembers] = useState<any[]>()

  const call = async () => {
    const response = await getAllMentorsByYear();
    // console.log(response);
    const sortedMembers = response.sort((a:any, b:any) => b.mentors.length - a.mentors.length);
    console.log("sortedMembers: ",sortedMembers)
    setAllMembers(sortedMembers);
  }

  useEffect(() => {
    call();
  }, [])

  return (
    <div className='min-h-screen bg-white w-full  text-black overflow-hidden'>
      <div className='mt-28 mb-24'>
        {/* <p className=''>{JSON.stringify(AllMembers)}</p> */}
        {
          AllMembers?.map((members) => (
            <div key={members.year} className='flex flex-col gap-5 items-center justify-center'>
              <p className='font-bold text-3xl pt-5'>Geeks Of <span className='text-blue'>{members.year}</span></p>
              <div className='grid lg:grid-cols-3 gap-5 items-center justify-center w-4/5 '>
                {
                  members.mentors?.map((mentor: any) => (
                    <div key={mentor} className={`w-72 h-[24rem] flex flex-col justify-center items-center  shadow `} >
                      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white w-4/5 bg-clip-border rounded-xl h-80">
                        <Image src={mentor?.profilePhotoUrl} alt='Image' width={500} height={300} />
                      </div>
                      <div className="px-6 text-center">
                        <p className='font-bold'>{mentor?.name}</p>
                        <p className='text-sm font-semibold text-gray-600'>{mentor?.domain}</p>
                        <p className='text-xs text-gray-600'>{mentor?.batch}</p>
                      </div>
                      <div className='py-2'>
                        <Link href={mentor?.linkedin} target='_blank'>
                          <Linkedin className='text-blue'/>
                        </Link>
                      </div>
                    </div>

                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Page
