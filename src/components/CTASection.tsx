import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-36 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-light" />

      {/* Sophisticated ambient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-primary-foreground/[0.04] animate-[rotateGlow_20s_linear_infinite]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full border border-primary-foreground/[0.03] animate-[rotateGlow_30s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/[0.04] blur-[200px]" />
        {/* Premium noise texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-px bg-gold/30" />
            <span className="font-body text-[11px] font-semibold text-gold/80 uppercase tracking-[0.25em]">Get Started</span>
            <div className="w-10 h-px bg-gold/30" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 sm:mb-5 leading-[1.15]">
            Start Improving Your <br className="hidden md:block" /><span className="text-gold">Business Today</span>
          </h2>
          <p className="font-body text-primary-foreground/45 max-w-lg mx-auto text-base leading-relaxed">
            Contact our team for expert financial guidance. We are here to help you achieve your goals.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: Mail, title: 'Email Us', detail: 'sabapathyca@hotmail.com', href: 'mailto:sabapathyca@hotmail.com' },
            { icon: Phone, title: 'Call Us', detail: '+91 98400 67587', href: 'tel:+91 98400 67587' },
            { icon: MapPin, title: 'Head Office', detail: 'New No.81, Old no.47, #139, Dr. Radhakrishnan Salai, Mylapore, chennai - 600 004', href: '#' },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group bg-primary-foreground/[0.04] backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-primary-foreground/[0.06] hover:bg-primary-foreground/[0.08] hover:border-gold/20 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/[0.08] flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/[0.15] transition-all duration-500">
                <item.icon className="w-5 h-5 text-gold/80" />
              </div>
              <h4 className="font-heading text-base font-semibold text-primary-foreground mb-2">{item.title}</h4>
              <p className="font-body text-[13px] text-primary-foreground/40 leading-relaxed">{item.detail}</p>
            </a>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-primary px-10 py-5 text-[13px] font-body font-semibold tracking-wider uppercase hover:shadow-gold transition-all duration-500 rounded-lg group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
