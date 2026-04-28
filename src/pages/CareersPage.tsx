import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Counter from "@/components/Counter";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

const jobs = [
  {
    title: "Article Assistants",
    slug: "article-assistants",
    summary:
      "For CA aspirants seeking mandatory practical training under qualified ICAI mentors.",
    type: "Internship",
    location: "Chennai",
  },
  {
    title: "Accounts Assistant",
    slug: "accounts-assistant",
    summary:
      "Supporting day-to-day financial operations and bookkeeping for our diverse clients.",
    type: "Full-time",
    location: "Chennai",
  },
  {
    title: "Accounts Manager",
    slug: "accounts-manager",
    summary:
      "Overseeing accounting departments and ensuring excellence in financial reporting.",
    type: "Full-time",
    location: "Chennai",
  },
  {
    title: "Assistant Manager Audit",
    slug: "assistant-manager-audit",
    summary:
      "Leading audit engagement teams and ensuring technical excellence in statutory audits.",
    type: "Full-time",
    location: "Chennai",
  },
  {
    title: "Manager Audit",
    slug: "manager-audit",
    summary:
      "Strategic oversight of the firm's audit practice and building client relationships.",
    type: "Full-time",
    location: "Chennai",
  },
  {
    title: "Administration",
    slug: "administration",
    summary:
      "Managing office operations and facilities to ensure organizational efficiency.",
    type: "Full-time",
    location: "Chennai",
  },
];

const CareersPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen pt-4 lg:pt-8">
      <div className="bg-background pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-24 lg:pb-32">
        <div className="container" ref={ref}>
          <div
            className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block font-body text-sm font-semibold text-gold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-4">
              Join Our Team
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
              Build Your <span className="text-gradient-gold">Future</span> With
              Us
            </h1>
            <p className="font-body text-foreground/60 max-w-2xl mx-auto leading-relaxed text-lg">
              Explore professional opportunities and grow your career with a
              legacy accounting firm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {jobs.map((job, i) => (
              <div
                key={job.title}
                className={`group relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-border/40 hover:border-gold/30 transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-4 flex flex-col hover:-translate-y-2`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Hover Background & Gradient */}
                <div className="absolute inset-0 bg-navy opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-navy/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="p-6 sm:p-10 pb-4 sm:pb-6 text-center border-b border-border/30 group-hover:border-gold/20 transition-colors duration-500">
                    <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-primary group-hover:text-white transition-colors duration-500 min-h-[48px] sm:min-h-[64px] flex items-center justify-center">
                      {job.title}
                    </h3>
                  </div>

                  <div className="p-6 sm:p-10 flex-grow flex flex-col items-center text-center">
                    <p className="font-body text-sm text-foreground/50 group-hover:text-white/80 leading-relaxed mb-10 italic transition-colors duration-500">
                      {job.summary}
                    </p>

                    <div className="mt-auto">
                      <Link
                        to={`/careers/${job.slug}`}
                        className="inline-flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-4 bg-primary text-primary-foreground font-body font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-gold group-hover:bg-gold group-hover:text-primary transition-all duration-500 shadow-lg"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-20 text-center bg-gold/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-gold/10">
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">
              Don't see a matching role?
            </h3>
            <p className="font-body text-foreground/60 mb-8 max-w-xl mx-auto">
              Send us your resume at{" "}
              <a
                href="mailto:sabapathyca@hotmail.com"
                className="text-gold font-bold hover:underline"
              >
                sabapathyca@hotmail.com
              </a>{" "}
              and we'll keep you updated on future opportunities.
            </p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default CareersPage;
