import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Scene3D from './Scene3D';
import { ArrowDown, Shield, TrendingUp, Scale } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <Scene3D />

      {/* Animated radial glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-navy/5 blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Decorative rotating rings */}
      <div className="absolute top-20 right-20 w-48 h-48 border border-gold/10 rounded-full animate-[rotateGlow_20s_linear_infinite] z-[1]" />
      <div className="absolute bottom-32 left-16 w-64 h-64 border border-gold/5 rounded-full animate-[rotateGlow_30s_linear_infinite_reverse] z-[1]" />
      <div className="absolute top-1/2 right-10 w-32 h-32 border border-navy/5 rounded-full animate-[rotateGlow_15s_linear_infinite] z-[1]" />

      <div ref={ref} className="relative z-10 text-center container max-w-5xl px-6">
        {/* Badge */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background/60 backdrop-blur-md border border-gold/20 mb-10 shadow-soft">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="font-body text-sm font-medium text-foreground/70">Established 1976 · Celebrating 50 Years of Excellence</span>
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Title */}
        <h1 className={`font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-primary leading-[1.1] mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          R Bupathy <span className="text-gradient-gold">&</span> Co
        </h1>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-heading text-xl md:text-2xl tracking-[0.25em] text-muted-foreground uppercase mb-2">
            Chartered Accountants
          </p>
          <div className="w-24 h-[2px] bg-gradient-gold mx-auto mb-8" />
        </div>

        <p className={`font-body text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Expert analysis, risk assessment, and comprehensive compliance support to optimize your financial position and achieve your business goals.
        </p>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            size="lg"
            className="bg-gradient-gold text-primary-foreground px-10 py-6 text-lg font-body hover:shadow-gold transition-all duration-500 rounded-full"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Services
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/20 text-primary px-10 py-6 text-lg font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-full backdrop-blur-sm bg-background/40"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Trust badges */}
        <div className={`flex flex-wrap justify-center gap-6 md:gap-10 transition-all duration-1000 delay-[900ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: Shield, label: 'ICAI Certified' },
            { icon: TrendingUp, label: '49+ Years' },
            { icon: Scale, label: 'Peer Reviewed' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-foreground/40">
              <badge.icon className="w-4 h-4 text-gold/60" />
              <span className="font-body text-xs uppercase tracking-wider">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold/60 hover:text-gold transition-colors"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
