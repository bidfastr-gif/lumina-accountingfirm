import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Scene3D from './Scene3D';
import { ArrowDown, Shield, TrendingUp, Scale } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import Counter from './Counter';
import { useModal } from '@/context/ModalContext';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { openConsultation } = useModal();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <Scene3D />

      {/* Premium ambient lighting */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gold/[0.04] blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-navy/[0.03] blur-[100px]" />
      </div>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 z-[2] opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      <div ref={ref} className="relative z-10 container pt-32 sm:pt-40 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Subtle pre-heading line */}
            <div className={`flex items-center justify-center lg:justify-start gap-3 mb-6 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div className="w-10 sm:w-12 h-px bg-gold/40" />
              <p className="font-body text-[10px] sm:text-[11px] font-semibold text-gold/80 uppercase tracking-[0.25em]">
                Est. 1976 · Chennai
              </p>
            </div>
 
            {/* Title */}
            <h1 className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-3 sm:mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Sabapathy
              <span className="text-gradient-gold"> &</span> Co
            </h1>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="font-heading text-sm sm:text-base md:text-xl tracking-[0.1em] sm:tracking-[0.15em] text-muted-foreground/60 uppercase mb-5 sm:mb-8">
                Chartered Accountants
              </p>
            </div>

            <p className={`font-body text-sm sm:text-base md:text-lg text-foreground/55 mb-8 sm:mb-12 leading-[1.6] sm:leading-[1.8] max-w-xl mx-auto lg:mx-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Expert analysis, risk assessment, and comprehensive compliance support to optimize your financial position and achieve your business goals.
            </p>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-12 sm:mb-14 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link to="/services" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-5 text-sm font-body font-semibold tracking-wider uppercase hover:shadow-elevated transition-all duration-500 rounded-lg w-full"
                >
                  Explore Services
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={openConsultation}
                className="border-primary/15 text-primary px-8 py-5 text-sm font-body font-semibold tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-500 rounded-lg backdrop-blur-sm bg-white/40 w-full sm:w-auto"
              >
                Get Consultation
              </Button>
            </div>

            {/* Trust badges */}
            <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8 md:gap-12 transition-all duration-1000 delay-[900ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { icon: Shield, label: 'ICAI Certified' },
                { icon: TrendingUp, label: '49+ Years' },
                { icon: Scale, label: 'Peer Reviewed' },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-foreground/35">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gold/[0.06] flex items-center justify-center shrink-0">
                    <badge.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold/70" />
                  </div>
                  <span className="font-body text-[10px] sm:text-[11px] uppercase tracking-[0.12em] font-medium whitespace-nowrap">
                    {badge.label.includes('Years') ? (
                      <>
                        <Counter end={49} trigger={isVisible} duration={2500} />
                        {badge.label.replace('49', '')}
                      </>
                    ) : (
                      badge.label
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Scene3D occupies full background */}
          <div className="hidden lg:block h-full min-h-[400px]" />
        </div>
      </div>

      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground/20 hover:text-gold transition-colors duration-500"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-body text-[9px] uppercase tracking-[0.25em] font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
