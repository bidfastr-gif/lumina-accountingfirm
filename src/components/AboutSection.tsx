import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, Users, Building2, Calendar } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '49+', label: 'Years of Excellence' },
  { icon: Users, value: '9', label: 'Expert Partners' },
  { icon: Building2, value: '3', label: 'Office Locations' },
  { icon: Award, value: '4th', label: 'Peer Review Certificate' },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();

  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-section overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <span className="font-body text-sm font-semibold text-gold uppercase tracking-[0.2em]">About Us</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-3 mb-6">
              A Legacy of Trust <br /><span className="text-gradient-gold">Since 1976</span>
            </h2>
            <div className="space-y-4 font-body text-foreground/70 leading-relaxed">
              <p>
                R.Bupathy & Co, a firm of Chartered Accountants established in 1976 in India, has been carrying on the profession of Audit, Assurance, Management Consultancy and related services for more than 49 years and is marching towards the Golden Jubilee Celebrations in 2026.
              </p>
              <p>
                The firm has developed expertise in Audit, Taxation, Financial Compliance including Foreign Direct Investment, Forensic Services, IT Audits, Due Diligence Reviews and Business Valuation apart from specialised services in Ind AS Transition, Internal Control Framework, Cost Reduction Strategies, and Mergers & Acquisitions.
              </p>
              <p>
                Headquartered in Chennai with branch offices in Bengaluru and Coimbatore, the firm has Eight Partners supported by Chartered Accountants, Paid Staff & Article Assistants. The offices are centrally located and fully equipped to extend timely quality service to clients.
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover-lift text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="font-heading text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div ref={ref2} className="mt-24">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="font-body text-sm font-semibold text-gold uppercase tracking-[0.2em]">Our Core Values</span>
            <h3 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-3">What Drives Us Forward</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Excellence in Standards',
              'Seamless Functions',
              'Accessibility',
              'Independence & Integrity',
              'Training & Commitment',
              'Cultural Diversity',
            ].map((value, i) => (
              <div
                key={value}
                className={`bg-background/80 backdrop-blur-sm rounded-xl p-5 text-center shadow-soft hover-lift transition-all duration-700 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center mx-auto mb-3">
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <p className="font-body text-sm font-medium text-foreground/80">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
