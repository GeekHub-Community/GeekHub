import React from 'react'
import Image from 'next/image'

export const DsaSection = () => {
    return (
        <div className='text-black bg-AthensGray flex  flex-col lg:flex-row p-5  justify-evenly pt-[100px]'>
            
            <div className='lg:w-1/2  flex justify-center items-center'>

                <div className=' p-8'>
                    <h2 className='font-bold text-2xl'>Data Structure & Algorithms</h2>
                    <p className=' text-xs md:text-sm md:w-4/5'>Welcome to GeekHub, where we unravel the intricate world of Data Structures & Algorithms. Join us on a journey of logical exploration and problem-solving mastery. Dive into the fundamentals of arrays, linked lists, and trees. Unlock the secrets of algorithms like sorting, searching, and dynamic programming. With GeekHub's supportive community and expert guidance, excel in competitive coding platforms like LeetCode, GeeksforGeeks, CodeChef, and HackerRank. Connect, collaborate, and sharpen your skills with GeekHub - where every line of code tells a story of innovation.</p>
                </div>
                
            </div>
            <div className='flex justify-center items-center'>
                <Image alt='girlimage2' width={500} height={200} src='/home/dsa1.png' className='h-[300px] w-[300px] md:h-[500px] md:w-[500px]'/>
            </div>
           
        </div>
    )
}
