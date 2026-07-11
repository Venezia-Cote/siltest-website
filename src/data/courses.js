// Academy course data. Sourced from the SilTest course pages, rewritten in the site
// voice, with past employers removed. Prices are intentionally omitted until confirmed.
export const courses = [
  {
    slug: "jmp-yieldoptix",
    num: "01",
    title: "JMP and YieldOptiX for Semiconductor Data Analysis",
    tagline: "Unlock test and yield insights like never before",
    overview:
      "A three-day, hands-on course on JMP and YieldOptiX. Learn to analyze semiconductor test and yield data, speed up debug, and make better decisions. It prepares you to work as a certified yield analyst.",
    upcoming: false,
    glance: { duration: "3 days, 3 hours a day", format: "Theory plus guided labs", delivery: "In person or online", language: "English" },
    audience: [
      "Test engineers and technicians",
      "Quality assurance staff in chip manufacturing",
      "Product and yield engineers",
      "New graduates moving into test and yield",
      "Managers who want to read the data themselves",
    ],
    objectives: [
      "The fundamentals of STDF data and yield metrics",
      "Core JMP features for test and yield exploration",
      "Using Excel and JMP together",
      "YieldOptiX to speed up debug, detect anomalies, and visualize yield",
      "EasyLaunch for fast STDF loading",
      "Failing bins, wafer exploration, and Pareto analysis",
      "Machine learning features for deeper insight and automation",
      "Clustering and ML for root cause",
      "Automating screening, reporting, and limit simulation",
    ],
    curriculum: [
      { title: "Day 1  Fundamentals of yield and test data with JMP and STDF", items: [
        "STDF, datalogs, and the test stages (wafer sort, final test, system-level test)",
        "JMP essentials: distributions, maps, and binning",
        "Filtering, grouping, and drill-down",
        "Building clear summary reports",
      ]},
      { title: "Day 2  Rapid yield improvement with YieldOptiX", items: [
        "EasyLaunch and session management",
        "Interactive wafer maps and bin distribution",
        "Test Explorer and bin Pareto",
        "Screen and Release for lot disposition",
        "Global Test Limits control and limit simulation",
        "Excel export with colors",
      ]},
      { title: "Day 3  Advanced analytics and machine learning", items: [
        "Drift analysis across lots and time",
        "Clustering to find hidden fail patterns",
        "Decision trees and K-Nearest Neighbours for root cause",
        "Real-time process window characterization",
        "Automated multi-site reporting",
        "A production-versus-returns case study",
      ]},
    ],
    instructor:
      "Led by a senior executive with sixteen years of experience in JMP, fab operations, semiconductor process technology, statistical data analysis, and quality improvement, including senior roles at leading semiconductor companies.",
    certificate:
      "Participants who complete the course and pass a short multiple-choice assessment receive the SilTest Certified Yield Analyst credential.",
    faq: [
      { q: "Do I need a JMP license?", a: "Yes. You can use the free JMP viewer or your company license. We help you get set up before the course." },
      { q: "Will we work on real data?", a: "Yes, on demonstration or sanitized STDF data, so you practice on realistic cases without exposing anything confidential." },
      { q: "Do I need to program?", a: "No. The work is visual and point-and-click. Optional scripting is shown for those who want it." },
      { q: "Can my whole team join?", a: "Yes. Team and corporate rates are available. Contact us and we will arrange it." },
    ],
  },
  {
    slug: "basics-of-semiconductor-testing",
    num: "02",
    title: "Basics of Semiconductor Testing",
    tagline: "Explore the world of chip testing",
    overview:
      "A foundational course on why chips are tested and what it takes to become a test engineer. It covers the role of testing in reliability, performance, and meeting industry standards, and the paths into a test career.",
    upcoming: false,
    glance: { duration: "4 days, 3 hours a day", format: "Theory plus practical examples", delivery: "In person or online", language: "English" },
    audience: [
      "New hires in the semiconductor industry",
      "Junior engineers and technicians moving into testing",
      "Quality assurance and production staff",
      "Students and recent graduates in electronics, physics, or engineering",
      "Professionals moving in from related fields",
    ],
    objectives: [
      "How chips are developed and manufactured",
      "Why testing matters for quality, reliability, and manufacturability",
      "The types of test: wafer, final, and system-level",
      "Key test instruments and platforms",
      "Test data, STDF, and binning",
      "Careers and roles in test engineering",
    ],
    curriculum: [
      { title: "Introduction to semiconductor testing", items: [
        "The product lifecycle and how chips are made",
        "The purpose of test: yield, quality, and compliance",
        "Types of test: wafer sort, final test, system-level test, and burn-in",
        "Key instruments: ATE, probers, and handlers",
      ]},
      { title: "Testing methods and career outlook", items: [
        "DC, AC, and functional test methods",
        "Test data basics: STDF, binning, and dashboards",
        "The cost of test and how it affects productivity",
        "Careers in test: test engineer, product engineer, DfT, and debug",
        "An expert panel, open questions, and certification",
      ]},
    ],
    instructor:
      "Led by industry experts with decades of experience in semiconductor product development and testing. Between them they have built teams and developed more than a hundred products at leading semiconductor companies.",
    certificate:
      "Participants receive a Semiconductor Test Foundation certificate after a short multiple-choice assessment at the end of the course.",
    faq: [
      { q: "Is this course only for students?", a: "It is aimed mainly at students and newcomers, but working professionals who want a solid grounding are welcome too." },
      { q: "Do I need testing experience?", a: "No. A general engineering or science background helps, but no prior design or testing experience is required." },
      { q: "Will I get a certificate?", a: "Yes, a Semiconductor Test Foundation certificate on completion." },
    ],
  },
  {
    slug: "chip-testing-using-ates",
    num: "03",
    title: "Chip Testing Using ATEs",
    tagline: "Master ATE platforms for real-world chip testing",
    overview:
      "An immersive program that gives engineers and technicians practical skills on the leading ATE platforms. Hands-on work across Advantest, Teradyne, and Chroma, covering both the hardware and the software of real chip testing.",
    upcoming: false,
    glance: { duration: "2 weeks intensive, or 8 weeks flexible", format: "Hands-on labs", delivery: "In person or online", language: "English" },
    audience: [
      "Test engineers and technicians",
      "Quality assurance staff in chip manufacturing",
      "Production engineers working on test process optimization",
      "New graduates and professionals moving into testing",
      "Engineers learning Advantest, Teradyne, or Chroma",
      "Managers overseeing test operations",
    ],
    objectives: [
      "Understand the architecture of the major ATE platforms",
      "Create, debug, and validate production test programs",
      "Use shmoo plots, margin analysis, and diagnostics",
      "Configure digital, analog, and RF test modules",
      "Apply real-world debugging workflows",
    ],
    curriculum: [
      { title: "Week 1  Foundations and platform familiarization", items: [
        "ATE architecture across V93000, UltraFLEX, ETS-800, T2000, and Chroma",
        "Test flow concepts and execution",
        "Test pattern creation, with STIL and WGL basics",
        "Instrument integration and calibration",
        "Simulation, debugging, and test setup",
      ]},
      { title: "Week 2  Test program development, debug, and analysis", items: [
        "Test program development: strategy, vector generation, execution, and validation",
        "Data analysis and debug: fault diagnosis, yield analysis, root cause, and SPC",
        "Yield optimization and production handoff: test time reduction and correlation",
        "Real case studies and a final certification assessment",
      ]},
    ],
    instructor:
      "Delivered by SilTest senior ATE engineers and guest instructors with deep expertise across Advantest, Teradyne, Chroma, and NI. The team has built and debugged test programs for more than a hundred production chips across many clients.",
    certificate:
      "Participants who finish the program and pass the assessment receive a SilTest Academy certificate.",
    faq: [
      { q: "Do I need access to an ATE machine?", a: "No. We provide simulations and remote or facility-based access to real equipment, so you get hands-on practice either way." },
      { q: "Is this an official vendor certification?", a: "No. The course is independent and gives a SilTest certificate. It teaches the platforms without being tied to any one vendor." },
      { q: "Can you run this for my team?", a: "Yes. A private corporate version can be tailored to your equipment and flows." },
    ],
  },
  {
    slug: "dft-for-managers",
    num: "04",
    title: "DfT for Managers",
    tagline: "Build smarter test strategies",
    overview:
      "A two-day course that gives people and program managers a strategic and technical grasp of Design for Test and the wider Design for Excellence ideas. Learn to work well with design and test teams, weigh trade-offs, and make informed decisions. Delivered on-site or remotely, structured around your own workflows and tools.",
    upcoming: true,
    glance: { duration: "2 days, 4 hours a day", format: "Lecture, walkthroughs, and case studies", delivery: "On-site or remote", language: "English" },
    audience: [
      "Engineering managers",
      "Program managers",
      "Technical project leads",
      "Product owners",
    ],
    objectives: [
      "DfT techniques for semiconductor devices",
      "Why DfT matters in product development",
      "The relevant industry standards, including IEEE 1149.1, 1500, and 1687",
      "Managing ATPG, MBIST, scan, and boundary scan",
      "Working effectively with product development teams",
      "Hands-on case discussion",
    ],
    curriculum: [
      { title: "Day 1  DfT concepts and strategic relevance", items: [
        "Introduction to DfT and Design for Excellence",
        "Why DfT matters in SoC development",
        "The business drivers: yield, test cost, time to market, and quality",
        "An overview of DfT techniques: scan, BIST, MBIST, JTAG, and boundary scan",
        "DfT across the lifecycle, coverage, and fault models",
        "Architecture trade-offs and roles and responsibilities",
      ]},
      { title: "Day 2  Execution, challenges, and management best practices", items: [
        "DfT project planning",
        "DfT flow and tools",
        "ATE and production test considerations",
        "The cost and return of DfT",
        "Quality metrics and common pitfalls",
        "Managing cross-team collaboration, then a final panel and action plan",
      ]},
    ],
    deliverables: [
      "A DfT manager's quick guide",
      "A sample project timeline and RACI chart",
      "A curated list of industry-standard tools and vendors",
      "Milestone checklists for pre-silicon, tape-out, and post-silicon",
    ],
    instructor:
      "Led by a DfT expert with more than twenty-five years in product development at leading semiconductor companies, who has run chip development projects across Europe, the USA, and Asia, and trained many engineers and managers in DfT.",
    certificate:
      "Participants receive a DfT for Managers credential, certified by SilTest, after a short assessment.",
    faq: [
      { q: "Is this online or in person?", a: "Both. It runs on-site at your company or remotely, whichever suits your team." },
      { q: "How technical is it?", a: "It is built for technical managers. Some familiarity with product development helps, but it does not assume a DfT engineering background." },
      { q: "Do you offer team pricing?", a: "Yes. Corporate and team rates are available on request." },
    ],
  },
];
