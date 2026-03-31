import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Bharat Clouds Private Limited",
    period: "Feb 2025 — Present",
    projects: [
      {
        name: "iFillip — IoT-Powered School Management Platform",
        link: "https://bcpl.ifillip.com/",
        description: [
          "Developed a comprehensive cloud-based school management platform with Microservices Architecture using React.js and Node.js, streamlining academic and administrative processes.",
          "Built multi-lingual modules including staff & student attendance, exam management, holiday calendars, event scheduling, leave management, and academic year rollover.",
          "Integrated IoT-enabled Biometric Attendance Devices and Access Control Systems for real-time, accurate attendance tracking.",
          "Engineered RESTful APIs for complex operations including student enrollment, exam scheduling, fee management, and real-time data synchronization.",
          "Implemented role-based access control for administrators, teachers, students, and parents with secure, transparent data dissemination.",
          'Designed scalable, cloud-enabled multi-layered architecture with strong data security features for paperless "Go Green" workflows.',
        ],
        tech: ["React.js", "Node.js", "REST APIs", "IoT", "MySQL", "MongoDB"],
      },
      {
        name: "AIASA — IAS Academy Web Application",
        link: "https://annaiasacademy.com/",
        description: [
          "Developed and deployed a full-stack web application for IAS Academy students to manage exam admissions, attend online classes, and take model exams, serving 5000+ active students.",
          "Built the complete frontend using React.js with responsive UI components and state management using Redux, improving user engagement.",
          "Engineered RESTful APIs and backend services with Node.js and Express.js for user authentication (JWT), exam scheduling, and e-commerce order processing.",
          "Integrated Microsoft Teams API for seamless online class scheduling and live session management.",
          "Implemented ST Courier integration with callback APIs for real-time logistics tracking with home delivery and branch pickup.",
          "Integrated Socket.IO for real-time push notifications on exam schedules, class timings, and order status.",
        ],
        tech: [
          "React.js",
          "Redux",
          "Node.js",
          "Express.js",
          "MySQL",
          "Socket.IO",
          "MS Teams API",
        ],
      },
    ],
  },
  {
    role: "Software Developer",
    company: "Cotyledon Technologies Private Limited",
    period: "Dec 2022 — Dec 2024",
    projects: [
      {
        name: "Pick Your Slot — Cloud-Based Appointment Scheduling Platform",
        link: "https://pickyourslot.com/",
        description: [
          'Led end-to-end development and deployment of "Pick Your Slot," a web and mobile application for salons, gyms, and service businesses — the organization\'s key revenue product.',
          "Managed a team of 5 web developers, conducting code reviews, sprint planning, and ensuring on-time delivery across multiple release cycles.",
          "Built dynamic, responsive interfaces using React.js and React Native for seamless cross-platform web and mobile experiences.",
          "Developed secure backend REST APIs using Node.js and Express.js for appointment booking, user management, and payment processing.",
          "Deployed and maintained applications on AWS (EC2, S3), achieving 99.9% uptime with zero-downtime deployments.",
          "Optimized application performance with code splitting and lazy loading, reducing page load time by 35%.",
        ],
        tech: [
          "React.js",
          "React Native",
          "Node.js",
          "Express.js",
          "AWS",
          "MySQL",
        ],
      },
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">{`// Career`}</span>
          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey building impactful products
          </p>
        </motion.div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Timeline line */}
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "24px",
              top: 0,
              bottom: 0,
              width: "2px",
              background: "var(--border)",
            }}
          />

          {experiences.map((exp, expIdx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: expIdx * 0.2, duration: 0.6 }}
              style={{
                position: "relative",
                paddingLeft: "64px",
                marginBottom: "48px",
              }}
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: expIdx * 0.2 + 0.3, type: "spring" }}
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "6px",
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "var(--bg-primary)",
                  border: "3px solid var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <FiBriefcase
                  style={{ fontSize: "0.6rem", color: "var(--accent)" }}
                />
              </motion.div>

              {/* Role Header */}
              <div style={{ marginBottom: "6px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {exp.role}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    color: "var(--accent)",
                    fontWeight: 500,
                  }}
                >
                  {exp.company}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Projects */}
              {exp.projects.map((proj, projIdx) => (
                <motion.div
                  key={proj.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: expIdx * 0.2 + projIdx * 0.15 + 0.4,
                    duration: 0.5,
                  }}
                  style={{
                    marginTop: "20px",
                    padding: "24px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    transition: "all 0.3s ease",
                  }}
                  whileHover={{
                    borderColor: "var(--border-hover)",
                    boxShadow: "var(--shadow-glow)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "14px",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {proj.name}
                    </h4>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--accent)", fontSize: "0.9rem" }}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      marginBottom: "16px",
                    }}
                  >
                    {proj.description.map((item, k) => (
                      <li
                        key={k}
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.7,
                          marginBottom: "8px",
                          paddingLeft: "16px",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "10px",
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "var(--accent)",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div
                    style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                  >
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "4px 12px",
                          borderRadius: "100px",
                          background: "var(--accent-glow)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--accent)",
                          letterSpacing: "0.3px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
