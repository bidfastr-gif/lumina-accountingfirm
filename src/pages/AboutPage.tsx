import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-background">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
