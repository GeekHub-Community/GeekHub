import { 
AISection, 
AndroidSection, 
BlockChain, 
CyberSecurity, 
DesignSection, 
DsaSection, 
GameSection, 
HomeSection, 
Introduction, 
ShowCase, 
TestSection, 
WebSection 
} from '@/components/core/Homepage'

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
