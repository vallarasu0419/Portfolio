// ============================================================
// SINGLE SOURCE OF TRUTH FOR ALL PORTFOLIO CONTENT
// Keep this file in sync with the resume and LinkedIn profile.
// public/index.html holds the same SEO values for crawlers —
// update both if anything here changes.
// ============================================================

const currentTitle = "Software Developer (Team Lead – iFillip)";

export const profile = {
  name: "Vikkaraman V",
  firstName: "Vikkaraman",
  role: "Software Developer & Team Lead",
  stack: ["React.js", "Node.js", "React Native", "MySQL"],
  valueLine:
    "Building AI-powered SaaS (Gemini, Razorpay) used by 5,000+ daily users · 3.5+ years",
  headline:
    "Software Developer & Team Lead | React.js · Node.js · React Native · MySQL | Building AI-powered SaaS (Gemini, Razorpay) used by 5,000+ daily users | 3.5+ years",
  summary: [
    "Full Stack Developer with 3.5+ years of experience building and shipping production web and mobile applications with React.js, Node.js, Express.js and MySQL.",
    "Currently leading a 6-member team on an AI-enabled school management SaaS serving 5,000+ daily active users, with integrations including Google Gemini, Razorpay, Firebase and IoT biometric devices.",
    "Previously led end-to-end delivery of a React / React Native appointment-booking platform on AWS that became the company's key revenue product.",
  ],
  location: "Chennai, Tamil Nadu, India",
  shortLocation: "Chennai, India",
  email: "vallarasu0410@gmail.com",
  phone: "+91 6383797129",
  phoneHref: "tel:+916383797129",
  links: {
    linkedin: "https://www.linkedin.com/in/vikkaraman-v-55b248225/",
    github: "https://github.com/vallarasu0419",
    // TODO(Vikkaraman): update if custom domain
    portfolio: "https://vikkaraman.vercel.app/",
  },
  // Existing Google Drive direct-download link.
  // TODO(Vikkaraman): optionally add the final PDF as /public/Vikkaraman_V_Resume.pdf and set resumeUrl to "/Vikkaraman_V_Resume.pdf"
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1AdfDhy6prXmDI3lbc9obCDapoHnhFBLP",
  resumeFileName: "Vikkaraman_V_Resume.pdf",
  // TODO(Vikkaraman): confirm availability / notice period
  availability: "Open to Full Stack / React.js / Node.js roles",
};

export const highlights = [
  { value: "3.5+", label: "Years Experience" },
  { value: "5,000+", label: "Daily Active Users" },
  { value: "1M", label: "API Requests / Day" },
  { value: "99.9%", label: "Uptime on AWS" },
];

export const awards = [
  {
    title: "Quarterly Best Performer Award",
    org: "Bharat Clouds",
    period: "Oct–Dec 2025",
  },
];

export const experience = [
  {
    company: "Bharat Clouds Private Limited",
    title: currentTitle,
    location: "Chennai",
    period: "Feb 2025 — Present",
    award: "Quarterly Best Performer Award (Oct–Dec 2025)",
    projects: [
      {
        name: "iFillip — AI-Powered School Management SaaS",
        link: "https://ifillip.com",
        bullets: [
          "Lead a 6-member team: client requirements, sprint planning in Jira, task assignment, code review and mentoring, while owning React UI, API integration and core backend logic.",
          "Built multi-language modules (attendance, exams, leave, events, holiday calendar, academic-year rollover) for 5,000+ daily active users across 3 schools.",
          "Integrated Google Gemini API for lesson plans, assessments, OCR text extraction and exam-performance insights; Razorpay for fees and subscriptions with webhook signature verification.",
          "JWT authentication with RBAC for five roles, Firebase push notifications, 10 IoT biometric devices for real-time attendance, and REST APIs behind a load balancer handling 1M requests/day.",
        ],
        tech: ["React.js", "Node.js", "Express.js", "MySQL"],
      },
      {
        name: "AIASA — Anna IAS Academy Platform",
        link: "https://annaiasacademy.com",
        bullets: [
          "Full-stack learning and e-commerce platform serving 5,000+ students.",
          "Responsive React frontend with Redux; Express REST APIs for JWT auth, exam scheduling and e-commerce orders.",
          "Microsoft Teams API for class scheduling, ST Courier API webhook callbacks for live shipment tracking, and Socket.IO real-time notifications.",
        ],
        tech: ["React.js", "Redux", "Node.js", "Express.js", "MySQL", "Socket.IO"],
      },
    ],
  },
  {
    company: "Cotyledon Technologies Private Limited",
    title: "Software Developer",
    location: "Chennai",
    period: "Dec 2022 — Dec 2024",
    projects: [
      {
        name: "Pick Your Slot — Appointment Booking Platform",
        link: "https://pickyourslot.com",
        bullets: [
          "Led full-stack development and deployment of a web and mobile booking platform for salons, gyms and service businesses; it became the company's key revenue product (200+ businesses, 1,500+ bookings/month).",
          "Led a team of 4 developers: code reviews, sprint planning and on-schedule releases in Agile/Scrum.",
          "Built the React web app and React Native mobile app from Figma designs, plus Node.js/Express REST APIs for booking, user management and Razorpay payments.",
          "Deployed on AWS EC2 and S3 with 99.9% uptime and zero-downtime deployments; cut page load time by 35% with route-based code splitting and lazy loading.",
        ],
        tech: ["React.js", "React Native", "Node.js", "Express.js", "MySQL", "AWS"],
      },
    ],
  },
];

