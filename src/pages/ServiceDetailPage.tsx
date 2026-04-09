import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowLeft, CheckCircle2, ArrowRight, Sparkles, Phone } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { useEffect } from "react";
import { useModal } from "@/context/ModalContext";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { ref, isVisible } = useScrollAnimation(0.02);
  const { openConsultation } = useModal();

  const service = servicesData.find((s) => s.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4 text-center">
            Service Not Found
          </h2>
          <p className="font-body text-foreground/60 mb-8 text-center">
            The service you are looking for does not exist.
          </p>
          <Link to="/services">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-body font-bold text-sm uppercase tracking-widest hover:bg-gold transition-all duration-300">
              Return to Services
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen pt-20">
      <Navbar />

      <div className="bg-background">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-navy-light">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-72 h-72 bg-gold rounded-full blur-[120px]" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/50 rounded-full blur-[150px]" />
          </div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

          <div className="container max-w-6xl relative z-10 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-28">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-gold/80 hover:text-gold transition-colors mb-8 group font-body"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to All Services
            </Link>

            <div className="flex items-start gap-6 sm:gap-8">
              <div className="hidden sm:flex p-4 sm:p-5 rounded-2xl bg-gold/15 border border-gold/20 shrink-0">
                <ServiceIcon className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />
              </div>
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  {service.name}
                </h1>
                <p className="font-body text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
                  {service.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container max-w-6xl py-16 sm:py-20 lg:py-28" ref={ref}>
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Overview Section */}
            <section className="mb-16 sm:mb-24">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-[2px] bg-gradient-to-r from-gold to-gold/0" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                  Overview
                </h2>
              </div>
              <div className="space-y-5 max-w-4xl">
                {service.overview.map((para, idx) => (
                  <p key={idx} className="font-body text-foreground/65 leading-relaxed text-base sm:text-lg">
                    {para}
                  </p>
                ))}
              </div>
            </section>

            {/* Advantages Section */}
            <section className="mb-16 sm:mb-24">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-10 h-[2px] bg-gradient-to-r from-gold to-gold/0" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                  Key Advantages
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {service.advantages.map((adv, idx) => (
                  <div
                    key={idx}
                    className="group relative p-6 sm:p-8 rounded-2xl bg-card border border-border/40 hover:border-gold/30 transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-1.5 rounded-lg bg-gold/10">
                          <Sparkles className="w-4 h-4 text-gold" />
                        </div>
                        <h3 className="font-heading text-lg font-bold text-primary">
                          {adv.title}
                        </h3>
                      </div>
                      <p className="font-body text-sm text-foreground/55 leading-relaxed">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How We Work Section */}
            <section className="mb-16 sm:mb-24">
              <div className="flex items-center gap-3 mb-10">
                <span className="w-10 h-[2px] bg-gradient-to-r from-gold to-gold/0" />
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary">
                  How We Work
                </h2>
              </div>
              <div className="relative">
                {/* Vertical Line - Desktop */}
                <div className="hidden lg:block absolute left-[27px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

                <div className="space-y-6 sm:space-y-8">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex gap-5 sm:gap-8 group">
                      <div className="shrink-0 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-primary group-hover:bg-gold flex items-center justify-center transition-all duration-500 shadow-lg group-hover:shadow-gold/30">
                          <span className="font-heading text-lg font-bold text-white group-hover:text-navy transition-colors duration-500">
                            {String(step.step).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 pb-6 sm:pb-8 border-b border-border/20 last:border-0">
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-gold transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="font-body text-sm sm:text-base text-foreground/55 leading-relaxed max-w-3xl">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="mb-16 sm:mb-24">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary to-navy-light p-8 sm:p-12 lg:p-16">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-[80px]" />

                <div className="relative z-10">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-8">
                    Why Choose <span className="text-gold">Sabapathy & Co</span>
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    {service.whyChooseUs.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-300">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-white/80 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-12 sm:mb-16" />
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-4">
                Ready to Get Started?
              </h2>
              <p className="font-body text-foreground/55 mb-8 max-w-lg mx-auto">
                Let our experts help you with {service.name.toLowerCase()}. Schedule a consultation today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={openConsultation}
                  className="inline-flex items-center gap-2 px-10 py-4 bg-primary hover:bg-gold text-white hover:text-navy font-body font-bold text-sm uppercase tracking-[0.15em] rounded-xl shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-gold"
                >
                  <Phone className="w-4 h-4" />
                  Get Consultation
                </button>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border-2 border-primary/20 hover:border-gold text-primary font-body font-bold text-sm uppercase tracking-[0.15em] rounded-xl transition-all duration-500"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
