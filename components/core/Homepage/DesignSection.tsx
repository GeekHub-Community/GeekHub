'use client'


import { lotties } from '@/data/Cdn'
import { Player } from '@lottiefiles/react-lottie-player'

export const DesignSection = () => {
    return (
        <div className='text-black bg-AthensGray flex  flex-col lg:flex-row p-5  justify-evenly pt-[100px] bg-[url("/design.svg")] bg-cover'>
            
            <div className='lg:w-1/2  flex justify-center items-center backdrop-blur-sm'>

                <div className=' p-8 '>
                    <h2 className='font-bold text-2xl'>Design The dreams</h2>
                    <p className=' text-xs md:text-sm md:w-4/5 '>Stepping into the enchanting world of Design, GeekHub beckons you to become the architect of dreams, where imagination knows no bounds. Join us on an odyssey where pixels become brushstrokes and wireframes weave tales of innovation. Embrace the artistry of UI/UX design, where every click resonates with emotion and every color palette paints a vision of possibility. Explore the alchemy of visual storytelling, typography, and the dance of light and shadow. With GeekHub as your canvas and our community as your muse, dare to design the future. Connect, collaborate, and let your imagination sculpt reality with GeekHub.</p>
                </div>
                
            </div>
            <div className='flex justify-center items-center backdrop-blur-sm'>
                <Player
                src={lotties.GraphicDesignerAnimated}
                autoplay
                loop 
                className='h-[22rem] md:h-[26rem] lg:h-[30rem]'
                >

                </Player>
            </div>
           
        </div>
    )
}
