import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowLeft, CheckCircle2, Clock, MapPin, Briefcase, GraduationCap, Laptop } from "lucide-react";

interface JobDetail {
  title: string;
  summary: string;
  responsibilities: { category: string; tasks: string[] }[];
  eligibility: string[];
  skills: string[];
  benefits: string[];
  workingHours: string;
}

const jobDetailsData: Record<string, JobDetail> = {
  "article-assistants": {
    title: "Article Assistants",
    summary: "We are seeking motivated and detail-oriented Article Assistants to join our firm for mandatory practical training as prescribed by ICAI. This role offers hands-on exposure across various domains of Chartered Accountancy under the direct mentorship of experienced partners.",
    responsibilities: [
      {
        category: "Audit & Assurance",
        tasks: [
          "Assist in statutory, internal, and tax audits of diverse clients.",
          "Perform vouching, verification, and documentation of financial records.",
          "Prepare audit working papers and draft preliminary reports.",
          "Participate in physical stock verification and fixed asset audits."
        ]
      },
      {
        category: "Taxation",
        tasks: [
          "Assist in preparation and filing of Income Tax Returns (ITR) for individuals and firms.",
          "Support GST registration, periodic return filing, and reconciliation.",
          "Prepare data for tax audits and Scrutiny assessments.",
          "Help in drafting replies to tax notices and appeals."
        ]
      },
      {
        category: "Accounting & Compliance",
        tasks: [
          "Maintain books of accounts using Tally and other ERP systems.",
          "Ensure compliance with TDS, Professional Tax, and ROC filing requirements.",
          "Conduct bank reconciliations and verify ledger accounts."
        ]
      }
    ],
    eligibility: [
      "CA Intermediate - Passed both groups (preferred) or at least one group.",
      "Eligible to start articleship as per ICAI guidelines.",
      "Strong commitment to the 3-year practical training period."
    ],
    skills: [
      "Basic understanding of Accounting Standards and Auditing Practices.",
      "Proficiency in MS Office (especially MS Excel).",
      "Good communication and interpersonal skills.",
      "Strong analytical and problem-solving abilities."
    ],
    benefits: [
      "Extensive exposure to diverse industries and professional assignments.",
      "Structured mentorship from senior Chartered Accountants.",
      "Generous study leaves for CA Final examinations.",
      "Stipend as per firm policy exceeding ICAI minimums."
    ],
    workingHours: "As per firm policy and ICAI training guidelines."
  },
  "accounts-assistant": {
    title: "Accounts Assistant",
    summary: "We are looking for a diligent Accounts Assistant to handle day-to-day accounting operations and provide vital support to our senior finance team. You will be responsible for maintaining accurate financial records and ensuring timely processing of transactions.",
    responsibilities: [
      {
        category: "Bookkeeping & Operations",
        tasks: [
          "Process accounts payable and receivable invoices accurately.",
          "Maintain detailed day-books and general ledgers in accounting software.",
          "Handle petty cash management and record daily expenses.",
          "Assist in the preparation of monthly trial balances."
        ]
      },
      {
        category: "Banking & Reconciliation",
        tasks: [
          "Perform daily bank reconciliations and resolve discrepancies.",
          "Coordinate with bank officials for routine transactions and documentation.",
          "Track outstanding payments and follow up with vendors/clients."
        ]
      },
      {
        category: "Regulatory Support",
        tasks: [
          "Maintain documentation required for GST and TDS filings.",
          "Organize and archive financial records for audit purposes.",
          "Support the senior accountant in periodic financial reporting."
        ]
      }
    ],
    eligibility: [
      "Bachelor's degree in Commerce (B.Com) or related field.",
      "1-2 years of experience in a similar accounting role (Freshers with strong basics may apply).",
      "Sound knowledge of basic accounting principles."
    ],
    skills: [
      "Hands-on experience with Tally Prime or similar accounting software.",
      "Accuracy in data entry and financial record-keeping.",
      "Familiarity with MS Office (Excel, Word).",
      "Ability to work efficiently within deadlines."
    ],
    benefits: [
      "Professional work environment with growth opportunities.",
      "Exposure to varied accounting practices across clients.",
      "Performance-based increments and yearly bonuses.",
      "Health insurance and standard corporate benefits."
    ],
    workingHours: "9:30 AM to 6:30 PM (Mon-Fri), 9:30 AM to 2:00 PM (Sat)."
  },
  "accounts-manager": {
    title: "Accounts Manager",
    summary: "The Accounts Manager will oversee the entire accounting function, ensuring accuracy in financial reporting and compliance with all legal and tax regulations. This leadership role requires a strategic thinker who can manage teams and streamline financial processes.",
    responsibilities: [
      {
        category: "Financial Management",
        tasks: [
          "Finalize monthly, quarterly, and annual financial statements.",
          "Ensure accuracy in Depreciation, Provisions, and Year-end adjustments.",
          "Review and verify all ledger balances and reconciliations.",
          "Prepare MIS reports and provide financial analysis to management."
        ]
      },
      {
        category: "Statutory Compliance",
        tasks: [
          "Oversee timely filing of GST returns, TDS, and Income Tax returns.",
          "Manage ROC compliance and secretarial documentation support.",
          "Liaise with statutory auditors and tax authorities for assessments.",
          "Ensure strict adherence to current Accounting Standards and Laws."
        ]
      },
      {
        category: "Team Leadership",
        tasks: [
          "Supervise and mentor the accounting and support staff.",
          "Review the work performed by junior accountants and article assistants.",
          "Optimize accounting workflows for better efficiency and control."
        ]
      }
    ],
    eligibility: [
      "CA / CMA / M.Com or MBA (Finance).",
      "5-7 years of post-qualification experience in accounting management.",
      "Proven track record of managing a finance team."
    ],
    skills: [
      "Expert knowledge of Tally, ERP systems, and advanced Excel.",
      "In-depth understanding of Direct and Indirect Tax laws.",
      "Strong leadership and decision-making capabilities.",
      "Excellent report writing and presentation skills."
    ],
    benefits: [
      "Competitive salary package with leadership incentives.",
      "Dynamic role with significant decision-making authority.",
      "Opportunities for professional development and training.",
      "Comprehensive family health insurance and retirement benefits."
    ],
    workingHours: "9:30 AM to 6:30 PM (Mon-Fri), Saturday as required for deadlines."
  },
  "assistant-manager-audit": {
    title: "Assistant Manager Audit",
    summary: "As an Assistant Manager - Audit, you will lead audit engagement teams and be responsible for the end-to-end execution of statutory and internal audits. You will act as a key point of contact for clients and ensure the highest quality of audit output.",
    responsibilities: [
      {
        category: "Audit Execution",
        tasks: [
          "Plan and lead statutory, tax, and internal audit engagements.",
          "Design audit programs and perform risk-based assessments.",
          "Review audit files and ensure compliance with GAAS and Standards on Auditing.",
          "Identify internal control weaknesses and provide value-added recommendations."
        ]
      },
      {
        category: "Client & Team Management",
        tasks: [
          "Liaise with client management for data collection and issue resolution.",
          "Manage and mentor a team of 3-5 article assistants and juniors.",
          "Ensure timely completion of audit assignments within budgeted hours."
        ]
      },
      {
        category: "Reporting",
        tasks: [
          "Draft audit reports, management letters, and specialized certifications.",
          "Prepare reporting packages for group audits (where applicable).",
          "Ensure all significant audit matters are documented and resolved."
        ]
      }
    ],
    eligibility: [
      "Qualified Chartered Accountant (CA) - Membership of ICAI is mandatory.",
      "2-4 years of experience in the audit department of a reputed CA firm.",
      "Exposure to Ind AS and IFRS is highly desirable."
    ],
    skills: [
      "Strong technical knowledge of Auditing Standards and Company Law.",
      "Proficiency in CaseWare or other audit documentation software.",
      "Ability to handle complex accounting and auditing issues.",
      "Superior communication and project management skills."
    ],
    benefits: [
      "Leadership exposure and career path toward Managerial roles.",
      "Work on a diverse portfolio of clients across sectors.",
      "Continuing Professional Education (CPE) support.",
      "Performance-linked incentives and professional reimbursements."
    ],
    workingHours: "Conventional office hours with flexibility during peak audit seasons."
  },
  "manager-audit": {
    title: "Manager Audit",
    summary: "The Audit Manager is a senior leadership position responsible for managing the firm's audit practice. You will be tasked with building client relationships, ensuring technical excellence in audit deliveries, and driving the strategic growth of the audit department.",
    responsibilities: [
      {
        category: "Strategic Oversight",
        tasks: [
          "Overall responsibility for the quality and delivery of the firm's audit portfolio.",
          "Review complex audit areas and provide expert technical guidance to teams.",
          "Manage relationships with senior client personnel and Audit Committees.",
          "Stay updated on global auditing trends and regulatory changes."
        ]
      },
      {
        category: "Practice Development",
        tasks: [
          "Standardize audit templates and methodologies across the firm.",
          "Identify new business opportunities within existing and potential clients.",
          "Conduct internal quality reviews and peer review readiness.",
          "Develop and deliver internal technical training sessions."
        ]
      },
      {
        category: "Operational Management",
        tasks: [
          "Resource planning and allocation across various audit projects.",
          "Monitor billing, recoveries, and profitability of audit assignments.",
          "Performance evaluation and career development of the audit team."
        ]
      }
    ],
    eligibility: [
      "Qualified Chartered Accountant (CA) with 6+ years of experience in Auditing.",
      "Managerial experience in a mid to large-size CA firm.",
      "Expertise in Statutory Audits, Internal Audits, and Forensic Audits."
    ],
    skills: [
      "Strategic thinking and excellent problem-solving skills.",
      "In-depth knowledge of Ind AS, IFRS, and Companies Act.",
      "High level of professional integrity and objectivity.",
      "Exceptional leadership and negotiation skills."
    ],
    benefits: [
      "High-impact leadership role with partnership track potential.",
      "Flexible work arrangements where possible.",
      "Attendance at national/international professional conferences.",
      "Premium health insurance and executive benefits package."
    ],
    workingHours: "Office hours (9:30 AM - 6:30 PM) with professional flexibility."
  },
  "administration": {
    title: "Administration",
    summary: "The Administration Manager ensures the smooth and efficient operation of our office. You will be responsible for facility management, HR support, procurement, and maintaining a professional environment that enables our technical teams to excel.",
    responsibilities: [
      {
        category: "Office Operations",
        tasks: [
          "Manage daily office activities, facilities, and maintenance services.",
          "Coordinate with vendors for supplies, repairs, and annual maintenance contracts.",
          "Oversee office security, cleanliness, and safety protocols.",
          "Maintain office equipment and IT infrastructure coordination."
        ]
      },
      {
        category: "HR & Support",
        tasks: [
          "Support the hiring process for administrative and support staff.",
          "Maintain employee records, attendance, and leave management.",
          "Handle basic payroll processing and statutory HR compliance.",
          "Organize staff welfare activities and internal events."
        ]
      },
      {
        category: "Administrative Compliance",
        tasks: [
          "Manage filing systems and documentation for administrative purposes.",
          "Assist in scheduling meetings and organizing travel/logistics.",
          "Track administrative budgets and optimize operational costs."
        ]
      }
    ],
    eligibility: [
      "Graduate in any discipline (BBA/B.Com preferred) or MBA (HR/Admin).",
      "3-5 years of experience in office administration or facility management.",
      "Prior experience in a professional services firm is an advantage."
    ],
    skills: [
      "Excellent organizational and multi-tasking abilities.",
      "Proficiency in MS Office (Outlook, Word, Excel).",
      "Strong interpersonal and communication skills.",
      "Problem-solving attitude with attention to detail."
    ],
    benefits: [
      "Stable and professional work environment.",
      "Opportunity to manage diverse administrative functions.",
      "Yearly bonuses and comprehensive medical coverage.",
      "Defined career growth within the operations department."
    ],
    workingHours: "9:00 AM to 6:00 PM (Mon-Sat)."
  }
};

const JobDetailsPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { ref, isVisible } = useScrollAnimation();
  
  const job = slug ? jobDetailsData[slug] : null;

  if (!job) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <Navbar />
        <h2 className="font-heading text-2xl font-bold text-primary mb-4 text-center">Opening Not Found</h2>
        <Link to="/careers">
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg">Return to Careers</button>
        </Link>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      
      <div className="bg-background pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-24 lg:pb-32">
        <div className="container max-w-5xl" ref={ref}>
          {/* Header Link */}
          <Link 
            to="/careers" 
            className="inline-flex items-center gap-2 text-sm text-gold hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Openings
          </Link>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8 border-b border-gold/20 pb-6 sm:pb-8">
              {job.title}
            </h1>

            <div className="space-y-10 sm:space-y-16">
              {/* Job Summary */}
              <section>
                <h2 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gold" />
                  Job Summary
                </h2>
                <p className="font-body text-foreground/70 leading-relaxed text-base sm:text-lg pl-0 sm:pl-11">
                  {job.summary}
                </p>
              </section>

              {/* Responsibilities */}
              <section>
                <h2 className="font-heading text-xl font-bold text-primary mb-8 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gold" />
                  Key Responsibilities & Learning
                </h2>
                <div className="grid md:grid-cols-2 gap-6 sm:gap-10 pl-0 sm:pl-11">
                  {job.responsibilities.map((cat, idx) => (
                    <div key={idx} className="space-y-4">
                      <h3 className="font-heading text-lg font-bold text-primary/80">{idx + 1}. {cat.category}</h3>
                      <ul className="space-y-3">
                        {cat.tasks.map((task, tidx) => (
                          <li key={tidx} className="flex items-start gap-3 text-sm text-foreground/60 font-body">
                            <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Two Column Grid for Criteria and Skills */}
              <div className="grid md:grid-cols-2 gap-10 sm:gap-16 pl-0 sm:pl-11">
                <section>
                  <h2 className="font-heading text-lg sm:text-xl font-bold text-primary mb-6 flex items-center gap-3 sm:-ml-11">
                    <span className="w-8 h-[2px] bg-gold" />
                    Eligibility Criteria
                  </h2>
                  <ul className="space-y-4">
                    {job.eligibility.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/60 font-body">
                        <GraduationCap className="w-5 h-5 text-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="font-heading text-lg sm:text-xl font-bold text-primary mb-6 flex items-center gap-3 sm:-ml-11">
                    <span className="w-8 h-[2px] bg-gold" />
                    Required Skills
                  </h2>
                  <ul className="space-y-4">
                    {job.skills.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-foreground/60 font-body">
                        <Laptop className="w-5 h-5 text-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Training & Benefits */}
              <section>
                <h2 className="font-heading text-xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gold" />
                  Training & Benefits
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 pl-0 sm:pl-11">
                  {job.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-gold/5 border border-gold/10 text-sm text-primary/70 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Working Hours */}
              <section>
                <h2 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-gold" />
                  Working Hours
                </h2>
                <div className="pl-0 sm:pl-11 flex items-center gap-3 text-foreground/60 font-body">
                  <Clock className="w-5 h-5 text-gold" />
                  {job.workingHours}
                </div>
              </section>

              {/* CTA Section */}
              <div className="pt-8 sm:pt-12 pl-0 sm:pl-11 flex flex-col items-center">
                <div className="w-full h-[1px] bg-gold/20 mb-12" />
                <button className="bg-primary hover:bg-gold text-primary-foreground font-body font-bold text-sm px-10 sm:px-16 py-4 sm:py-5 rounded-xl shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:shadow-gold uppercase tracking-[0.15em] sm:tracking-[0.2em] w-full sm:w-auto">
                  Submit Application
                </button>
                <p className="mt-6 text-xs text-muted-foreground font-body">
                  Please keep your updated resume and mark sheets ready for submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetailsPage;
