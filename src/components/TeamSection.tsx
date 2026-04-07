import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { User } from 'lucide-react';

const partners = [
  { name: 'CA. Sabapathy', role: 'Founder Partner' },
  { name: 'CA. V. Thiagarajan', role: 'Senior Partner' },
  { name: 'CA. D. Purushothaman', role: 'Partner' },
  { name: 'CA. T. Sangeeth', role: 'Partner' },
  { name: 'CA. T. Thulasimala', role: 'Partner' },
  { name: 'CA. K. Smartin Simon', role: 'Partner' },
  { name: 'CA. N. Mohammed Shareef', role: 'Partner' },
  { name: 'CA. R. Balakumari', role: 'Partner' },
  { name: 'CA. Sree Jagadeesh', role: 'Partner, Coimbatore' },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" className="py-24 lg:py-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[100px] pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20">Leadership</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-4 mb-4">Our Partners</h2>
          <div className="w-16 h-[2px] bg-gradient-gold mx-auto mb-4" />
          <p className="font-body text-foreground/55 max-w-2xl mx-auto">
            A team of seasoned professionals with decades of combined experience driving excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`group bg-background rounded-2xl p-6 shadow-card border border-border/50 hover-lift text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-gold-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center group-hover:shadow-gold transition-all duration-500">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <h4 className="font-heading text-sm font-semibold text-primary">{p.name}</h4>
              <p className="font-body text-[11px] text-gold mt-1 uppercase tracking-wider">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
