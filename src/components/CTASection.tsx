import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      className="pt-8 sm:pt-12 lg:pt-20 pb-16 sm:pb-20 lg:pb-36 relative overflow-hidden bg-background"
    >
      <div className="container relative z-10" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-[#6AA84F]/30" />
            <span className="font-body text-[11px] font-semibold text-[#6AA84F] uppercase tracking-[0.25em]">
              Get Started
            </span>
            <div className="w-10 h-px bg-[#6AA84F]/30" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-5 leading-[1.15]">
            Start Improving Your <br className="hidden md:block" />
            <span className="text-[#6AA84F]">Business Today</span>
          </h2>
          <p className="font-body text-foreground/60 max-w-lg mx-auto text-lg leading-relaxed">
            Contact our team for expert financial guidance. We are here to help
            you achieve your goals.
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            {
              icon: Mail,
              title: "Email Us",
              detail: "sabapathyca@hotmail.com",
              href: "mailto:sabapathyca@hotmail.com",
            },
            {
              icon: Phone,
              title: "Call Us",
              detail: "+91 98400 67587",
              href: "tel:+91 98400 67587",
            },
            {
              icon: MapPin,
              title: "Address",
              detail:
                "Flat No. 2A, 2nd Floor, Nalanda Apartments, (Next to Hotel Saravana Bhavan) Dr. Radhakrishnan Salai, Mylapore, Chennai - 600 004",
              href: "#",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group bg-white/50 backdrop-blur-sm rounded-3xl p-8 sm:p-10 text-center border border-border/40 hover:border-[#6AA84F]/30 hover:shadow-premium transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-[#6AA84F] transition-all duration-500">
                <item.icon className="w-6 h-6 text-[#6AA84F] group-hover:text-white transition-colors duration-500" />
              </div>
              <h4 className="font-heading text-xl font-bold text-primary mb-3">
                {item.title}
              </h4>
              <p className="font-body text-[15px] text-foreground/50 leading-relaxed font-medium">
                {item.detail}
              </p>
            </a>
          ))}
        </div>

        <div
          className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-[#6AA84F] hover:bg-[#6AA84F]/90 text-white px-12 py-7 text-sm font-body font-bold tracking-wider uppercase transition-all duration-500 rounded-md group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
