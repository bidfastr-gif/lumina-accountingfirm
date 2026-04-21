import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Wheat,
  Car,
  Factory,
  FlaskConical,
  ShoppingBag,
  GraduationCap,
  Clapperboard,
  Landmark,
  HeartPulse,
  Building2,
  Truck,
  Briefcase,
  ShoppingCart,
  Users,
  Cpu,
} from "lucide-react";

const sectorCategories = [
  {
    title: "Industrial & Manufacturing",
    description: "Optimizing supply chains and managing complex cost structures in heavy industry.",
    sectors: [
      { icon: Wheat, name: "Agriculture" },
      { icon: Car, name: "Automotive" },
      { icon: Factory, name: "Capital Goods" },
      { icon: FlaskConical, name: "Chemicals" },
      { icon: Truck, name: "Logistics" },
      { icon: Building2, name: "Infrastructure" },
    ],
  },
  {
    title: "Consumer & Retail",
    description: "Agile financial strategies for high-volume markets and service excellence.",
    sectors: [
      { icon: ShoppingBag, name: "Consumer Products" },
      { icon: ShoppingCart, name: "Retail" },
      { icon: Clapperboard, name: "Entertainment & Hospitality" },
    ],
  },
  {
    title: "Knowledge & Public",
    description: "Ensuring transparency and stewardship for mission-driven organizations.",
    sectors: [
      { icon: GraduationCap, name: "Education" },
      { icon: Users, name: "Public Sector" },
      { icon: Briefcase, name: "Professional Services" },
    ],
  },
  {
    title: "Financial & Tech",
    description: "Navigating high-growth digital frontiers and complex regulatory landscapes.",
    sectors: [
      { icon: Landmark, name: "Financial Services" },
      { icon: HeartPulse, name: "Healthcare" },
      { icon: Cpu, name: "Technology" },
    ],
  },
];

const SectorsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="sectors"
      className="py-16 sm:py-20 lg:py-40 bg-background relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden opacity-20">
        <div className="absolute top-[10%] left-[-5%] text-[20vw] font-bold text-gold/5 leading-none uppercase tracking-tighter">
          Expertise
        </div>
        <div className="absolute bottom-[5%] right-[-5%] text-[15vw] font-bold text-gold/5 leading-none uppercase tracking-tighter">
          Industries
        </div>
      </div>
      
      {/* Blurred Gold Accents */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div
          className={`text-center mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-gold/40" />
            <span className="font-body text-[11px] font-bold text-gold uppercase tracking-[0.4em]">
              Industry Sectors
            </span>
            <div className="w-10 h-[2px] bg-gold/40" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-8 tracking-tight">
            Sector Specific <span className="text-gradient-gold">Expertise</span>
          </h2>
          <p className="font-body text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Our deep domain knowledge across diverse industries enables us to
            deliver specialized insights and strategic solutions tailored to your unique market challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {sectorCategories.map((category, catIdx) => (
            <div 
              key={category.title}
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${catIdx * 200}ms` }}
            >
              <div className="mb-8 border-l-4 border-gold pl-6">
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                  {category.title}
                </h3>
                <p className="font-body text-sm text-foreground/50 max-w-md leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.sectors.map((sector, i) => (
                  <div
                    key={sector.name}
                    className="group flex items-center gap-4 bg-card/40 backdrop-blur-sm rounded-2xl p-4 border border-border/40 hover:border-gold/30 hover:shadow-premium transition-all duration-500 cursor-default"
                  >
                    <div className="w-11 h-11 rounded-xl bg-secondary group-hover:bg-gold flex items-center justify-center transition-all duration-500 shadow-sm shadow-gold/5">
                      <sector.icon className="w-5 h-5 text-gold group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <span className="font-body text-sm font-semibold text-primary/80 group-hover:text-primary transition-colors duration-500">
                      {sector.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
