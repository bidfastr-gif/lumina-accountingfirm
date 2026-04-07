import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Users, Building2, Calendar, Star, CheckCircle } from 'lucide-react';

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
    <section id="about" className="py-24 lg:py-32 bg-gradient-section overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy/3 blur-[100px] pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-[0.2em] mb-3 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20">About Us</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6">
              A Legacy of Trust <br /><span className="text-gradient-gold">Since 1976</span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-gold mb-6" />
            <div className="space-y-4 font-body text-foreground/65 leading-relaxed text-[15px]">
              <p>
                R.Bupathy & Co, a firm of Chartered Accountants established in 1976 in India, has been carrying on the profession of Audit, Assurance, Management Consultancy and related services for more than 49 years.
              </p>
              <p>
                The firm has developed expertise in Audit, Taxation, Financial Compliance including Foreign Direct Investment, Forensic Services, IT Audits, Due Diligence Reviews and Business Valuation apart from specialised services in Ind AS Transition, Internal Control Framework, and Mergers & Acquisitions.
              </p>
              <p>
                Headquartered in Chennai with branch offices in Bengaluru and Coimbatore, supported by 9 Partners, Chartered Accountants, and dedicated staff.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover-lift text-center border border-border/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                    <stat.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="font-body text-xs text-muted-foreground mt-1.5 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div ref={ref2} className="mt-28">
          <div className={`text-center mb-14 transition-all duration-1000 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20">Our Core Values</span>
            <h3 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-4">What Drives Us Forward</h3>
            <div className="w-16 h-[2px] bg-gradient-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`group bg-background/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-soft border border-border/50 hover-lift transition-all duration-700 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto mb-3 group-hover:shadow-gold transition-shadow duration-500">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="font-body text-sm font-medium text-foreground/75">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
