import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Smartphone, Mail } from "lucide-react";

const offices = [
  {
    type: "HEAD OFFICE",
    city: "Chennai",
    address:
      "New No.81, Old no.47, #139, Dr. Radhakrishnan Salai, Mylapore, Chennai - 600 004",
    tel: "044-35943060/47996581",
    mob: "+91 98400 67587",
    email: "sabapathyca@hotmail.com",
  },
  {
    type: "BRANCH OFFICE",
    city: "Chennai (Branch)",
    address:
      "Flat No.A-2, 2nd Floor, Nalanda Apartments, Door No. 2, 5th Street, Dr. Radhakrishnan Salai, Mylapore, Chennai - 600 004.",
    tel: "044-35943060/47996581",
    mob: "+91 98400 67587",
    email: "sabapathyca@hotmail.com",
  },
];

const OfficeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="offices" className="py-16 sm:py-20 lg:py-36 bg-background relative overflow-hidden">
      <div className="container relative z-10" ref={ref}>
        {/* Centered Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#6AA84F]/30" />
            <span className="font-body text-[11px] font-bold text-[#6AA84F] uppercase tracking-[0.4em]">
              Our Presence
            </span>
            <div className="w-12 h-[1px] bg-[#6AA84F]/30" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
            Visit Our Offices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {offices.map((office, i) => (
            <div
              key={office.type}
              className={`group bg-white/50 backdrop-blur-sm p-8 sm:p-12 rounded-[2rem] border border-border/40 hover:border-[#6AA84F]/30 hover:shadow-premium transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="mb-10">
                <span className="inline-block font-body text-[10px] font-bold text-[#b88c44] uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-[#fff8ee] border border-[#f5e1c8] mb-8">
                  {office.type}
                </span>
                <h3 className="font-heading text-4xl sm:text-5xl font-bold text-[#6AA84F] leading-none mb-2">
                  {office.city}
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  { Icon: MapPin, label: "", content: office.address },
                  { Icon: Phone, label: "Tel:", content: office.tel },
                  { Icon: Smartphone, label: "Mob:", content: office.mob },
                ].map(({ Icon, label, content }) => (
                  <div key={content} className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg">
                      <Icon className="w-5 h-5 text-[#6AA84F]" strokeWidth={1.5} />
                    </div>
                    <p className="font-body text-[15px] text-foreground/60 leading-relaxed pt-0.5">
                      {label && <span className="mr-2">{label}</span>}
                      {content}
                    </p>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg">
                    <Mail className="w-5 h-5 text-[#6AA84F]" strokeWidth={1.5} />
                  </div>
                  <a
                    href={`mailto:${office.email}`}
                    className="font-body text-[15px] text-foreground/60 hover:text-[#6AA84F] transition-colors duration-300 pt-0.5"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
