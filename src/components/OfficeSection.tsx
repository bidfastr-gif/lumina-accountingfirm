import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Phone, Smartphone, Mail } from 'lucide-react';

const offices = [
  {
    type: 'HEAD OFFICE',
    city: 'Chennai',
    address: 'New No.81, Old no.47, #139, Dr. Radhakrishnan Salai, Mylapore, chennai - 600 004',
    tel: 'Tel: 044-35943060/47996581',
    mob: 'Mob: +91 98400 67587',
    email: 'sabapathyca@hotmail.com'
  },
  {
    type: 'BRANCH OFFICE',
    city: 'Chennai (Branch)',
    address: 'Flat No.A-2, 2nd Floor, Nalanda Apartments, Door No. 2, 5th Street, Dr. Radhakrishnan Salai, Mylapore, chennai - 600 004.',
    tel: 'Tel: 044-35943060/47996581',
    mob: 'Mob: +91 98400 67587',
    email: 'sabapathyca@hotmail.com'
  }
];

const OfficeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="offices" className="py-16 sm:py-20 lg:py-36 overflow-hidden relative">
      {/* Subtle ambient */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.02] blur-[120px] pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-px bg-gold/40" />
            <span className="font-body text-[11px] font-semibold text-gold/80 uppercase tracking-[0.25em]">Our Presence</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            Visit Our Offices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {offices.map((office, i) => (
            <div
              key={office.type}
              className={`group card-premium p-7 sm:p-10 lg:p-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="mb-8">
                <span className="inline-block font-body text-[9px] font-bold text-gold/70 uppercase tracking-[0.2em] px-3 py-1.5 rounded-md bg-gold/[0.05] border border-gold/[0.08] mb-6">
                  {office.type}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-primary group-hover:text-gold transition-colors duration-500">
                  {office.city}
                </h3>
              </div>

              <div className="space-y-5">
                {[
                  { Icon: MapPin, content: office.address },
                  { Icon: Phone, content: office.tel },
                  { Icon: Smartphone, content: office.mob },
                ].map(({ Icon, content }) => (
                  <div key={content} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-gold/[0.05] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-gold/60" />
                    </div>
                    <p className="font-body text-[13px] text-foreground/55 leading-relaxed font-medium">
                      {content}
                    </p>
                  </div>
                ))}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gold/[0.05] flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-gold/60" />
                  </div>
                  <a
                    href={`mailto:${office.email}`}
                    className="font-body text-[13px] text-foreground/55 hover:text-gold transition-colors duration-300 font-medium"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
