import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Users, Building2, Calendar, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

const stats = [
  { icon: Calendar, value: '49+', label: 'Years of Excellence', color: 'from-gold to-gold-light' },
  { icon: Users, value: '9', label: 'Expert Partners', color: 'from-navy to-navy-light' },
  { icon: Building2, value: '3', label: 'Office Locations', color: 'from-gold to-gold-light' },
  { icon: Award, value: '4th', label: 'Peer Review Cert.', color: 'from-navy to-navy-light' },
];

const values = [
  { icon: Star, title: 'Excellence in Standards' },
  { icon: CheckCircle, title: 'Seamless Functions' },
  { icon: Users, title: 'Accessibility' },
  { icon: Award, title: 'Independence & Integrity' },
  { icon: Calendar, title: 'Training & Commitment' },
  { icon: Building2, title: 'Cultural Diversity' },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-36 overflow-hidden relative">
      {/* Premium ambient blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy/[0.02] blur-[120px] pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-gold/40" />
              <span className="font-body text-[11px] font-semibold text-gold/80 uppercase tracking-[0.25em]">About Us</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-6 sm:mb-8 leading-[1.15]">
              A Legacy of Trust <br /><span className="text-gradient-gold">Since 1976</span>
            </h2>
            <div className="space-y-4 font-body text-foreground/55 leading-[1.75] sm:leading-[1.85] text-sm sm:text-[15px]">
              <p>
                Sabapathy & Co, a firm of Chartered Accountants established in 1976 in India, has been carrying on the profession of Audit, Assurance, Management Consultancy and related services for more than 49 years.
              </p>
              <p>
                The firm has developed expertise in Audit, Taxation, Financial Compliance including Foreign Direct Investment, Forensic Services, IT Audits, Due Diligence Reviews and Business Valuation apart from specialised services in Ind AS Transition, Internal Control Framework, and Mergers & Acquisitions.
              </p>
              <p>
                Headquartered in Chennai with branch offices in Bengaluru and Coimbatore, supported by 9 Partners, Chartered Accountants, and dedicated staff.
              </p>
            </div>

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 group"
            >
              <span className="font-body text-[12px] font-semibold text-primary uppercase tracking-[0.15em] group-hover:text-gold transition-colors duration-300">
                Read More
              </span>
              <div className="w-8 h-8 rounded-full bg-primary group-hover:bg-gold flex items-center justify-center transition-all duration-300">
                <ArrowRight className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
            </Link>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => {
                const numericValue = parseInt(stat.value.replace(/\D/g, '')) || 0;
                const suffix = stat.value.replace(/\d/g, '');

                return (
                  <div
                    key={stat.label}
                    className={`card-premium p-5 sm:p-7 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-5`}>
                      <stat.icon className="w-5.5 h-5.5 text-primary-foreground" />
                    </div>
                    <div className="font-heading text-3xl font-bold text-primary flex items-center justify-center gap-0.5">
                      <Counter end={numericValue} trigger={isVisible} duration={2000} />
                      <span>{suffix}</span>
                    </div>
                    <div className="font-body text-[10px] text-muted-foreground mt-2 uppercase tracking-[0.15em] font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values */}
        <div ref={ref2} className="mt-16 sm:mt-24 lg:mt-32">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 sm:w-10 h-px bg-gold/40" />
              <span className="font-body text-[10px] sm:text-[11px] font-semibold text-gold/80 uppercase tracking-[0.25em]">Our Core Values</span>
              <div className="w-8 sm:w-10 h-px bg-gold/40" />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-primary px-4 sm:px-0">What Drives Us Forward</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 max-w-lg sm:max-w-none mx-auto sm:mx-0">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`group card-premium p-6 text-center transition-all duration-700 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-primary group-hover:bg-gold flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:shadow-gold">
                  <value.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="font-body text-[13px] font-medium text-foreground/65 group-hover:text-primary transition-colors duration-300">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
