import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { User } from 'lucide-react';

const partners = [
  'CA. R. Bupathy',
  'CA. V. Thiagarajan',
  'CA. D. Purushothaman',
  'CA. T. Sangeeth',
  'CA. T. Thulasimala',
  'CA. K. Smartin Simon',
  'CA. N. Mohammed Shareef',
  'CA. R. Balakumari',
  'CA. Sree Jagadeesh',
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" className="py-24 lg:py-32 overflow-hidden">
      <div className="container" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="font-body text-sm font-semibold text-gold uppercase tracking-[0.2em]">Leadership</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-3 mb-4">Our Partners</h2>
          <p className="font-body text-foreground/60 max-w-2xl mx-auto">
            A team of seasoned professionals with decades of combined experience driving excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((name, i) => (
            <div
              key={name}
              className={`group bg-background rounded-2xl p-6 shadow-card hover-lift text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-gold flex items-center justify-center mb-4 group-hover:shadow-gold transition-shadow duration-500">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <h4 className="font-heading text-sm font-semibold text-primary">{name}</h4>
              <p className="font-body text-xs text-muted-foreground mt-1">Partner</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
