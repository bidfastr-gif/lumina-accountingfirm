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
    <section id="sectors" className="py-24 lg:py-32 bg-gradient-section overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-body text-sm font-semibold text-gold uppercase tracking-[0.2em]">Industries</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">Sector Specific Expertise</h2>
          <p className="font-body text-foreground/60 max-w-2xl mx-auto">
            Deep domain knowledge across diverse industries enables us to deliver specialized insights and solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {sectors.map((sector, i) => (
            <div
              key={sector.name}
              className={`flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-full px-5 py-3 shadow-soft hover-lift transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <sector.icon className="w-5 h-5 text-gold" />
              <span className="font-body text-sm font-medium text-foreground/80">{sector.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
