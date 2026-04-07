import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from './ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full border border-gold animate-pulse-slow" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full border border-gold/50 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Start Improving Your <span className="text-gold">Business Today</span>
          </h2>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto text-lg">
            Contact our team if you have any questions. We are here to help you achieve your financial goals.
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: Mail, title: 'Email Us', detail: 'partners@rbco1976.com', href: 'mailto:partners@rbco1976.com' },
            { icon: Phone, title: 'Call Us', detail: '+91 44 2827 8300 / 7590', href: 'tel:+914428278300' },
            { icon: MapPin, title: 'Head Office', detail: 'Vibgyor, First Floor, #139, Dr.MGR Salai, Chennai 600034', href: '#' },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/10 hover:bg-primary-foreground/10 hover:border-gold/30 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/30 transition-colors">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-2">{item.title}</h4>
              <p className="font-body text-sm text-primary-foreground/60">{item.detail}</p>
            </a>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            size="lg"
            className="bg-gradient-gold text-primary-foreground px-12 py-6 text-lg font-body hover:shadow-gold transition-all duration-500"
            onClick={() => window.location.href = 'mailto:partners@rbco1976.com'}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
