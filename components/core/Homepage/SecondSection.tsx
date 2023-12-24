import Image from 'next/image'

export const SecondSection = () => {
    return (
        <div className='text-black bg-white flex p-5 justify-evenly'>
            <div className='w-1/2  flex justify-center items-center'>

                <div className=' p-8'>
                    <h2 className='font-bold text-2xl'>Light, Fast & Powerful</h2>
                    <p className='text-sm w-4/5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                    
                    <div className='flex justify-between mt-5 gap-5'>
                        <div>
                            <div>🙂</div>
                        <h2 className='font-bold'>Title Goes Here</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus mollitia voluptates? Accusantium vitae.</p>
                        </div>

                        <div>
                        <div>🙂</div>
                        <h2 className='font-bold'>Title Goes Here</h2>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus mollitia voluptates? Accusantium vitae.</p>
                        </div>

                       
                        
                    </div>
                </div>
                
            </div>

            <div>
                <Image alt='girlimage' width={500} height={200} src='/home/girl.svg'/>
            </div>
        </div>
    )
}
