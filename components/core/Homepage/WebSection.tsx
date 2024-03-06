"use client"
import { lotties } from '@/data/Cdn';
import { Player} from '@lottiefiles/react-lottie-player';

export const WebSection = () => {
    return (
        <div className='text-black bg-AthensGray flex  flex-col lg:flex-row p-5 justify-evenly'>
            <div className='lg:w-1/2  flex justify-center items-center'>

                <div className='p-8  text-left'>
                    <h2 className='font-bold text-xl text-left md:text-2xl'>Web Development</h2>
                    <p className='text-xs  md:text-sm md:w-4/5  md:ml-0'>Join us to embark on your web development journey and become part of a network committed to your growth and success. Web development involves building and maintaining websites and web applications, utilizing languages like HTML, CSS, and JavaScript, along with frameworks like React, Angular, and Vue.js for frontend development, as well as Node.js Django etc. for backend development. Additionally, we offer support in learning database technologies to become proficient in full-stack web development.
</p>

                    {/* <div className='flex justify-between mt-5 gap-5'>
                        <div>
                            <div>🙂</div>
                            <h2 className='font-bold'>Frontend</h2>
                            <p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus mollitia voluptates? Accusantium vitae.</p>
                        </div>

                        <div>
                            <div>🙂</div>
                            <h2 className='font-bold'>Backend</h2>
                            <p className='text-xs md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus mollitia voluptates? Accusantium vitae.</p>
                        </div>



                    </div> */}
                </div>

            </div>

            <div>
                <Player
                    autoplay
                    loop
                    src={lotties.web}
                    className=' h-[300px] w-[300px] md:h-[500px] md:w-[500px]'
                >
                </Player>
            </div>
        </div>
    )
}
