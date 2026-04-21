import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useModal } from "@/context/ModalContext";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { openConsultation } = useModal();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/banners/banner1.png"
          alt="Modern Office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#023E6C]/55 z-0" />
      </div>

      <div ref={ref} className="relative z-10 container flex flex-col items-center text-center pt-24">
        {/* Header Badge */}
        <div
          className={`badge-pill mb-8 border-[#6AA84F]/40 bg-[#6AA84F]/20 text-[#75C05E] transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] brightness-125">
            TRUSTED FINANCIAL ADVISORS
          </span>
        </div>

        {/* Title */}
        <h1
          className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 max-w-4xl transition-all duration-1000 delay-200 drop-shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Empowering Your Financial Future with Precision
        </h1>

        <p
          className={`font-body text-sm sm:text-base md:text-lg text-white/95 mb-10 leading-[1.6] sm:leading-[1.8] max-w-2xl transition-all duration-1000 delay-500 drop-shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Comprehensive audit, tax, and strategic advisory services tailored for
          visionary businesses and high-net-worth individuals.
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Link to="/services">
            <Button
              size="lg"
              className="bg-[#6AA84F] hover:bg-[#6AA84F]/90 text-white px-10 py-6 text-sm font-body font-bold tracking-wider uppercase transition-all duration-500 rounded-md"
            >
              Explore Services
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            onClick={openConsultation}
            className="border-white text-white px-10 py-6 text-sm font-body font-bold tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-500 rounded-md backdrop-blur-sm bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
