import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const TeamPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-background">
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
