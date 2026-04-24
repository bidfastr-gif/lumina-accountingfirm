import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, X, Quote } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const partners = [
  {
    name: "Mr. M. Natanasabapathy",
    role: "Partner, Fellow Chartered Accountant",
    initials: "MN",
    bio: "Mr. M. Natanasabapathy is the Founding & Managing Partner of the firm and a Fellow Member of the Institute of Chartered Accountants of India (ICAI) since 1990.With more than 35 years of distinguished experience, he excels in direct tax consultancy, corporate affairs management, statutory audits, corporate taxation, and strategic management advisory services. He has been instrumental in guiding leading corporate entities, consistently demonstrating exemplary ethical standards and technical proficiency in accounting and finance.",
  },
  {
    name: "Mr. R. Subramanian",
    role: "Partner, Fellow Chartered Accountant",
    initials: "RS",
    bio: "Mr. R. Subramanian is a member of the Institute of Chartered Accountants of India (ICAI) since 1998. As partner of the firm, his professional area of focus includes statutory audits, direct taxation and indirect taxation.",
  },
  {
    name: "Mr. S. Guruprakash",
    role: "Partner, Chartered Accountant",
    initials: "SG",
    bio: "Mr. S. Guruprakash is a Fellow Member of the Institute of Chartered Accountants of India (ICAI) since 2021.He excels in statutory and internal audit assignments, with extensive experience across manufacturing and service industries. Additionally, he specializes in direct and indirect tax litigation matters, tax planning, and transaction advisory services.",
  },
  {
    name: "Mr. N. Sabari Kishore",
    role: "Chartered Accountant",
    initials: "NK",
    bio: "Mr. N. Sabari Kishore is a member of the Institute of Chartered Accountants of India (ICAI) since 2023. He has vast experience in consultancy of direct taxes and handling corporate affairs in different areas. . He specializes in direct and indirect tax litigation. He is passionate about helping entrepreneurs scale their businesses by providing sound financial foundations and ensuring 100% regulatory compliance. ",
  },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedPartner, setSelectedPartner] = useState<
    (typeof partners)[0] | null
  >(null);

  return (
    <section
      id="team"
      className="pt-8 sm:pt-12 lg:pt-20 pb-8 sm:pb-12 lg:pb-20 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.025] blur-[120px] pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div
          className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-gold/40" />
            <span className="font-body text-[11px] font-semibold text-gold/80 uppercase tracking-[0.25em]">
              Leadership
            </span>
            <div className="w-10 h-px bg-gold/40" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Partners
          </h2>
          <p className="font-body text-foreground/45 max-w-lg mx-auto text-[15px] leading-relaxed">
            A team of seasoned professionals with decades of combined experience
            driving excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`group card-premium p-6 sm:p-10 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 sm:mb-8">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/20 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary to-navy-light flex items-center justify-center group-hover:from-gold group-hover:to-gold-dark group-hover:shadow-gold transition-all duration-500">
                  <span className="font-heading text-xl sm:text-2xl font-bold text-primary-foreground">
                    {p.initials}
                  </span>
                </div>
              </div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-primary leading-tight h-14 flex items-center justify-center">
                {p.name}
              </h4>
              <p className="font-body text-[10px] sm:text-[11px] text-gold/70 mt-2 mb-8 uppercase tracking-[0.2em] font-bold min-h-[30px]">
                {p.role}
              </p>

              <button
                onClick={() => setSelectedPartner(p)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-primary text-[11px] font-bold text-white hover:bg-gold transition-all duration-500 group/btn uppercase tracking-[0.15em] shadow-lg hover:shadow-gold/30"
              >
                Read More
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Bio Modal */}
      <Dialog
        open={!!selectedPartner}
        onOpenChange={(open) => !open && setSelectedPartner(null)}
      >
        <DialogContent className="w-[95%] sm:max-w-[420px] p-0 overflow-hidden bg-background border-gold/30 shadow-2xl">
          {selectedPartner && (
            <div className="relative">
              {/* Header Decorative Area - Ultra Compact */}
              <div className="h-20 bg-gradient-to-br from-primary via-primary to-navy-light flex items-center justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
                    backgroundSize: "12px 12px",
                  }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-gold/10 rounded-full blur-[35px]" />
                <Quote className="absolute right-5 top-5 w-10 h-10 text-white/5 -rotate-12" />
              </div>

              {/* Profile Image/Initials Floating - Scaled Down Further */}
              <div className="absolute top-10 left-6">
                <div className="w-16 h-16 rounded-xl bg-white p-1 shadow-xl">
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-inner">
                    <span className="font-heading text-xl font-bold text-primary">
                      {selectedPartner.initials}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-10 pb-7 px-6 sm:px-8 text-left">
                <DialogHeader className="mb-5">
                  <DialogTitle className="font-heading text-xl sm:text-2xl font-bold text-primary mb-1">
                    {selectedPartner.name}
                  </DialogTitle>
                  <DialogDescription className="font-body text-[10px] font-bold text-gold uppercase tracking-[0.2em] leading-relaxed">
                    {selectedPartner.role}
                  </DialogDescription>
                </DialogHeader>

                <div className="w-8 h-[2px] bg-gradient-to-r from-gold to-transparent mb-5" />

                <div className="max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
                  <p className="font-body text-foreground/70 leading-relaxed text-[13px] sm:text-[14px]">
                    {selectedPartner.bio}
                  </p>
                </div>

                <div className="mt-7 pt-5 border-t border-border/50 flex items-center justify-end">
                  <button
                    onClick={() => setSelectedPartner(null)}
                    className="font-body text-[10px] font-bold text-primary hover:text-gold uppercase tracking-[0.15em] transition-colors"
                  >
                    Close Profile
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TeamSection;
