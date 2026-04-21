import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, Map, ShieldCheck, BarChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Strategic Discovery",
    description:
      "A deep-dive analysis of your current financial position to uncover institutional opportunities and mitigate hidden risks.",
  },
  {
    icon: Map,
    title: "Bespoke Roadmapping",
    description:
      "Crafting a tailored financial roadmap that aligns perfectly with your specific objectives and long-term organizational goals.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Execution",
    description:
      "Precision implementation of financial strategies with a steadfast focus on regulatory excellence and internal controls.",
  },
  {
    icon: BarChart,
    title: "Dynamic Advisory",
    description:
      "Adaptive advisory services that evolve seamlessly alongside your business cycles, ensuring sustained growth and stability.",
  },
];

const ApproachSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="approach" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-background">
      {/* Background Decorative Path */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent pointer-events-none hidden lg:block" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className={`flex items-center justify-center gap-3 mb-6 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="w-10 h-[2px] bg-gold" />
            <span className="font-body text-[11px] font-bold text-gold uppercase tracking-[0.4em]">
              Our Methodology
            </span>
            <div className="w-10 h-[2px] bg-gold" />
          </div>
          <h2 className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-8 tracking-tight transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            A Strategic <span className="text-gradient-gold">Perspective</span>
          </h2>
          <p className={`font-body text-foreground/50 text-lg leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            We don't just provide services; we partner with you to build a resilient financial foundation, 
            combining over four decades of legacy with modern strategic foresight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className={`group relative p-8 sm:p-10 rounded-3xl bg-card/40 backdrop-blur-sm border border-border/40 hover:border-gold/30 hover:shadow-premium transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
              style={{ transitionDelay: `${400 + idx * 150}ms` }}
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center font-heading text-xl font-bold text-gold/20 group-hover:text-gold transition-colors duration-500 shadow-sm border border-border/10">
                0{idx + 1}
              </div>

              {/* Icon Container */}
              <div className="mb-8 relative">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-gold transition-all duration-500 shadow-inner">
                  <step.icon className="w-7 h-7 text-gold group-hover:text-primary transition-colors duration-500" />
                </div>
                {/* Connecting Line (Mobile/Tablet) */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/2 left-full w-4 h-px bg-gold/20 hidden lg:block" />
                )}
              </div>

              <h3 className="font-heading text-2xl font-bold text-primary mb-4 group-hover:text-gradient-gold transition-all duration-500">
                {step.title}
              </h3>
              <p className="font-body text-[15px] text-foreground/45 leading-relaxed group-hover:text-foreground/70 transition-colors duration-500">
                {step.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
