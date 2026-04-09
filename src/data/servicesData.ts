import {
  FileCheck, Search, Monitor, Globe, Briefcase, ArrowRightLeft,
  Receipt, Heart, Building, BarChart3, Landmark, ClipboardCheck,
  GitMerge, ShieldCheck, TrendingUp, Users
} from "lucide-react";

export interface ServiceDetail {
  slug: string;
  icon: typeof FileCheck;
  name: string;
  tagline: string;
  desc: string;
  overview: string[];
  advantages: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  whyChooseUs: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "statutory-audits",
    icon: FileCheck,
    name: "Statutory Audits",
    tagline: "Ensuring Compliance, Building Confidence",
    desc: "Comprehensive statutory audit services ensuring compliance with regulatory requirements and financial reporting standards.",
    overview: [
      "Statutory audits are a legal requirement for businesses to ensure that their financial statements present a true and fair view of their financial position. At Sabapathy & Co, we conduct thorough statutory audits in accordance with the Standards on Auditing issued by ICAI and applicable regulatory frameworks.",
      "Our team of experienced auditors examines your financial records, internal controls, and accounting policies to provide an independent opinion on the accuracy and reliability of your financial statements. We go beyond mere compliance to deliver actionable insights that strengthen your financial governance.",
      "Whether you are a private limited company, public listed entity, or a statutory body, our audit approach is tailored to your industry, size, and regulatory environment to ensure a seamless and value-driven audit experience."
    ],
    advantages: [
      { title: "Regulatory Compliance", description: "Full compliance with the Companies Act 2013, SEBI regulations, and other applicable statutory requirements ensuring your business stays legally protected." },
      { title: "Risk Identification", description: "Proactive identification of financial risks, control weaknesses, and areas of improvement to safeguard your business from potential losses." },
      { title: "Stakeholder Confidence", description: "An independent audit opinion enhances credibility with investors, lenders, regulators, and other stakeholders." },
      { title: "Process Improvement", description: "Our management letter highlights actionable recommendations to improve your internal controls and financial processes." },
      { title: "Industry Expertise", description: "Deep expertise across manufacturing, IT, banking, real estate, and non-profit sectors ensures relevant and insightful audits." },
      { title: "Timely Delivery", description: "Efficient audit planning and execution ensures reports are delivered within agreed timelines without disrupting your operations." }
    ],
    process: [
      { step: 1, title: "Engagement & Planning", description: "We begin by understanding your business, industry, and regulatory environment. A detailed audit plan is prepared covering scope, timelines, and key risk areas." },
      { step: 2, title: "Risk Assessment", description: "We perform a comprehensive risk assessment to identify areas of material misstatement and design audit procedures accordingly." },
      { step: 3, title: "Fieldwork & Testing", description: "Our audit team conducts detailed substantive testing, control testing, and analytical procedures on your financial data and transactions." },
      { step: 4, title: "Review & Quality Check", description: "All audit findings undergo a rigorous multi-level review process by our partners to ensure accuracy and completeness." },
      { step: 5, title: "Reporting & Discussion", description: "We present our findings, audit opinion, and management letter to your board or audit committee with clear, actionable recommendations." }
    ],
    whyChooseUs: [
      "ICAI-compliant audit methodology with global best practices",
      "Dedicated engagement teams with sector-specific expertise",
      "Technology-enabled audit processes for greater accuracy",
      "Transparent communication throughout the audit lifecycle",
      "Post-audit support for implementing recommendations"
    ]
  },
  {
    slug: "internal-audits",
    icon: Search,
    name: "Internal Audits",
    tagline: "Strengthening Controls, Driving Efficiency",
    desc: "Systematic evaluation of internal controls, risk management processes, and governance frameworks.",
    overview: [
      "Internal audits provide an independent and objective assessment of your organization's internal controls, risk management, and governance processes. At Sabapathy & Co, we design internal audit programs that go beyond compliance to add tangible value to your operations.",
      "Our risk-based approach helps identify process inefficiencies, control gaps, and operational risks before they escalate into significant issues. We evaluate the effectiveness of your organization's policies and procedures and provide practical recommendations for improvement.",
      "From SOPs and process mapping to fraud risk assessments and operational reviews, our internal audit services are designed to give management and the board the assurance they need to make informed decisions."
    ],
    advantages: [
      { title: "Enhanced Governance", description: "Strengthen corporate governance by ensuring robust internal control frameworks are in place across all departments." },
      { title: "Fraud Prevention", description: "Early detection of vulnerabilities and suspicious patterns helps prevent financial fraud and operational irregularities." },
      { title: "Operational Efficiency", description: "Identify bottlenecks, redundancies, and process gaps to streamline operations and reduce costs." },
      { title: "Management Assurance", description: "Provide the board and senior management with independent assurance on the effectiveness of controls." },
      { title: "Compliance Monitoring", description: "Continuous monitoring of compliance with internal policies, industry regulations, and legal requirements." },
      { title: "Customized Approach", description: "Audit programs tailored to your organization's unique risk profile, industry, and operational complexity." }
    ],
    process: [
      { step: 1, title: "Scoping & Planning", description: "We collaborate with management to define the audit universe, assess risk areas, and develop an annual internal audit plan." },
      { step: 2, title: "Process Mapping", description: "Detailed documentation of existing processes, control points, and workflows across the auditable areas." },
      { step: 3, title: "Testing & Evaluation", description: "Rigorous testing of controls through sample verification, walkthroughs, and data analytics to assess effectiveness." },
      { step: 4, title: "Findings & Recommendations", description: "Clear documentation of observations with root cause analysis and practical, prioritized recommendations." },
      { step: 5, title: "Follow-Up & Monitoring", description: "Periodic follow-up on implementation of recommendations and tracking of action items to closure." }
    ],
    whyChooseUs: [
      "Risk-based audit methodology aligned with IIA standards",
      "Experienced teams with industry-specific knowledge",
      "Data-driven insights using modern audit analytics tools",
      "Quarterly reporting with management dashboards",
      "Direct access to partners for critical findings"
    ]
  },
  {
    slug: "information-systems-audit",
    icon: Monitor,
    name: "Information Systems Audit",
    tagline: "Securing Digital Infrastructure, Ensuring IT Governance",
    desc: "Assessment of IT systems, cybersecurity frameworks, and digital infrastructure compliance.",
    overview: [
      "In today's digital-first business landscape, the integrity and security of your information systems are paramount. Our IS Audit services provide a comprehensive assessment of your IT infrastructure, data security controls, and system reliability.",
      "We evaluate your organization's IT governance framework, cybersecurity posture, access controls, disaster recovery plans, and compliance with relevant standards such as ISO 27001, COBIT, and IT Act provisions.",
      "Our IS Audit team combines deep technical expertise with audit methodology to identify vulnerabilities, assess data integrity risks, and ensure your technology investments are delivering value while maintaining compliance."
    ],
    advantages: [
      { title: "Cybersecurity Assurance", description: "Comprehensive assessment of your cybersecurity controls, threat detection mechanisms, and incident response capabilities." },
      { title: "Data Integrity", description: "Verification of data processing accuracy, completeness, and reliability across critical business applications." },
      { title: "Regulatory Compliance", description: "Ensure compliance with IT Act, GDPR, RBI cybersecurity guidelines, and other applicable regulations." },
      { title: "Business Continuity", description: "Assessment of disaster recovery and business continuity plans to ensure operational resilience." },
      { title: "Access Control Review", description: "Evaluation of user access management, segregation of duties, and privileged access controls." },
      { title: "Vendor Risk Assessment", description: "Review of third-party IT vendor contracts, SLAs, and data handling practices for risk mitigation." }
    ],
    process: [
      { step: 1, title: "IT Environment Assessment", description: "Understanding your IT landscape, technology stack, network architecture, and critical business applications." },
      { step: 2, title: "Control Framework Evaluation", description: "Mapping existing IT controls against industry standards and best practices to identify gaps." },
      { step: 3, title: "Vulnerability Assessment", description: "Technical testing of systems for security vulnerabilities, configuration weaknesses, and access control issues." },
      { step: 4, title: "Data Analytics & Testing", description: "Automated data analytics to verify transaction integrity, detect anomalies, and assess system reliability." },
      { step: 5, title: "Reporting & Remediation", description: "Detailed report with risk ratings, prioritized recommendations, and a roadmap for IT control improvement." }
    ],
    whyChooseUs: [
      "CISA/DISA qualified professionals on every engagement",
      "Alignment with ISO 27001 and COBIT frameworks",
      "Combined expertise in audit methodology and IT security",
      "Practical remediation recommendations, not just findings",
      "Ongoing advisory support for IT governance improvement"
    ]
  },
  {
    slug: "international-taxation",
    icon: Globe,
    name: "International Taxation",
    tagline: "Navigating Global Tax Complexities with Confidence",
    desc: "Expert guidance on cross-border tax issues, treaty benefits, and global tax compliance strategies.",
    overview: [
      "Cross-border transactions and global operations bring complex tax challenges that require specialized expertise. Our international taxation services help businesses and individuals navigate the intricacies of multi-jurisdictional tax laws, treaty provisions, and compliance requirements.",
      "We advise on structuring cross-border transactions, optimizing treaty benefits under India's extensive DTAA network, managing permanent establishment risks, and ensuring compliance with global reporting standards including CRS and FATCA.",
      "Whether you are expanding internationally, dealing with foreign remittances, or managing expatriate taxation, our team provides strategic guidance to minimize tax exposure while ensuring full compliance with domestic and international tax laws."
    ],
    advantages: [
      { title: "Treaty Optimization", description: "Strategic use of Double Taxation Avoidance Agreements (DTAAs) to minimize withholding taxes and avoid double taxation." },
      { title: "PE Risk Management", description: "Assessment and mitigation of Permanent Establishment risks arising from cross-border business activities." },
      { title: "Expatriate Taxation", description: "Comprehensive tax planning and compliance for expatriates including salary structuring, FEMA compliance, and exit taxation." },
      { title: "Global Compliance", description: "Compliance with CRS, FATCA, Country-by-Country Reporting (CbCR), and other international reporting requirements." },
      { title: "Inbound & Outbound Structuring", description: "Tax-efficient structuring for inbound investments into India and outbound investments by Indian businesses." },
      { title: "Dispute Resolution", description: "Representation before tax authorities and assistance with Mutual Agreement Procedures (MAP) for treaty disputes." }
    ],
    process: [
      { step: 1, title: "Transaction Analysis", description: "Detailed analysis of cross-border transactions, entity structures, and applicable tax jurisdictions." },
      { step: 2, title: "Treaty & Law Review", description: "Assessment of applicable DTAAs, domestic tax laws, and international tax provisions relevant to your situation." },
      { step: 3, title: "Structure Optimization", description: "Designing tax-efficient structures that comply with GAAR, MLI, and substance requirements." },
      { step: 4, title: "Compliance Execution", description: "Preparation and filing of all international tax returns, withholding certificates, and regulatory reports." },
      { step: 5, title: "Ongoing Advisory", description: "Continuous monitoring of regulatory changes and proactive advisory on their impact on your global tax position." }
    ],
    whyChooseUs: [
      "Deep expertise in India's DTAA network and international tax treaties",
      "Experience handling complex PE and withholding tax matters",
      "Strong track record in international tax litigation support",
      "Proactive advisory on global tax reforms (BEPS, Pillar Two)",
      "Collaborative approach with international tax networks"
    ]
  },
  {
    slug: "business-tax-advisory",
    icon: Briefcase,
    name: "Business Tax Advisory",
    tagline: "Strategic Tax Planning for Sustainable Growth",
    desc: "Strategic tax planning and advisory services for businesses to optimize tax efficiency and compliance.",
    overview: [
      "Effective tax planning is essential for business profitability and sustainability. Our Business Tax Advisory services help organizations optimize their tax position through strategic planning, regulatory compliance, and proactive advisory on tax-saving opportunities.",
      "We work closely with businesses across all stages—from startups and SMEs to large corporates—to develop tax strategies aligned with their commercial objectives. Our services cover direct taxation including corporate tax, MAT/AMT planning, capital gains optimization, and tax incentive utilization.",
      "Our team stays ahead of legislative changes and judicial pronouncements to ensure your tax strategies remain current, compliant, and effective in a rapidly evolving tax landscape."
    ],
    advantages: [
      { title: "Tax Optimization", description: "Strategic planning to minimize tax liability through legitimate deductions, exemptions, and incentive provisions." },
      { title: "Advance Tax Planning", description: "Accurate estimation of advance tax liabilities to avoid interest and penalties under Sections 234A/B/C." },
      { title: "Litigation Support", description: "Expert representation before Income Tax authorities in assessments, appeals, and dispute resolution." },
      { title: "Startup Benefits", description: "Advisory on Section 80-IAC benefits, angel tax provisions, and tax holidays available for eligible startups." },
      { title: "Corporate Restructuring", description: "Tax-efficient planning for mergers, demergers, slump sales, and corporate restructuring transactions." },
      { title: "Compliance Assurance", description: "Timely filing of returns, tax audits, and statutory forms with zero-error accuracy." }
    ],
    process: [
      { step: 1, title: "Business Understanding", description: "Deep dive into your business model, revenue streams, expense patterns, and growth plans to identify tax planning opportunities." },
      { step: 2, title: "Tax Health Check", description: "Comprehensive review of past returns, outstanding demands, and compliance status to identify risks and opportunities." },
      { step: 3, title: "Strategy Development", description: "Design a customized tax strategy covering deductions, exemptions, inter-company pricing, and investment-linked incentives." },
      { step: 4, title: "Implementation", description: "Execution of the tax strategy including return preparation, advance tax computation, and regulatory filings." },
      { step: 5, title: "Review & Update", description: "Periodic review of tax positions and strategy adjustments based on business changes and legislative updates." }
    ],
    whyChooseUs: [
      "Proactive advisory model anticipating tax law changes",
      "Multi-disciplinary team covering direct and indirect tax",
      "Strong litigation track record across tribunals and courts",
      "Tax technology tools for accurate computation and reporting",
      "Personalized attention with partner-led engagement"
    ]
  },
  {
    slug: "indirect-taxation",
    icon: Receipt,
    name: "Indirect Taxation",
    tagline: "Simplifying GST, Maximizing Compliance",
    desc: "Comprehensive support for GST and other indirect taxes, including advisory, compliance, and litigation.",
    overview: [
      "The Goods and Services Tax (GST) regime has transformed India's indirect tax landscape, bringing both opportunities and compliance challenges. Our indirect taxation services provide end-to-end support for GST and other indirect taxes to ensure your business remains fully compliant while optimizing input tax credit utilization.",
      "From GST registration and return filing to complex classification issues, anti-profiteering assessments, and departmental audits, we handle the full spectrum of indirect tax requirements. Our expertise extends to customs duty, export incentives, and SEZ-related tax benefits.",
      "We combine technical expertise with technology-driven solutions to manage your GST compliance efficiently, reduce the risk of errors, and help you navigate the evolving regulatory landscape with confidence."
    ],
    advantages: [
      { title: "GST Compliance", description: "End-to-end GST return filing (GSTR-1, 3B, 9, 9C) with ITC reconciliation and compliance health checks." },
      { title: "ITC Optimization", description: "Maximize legitimate input tax credit claims through proper documentation, classification, and reconciliation." },
      { title: "Classification Advisory", description: "Expert guidance on HSN/SAC classification and applicable GST rates to avoid misclassification risks." },
      { title: "Refund Management", description: "Efficient processing of GST refund applications for exports, inverted duty structure, and accumulated credits." },
      { title: "Assessment Support", description: "Complete support during GST assessments, audits, and scrutiny proceedings with the tax department." },
      { title: "Litigation Management", description: "Representation before GST appellate authorities, advance ruling authority, and tribunals." }
    ],
    process: [
      { step: 1, title: "Compliance Setup", description: "GST registration, configuration of HSN/SAC codes, and setup of return filing processes and timelines." },
      { step: 2, title: "Monthly Compliance", description: "Preparation and timely filing of all periodic GST returns with thorough data validation and ITC matching." },
      { step: 3, title: "Reconciliation & Review", description: "Monthly reconciliation of GSTR-2A/2B with purchase registers and identification of ITC mismatches." },
      { step: 4, title: "Annual Compliance", description: "Preparation of annual returns (GSTR-9) and reconciliation statement (GSTR-9C) with detailed analysis." },
      { step: 5, title: "Advisory & Dispute Support", description: "Ongoing advisory on GST implications of transactions and representation in disputes or assessments." }
    ],
    whyChooseUs: [
      "Pre-GST and post-GST expertise across industries",
      "Technology-enabled ITC reconciliation and return preparation",
      "Proactive alerts on GST compliance deadlines and changes",
      "Strong success rate in GST refund applications",
      "Dedicated indirect tax specialists for complex queries"
    ]
  },
  {
    slug: "transfer-pricing",
    icon: ArrowRightLeft,
    name: "Transfer Pricing",
    tagline: "Arm's Length Pricing, Global Compliance",
    desc: "Detailed transfer pricing documentation, benchmarking, and compliance for related-party transactions.",
    overview: [
      "Transfer pricing regulations require that transactions between related parties are conducted at arm's length prices. Non-compliance can result in significant tax adjustments, penalties, and protracted litigation. Our transfer pricing practice helps businesses comply with Indian and international TP regulations while managing risk.",
      "We provide comprehensive services including TP documentation, benchmarking studies, Advance Pricing Agreements (APA), and litigation support. Our approach combines rigorous economic analysis with practical commercial understanding to deliver defensible TP positions.",
      "With the increasing scrutiny on intercompany transactions by tax authorities worldwide, having robust transfer pricing documentation and a well-defined TP policy is no longer optional—it's essential for every business with related-party dealings."
    ],
    advantages: [
      { title: "Comprehensive Documentation", description: "Detailed TP study reports compliant with Section 92D/92E and OECD Transfer Pricing Guidelines." },
      { title: "Benchmarking Analysis", description: "Rigorous economic analysis using multiple databases and methods (CUP, TNMM, RPM, CPM, PSM) for defensible pricing." },
      { title: "APA Advisory", description: "Strategic advisory and application support for Unilateral, Bilateral, and Multilateral Advance Pricing Agreements." },
      { title: "TP Policy Design", description: "Development of global TP policies aligned with business operations, value chain, and regulatory requirements." },
      { title: "Audit Defense", description: "Expert representation during TP assessments, appeals before CIT(A), ITAT, and DRP proceedings." },
      { title: "BEPS Compliance", description: "Support with Country-by-Country Reporting (CbCR), Master File, and Local File requirements under BEPS Action 13." }
    ],
    process: [
      { step: 1, title: "Transaction Mapping", description: "Identification and categorization of all international and specified domestic transactions with associated enterprises." },
      { step: 2, title: "Functional Analysis", description: "Detailed FAR (Functions, Assets, Risks) analysis to understand the economic substance of intercompany transactions." },
      { step: 3, title: "Method Selection & Benchmarking", description: "Selection of the Most Appropriate Method and comprehensive benchmarking using comparable company data." },
      { step: 4, title: "Documentation & Reporting", description: "Preparation of TP documentation including Local File, Master File, and CbCR as applicable." },
      { step: 5, title: "Filing & Defense", description: "Timely filing of Form 3CEB and ongoing support for TP assessments and dispute resolution." }
    ],
    whyChooseUs: [
      "Proven track record in TP litigation and dispute resolution",
      "Access to multiple commercial databases for benchmarking studies",
      "Experience across diverse industries and transaction types",
      "Alignment with OECD guidelines and Indian TP regulations",
      "Proactive risk assessment and TP policy advisory"
    ]
  },
  {
    slug: "non-profit-taxation",
    icon: Heart,
    name: "Non-Profit Taxation",
    tagline: "Protecting Your Mission Through Tax Compliance",
    desc: "Specialized tax services for NGOs and charitable organizations to maintain tax-exempt status.",
    overview: [
      "Non-profit organizations operate in a unique regulatory environment with specific tax implications. Our specialized non-profit taxation services help charitable institutions, NGOs, trusts, and Section 8 companies navigate complex tax provisions while maintaining their tax-exempt status.",
      "We advise on registration under Section 12A/12AB, Form 10A/10AB applications, 80G certification, FCRA compliance, and CSR-related regulatory requirements. Our team ensures that your organization's activities and financial reporting align with the conditions prescribed for tax exemption.",
      "With the recent changes in trust taxation regulations and increased scrutiny on NGO operations, having expert guidance is critical to protect your exempt status and continue your charitable mission without interruption."
    ],
    advantages: [
      { title: "Exemption Registration", description: "End-to-end support for fresh and renewal applications under Section 12AB, 80G, and 10(23C) provisions." },
      { title: "FCRA Compliance", description: "Advisory on Foreign Contribution Regulation Act compliance including registration, renewals, and annual filings." },
      { title: "Trust Taxation", description: "Expert guidance on accumulation provisions, deemed income rules, and application of income requirements." },
      { title: "Audit & Compliance", description: "Specialized audit of non-profit financials ensuring compliance with all regulatory and tax requirements." },
      { title: "CSR Advisory", description: "Advisory on CSR fund utilization, reporting requirements, and compliance with Companies Act CSR provisions." },
      { title: "Assessment Support", description: "Representation before tax authorities for exemption-related assessments, appeals, and scrutiny proceedings." }
    ],
    process: [
      { step: 1, title: "Status Review", description: "Assessment of your organization's registration status, exemption eligibility, and current compliance position." },
      { step: 2, title: "Registration Support", description: "Preparation and filing of applications for 12AB registration, 80G certification, or other applicable exemptions." },
      { step: 3, title: "Compliance Management", description: "Ongoing management of annual filings, audit reports, and regulatory submissions to maintain exempt status." },
      { step: 4, title: "Income Application Review", description: "Review of fund utilization to ensure compliance with mandatory application of income and accumulation rules." },
      { step: 5, title: "Advisory & Reporting", description: "Periodic advisory on regulatory changes and their impact on your organization's tax-exempt status." }
    ],
    whyChooseUs: [
      "Deep understanding of trust and society taxation provisions",
      "Experience with FCRA, CSR, and NGO regulatory frameworks",
      "Strong relationships with relevant regulatory authorities",
      "Proactive monitoring of changes in non-profit tax laws",
      "Dedicated team specializing in the social sector"
    ]
  },
  {
    slug: "incorporation",
    icon: Building,
    name: "Incorporation",
    tagline: "Launching Your Business on the Right Foundation",
    desc: "End-to-end support for company registration, LLP formation, and startup-related statutory filings.",
    overview: [
      "Starting a business involves critical decisions about entity structure, compliance requirements, and regulatory registrations. Our incorporation services provide end-to-end support for setting up your business entity—whether it's a Private Limited Company, LLP, Partnership Firm, or Sole Proprietorship.",
      "We guide entrepreneurs through the entire process including name reservation, MOA/AOA drafting, director/partner appointments, PAN/TAN applications, GST registration, and opening bank accounts. Our advisory extends to choosing the right entity structure based on your business model, funding plans, and tax considerations.",
      "For startups, we additionally assist with DPIIT recognition, Startup India registration, and advisory on the regulatory benefits and incentives available to eligible startups under various government schemes."
    ],
    advantages: [
      { title: "Entity Selection", description: "Expert advisory on choosing between Pvt Ltd, LLP, OPC, Partnership, or Sole Proprietorship based on your specific needs." },
      { title: "Complete Registration", description: "Hassle-free company/LLP incorporation with all statutory registrations including PAN, TAN, GST, and Shop Act." },
      { title: "Startup Benefits", description: "DPIIT recognition, Startup India registration, and advisory on tax holidays and regulatory exemptions." },
      { title: "Document Drafting", description: "Professional drafting of MOA, AOA, LLP Agreement, Partnership Deeds, and shareholder agreements." },
      { title: "Post-Incorporation Setup", description: "Complete setup including board resolutions, share certificates, statutory registers, and compliance calendar." },
      { title: "Ongoing Support", description: "First-year compliance support including annual filings, board meetings, and regulatory submissions." }
    ],
    process: [
      { step: 1, title: "Business Consultation", description: "Understanding your business vision, capital structure, and operational plans to recommend the optimal entity type." },
      { step: 2, title: "Name & Structure", description: "Name reservation, DIN/DPIN applications, and preparation of incorporation documents." },
      { step: 3, title: "Incorporation Filing", description: "Filing with MCA/Registrar, obtaining Certificate of Incorporation, and completing post-incorporation formalities." },
      { step: 4, title: "Statutory Registrations", description: "PAN, TAN, GST, Professional Tax, ESIC/EPF registrations and bank account opening assistance." },
      { step: 5, title: "Launch & Compliance", description: "Handover of all documents with a compliance calendar and ongoing support for initial regulatory requirements." }
    ],
    whyChooseUs: [
      "Streamlined process with minimal documentation hassle",
      "Complete transparency on costs and timelines",
      "Expertise in startup ecosystem and government incentives",
      "Post-incorporation compliance support included",
      "Single-window solution for all registration needs"
    ]
  },
  {
    slug: "mergers-and-demergers",
    icon: GitMerge,
    name: "Mergers & Demergers",
    tagline: "Strategic Restructuring for Maximum Value",
    desc: "Strategic advisory and compliance support for corporate restructuring, mergers, and acquisitions.",
    overview: [
      "Corporate restructuring through mergers, demergers, amalgamations, and acquisitions requires meticulous planning across legal, tax, and regulatory dimensions. Our M&A advisory practice provides comprehensive support from initial strategy through to successful completion and post-transaction integration.",
      "We assist businesses in evaluating restructuring options, preparing valuation reports, obtaining regulatory approvals under the Companies Act and NCLT framework, and managing the complex tax implications including capital gains, carry-forward of losses, and stamp duty optimization.",
      "Our multidisciplinary approach ensures that every transaction is structured to maximize value for stakeholders while maintaining complete regulatory compliance and minimizing tax exposure."
    ],
    advantages: [
      { title: "Strategic Structuring", description: "Design optimal M&A structures considering tax efficiency, regulatory requirements, and commercial objectives." },
      { title: "NCLT/Court Process", description: "End-to-end management of the scheme process including drafting, court filings, and regulatory approvals." },
      { title: "Tax Planning", description: "Comprehensive analysis of tax implications including capital gains, MAT credit, loss carry-forward, and stamp duty." },
      { title: "Valuation Support", description: "Independent valuation reports for share swaps, fair value determination, and regulatory compliance purposes." },
      { title: "Due Diligence", description: "Thorough financial and tax due diligence to identify risks, contingencies, and deal-breakers." },
      { title: "Post-Merger Integration", description: "Support with post-merger compliance, PAN migration, GST amendments, and financial integration." }
    ],
    process: [
      { step: 1, title: "Feasibility Assessment", description: "Analysis of restructuring options, tax efficiency, and regulatory implications to finalize the optimal structure." },
      { step: 2, title: "Scheme Preparation", description: "Drafting of the Scheme of Arrangement/Amalgamation with appointed date, swap ratios, and detailed terms." },
      { step: 3, title: "Regulatory Approvals", description: "Filing with NCLT, obtaining NOCs from creditors, regulatory bodies, and statutory authorities." },
      { step: 4, title: "Implementation", description: "Post-order compliance including certified copy filing, accounting entries, and PAN/registration amendments." },
      { step: 5, title: "Integration Support", description: "Advisory on post-merger tax filings, compliance calendar, and financial statement preparation." }
    ],
    whyChooseUs: [
      "Experience across diverse M&A transactions and industries",
      "Multidisciplinary team covering legal, tax, and financial aspects",
      "Strong relationships with NCLT practitioners and regulators",
      "Proven ability to manage complex restructuring timelines",
      "Post-transaction support for seamless integration"
    ]
  },
  {
    slug: "fema-advisory",
    icon: Landmark,
    name: "FEMA Advisory",
    tagline: "Navigating Foreign Exchange Regulations with Clarity",
    desc: "Expert guidance on foreign exchange regulations, FDI compliance, and outward investment advisory.",
    overview: [
      "The Foreign Exchange Management Act (FEMA) governs all foreign exchange transactions in India and non-compliance can result in severe penalties. Our FEMA advisory practice provides expert guidance to businesses and individuals on cross-border transactions, FDI compliance, and overseas investment regulations.",
      "We advise on FDI structuring under automatic and approval routes, External Commercial Borrowings (ECB), Overseas Direct Investments (ODI), Liberalized Remittance Scheme (LRS), and compliance with RBI reporting requirements including FC-GPR, FC-TRS, and annual return on foreign assets.",
      "Whether you are an Indian company receiving foreign investment, an NRI managing assets in India, or an Indian entity investing abroad, our team ensures your transactions comply with FEMA regulations while optimizing the structuring of your cross-border flows."
    ],
    advantages: [
      { title: "FDI Compliance", description: "End-to-end support for FDI transactions including pricing guidelines, sectoral caps, and RBI reporting requirements." },
      { title: "ECB Advisory", description: "Structuring and compliance support for External Commercial Borrowings under automatic and approval routes." },
      { title: "ODI Support", description: "Advisory on Overseas Direct Investments including JV/WOS structuring, regulations, and annual compliance." },
      { title: "NRI Taxation & FEMA", description: "Comprehensive advisory for NRIs on property transactions, repatriation, account management, and tax planning." },
      { title: "Compounding Applications", description: "Preparation and filing of compounding applications for past FEMA contraventions with the RBI." },
      { title: "RBI Reporting", description: "Timely filing of all mandatory RBI reports including FC-GPR, FC-TRS, ODI forms, and annual returns." }
    ],
    process: [
      { step: 1, title: "Transaction Assessment", description: "Understanding the nature, parties, and quantum of the proposed cross-border transaction." },
      { step: 2, title: "Regulatory Analysis", description: "Detailed analysis of applicable FEMA regulations, RBI circulars, and FDI policy provisions." },
      { step: 3, title: "Structuring & Advisory", description: "Designing compliant transaction structures and advising on pricing, documentation, and timelines." },
      { step: 4, title: "Compliance Execution", description: "Preparation and filing of all required forms, reports, and certificates with RBI and AD banks." },
      { step: 5, title: "Ongoing Monitoring", description: "Periodic compliance reviews and advisory on regulatory changes affecting your foreign exchange transactions." }
    ],
    whyChooseUs: [
      "Specialized FEMA practice with dedicated advisory team",
      "Strong track record in RBI compounding matters",
      "Experience with complex cross-border structuring",
      "Up-to-date knowledge of evolving FEMA regulations",
      "Collaborative approach with legal and banking advisors"
    ]
  },
  {
    slug: "compliance-services",
    icon: ShieldCheck,
    name: "Compliance Services",
    tagline: "Comprehensive Regulatory Compliance, Always Current",
    desc: "Holistic regulatory compliance solutions across various corporate and commercial laws.",
    overview: [
      "Staying compliant with India's complex regulatory framework requires continuous vigilance and expertise across multiple laws. Our compliance services provide a single-window solution for managing your obligations under the Companies Act, LLP Act, labour laws, and other applicable legislations.",
      "We offer end-to-end compliance management including annual filings with MCA, maintenance of statutory registers, conducting board and general meetings, filing statutory returns, and managing regulatory correspondence. Our proactive approach ensures you never miss a deadline or face avoidable penalties.",
      "Our compliance calendar system, combined with periodic health checks, ensures that your business operates within the legal framework at all times, allowing you to focus on growth while we handle the regulatory burden."
    ],
    advantages: [
      { title: "MCA Compliance", description: "Timely filing of annual returns, financial statements, and event-based forms with the Ministry of Corporate Affairs." },
      { title: "Secretarial Support", description: "Board meeting management, resolution drafting, statutory register maintenance, and corporate governance advisory." },
      { title: "Labour Law Compliance", description: "Advisory on EPF, ESIC, Professional Tax, Shops & Establishments Act, and new labour code compliance." },
      { title: "Compliance Calendar", description: "Customized compliance calendar with automated reminders to ensure timely fulfillment of all obligations." },
      { title: "Periodic Health Checks", description: "Quarterly compliance audits to identify and rectify gaps before they result in regulatory action." },
      { title: "Penalty Mitigation", description: "Advisory and support for regularizing past non-compliances and filing delayed returns with appropriate remedues." }
    ],
    process: [
      { step: 1, title: "Compliance Mapping", description: "Comprehensive mapping of all applicable regulations based on your entity type, industry, and operations." },
      { step: 2, title: "Calendar Setup", description: "Creation of a customized compliance calendar with deadlines, responsible persons, and escalation protocols." },
      { step: 3, title: "Ongoing Management", description: "Regular preparation and filing of statutory returns, forms, and reports as per the compliance calendar." },
      { step: 4, title: "Health Checks", description: "Periodic compliance audits to ensure all obligations are met and identify any emerging requirements." },
      { step: 5, title: "Advisory & Updates", description: "Proactive advisory on regulatory changes and their impact on your compliance obligations." }
    ],
    whyChooseUs: [
      "Single-window compliance solution across multiple regulations",
      "Technology-driven compliance calendar and tracking system",
      "Experienced team with cross-functional regulatory knowledge",
      "Proactive approach preventing penalties and notices",
      "Scalable services growing with your business needs"
    ]
  },
  {
    slug: "valuation-services",
    icon: BarChart3,
    name: "Valuation Services",
    tagline: "Accurate Valuations, Informed Decisions",
    desc: "Precise business and share valuation services for regulatory, financial reporting, and strategic purposes.",
    overview: [
      "Accurate business valuations are critical for transactions, financial reporting, regulatory compliance, and strategic decision-making. Our valuation practice provides independent and defensible valuation opinions using globally accepted methodologies tailored to Indian regulatory requirements.",
      "We perform valuations for various purposes including M&A transactions, share issuances under Companies Act and FEMA, tax compliance (Section 56(2)(x)), employee stock option plans, purchase price allocation, impairment testing, and dispute resolution before courts and tribunals.",
      "Our Registered Valuers combine deep financial expertise with industry knowledge to deliver valuation reports that withstand regulatory scrutiny and provide meaningful insights for decision-making."
    ],
    advantages: [
      { title: "Regulatory Compliance", description: "Valuations compliant with Companies Act, FEMA pricing guidelines, Income Tax Act, and SEBI regulations." },
      { title: "Multiple Methodologies", description: "Application of DCF, comparable company analysis, net asset value, and other appropriate methods for robust valuations." },
      { title: "Registered Valuers", description: "Reports issued by IBBI Registered Valuers ensuring regulatory acceptance and professional credibility." },
      { title: "Litigation Support", description: "Defensible valuation opinions for tax disputes, shareholder conflicts, and arbitration proceedings." },
      { title: "Transaction Support", description: "Fair value opinions, swap ratio determination, and purchase price allocation for M&A transactions." },
      { title: "ESOP Valuation", description: "Grant-date and fair value assessment of employee stock options for accounting and tax purposes." }
    ],
    process: [
      { step: 1, title: "Engagement & Scoping", description: "Understanding the purpose of valuation, applicable regulations, and specific requirements for the assignment." },
      { step: 2, title: "Data Collection", description: "Gathering financial statements, projections, industry data, and other information required for the valuation." },
      { step: 3, title: "Analysis & Methodology", description: "Selection and application of appropriate valuation methodologies with detailed assumptions and calculations." },
      { step: 4, title: "Quality Review", description: "Multi-level review of the valuation by senior professionals to ensure accuracy and defensibility." },
      { step: 5, title: "Report Delivery", description: "Issuance of a comprehensive valuation report with clear conclusions, assumptions, and supporting analysis." }
    ],
    whyChooseUs: [
      "IBBI Registered Valuers with extensive experience",
      "Multi-methodology approach for robust conclusions",
      "Track record of regulatory acceptance of our reports",
      "Industry expertise across manufacturing, technology, and services",
      "Quick turnaround without compromising quality"
    ]
  },
  {
    slug: "due-diligence",
    icon: ClipboardCheck,
    name: "Due Diligence",
    tagline: "Informed Investments, Managed Risks",
    desc: "In-depth financial and tax due diligence reviews for investment and acquisition decisions.",
    overview: [
      "Due diligence is a critical step in any investment or acquisition decision. Our due diligence services provide comprehensive financial and tax reviews that enable investors, acquirers, and lenders to make informed decisions based on a clear understanding of risks, opportunities, and potential deal-breakers.",
      "We conduct detailed analysis of financial statements, tax positions, contingent liabilities, related-party transactions, and compliance status. Our reports highlight key findings with quantified risk assessments and provide actionable insights for deal structuring and negotiation.",
      "Whether it's a full-scope buy-side due diligence, a vendor-assisted review, or a focused red-flag assessment, our experienced teams deliver thorough, timely, and commercially relevant due diligence reports."
    ],
    advantages: [
      { title: "Financial Due Diligence", description: "Analysis of quality of earnings, working capital trends, debt positions, and off-balance sheet items." },
      { title: "Tax Due Diligence", description: "Review of tax positions, pending assessments, contingent tax liabilities, and compliance history." },
      { title: "Deal Structuring Input", description: "Findings that directly inform purchase price adjustments, indemnity provisions, and deal terms." },
      { title: "Red Flag Assessment", description: "Quick-turnaround focused reviews highlighting critical issues and potential deal-breakers." },
      { title: "Vendor Due Diligence", description: "Sell-side due diligence reports to facilitate smoother transactions and build buyer confidence." },
      { title: "Quantified Risk Analysis", description: "Clear quantification of identified risks with impact assessment for informed decision-making." }
    ],
    process: [
      { step: 1, title: "Scoping & Planning", description: "Definition of due diligence scope, key focus areas, timelines, and data requirements based on deal specifics." },
      { step: 2, title: "Data Room Review", description: "Systematic review of financial data, contracts, tax records, and other documents in the virtual data room." },
      { step: 3, title: "Management Sessions", description: "Structured interactions with target management to clarify findings and understand business context." },
      { step: 4, title: "Analysis & Reporting", description: "Detailed analysis with quantified findings, risk ratings, and clear presentation of key issues." },
      { step: 5, title: "Deal Support", description: "Post-report advisory on deal structuring, SPA provisions, and completion accounts preparation." }
    ],
    whyChooseUs: [
      "Extensive M&A transaction experience across deal sizes",
      "Commercially-oriented findings focused on deal impact",
      "Rapid mobilization and flexible team structures",
      "Clear, concise reporting focused on decision-making",
      "Post-deal integration and compliance transition support"
    ]
  },
  {
    slug: "investment-advisory",
    icon: TrendingUp,
    name: "Investment Advisory",
    tagline: "Building Wealth Through Informed Strategies",
    desc: "Personalized investment planning and advisory services to achieve long-term financial goals.",
    overview: [
      "Sound investment decisions are the foundation of long-term wealth creation. Our investment advisory services help individuals and businesses develop comprehensive investment strategies aligned with their financial goals, risk appetite, and time horizons.",
      "We provide advisory on portfolio construction, asset allocation, tax-efficient investment structures, and retirement planning. Our approach is holistic—considering tax implications, liquidity needs, and estate planning alongside return optimization.",
      "Whether you are a business owner looking to deploy surplus funds, a professional planning for retirement, or an NRI seeking to invest in India, our personalized advisory ensures your investments work harder for you."
    ],
    advantages: [
      { title: "Personalized Planning", description: "Customized investment strategies based on your specific financial goals, risk tolerance, and investment horizon." },
      { title: "Tax-Efficient Investing", description: "Structuring investments to minimize tax impact through optimal use of exemptions, deductions, and tax-free instruments." },
      { title: "Portfolio Diversification", description: "Expert guidance on asset allocation across equity, debt, real estate, and alternative investments." },
      { title: "Retirement Planning", description: "Comprehensive planning for financial independence including NPS optimization, pension strategies, and corpus management." },
      { title: "Risk Management", description: "Assessment and mitigation of investment risks through proper diversification and hedging strategies." },
      { title: "Regular Monitoring", description: "Periodic portfolio reviews and rebalancing recommendations to stay aligned with your evolving goals." }
    ],
    process: [
      { step: 1, title: "Financial Assessment", description: "Comprehensive review of your current financial position, assets, liabilities, and cash flows." },
      { step: 2, title: "Goal Setting", description: "Definition of short-term, medium-term, and long-term financial goals with quantified targets." },
      { step: 3, title: "Strategy Development", description: "Design of an investment strategy covering asset allocation, product selection, and tax optimization." },
      { step: 4, title: "Implementation", description: "Execution support including product selection, documentation, and investment structuring." },
      { step: 5, title: "Review & Rebalancing", description: "Periodic portfolio reviews, performance tracking, and rebalancing to remain aligned with goals." }
    ],
    whyChooseUs: [
      "Holistic approach combining investment and tax advisory",
      "Independent advisory without product distribution conflicts",
      "Experienced team with deep financial planning expertise",
      "Technology-enabled portfolio tracking and reporting",
      "Long-term relationship focused approach"
    ]
  },
  {
    slug: "business-consulting",
    icon: Users,
    name: "Business Consulting",
    tagline: "Driving Growth, Optimizing Performance",
    desc: "Strategic business consulting to drive growth, efficiency, and organizational excellence.",
    overview: [
      "In today's competitive business environment, organizations need strategic guidance to navigate complex challenges, seize growth opportunities, and achieve operational excellence. Our business consulting services provide the insights and frameworks needed to transform your business and achieve sustainable success.",
      "We work with businesses across growth stages to address challenges in strategy formulation, operational efficiency, financial management, market expansion, and organization design. Our consulting approach is grounded in data-driven analysis and practical experience.",
      "From business plan development and financial modelling to process reengineering and performance management, our consultants bring a blend of strategic vision and execution capability to help your business achieve its full potential."
    ],
    advantages: [
      { title: "Strategic Planning", description: "Development of clear business strategies, growth roadmaps, and action plans aligned with market opportunities." },
      { title: "Financial Modelling", description: "Sophisticated financial models for business planning, feasibility analysis, and investor presentations." },
      { title: "Process Optimization", description: "Identification and elimination of operational inefficiencies to reduce costs and improve productivity." },
      { title: "Market Entry Strategy", description: "Research-backed strategies for entering new markets, launching products, and expanding operations." },
      { title: "Performance Management", description: "Design and implementation of KPI frameworks, balanced scorecards, and performance dashboards." },
      { title: "Business Transformation", description: "End-to-end support for digital transformation, organizational restructuring, and change management." }
    ],
    process: [
      { step: 1, title: "Discovery & Diagnosis", description: "In-depth analysis of your business, industry, competitive landscape, and internal capabilities." },
      { step: 2, title: "Strategy Formulation", description: "Development of strategic options and recommendations validated through financial modelling and scenario analysis." },
      { step: 3, title: "Implementation Planning", description: "Detailed action plans with timelines, resource requirements, KPIs, and accountability frameworks." },
      { step: 4, title: "Execution Support", description: "Hands-on support during implementation including project management, change management, and capability building." },
      { step: 5, title: "Impact Measurement", description: "Monitoring of results against defined KPIs and iterative refinement of strategies for sustained improvement." }
    ],
    whyChooseUs: [
      "Deep understanding of Indian business and regulatory landscape",
      "Cross-industry consulting experience across sectors",
      "Data-driven approach with actionable recommendations",
      "Seamless integration of consulting with tax and financial advisory",
      "Long-term partnership approach focused on measurable outcomes"
    ]
  }
];
