import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Heart, Calendar, Users, GraduationCap, ArrowRight } from "lucide-react";

const activities = [
  {
    title: "Direct Tax Rolling Trophy",
    description: "Celebrating excellence in tax research and professional competitions within the industry, fostering a culture of continuous learning.",
    icon: Trophy,
    color: "bg-[#6AA84F]/10",
    iconColor: "text-[#6AA84F]",
  },
  {
    title: "Teacher's and Well-Wisher's Day",
    description: "A dedicated annual event to honor the mentors, teachers, and supporters who guide our professional journey and values.",
    icon: Heart,
    color: "bg-[#6AA84F]/10",
    iconColor: "text-[#6AA84F]",
  },
  {
    title: "Annual Event",
    description: "Our hallmark celebration of yearly milestones, firm achievements, and collective growth with our partners and staff.",
    icon: Calendar,
    color: "bg-[#6AA84F]/10",
    iconColor: "text-[#6AA84F]",
  },
  {
    title: "Partner's Presentation",
    description: "Insightful deep-dive strategy sessions led by our partners to discuss industry trends, firm vision, and future roadmaps.",
    icon: Users,
    color: "bg-[#6AA84F]/10",
    iconColor: "text-[#6AA84F]",
  },
  {
    title: "Academic Updates",
    description: "Keeping our team and clients informed with the latest changes in financial regulations, tax laws, and industry standards.",
    icon: GraduationCap,
    color: "bg-[#6AA84F]/10",
    iconColor: "text-[#6AA84F]",
  },
];

const ActivityPage = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      <div className="bg-background pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 min-h-screen">
        <div className="container" ref={ref}>
          <div
            className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-[#6AA84F]/30" />
              <span className="font-body text-[11px] font-semibold text-[#6AA84F] uppercase tracking-[0.25em]">
                Life at Firm
              </span>
              <div className="w-10 h-px bg-[#6AA84F]/30" />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
              Our <span className="text-[#6AA84F]">Activities</span> & Events
            </h1>
            <p className="font-body text-foreground/60 max-w-2xl mx-auto leading-relaxed text-lg">
              Beyond professional excellence, we foster a community of learning, 
              celebration, and growth through our various firm activities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {activities.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.title}
                  className="group relative bg-white rounded-3xl p-8 sm:p-10 border border-border/40 hover:border-[#6AA84F]/30 transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-4 hover:-translate-y-2 overflow-hidden"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Hover Background & Gradient */}
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6AA84F]/20 via-transparent to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-16 h-16 rounded-2xl ${activity.color} group-hover:bg-[#6AA84F] flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500`}>
                      <Icon className={`w-8 h-8 ${activity.iconColor} group-hover:text-white transition-colors duration-500`} />
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-primary mb-4 group-hover:text-white transition-colors duration-500">
                      {activity.title}
                    </h3>

                    <p className="font-body text-foreground/55 group-hover:text-white/80 leading-relaxed text-[15px] transition-colors duration-500">
                      {activity.description}
                    </p>

                    <div className="mt-auto pt-8 border-t border-border/10 group-hover:border-white/10 transition-colors duration-500">
                      <div className="inline-flex items-center gap-2 px-6 py-2 bg-secondary text-primary font-body font-bold text-[11px] uppercase tracking-widest rounded-xl group-hover:bg-[#6AA84F] group-hover:text-white transition-all duration-500 cursor-pointer">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
