import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-navy relative overflow-hidden">
      {/* Animated bg elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-gold/10 animate-[rotateGlow_20s_linear_infinite]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full border border-gold/5 animate-[rotateGlow_30s_linear_infinite_reverse]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/3 blur-[150px]" />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-6">Get Started</span>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Start Improving Your <br className="hidden md:block" /><span className="text-gold">Business Today</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-gold mx-auto mb-6" />
          <p className="font-body text-primary-foreground/60 max-w-xl mx-auto text-lg">
            Contact our team for expert financial guidance. We are here to help you achieve your goals.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: Mail, title: 'Email Us', detail: 'partners@rbco1976.com', href: 'mailto:partners@rbco1976.com' },
            { icon: Phone, title: 'Call Us', detail: '+91 44 2827 8300 / 7590', href: 'tel:+914428278300' },
            { icon: MapPin, title: 'Head Office', detail: 'Vibgyor, #139, Dr.MGR Salai, Chennai 600034', href: '#' },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/20 group-hover:shadow-gold transition-all duration-500">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-2">{item.title}</h4>
              <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">{item.detail}</p>
            </a>
          ))}
        </div>

        <div className={`text-center mt-14 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            size="lg"
            className="bg-gradient-gold text-primary-foreground px-12 py-6 text-lg font-body hover:shadow-gold transition-all duration-500 rounded-full group"
            onClick={() => window.location.href = 'mailto:partners@rbco1976.com'}
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
