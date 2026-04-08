import Navbar from "@/components/Navbar";
import OfficeSection from "@/components/OfficeSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <div className="bg-background pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-32">
        <div className="container" ref={ref}>
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-4">
              Get In Touch
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
              Connect With <span className="text-gradient-gold">Our Experts</span>
            </h1>
            <p className="font-body text-foreground/60 max-w-2xl mx-auto leading-relaxed text-lg">
              Have questions about our services or need professional consultation? Our team is ready to assist you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-16 sm:mb-24 lg:mb-32">
            <div className={`p-8 rounded-2xl bg-card border border-border/40 shadow-card hover:border-gold/30 transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-left-4`}>
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Speak to Us</h3>
              <p className="text-sm text-foreground/60 mb-4 font-body">Call our direct lines for quick assistance.</p>
              <a href="tel:+919840067587" className="text-gold font-bold hover:underline font-body">+91 98400 67587</a>
            </div>

            <div className={`p-8 rounded-2xl bg-card border border-border/40 shadow-card hover:border-gold/30 transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-4`}>
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Email Inquiries</h3>
              <p className="text-sm text-foreground/60 mb-4 font-body">Send us an email for detailed queries.</p>
              <a href="mailto:sabapathyca@hotmail.com" className="text-gold font-bold hover:underline font-body">sabapathyca@hotmail.com</a>
            </div>

            <div className={`p-8 rounded-2xl bg-card border border-border/40 shadow-card hover:border-gold/30 transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-right-4`}>
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">Working Hours</h3>
              <p className="text-sm text-foreground/60 mb-2 font-body font-medium">Mon - Fri: 10:00 AM - 6:00 PM</p>
              <p className="text-sm text-foreground/50 font-body">Closed on Saturday and Sunday</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-16 border border-border/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 text-center underline-gold underline-offset-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/60 font-body">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/60 font-body">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm" placeholder="johndoe@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/60 font-body">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm" placeholder="Inquiry about Statutory Audit" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/60 font-body">Your Message</label>
                  <textarea className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm min-h-[150px]" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button className="w-full py-4 bg-primary text-primary-foreground font-body font-bold text-sm rounded-xl hover:bg-gold transition-all duration-500 shadow-lg group">
                  <span className="flex items-center justify-center gap-2">
                    Submit Inquiry
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <OfficeSection />
      
      <Footer />
    </div>
  );
};

export default ContactPage;
