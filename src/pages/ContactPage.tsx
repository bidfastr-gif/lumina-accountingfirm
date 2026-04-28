import OfficeSection from "@/components/OfficeSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Send,
  Phone,
  Mail,
  Clock,
  MapPin,
  Smartphone,
  ChevronDown,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

const ContactPage = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <div className="min-h-screen pt-12 sm:pt-16 lg:pt-20">
      <div
        className="bg-background pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 overflow-hidden relative"
        ref={ref}
      >
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] blur-[100px] rounded-full pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Column: Contact Information */}
            <div
              className={`transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-gold/40" />
                <span className="font-body text-[11px] font-bold text-gold uppercase tracking-[0.3em]">
                  Contact Information
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-12 sm:mb-16 tracking-tight">
                Get in <span className="text-gradient-gold">Touch</span>
              </h1>

              <div className="space-y-6 sm:space-y-8">
                {/* Visit Us */}
                <div className="group relative p-8 rounded-2xl bg-card border border-border/40 shadow-card hover:border-gold/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                      <MapPin className="w-6 h-6 text-gold group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-primary mb-3">
                        Visit Us
                      </h3>
                      <p className="font-body text-sm sm:text-base text-foreground/55 leading-relaxed">
                        FLAT NO.2A, 2ND FLOOR, NALANDA APARTMENTS,<br />(NEXT TO HOTEL SARAVANA BHAVAN)   <br />
                        Dr. Radhakrishnan Salai, Mylapore,
                        <br />
                        Chennai - 600 004
                      </p>
                      <p className="font-body text-[11px] text-gold/60 mt-4 uppercase tracking-widest font-bold">
                        Open Monday - Saturday
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call Us */}
                <div className="group relative p-8 rounded-2xl bg-card border border-border/40 shadow-card hover:border-gold/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                      <Phone className="w-6 h-6 text-gold group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-primary mb-3">
                        Call Us
                      </h3>
                      <div className="space-y-2">
                        <a
                          href="tel:04435943060"
                          className="block font-body text-lg font-bold text-foreground/75 hover:text-gold transition-colors underline-offset-4 hover:underline"
                        >
                          044-35943060/47996581
                        </a>
                        <a
                          href="tel:+919840067587"
                          className="block font-body text-lg font-bold text-foreground/75 hover:text-gold transition-colors underline-offset-4 hover:underline"
                        >
                          +91 98400 67587
                        </a>
                      </div>
                      <p className="font-body text-[11px] text-gold/60 mt-4 uppercase tracking-widest font-bold">
                        Available during office hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email Us */}
                <div className="group relative p-8 rounded-2xl bg-card border border-border/40 shadow-card hover:border-gold/30 transition-all duration-500 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                      <Mail className="w-6 h-6 text-gold group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-primary mb-3">
                        Email Us
                      </h3>
                      <a
                        href="mailto:sabapathyca@hotmail.com"
                        className="block font-body text-lg font-bold text-foreground/75 hover:text-gold transition-colors underline-offset-4 hover:underline break-all"
                      >
                        sabapathyca@hotmail.com
                      </a>
                      <p className="font-body text-[11px] text-gold/60 mt-4 uppercase tracking-widest font-bold">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div
              className={`lg:pt-40 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="bg-card rounded-3xl p-8 sm:p-12 lg:p-14 border border-border/40 shadow-2xl relative overflow-hidden backdrop-blur-sm bg-card/80">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full" />

                <div className="relative z-10">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-10 tracking-tight">
                    Submit Your <span className="text-gold">Query</span>
                  </h2>

                  <form className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-body text-[11px] font-bold text-primary/60 uppercase tracking-widest ml-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-6 py-4 rounded-xl bg-background/50 border border-border/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm placeholder:text-foreground/20"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-body text-[11px] font-bold text-primary/60 uppercase tracking-widest ml-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="w-full px-6 py-4 rounded-xl bg-background/50 border border-border/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm placeholder:text-foreground/20"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone & Query Type Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                      <div className="space-y-2">
                        <label className="font-body text-[11px] font-bold text-primary/60 uppercase tracking-widest ml-1">
                          Phone Number
                        </label>
                        <div className="flex gap-3">
                          <select className="w-20 sm:w-24 px-2 sm:px-3 py-4 rounded-xl bg-background/50 border border-border/50 focus:border-gold outline-none transition-all font-body text-[12px] sm:text-sm text-foreground/75 cursor-pointer appearance-none">
                            <option>+91</option>
                            <option>+1</option>
                            <option>+44</option>
                          </select>
                          <input
                            type="tel"
                            className="flex-1 min-w-0 px-5 sm:px-6 py-4 rounded-xl bg-background/50 border border-border/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm placeholder:text-foreground/20"
                            placeholder="Phone Num"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="font-body text-[11px] font-bold text-primary/60 uppercase tracking-widest ml-1">
                          Query Category
                        </label>
                        <div className="relative">
                          <select className="w-full px-5 sm:px-6 py-4 rounded-xl bg-background/50 border border-border/50 focus:border-gold outline-none transition-all font-body text-sm text-foreground/75 cursor-pointer appearance-none">
                            <option value="">Choose Category</option>
                            {servicesData.map((service) => (
                              <option key={service.slug} value={service.slug}>
                                {service.name}
                              </option>
                            ))}
                            <option value="other">General Inquiry</option>
                          </select>
                          <ChevronDown className="absolute right-5 sm:right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gold pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-body text-[11px] font-bold text-primary/60 uppercase tracking-widest ml-1">
                        Your Query
                      </label>
                      <textarea
                        className="w-full px-6 py-5 rounded-xl bg-background/50 border border-border/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm placeholder:text-foreground/20 min-h-[160px] resize-none"
                        placeholder="Write your query here..."
                      />
                    </div>

                    <button className="w-full group relative py-5 bg-primary overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:shadow-gold/30 mt-4">
                      <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                      <span className="relative z-10 flex items-center justify-center gap-3 font-body font-bold text-sm uppercase tracking-[0.2em] text-white group-hover:text-primary transition-colors duration-500">
                        Submit Query
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OfficeSection />
    </div>
  );
};

export default ContactPage;
