import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Counter from "@/components/Counter";
import { servicesData } from "@/data/servicesData";

const allServices = servicesData;

const ServicesPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-background pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 min-h-screen">
        <div className="container" ref={ref}>
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-4">
              Our Expertise
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
              Full Spectrum of <span className="text-gradient-gold">Professional</span> Services
            </h1>
            <p className="font-body text-foreground/60 max-w-2xl mx-auto leading-relaxed text-lg">
              Comprehensive financial, tax, and advisory solutions tailored to your business needs and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {allServices.map((service, i) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.name}
                  className="group relative bg-card rounded-2xl sm:rounded-3xl p-7 sm:p-10 shadow-card border border-border/40 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-4 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {/* Hover Background & Gradient */}
                  <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-navy/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full items-start">
                    <div className="mb-8 p-3 rounded-xl bg-secondary group-hover:bg-gold transition-all duration-500 shadow-sm">
                      <ServiceIcon className="w-6 h-6 text-gold group-hover:text-navy transition-all duration-500" />
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold text-primary mb-4 group-hover:text-white transition-colors duration-500">
                      {service.name}
                    </h3>
                    
                    <p className="font-body text-sm text-foreground/60 group-hover:text-white/80 leading-relaxed mb-10 transition-colors duration-500">
                      {service.desc}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-secondary text-primary font-body font-bold text-[11px] uppercase tracking-widest rounded-xl hover:bg-gold group-hover:bg-gold group-hover:text-navy transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Band */}
          <div className="mt-16 sm:mt-24 lg:mt-32 pt-12 sm:pt-20 border-t border-border/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
              {[
                { label: 'Specialized Services', value: 16, suffix: '' },
                { label: 'Success Rate', value: 98, suffix: '%' },
                { label: 'Client Advisory', value: 500, suffix: '+' },
                { label: 'Expert Support', value: 24, suffix: '/7' },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center group">
                  <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2 flex items-center justify-center gap-1">
                    <Counter end={stat.value} trigger={isVisible} duration={3000} />
                    <span className="text-gold">{stat.suffix}</span>
                  </div>
                  <div className="font-body text-xs lg:text-sm text-muted-foreground uppercase tracking-widest font-semibold group-hover:text-gold transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

