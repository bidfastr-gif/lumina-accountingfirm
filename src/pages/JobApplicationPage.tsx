import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  ArrowLeft, 
  Upload, 
  Send, 
  User, 
  Mail, 
  Phone, 
  Linkedin, 
  Globe, 
  GraduationCap, 
  Briefcase,
  CheckCircle2,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const JobApplicationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Load Uploadcare Widget Script
    const script = document.createElement("script");
    script.src = "https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Format slug to title (e.g., accounts-assistant -> Accounts Assistant)
  const jobTitle = slug 
    ? slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    : "Job Opening";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // The widget handles the upload, we just need to submit the form to the iframe
    setIsSubmitting(true);
    
    // The link will be in the 'resume_link' hidden input created by the widget
    const form = e.currentTarget;
    
    // Show success UI after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Application submitted successfully!");
      
      setTimeout(() => {
        navigate("/careers");
      }, 5000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-background px-4">
        <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
          <div className="mx-auto w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-gold animate-bounce" />
          </div>
          <div className="space-y-4">
            <h1 className="font-heading text-3xl font-bold text-primary">Application Received!</h1>
            <p className="font-body text-foreground/60 leading-relaxed">
              Thank you for applying for the <span className="text-gold font-bold">{jobTitle}</span> position. 
              Our HR team will review your application and get back to you soon.
            </p>
          </div>
          <div className="pt-8">
            <Link to="/careers">
              <Button className="bg-primary hover:bg-gold text-white px-8 py-6 rounded-xl font-bold uppercase tracking-widest transition-all duration-300">
                Back to Careers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container max-w-4xl" ref={ref}>
        {/* Navigation */}
        <Link
          to={`/careers/${slug}`}
          className="inline-flex items-center gap-2 text-sm text-gold hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Job Details
        </Link>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-12">
            <span className="inline-block font-body text-xs font-bold text-gold uppercase tracking-[0.2em] mb-4">
              Join Our Legacy
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Apply for <span className="text-gradient-gold">{jobTitle}</span>
            </h1>
            <p className="font-body text-foreground/60 max-w-2xl leading-relaxed">
              Complete the form below to submit your application. We appreciate your interest in joining Sabapathy & Dhandapani.
            </p>
          </div>

          {/* Hidden iframe to handle the form submission without redirecting */}
          <iframe name="hidden_iframe" id="hidden_iframe" className="hidden"></iframe>

          <form 
            action="https://formspree.io/f/mvzdjlde"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="space-y-12"
          >
            <input type="hidden" name="jobTitle" value={jobTitle} />
            {/* Personal Information */}
            <section className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-3xl p-8 sm:p-10 shadow-xl space-y-8">
              <div className="flex items-center gap-4 border-b border-gold/10 pb-6 mb-8">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5 text-gold" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary">Personal Details</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-primary/60 uppercase tracking-widest ml-1">Full Name *</label>
                  <div className="relative">
                    <Input name="name" required placeholder="John Doe" className="pl-11 h-14 rounded-xl border-border/40 focus:border-gold/50 bg-background/50" />
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-bold text-primary/60 uppercase tracking-widest ml-1">Email Address *</label>
                  <div className="relative">
                    <Input name="email" required type="email" placeholder="john@example.com" className="pl-11 h-14 rounded-xl border-border/40 focus:border-gold/50 bg-background/50" />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-bold text-primary/60 uppercase tracking-widest ml-1">Phone Number *</label>
                  <div className="relative">
                    <Input name="phone" required type="tel" placeholder="+91 98765 43210" className="pl-11 h-14 rounded-xl border-border/40 focus:border-gold/50 bg-background/50" />
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-primary/60 uppercase tracking-widest ml-1">LinkedIn Profile</label>
                  <div className="relative">
                    <Input name="linkedin" placeholder="linkedin.com/in/johndoe" className="pl-11 h-14 rounded-xl border-border/40 focus:border-gold/50 bg-background/50" />
                    <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                  </div>
                </div>
              </div>
            </section>

            {/* Professional/Academic Details */}
            <section className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-3xl p-8 sm:p-10 shadow-xl space-y-8">
              <div className="flex items-center gap-4 border-b border-gold/10 pb-6 mb-8">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-gold" />
                </div>
                <h2 className="font-heading text-xl font-bold text-primary">Academic & Professional</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-primary/60 uppercase tracking-widest ml-1">Highest Qualification *</label>
                  <Input name="qualification" required placeholder="e.g. CA Final, MBA, B.Com" className="h-14 rounded-xl border-border/40 focus:border-gold/50 bg-background/50" />
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-bold text-primary/60 uppercase tracking-widest ml-1">Year of Passing *</label>
                  <Input name="yearOfPassing" required placeholder="e.g. 2023" className="h-14 rounded-xl border-border/40 focus:border-gold/50 bg-background/50" />
                </div>
                
                <div className="space-y-3">
                  <label className="text-xs font-bold text-primary/60 uppercase tracking-widest ml-1">Total Experience (Years)</label>
                  <div className="relative">
                    <Input name="experience" type="number" placeholder="0" className="pl-11 h-14 rounded-xl border-border/40 focus:border-gold/50 bg-background/50" />
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/30" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-primary/60 uppercase tracking-widest ml-1">Current/Last Organization</label>
                  <Input name="organization" placeholder="Company Name" className="h-14 rounded-xl border-border/40 focus:border-gold/50 bg-background/50" />
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <label className="text-xs font-bold text-primary/60 uppercase tracking-widest ml-1">Cover Letter / Message</label>
                <Textarea 
                  name="message"
                  placeholder="Tell us why you're a great fit for this role..." 
                  className="min-h-[150px] rounded-2xl border-border/40 focus:border-gold/50 bg-background/50 p-6"
                />
              </div>
            </section>

            {/* Resume Upload */}
            <section className="bg-card/50 backdrop-blur-sm border border-border/40 rounded-3xl p-8 sm:p-10 shadow-xl">
              <div className="flex flex-col items-center justify-center text-center space-y-6 py-4">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-2">
                  <Upload className="w-8 h-8 text-gold" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-primary">Upload Resume / CV *</h3>
                  <p className="font-body text-sm text-foreground/50">PDF, DOCX or RTF (Max size 5MB)</p>
                </div>
                <div className="relative">
                <div className="relative uploadcare-gold">
                  <input 
                    type="hidden" 
                    role="uploadcare-uploader" 
                    name="resume_link" 
                    data-public-key="demopublickey"
                    data-tabs="file"
                    data-clearable="true"
                    required
                  />
                  <style>{`
                    .uploadcare--widget {
                      background: transparent !important;
                      border: 1px solid rgba(193, 155, 84, 0.3) !important;
                      border-radius: 12px !important;
                      padding: 8px 16px !important;
                      color: #C19B54 !important;
                    }
                    .uploadcare--widget__button_type_open {
                      background: #C19B54 !important;
                      color: white !important;
                      border-radius: 8px !important;
                    }
                  `}</style>
                </div>
              </div>
            </div>
          </section>

            {/* Submit Button */}
            <div className="flex flex-col items-center pt-8">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="group relative bg-primary hover:bg-gold text-white px-12 py-7 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-3">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-3">
                    Submit Application
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                )}
              </Button>
              <p className="mt-6 text-[10px] text-foreground/40 uppercase tracking-widest font-medium">
                By submitting, you agree to our recruitment privacy policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationPage;
