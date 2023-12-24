import { HomeSection } from '@/components/core/Homepage/HomeSection'
import { SecondSection } from '@/components/core/Homepage/SecondSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='border max-w-[1600px]'>
        <HomeSection />
        <SecondSection/>
      </div>
    </main>
  )
}
