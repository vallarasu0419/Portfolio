import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiLayers } from "react-icons/fi";

const projects = [
  {
    title: "iFillip",
    subtitle: "IoT-Powered School Management Platform",
    description:
      "Comprehensive cloud-based school ERP with multi-lingual support, IoT biometric attendance, exam management, leave and event modules, online applications, and academic year rollover. Designed with microservices architecture and multi-layered security for scalable institutional deployment.",
    tech: [
      "React.js",
      "Node.js",
      "REST APIs",
      "IoT",
      "Biometric",
      "MySQL",
      "MongoDB",
    ],
    link: "https://bcpl.ifillip.com/",
    category: "fullstack",
    color: "#f97316",
  },
  {
    title: "AIASA",
    subtitle: "IAS Academy Platform",
    description:
      "End-to-end IAS Academy platform with admission management, online classes via MS Teams, model exams, e-commerce module for book ordering, and real-time notifications using Socket.IO with ST Courier callback API integration. Serving 5000+ active students.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.IO",
      "MS Teams API",
      "Redux",
    ],
    link: "https://annaiasacademy.com/",
    category: "fullstack",
    color: "#3b82f6",
  },
  {
    title: "Pick Your Slot",
    subtitle: "Cloud-Based Appointment Scheduling",
    description:
      "Cloud-based scheduling platform for salons, gyms, and car washes with cross-platform web and mobile apps. Features real-time slot booking, user authentication, payment integration, and AWS deployment with 99.9% uptime. Led a team of 5 developers.",
    tech: ["React.js", "React Native", "Node.js", "AWS (EC2, S3)", "MySQL"],
    link: "https://pickyourslot.com/",
    category: "fullstack",
    color: "#8b5cf6",
  },
];

const filters = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="section"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">{`// Portfolio`}</span>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications I've built from the ground up
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "48px",
          }}
        >
          {filters.map((f) => (
            <motion.button
              key={f.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(f.id)}
              style={{
                padding: "10px 24px",
                borderRadius: "var(--radius-md)",
                border: "1px solid",
                borderColor:
                  activeFilter === f.id ? "var(--accent)" : "var(--border)",
                background:
                  activeFilter === f.id
                    ? "var(--accent-glow)"
                    : "var(--bg-card)",
                color:
                  activeFilter === f.id
                    ? "var(--accent)"
                    : "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "24px",
            }}
            className="projects-grid"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -8, boxShadow: "var(--shadow-lg)" }}
                style={{
                  borderRadius: "var(--radius-lg)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  cursor: "default",
                }}
              >
                {/* Project header bar */}
                <div
                  style={{
                    height: "6px",
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
                  }}
                />

                <div style={{ padding: "28px" }}>
                  {/* Icon + Title */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "var(--radius-md)",
                          background: `${project.color}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "16px",
                          color: project.color,
                          fontSize: "1.3rem",
                        }}
                      >
                        <FiLayers />
                      </div>
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.3rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          marginBottom: "4px",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          color: project.color,
                          letterSpacing: "0.3px",
                        }}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            border: "1px solid var(--border)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-secondary)",
                            fontSize: "0.9rem",
                          }}
                        >
                          <FiExternalLink />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      marginBottom: "20px",
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "4px 10px",
                          borderRadius: "100px",
                          background: "var(--bg-tertiary)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          color: "var(--text-muted)",
                          letterSpacing: "0.3px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
