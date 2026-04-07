import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  FileCheck, Search, Monitor, Globe, Briefcase, ArrowRightLeft,
  Receipt, Heart, Building, BarChart3, Landmark, ClipboardCheck,
  GitMerge, ShieldCheck, TrendingUp, Users, ArrowRight,
} from 'lucide-react';

const services = [
  { icon: FileCheck, name: 'Statutory Audits', desc: 'Comprehensive statutory audit services' },
  { icon: Search, name: 'Internal Audits', desc: 'Risk-based internal audit framework' },
  { icon: Monitor, name: 'IS Audit', desc: 'Information systems audit & controls' },
  { icon: Globe, name: 'International Taxation', desc: 'Cross-border tax planning' },
  { icon: Briefcase, name: 'Business Tax Advisory', desc: 'Strategic tax advisory services' },
  { icon: ArrowRightLeft, name: 'Transfer Pricing', desc: 'Transfer pricing compliance' },
  { icon: Receipt, name: 'Indirect Taxation', desc: 'GST and indirect tax advisory' },
  { icon: Heart, name: 'Non-Profit Taxation', desc: 'Tax-exempt organization services' },
  { icon: Building, name: 'Incorporation', desc: 'Company registration support' },
  { icon: BarChart3, name: 'Valuation Services', desc: 'Business & share valuation' },
  { icon: Landmark, name: 'FEMA Advisory', desc: 'Foreign exchange compliance' },
  { icon: ClipboardCheck, name: 'Due Diligence', desc: 'Financial due diligence reviews' },
  { icon: GitMerge, name: 'Mergers & Demergers', desc: 'M&A transaction support' },
  { icon: ShieldCheck, name: 'Compliance Services', desc: 'Regulatory compliance solutions' },
  { icon: TrendingUp, name: 'Investment Advisory', desc: 'Investment planning guidance' },
  { icon: Users, name: 'Business Consulting', desc: 'Strategic business consulting' },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20">What We Do</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-4 mb-4">Our Services</h2>
          <div className="w-16 h-[2px] bg-gradient-gold mx-auto mb-4" />
          <p className="font-body text-foreground/55 max-w-2xl mx-auto">
            Comprehensive professional services tailored to meet the diverse needs of businesses across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`group relative bg-background rounded-2xl p-6 shadow-soft border border-border/50 hover-lift cursor-pointer overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-secondary group-hover:bg-gold/20 flex items-center justify-center mb-4 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-gold group-hover:text-gold-light transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-primary-foreground transition-colors duration-500 mb-1">
                  {service.name}
                </h3>
                <p className="font-body text-xs text-muted-foreground group-hover:text-primary-foreground/60 transition-colors duration-500 mb-3">
                  {service.desc}
                </p>
                <div className="flex items-center gap-1 text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  <span className="font-body text-xs font-medium">Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
