import Programs from "@/app/programs/page";
import CommunitySection from "@/components/content-6";
import { TabsDemo } from "@/components/dummy";
import AboutUs from "@/components/sections/about-us";
import CallToAction from "@/components/sections/cta";
import HeroSection from "@/components/sections/hero-section";
import ImpactHighlights from "@/components/sections/imapact";
import Partners from "@/components/sections/partners";
import UpcomingEvents from "@/components/upcoming";


const Home = () => {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-green text-foreground">


      <HeroSection />
      <Partners />
      <UpcomingEvents />
      <ImpactHighlights />
      <TabsDemo />
      <AboutUs />
      <Programs />
      <CallToAction />
      <CommunitySection />

    </main>
  );
}

export default Home;
