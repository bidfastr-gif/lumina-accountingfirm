import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const partners = [
  {
    name: 'Mr. M. Natanasabapathy',
    role: 'Partner, Fellow Chartered Accountant',
    initials: 'MN',
  },
  {
    name: 'Mr. R. Subramanian',
    role: 'Partner, Fellow Chartered Accountant',
    initials: 'RS',
  },
  {
    name: 'Mr. S. Guruprakash',
    role: 'Partner, Chartered Accountant',
    initials: 'SG',
  },
  {
    name: 'Mr. N. Sabari Kishore',
    role: 'Chartered Accountant',
    initials: 'NK',
  },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-36 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.025] blur-[120px] pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-gold/40" />
            <span className="font-body text-[11px] font-semibold text-gold/80 uppercase tracking-[0.25em]">Leadership</span>
            <div className="w-10 h-px bg-gold/40" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">Our Partners</h2>
          <p className="font-body text-foreground/45 max-w-lg mx-auto text-[15px] leading-relaxed">
            A team of seasoned professionals with decades of combined experience driving excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`group card-premium p-5 sm:p-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Premium avatar with initials */}
              <div className="relative w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center group-hover:from-gold group-hover:to-gold-dark group-hover:shadow-gold transition-all duration-500">
                  <span className="font-heading text-sm sm:text-lg font-bold text-primary-foreground">{p.initials}</span>
                </div>
              </div>
              <h4 className="font-heading text-[13px] sm:text-[15px] font-semibold text-primary leading-snug">{p.name}</h4>
              <p className="font-body text-[9px] sm:text-[10px] text-gold/70 mt-1.5 sm:mt-2 mb-4 sm:mb-6 uppercase tracking-[0.12em] sm:tracking-[0.15em] font-medium">{p.role}</p>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 text-[10px] font-semibold text-muted-foreground hover:text-primary transition-colors group/btn uppercase tracking-[0.15em]"
              >
                Read More
                <ArrowRight className="w-3 h-3 text-gold transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
