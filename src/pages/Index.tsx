import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SectorsSection from '@/components/SectorsSection';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <SectorsSection />
    <TeamSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
