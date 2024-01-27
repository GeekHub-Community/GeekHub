import { AISection } from '@/components/core/Homepage/AISection'
import { DsaSection } from '@/components/core/Homepage/DsaSection'
import { HomeSection } from '@/components/core/Homepage/HomeSection'
import { WebSection } from '@/components/core/Homepage/WebSection'
import ShowCase from '@/components/core/Homepage/ShowCase'
import { AndroidSection } from '@/components/core/Homepage/AndroidSection'
import Introduction from '@/components/core/Homepage/introduction'
import { DesignSection } from '@/components/core/Homepage/DesignSection'
import { CyberSecurity } from '@/components/core/Homepage/CyberSecurity'
import { BlockChain } from '@/components/core/Homepage/BlockChain'
import { GameSection } from '@/components/core/Homepage/GameSection'
import TestSection from '@/components/core/Homepage/TestSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className='border lg:max-w-[1600px]'>
        <div className='w-full'>
          <ShowCase/>
        </div>
        <HomeSection />
        <Introduction/>
        <WebSection/>
        <AndroidSection/>
        <DsaSection/>
        <AISection/>
        <DesignSection/>
        <CyberSecurity/>
        <BlockChain/>
        <GameSection/>
        <TestSection/>
      </div>
    </main>
  )
}