export const projects = [
  {
    title: "iFillip",
    subtitle: "AI-Powered School Management SaaS",
    context:
      "Schools needed one platform for attendance, exams, fees and parent communication, with AI help for teachers.",
    role: "Team Lead (6 members) & full-stack developer — Bharat Clouds",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Google Gemini API",
      "Razorpay",
      "Firebase Cloud Messaging",
      "IoT Biometric Devices",
    ],
    contributions: [
      "Multi-language modules: attendance, exams, leave, events, holiday calendar, academic-year rollover.",
      "Gemini API for lesson plans, assessments, OCR text extraction and exam-performance insights.",
      "Razorpay fees and subscriptions with webhook signature verification and reconciliation.",
      "JWT + RBAC for five roles; cron jobs for attendance sync, notifications and reports.",
    ],
    outcomes: [
      "5,000+ daily active users across 3 schools",
      "1M API requests/day behind a load balancer",
      "10 IoT biometric devices integrated",
    ],
    link: "https://ifillip.com",
    color: "#f97316",
  },
  {
    title: "AIASA",
    subtitle: "Anna IAS Academy Platform",
    context:
      "An IAS academy needed admissions, online classes, exams and book orders with delivery tracking in one place.",
    role: "Full-stack developer — Bharat Clouds",
    tech: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.IO",
      "Microsoft Teams API",
      "ST Courier API",
    ],
    contributions: [
      "Responsive React + Redux frontend.",
      "Express REST APIs for JWT auth, exam scheduling and e-commerce orders.",
      "Microsoft Teams API for class scheduling; ST Courier webhook callbacks for live shipment tracking.",
      "Socket.IO real-time notifications.",
    ],
    outcomes: ["Serving 5,000+ students"],
    link: "https://annaiasacademy.com",
    color: "#3b82f6",
  },
  {
    title: "Pick Your Slot",
    subtitle: "Appointment Booking Platform",
    context:
      "Salons, gyms and service businesses needed web and mobile booking with online payments.",
    role: "Led full-stack delivery and a team of 4 — Cotyledon Technologies",
    tech: [
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MySQL",
      "AWS (EC2, S3)",
      "Razorpay",
    ],
    contributions: [
      "React web app and React Native mobile app built from Figma designs.",
      "Node.js/Express REST APIs for booking, user management and Razorpay payments.",
      "AWS EC2/S3 deployment with zero-downtime releases.",
      "Route-based code splitting and lazy loading.",
    ],
    outcomes: [
      "Company's key revenue product",
      "200+ businesses · 1,500+ bookings/month",
      "99.9% uptime · 35% faster page load",
    ],
    link: "https://pickyourslot.com",
    color: "#8b5cf6",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Redux", "React Native", "Material UI", "Bootstrap"],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "Socket.IO",
      "Cron Jobs",
    ],
  },
  { group: "Database", items: ["MySQL"] },
  {
    group: "Integrations",
    items: [
      "Google Gemini API",
      "Razorpay",
      "Firebase Cloud Messaging",
      "Microsoft Teams API",
      "ST Courier API",
      "Webhooks",
      "IoT Biometric Devices",
    ],
  },
  {
    group: "Cloud & Tools",
    items: ["AWS (EC2, S3)", "Git", "GitHub", "CI/CD", "Postman", "Jira", "Figma"],
  },
  { group: "Practices", items: ["Agile/Scrum", "Code Reviews", "Sprint Planning"] },
];

export const education = [
  {
    degree: "B.Tech, Information Technology",
    institution: "Jeppiaar SRR Engineering College, Chennai",
    period: "2018 — 2022",
    grade: "CGPA: 7.4",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Jawahar Matric Hr Sec School",
    period: "2018",
    grade: "",
  },
  {
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "Jawahar Matric Hr Sec School",
    period: "2016",
    grade: "",
  },
];

export const navLinks = [
  { to: "about", label: "About" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "skills", label: "Skills" },
  { to: "contact", label: "Contact" },
];
