import React from 'react';
import { useModal } from '@/context/ModalContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Send, ChevronDown, Quote } from 'lucide-react';
import { servicesData } from '@/data/servicesData';

const ConsultationModal = () => {
  const { isConsultationOpen, closeConsultation } = useModal();

  return (
    <Dialog open={isConsultationOpen} onOpenChange={(open) => !open && closeConsultation()}>
      <DialogContent className="w-[95%] sm:max-w-[540px] p-0 overflow-hidden bg-background border-gold/30 shadow-2xl">
        <div className="relative">
          {/* Header Decorative Area - More Compact */}
          <div className="h-24 bg-gradient-to-br from-primary via-primary to-navy-light flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold/10 rounded-full blur-[40px]" />
            <Quote className="absolute right-6 top-6 w-12 h-12 text-white/5 -rotate-12" />
            <div className="relative z-10 text-center">
              <h2 className="font-heading text-xl font-bold text-white tracking-tight">Free Consultation</h2>
              <p className="font-body text-[9px] text-gold uppercase tracking-[0.3em] mt-0.5 font-bold">Expert Financial Advisory</p>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="font-heading text-xl sm:text-2xl font-bold text-primary mb-1">
                Let's Start a <span className="text-gold">Conversation</span>
              </DialogTitle>
              <DialogDescription className="font-body text-[13px] text-foreground/60 leading-relaxed italic">
                Get a senior partner response within 24 hours.
              </DialogDescription>
            </DialogHeader>

            <form className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-body text-[10px] font-bold text-primary uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm placeholder:text-foreground/30 shadow-sm" 
                    placeholder="Full Name" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-body text-[10px] font-bold text-primary uppercase tracking-widest ml-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm placeholder:text-foreground/30 shadow-sm" 
                    placeholder="name@example.com" 
                  />
                </div>
              </div>

              {/* Phone & Service Selection Row */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-body text-[10px] font-bold text-primary uppercase tracking-widest ml-1">Phone Number</label>
                  <div className="flex gap-2.5">
                    <select className="w-24 px-2 py-3 rounded-lg bg-background border border-border focus:border-gold outline-none transition-all font-body text-xs text-foreground/80 cursor-pointer appearance-none shadow-sm">
                      <option>+91 (IN)</option>
                      <option>+1 (US)</option>
                      <option>+44 (UK)</option>
                    </select>
                    <input 
                      type="tel" 
                      className="flex-1 min-w-0 px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm placeholder:text-foreground/30 shadow-sm" 
                      placeholder="Phone Num" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-body text-[10px] font-bold text-primary uppercase tracking-widest ml-1">Select Service</label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold outline-none transition-all font-body text-sm text-foreground/80 cursor-pointer appearance-none shadow-sm capitalize">
                      <option value="">Choose a Service</option>
                      {servicesData.map(service => (
                        <option key={service.slug} value={service.slug}>{service.name.toLowerCase()}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gold pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-body text-[10px] font-bold text-primary uppercase tracking-widest ml-1">Your Requirements</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-sm placeholder:text-foreground/30 min-h-[100px] resize-none shadow-sm" 
                  placeholder="How can we help you?"
                />
              </div>

              <button 
                type="button"
                onClick={(e) => { e.preventDefault(); closeConsultation(); }}
                className="w-full group relative py-4 bg-primary overflow-hidden rounded-lg shadow-elevated transition-all duration-500 hover:shadow-gold/20 mt-2"
              >
                <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-2.5 font-body font-bold text-sm uppercase tracking-[0.15em] text-white group-hover:text-primary transition-colors duration-500">
                  Submit Inquiry
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
