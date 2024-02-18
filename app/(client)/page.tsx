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

import { getAllMentors, getMentorByName } from '../../Services/apillist'
import { Mentor } from '../../utils/type';


export default async function Home() {
  const mentorList: Mentor[] = await getAllMentors();
  // console.log("All Mentors : => ",mentorList);

  const mentor: Mentor = await getMentorByName(mentorList[0].slug?.current);
  // console.log("Mentor by Name :=> ",mentor);

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
