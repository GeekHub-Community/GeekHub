import Image from 'next/image';
import React from 'react'

const Sponsor = () => {
  return (
    <div className='h-[50px] my-10'>
        <div className='flex justify-center gap-4'>
            <Image src='/sponsor/_Colored.png' width={720} height={720} alt='DEVFOLIO LOGO'  className='w-[200px] h-auto '/>
            <Image src='/sponsor/Colored.png' width={720} height={720} alt='POLYGON LOGO' className='w-[200px] h-auto'/>
            <Image src='/sponsor/Untitled.png' width={720} height={720} alt='ETHINDIA LOGO' className='w-[200px] h-auto'/>
           
        </div>
    </div>
  )
}

export default Sponsor;