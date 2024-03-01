import RecentButton from '@/components/common/RecentButton';
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

import Testimonials from '@/components/core/Homepage/Testimonials';


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col">
      <div className='border max-w-screen'>
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
        <Testimonials/>
        <TestSection/>
      </div>
    </main>
  )
}
