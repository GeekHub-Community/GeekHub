import Image from 'next/image'
import React from 'react'

const TestSection = () => {
  return (
    <div className='bg-white flex justify-center'>
        <Image src='/home/wireframe.png' alt='wireframe' width={1000} height={1000}/>
    </div>
  )
}

export default TestSection