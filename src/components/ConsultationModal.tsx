import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Send, ChevronDown, Quote, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { toast } from "sonner";

const ConsultationModal = () => {
  const { isConsultationOpen, closeConsultation } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xbdqvwpl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast.success("Inquiry sent successfully!");
        
        // Reset and close after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          closeConsultation();
        }, 3000);
      } else {
        console.error("Formspree Error:", result);
        toast.error(result.error || "Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog
      open={isConsultationOpen}
      onOpenChange={(open) => !open && closeConsultation()}
    >
      <DialogContent className="w-[95%] sm:max-w-[480px] p-0 overflow-hidden bg-background border-gold/30 shadow-22xl">
        <div className="relative">
          {/* Header Decorative Area - Even More Compact */}
          <div className="h-20 bg-gradient-to-br from-primary via-primary to-navy-light flex items-center justify-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold/10 rounded-full blur-[40px]" />
            <Quote className="absolute right-6 top-6 w-12 h-12 text-white/5 -rotate-12" />
            <div className="relative z-10 text-center">
              <h2 className="font-heading text-lg font-bold text-white tracking-tight">
                Free Consultation
              </h2>
              <p className="font-body text-[8px] text-gold uppercase tracking-[0.3em] mt-0.5 font-bold">
                Expert Financial Advisory
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-7">
            <DialogHeader className="mb-5">
              <DialogTitle className="font-heading text-lg sm:text-xl font-bold text-primary mb-0.5">
                Let's Start a <span className="text-gold">Conversation</span>
              </DialogTitle>
              <DialogDescription className="font-body text-[12px] text-foreground/60 leading-relaxed italic">
                Get a senior partner response within 24 hours.
              </DialogDescription>
            </DialogHeader>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                  Thank You!
                </h3>
                <p className="font-body text-sm text-foreground/60 leading-relaxed max-w-[280px] mx-auto italic">
                  Your request for consultation has been received. We'll be in touch very soon.
                </p>
                <div className="mt-8 pt-6 border-t border-border/30 w-full">
                   <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      closeConsultation();
                    }}
                    className="font-body text-[10px] font-bold text-gold uppercase tracking-widest hover:text-primary transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="space-y-3.5"
              >
                {/* Name & Email Row */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="font-body text-[9px] font-bold text-primary uppercase tracking-widest ml-1">
                      Your Name
                    </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-[13px] placeholder:text-foreground/30 shadow-sm"
                        placeholder="Full Name"
                      />
                  </div>
                  <div className="space-y-1">
                    <label className="font-body text-[9px] font-bold text-primary uppercase tracking-widest ml-1">
                      Email Address
                    </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-[13px] placeholder:text-foreground/30 shadow-sm"
                        placeholder="name@example.com"
                      />
                  </div>
                </div>

                {/* Phone & Service Selection Row */}
                <div className="grid sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="font-body text-[9px] font-bold text-primary uppercase tracking-widest ml-1">
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <select 
                        name="countryCode"
                        className="w-20 px-1 py-2.5 rounded-lg bg-background border border-border focus:border-gold outline-none transition-all font-body text-[11px] text-foreground/80 cursor-pointer appearance-none shadow-sm text-center"
                      >
                        <option>+91 (IN)</option>
                        <option>+1 (US)</option>
                        <option>+44 (UK)</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        className="flex-1 min-w-0 px-3.5 py-2.5 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-[13px] placeholder:text-foreground/30 shadow-sm"
                        placeholder="Phone Num"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="font-body text-[9px] font-bold text-primary uppercase tracking-widest ml-1">
                      Select Service
                    </label>
                    <div className="relative">
                      <select 
                        name="service"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-background border border-border focus:border-gold outline-none transition-all font-body text-[13px] text-foreground/80 cursor-pointer appearance-none shadow-sm capitalize"
                      >
                        <option value="">Choose a Service</option>
                        {servicesData.map((service) => (
                          <option key={service.slug} value={service.name}>
                            {service.name.toLowerCase()}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3 h-3 text-gold pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-body text-[9px] font-bold text-primary uppercase tracking-widest ml-1">
                    Your Requirements
                  </label>
                  <textarea
                    name="requirements"
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all font-body text-[13px] placeholder:text-foreground/30 min-h-[85px] resize-none shadow-sm"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative py-3.5 bg-primary overflow-hidden rounded-lg shadow-elevated transition-all duration-500 hover:shadow-gold/20 mt-1 disabled:opacity-70"
                >
                  <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-2 font-body font-bold text-[12px] uppercase tracking-[0.15em] text-white group-hover:text-primary transition-colors duration-500">
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    <Send className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
