import { Navlinks } from '@/data/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (

    <div className='flex justify-between  w-full lg:max-w-[1600px] shadow fixed top-0  bg-blue  text-black p-4 z-[100] '>
        <div className='flex  ml-5'>
            <Link href='/' className='flex gap-2'>
                <Image alt='Logo' width={40} height={40} src='/logo.jpg' className='rounded-full border-2 border-white/70'/>
                <h2 className='md:text-2xl font-bold text-white mt-2 md:mt-1'>GeekHub</h2>
            </Link>
        </div>
        <div className=' gap-2 mt-2 mr-2 hidden sm:flex'>
            {
                Navlinks.map((link)=>(
                     <Link key={link.title} href={link.href}>
                        <p className='text-base text-white font-semibold hover:text-AthensGray/80  p-1 transition-all duration-200'>{link.title}</p>
                     </Link>
                ))
            }
        </div>
    </div>
        
  )
}
