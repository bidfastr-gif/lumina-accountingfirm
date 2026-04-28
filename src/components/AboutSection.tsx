import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Award,
  Users,
  Building2,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import Counter from "./Counter";

const stats = [
  {
    icon: Calendar,
    value: "25+",
    label: "Years of Expertise",
    color: "from-gold to-gold-light",
  },
  {
    icon: Users,
    value: "25+",
    label: "Expert Team",
    color: "from-navy to-navy-light",
  },
  {
    icon: Building2,
    value: "Chennai",
    label: "Central Hub",
    color: "from-gold to-gold-light",
  },
  {
    icon: Award,
    value: "ICAI",
    label: "Peer Reviewed",
    color: "from-navy to-navy-light",
  },
];



const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="pt-8 sm:pt-12 lg:pt-20 pb-8 sm:pb-12 lg:pb-12 overflow-hidden relative"
    >
      {/* Premium ambient blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy/[0.02] blur-[120px] pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-gold/40" />
              <span className="font-body text-[11px] font-semibold text-gold/80 uppercase tracking-[0.25em]">
                About Us
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-6 sm:mb-8 leading-[1.15]">
              A Legacy of Trust <br />
              <span className="text-gradient-gold">Since 1996</span>
            </h2>
            <div className="space-y-4 font-body text-foreground/55 leading-[1.75] sm:leading-[1.85] text-sm sm:text-[15px]">
              <p>
                Sabapathy & Dhandapani is a consulting and audit firm providing
                end-to-end financial and accounting solutions to businesses and
                individuals. Established in 1996, the firm brings over 25 years
                of professional expertise.
              </p>
              <p>
                Our offerings span audit and assurance, tax advisory, financial
                reporting, regulatory compliance, and strategic business
                consulting. Backed by a team of experienced professionals, we
                support clients in improving transparency, optimizing tax
                positions, ensuring statutory compliance, and strengthening
                operational efficiency.
              </p>
              <p>
                Our goal is to serve as a reliable partner, fostering
                sustainable growth and strong corporate governance for every
                client.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "With our central hub in Chennai and an expanding footprint across multiple cities, our strength lies in our talented team of 25+ experts",
                  "Our firm is peer-reviewed by the Institute of Chartered Accountants of India, affirming our high quality and adherence to professional and ethical standards.",
                  "Our firm is also empanelled with the C&AG.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6AA84F] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>


          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
          >
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => {
                const numericValue =
                  parseInt(stat.value.replace(/\D/g, "")) || 0;
                const suffix = stat.value.replace(/\d/g, "");

                return (
                  <div
                    key={stat.label}
                    className={`card-premium p-5 sm:p-7 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-5`}
                    >
                      <stat.icon className="w-5.5 h-5.5 text-primary-foreground" />
                    </div>
                    <div className="font-body text-3xl font-extrabold text-primary flex items-center justify-center tracking-tight">
                      {/\d/.test(stat.value) ? (
                        <>
                          <Counter
                            end={parseInt(stat.value.replace(/\D/g, "")) || 0}
                            trigger={isVisible}
                            duration={2000}
                          />
                          <span>{stat.value.replace(/\d/g, "")}</span>
                        </>
                      ) : (
                        <span className="text-lg sm:text-xl font-bold tracking-tight">
                          {stat.value}
                        </span>
                      )}
                    </div>
                    <div className="font-body text-[10px] text-muted-foreground mt-2 uppercase tracking-[0.15em] font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutSection;
