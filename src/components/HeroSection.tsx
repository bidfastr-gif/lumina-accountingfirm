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
      </div>

      <div ref={ref} className="relative z-10 container px-6 pt-32 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-left max-w-2xl">
            {/* Title */}
            <h1 className={`font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-[1.2] mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Sabapathy <br />
              <span className="text-gradient-gold">&</span> Co
            </h1>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-[1px] bg-gold/50" />
                <p className="font-body text-xs md:text-sm font-semibold text-gold uppercase tracking-[0.2em]">
                  Excellence in Standards Since 1976
                </p>
              </div>
              <p className="font-heading text-lg md:text-xl tracking-[0.2em] text-muted-foreground uppercase mb-6">
                Chartered Accountants
              </p>
            </div>

            <p className={`font-body text-base md:text-lg text-foreground/70 mb-10 leading-relaxed max-w-xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Expert analysis, risk assessment, and comprehensive compliance support to optimize your financial position and achieve your business goals.
            </p>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button
                size="lg"
                className="bg-gradient-gold text-primary-foreground px-8 py-5 text-base font-body hover:shadow-gold transition-all duration-500 rounded-full"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 text-primary px-8 py-5 text-base font-body hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-full backdrop-blur-sm bg-background/40"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>

            {/* Trust badges */}
            <div className={`flex flex-wrap gap-6 md:gap-10 transition-all duration-1000 delay-[900ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
          
          {/* Right column placeholder - Scene3D occupies full background but content will align here */}
          <div className="hidden lg:block h-full min-h-[400px]" />
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
