import { FifthSection } from '@/components/core/Homepage/FifthSection'
import { ForthSection } from '@/components/core/Homepage/ForthSection'
import { HomeSection } from '@/components/core/Homepage/HomeSection'
import { SecondSection } from '@/components/core/Homepage/SecondSection'
import { ThirdSection } from '@/components/core/Homepage/ThirdSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='border lg:max-w-[1600px]'>
        <HomeSection />
        <SecondSection/>
        <ThirdSection/>
        <ForthSection/>
        <FifthSection/>
      </div>
    </main>
  )
}
