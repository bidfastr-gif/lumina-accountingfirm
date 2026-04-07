import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Scene3D from './Scene3D';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <Scene3D />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-gold/10 animate-pulse-slow" />
      <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full border border-gold/5 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div ref={ref} className="relative z-10 text-center container max-w-4xl px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-body text-sm text-muted-foreground">Established 1976 · Celebrating 50 Years</span>
          </div>
        </div>

        <h1 className={`font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          R Bupathy <span className="text-gradient-gold">&</span> Co
        </h1>

        <p className={`font-heading text-xl md:text-2xl tracking-[0.2em] text-muted-foreground uppercase mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Chartered Accountants
        </p>

        <p className={`font-body text-lg text-foreground/70 max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Expert analysis, risk assessment, and compliance support to optimize your financial position and achieve your business goals.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            size="lg"
            className="bg-gradient-gold text-primary-foreground px-10 py-6 text-lg font-body hover:shadow-gold transition-all duration-500"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Services
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/20 text-primary px-10 py-6 text-lg font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>
      </div>

      <button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-gold"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
