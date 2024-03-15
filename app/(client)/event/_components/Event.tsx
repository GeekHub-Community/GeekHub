"use client"
import RecentButton from '@/components/common/RecentButton'
import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronDown, ChevronUp, UserRoundCog } from 'lucide-react'


interface team{
  teamName: string,
  members : [
    {
      name :string,
      role :boolean
    }
  ]
}


const Event = () => {
  const [showIndex, setShowIndex] = useState<number | null>(null);
  const [team, setTeam] = useState<team[]>([]);
  useEffect(() => {
    try {
      const url = process.env.NEXT_PUBLIC_TEAMAPI || ''
      async function call() {
        const response = await fetch(url);
        const data = await response.json();
        setTeam(data);
      }
      call();

    } catch (error) {
      console.error("Error fetching Problem Statement data:", error);
    }

  }, [])
  return (
    <div className='flex gap-10 flex-col justify-center items-center my-16 mb-32'>
      <h1 className='text-4xl font-bold' data-aos='fade-upnote'>Active Event</h1>


      <Dialog >
        <DialogTrigger>
          
            <RecentButton text='View Participants' />
          
          
        </DialogTrigger>
        <DialogContent className='bg-white '>
          <DialogHeader>
            <DialogTitle>
              <div className='my-2 text-center text-2xl'>
                Hackathon Teams 
              </div>


            </DialogTitle>

            <DialogDescription>
              <div className='h-[80vh] max-w-screen-sm testimonials overflow-y-auto py-2'>
                {team.length>0 &&

                  team.map((team, index) => {
                    return (
                      <div key={index} className='text-lg text-black my-3 border px-3 py-2 hover:cursor-pointer rounded-lg shadow-[0px_1px_1px_0px] transition-all duration-1000'>
                        <div className='flex justify-between items-center ' onClick={() => setShowIndex(index === showIndex ? null : index)}>
                          <div className='flex gap-5 '>
                            <div >
                              TG-{index+1}
                            </div>

                            <div className=' font-semibold '>
                              {team.teamName}
                            </div>


                          </div>
                          {index === showIndex ? <ChevronUp /> : <ChevronDown />}
                        </div>

                        <div className={`${showIndex == index ? '' : 'hidden'} font-medium`}>
                          {
                            team.members.map((member, index2) => (
                              <div className='text-lg ml-5 my-1 text-black flex gap-5 items-center' key={index2}>
                                <div className='pt-2 flex gap-3 items-center'>
                                  <div className='text-lg'>
                                    TG-{index+1}-{index2+1}
                                  </div>
                                  <div>
                                    {member.name}
                                  </div>
                                </div>
                                <div>

                                  {
                                    member.role ? <UserRoundCog/> : ''
                                  }
                                </div>


                              </div>
                            ))
                          }

                        </div>


                      </div>
                    )
                  })
                }

              </div>




            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>




    </div>
  )
}

export default Event
