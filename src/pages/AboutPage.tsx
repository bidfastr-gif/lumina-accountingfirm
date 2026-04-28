import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-4 sm:pt-8">
      <div className="bg-background">
        <AboutSection />
        <TeamSection />
      </div>
    </div>
  );
};

export default AboutPage;
