import { images } from '@/data/Lotties'
import Image from 'next/image'
import React from 'react'

const TestSection = () => {
  return (
    <div className='bg-white flex justify-center pt-8'>
        <Image src={images.wireframe} alt='wireframe' width={1000} height={1000}/>
    </div>
  )
}

export default TestSection