import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  FileCheck,
  Search,
  Monitor,
  Globe,
  Briefcase,
  ArrowRightLeft,
  Receipt,
  Heart,
  Building,
  BarChart3,
  Landmark,
  ClipboardCheck,
  GitMerge,
  ShieldCheck,
  TrendingUp,
  Users,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  "Audit & Assurance",
  "Taxation",
  "Corporate & Legal",
  "Advisory",
];

const servicesData = {
  "Audit & Assurance": [
    {
      icon: FileCheck,
      name: "Statutory Audits",
      desc: "Comprehensive statutory audit services ensuring compliance with regulatory requirements and financial reporting standards.",
    },
    {
      icon: Search,
      name: "Internal Audits",
      desc: "Systematic evaluation of internal controls, risk management processes, and governance frameworks.",
    },
    {
      icon: Monitor,
      name: "Information Systems Audit",
      desc: "Assessment of IT systems, cybersecurity frameworks, and digital infrastructure compliance.",
    },
  ],
  Taxation: [
    {
      icon: Globe,
      name: "International Taxation",
      desc: "Expert guidance on cross-border tax issues, treaty benefits, and global tax compliance strategies.",
    },
    {
      icon: Briefcase,
      name: "Business Tax Advisory",
      desc: "Strategic tax planning and advisory services for businesses to optimize tax efficiency and compliance.",
    },
    {
      icon: Receipt,
      name: "Indirect Taxation",
      desc: "Comprehensive support for GST and other indirect taxes, including advisory, compliance, and litigation.",
    },
    {
      icon: ArrowRightLeft,
      name: "Transfer Pricing",
      desc: "Detailed transfer pricing documentation, benchmarking, and compliance for related-party transactions.",
    },
    {
      icon: Heart,
      name: "Non-Profit Taxation",
      desc: "Specialized tax services for NGOs and charitable organizations to maintain tax-exempt status.",
    },
  ],
  "Corporate & Legal": [
    {
      icon: Building,
      name: "Incorporation",
      desc: "End-to-end support for company registration, LLP formation, and startup-related statutory filings.",
    },
    {
      icon: GitMerge,
      name: "Mergers & Demergers",
      desc: "Strategic advisory and compliance support for corporate restructuring, mergers, and acquisitions.",
    },
    {
      icon: Landmark,
      name: "FEMA Advisory",
      desc: "Expert guidance on foreign exchange regulations, FDI compliance, and outward investment advisory.",
    },
    {
      icon: ShieldCheck,
      name: "Compliance Services",
      desc: "Holistic regulatory compliance solutions across various corporate and commercial laws.",
    },
  ],
  Advisory: [
    {
      icon: BarChart3,
      name: "Valuation Services",
      desc: "Precise business and share valuation services for regulatory, financial reporting, and strategic purposes.",
    },
    {
      icon: ClipboardCheck,
      name: "Due Diligence",
      desc: "In-depth financial and tax due diligence reviews for investment and acquisition decisions.",
    },
    {
      icon: TrendingUp,
      name: "Investment Advisory",
      desc: "Personalized investment planning and advisory services to achieve long-term financial goals.",
    },
    {
      icon: Users,
      name: "Business Consulting",
      desc: "Strategic business consulting to drive growth, efficiency, and organizational excellence.",
    },
  ],
};

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <section
      id="services"
      className="py-16 sm:py-20 lg:py-36 overflow-hidden relative"
    >
      {/* Subtle ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-[150px] pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-gold/40" />
            <span className="font-body text-[11px] font-semibold text-gold/80 uppercase tracking-[0.25em]">
              Our Services
            </span>
            <div className="w-10 h-px bg-gold/40" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 sm:mb-5">
            Comprehensive{" "}
            <span className="text-gradient-gold">Professional</span> Solutions
          </h2>
          <p className="font-body text-foreground/45 max-w-xl mx-auto leading-relaxed text-[15px]">
            Delivering excellence across audit, taxation, compliance, and
            strategic advisory with a legacy of trust built over five decades.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-10 sm:mb-16 gap-1.5 sm:gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-[12px] sm:text-[13px] font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "text-foreground/50 hover:text-primary hover:bg-primary/[0.04]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {servicesData[activeCategory as keyof typeof servicesData].map(
            (service, i) => (
              <div
                key={service.name}
                className="group relative card-premium p-6 sm:p-8 cursor-pointer overflow-hidden animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Navy hover background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-navy-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-2xl" />

                {/* Gold accent strip */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

                <div className="relative z-10">
                  <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 group-hover:text-gold transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/[0.06] group-hover:bg-gold/[0.12] flex items-center justify-center transition-all duration-500">
                      <service.icon className="w-5.5 h-5.5 text-gold/70 group-hover:text-gold group-hover:scale-110 transition-all duration-500" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-primary group-hover:text-primary-foreground mb-3 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="font-body text-[13px] text-foreground/50 group-hover:text-primary-foreground/60 leading-relaxed transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
