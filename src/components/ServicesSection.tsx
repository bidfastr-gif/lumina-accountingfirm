import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  FileCheck, Search, Monitor, Globe, Briefcase, ArrowRightLeft,
  Receipt, Heart, Building, BarChart3, Landmark, ClipboardCheck,
  GitMerge, ShieldCheck, TrendingUp, Users,
} from 'lucide-react';

const services = [
  { icon: FileCheck, name: 'Statutory Audits' },
  { icon: Search, name: 'Internal Audits' },
  { icon: Monitor, name: 'Information Systems Audit' },
  { icon: Globe, name: 'International Taxation' },
  { icon: Briefcase, name: 'Business Tax Advisory' },
  { icon: ArrowRightLeft, name: 'Transfer Pricing' },
  { icon: Receipt, name: 'Indirect Taxation' },
  { icon: Heart, name: 'Non-Profit Taxation' },
  { icon: Building, name: 'Incorporation / Registration' },
  { icon: BarChart3, name: 'Business / Share Valuation' },
  { icon: Landmark, name: 'FEMA Advisory' },
  { icon: ClipboardCheck, name: 'Financial Due Diligence' },
  { icon: GitMerge, name: 'Mergers & Demergers' },
  { icon: ShieldCheck, name: 'Compliance Services' },
  { icon: TrendingUp, name: 'Investment Advisory' },
  { icon: Users, name: 'Business Consulting' },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 lg:py-32 overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-body text-sm font-semibold text-gold uppercase tracking-[0.2em]">What We Do</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">Our Services</h2>
          <p className="font-body text-foreground/60 max-w-2xl mx-auto">
            Comprehensive professional services tailored to meet the diverse needs of businesses across industries.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`group relative bg-background rounded-2xl p-6 shadow-soft hover-lift cursor-pointer overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary group-hover:bg-gold/20 flex items-center justify-center mb-4 transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-gold group-hover:text-gold-light transition-colors duration-500" />
                </div>
                <h3 className="font-body text-sm font-semibold text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
