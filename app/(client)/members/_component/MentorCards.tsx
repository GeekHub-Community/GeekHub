import { extractYearFromDate } from '@/utils/Functions/getYear'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MentorCards = ({ mentor, membersYear }:any) => {
  return (
    <div className="w-72 h-[24rem] flex flex-col justify-center items-center shadow hover:scale-110 transition-all  ease-in-out duration-200">
    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white w-4/5 bg-clip-border rounded-xl h-80">
      <Image src={mentor?.profilePhotoUrl} alt="Image" width={500} height={300} />
    </div>
    <div className="px-6 text-center">
      <p className="font-bold">{mentor?.name}</p>
      {mentor?.memberships.map((pos:any) => (
        <div key={pos}>
          {extractYearFromDate(pos?.joinyear) == membersYear && (
            <div className="flex gap-2  font-semibold justify-center">
              {pos?.position.toLowerCase() !== 'team lead' && (
                <p className="text-sm text-gray-600">{mentor?.domain}</p>
              )}
              <p className="text-sm text-gray-600">{pos?.position}</p>
            </div>
          )}
        </div>
      ))}
      <p className="text-xs text-gray-600">{mentor?.batch}</p>
    </div>
    <div className="py-2">
      <Link href={mentor?.linkedin} target="_blank">
        <Linkedin className="text-blue" />
      </Link>
    </div>
  </div>
  )
}

export default MentorCards