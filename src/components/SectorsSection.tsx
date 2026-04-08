import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Wheat, Car, Factory, FlaskConical, ShoppingBag, GraduationCap,
  Clapperboard, Landmark, HeartPulse, Building2, Truck,
  Briefcase, ShoppingCart, Users, Cpu,
} from 'lucide-react';

const sectors = [
  { icon: Wheat, name: 'Agriculture' },
  { icon: Car, name: 'Automotive' },
  { icon: Factory, name: 'Capital Goods' },
  { icon: FlaskConical, name: 'Chemicals' },
  { icon: ShoppingBag, name: 'Consumer Products' },
  { icon: GraduationCap, name: 'Education' },
  { icon: Clapperboard, name: 'Entertainment & Hospitality' },
  { icon: Landmark, name: 'Financial Services' },
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: Building2, name: 'Infrastructure' },
  { icon: Truck, name: 'Logistics & Transportation' },
  { icon: Briefcase, name: 'Professional Services' },
  { icon: ShoppingCart, name: 'Retail' },
  { icon: Users, name: 'Social & Public Sector' },
  { icon: Cpu, name: 'Technology' },
];

const SectorsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sectors" className="py-16 sm:py-20 lg:py-36 bg-gradient-section overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-gold/40" />
            <span className="font-body text-[11px] font-semibold text-gold/80 uppercase tracking-[0.25em]">Industries</span>
            <div className="w-10 h-px bg-gold/40" />
          </div>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-5">Sector Specific Expertise</h2>
          <p className="font-body text-foreground/45 max-w-lg mx-auto text-[15px] leading-relaxed">
            Deep domain knowledge across diverse industries enables us to deliver specialized insights and solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {sectors.map((sector, i) => (
            <div
              key={sector.name}
              className={`group flex items-center gap-3 bg-card rounded-xl px-5 py-3.5 shadow-soft border border-border/30 hover:border-gold/20 hover:shadow-card transition-all duration-500 cursor-default ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="w-8 h-8 rounded-lg bg-gold/[0.06] group-hover:bg-gold/[0.12] flex items-center justify-center transition-all duration-300">
                <sector.icon className="w-4 h-4 text-gold/70 group-hover:text-gold transition-colors duration-300" />
              </div>
              <span className="font-body text-[13px] font-medium text-foreground/60 group-hover:text-primary transition-colors duration-300">{sector.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
