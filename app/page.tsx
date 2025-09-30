import Programs from "@/app/programs/page";
import CommunitySection from "@/components/content-6";
import { TabsDemo } from "@/components/dummy";
import AboutUs from "@/components/sections/about-us";
import CallToAction from "@/components/sections/cta";
import HeroSection from "@/components/sections/hero-section";


const Home =() =>{
  return (
    <main className="min-h-screen w-full overflow-hidden bg-green text-foreground">


      <HeroSection/>
      
      <TabsDemo/>
      <AboutUs/>  
      <Programs/>    
       <CallToAction />
       <CommunitySection/>
       
    </main>
  );
}

export default Home;
