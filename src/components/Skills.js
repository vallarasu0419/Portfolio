import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiCloud,
  FiTool,
  FiUsers,
} from "react-icons/fi";

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: <FiMonitor />,
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "React Native", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "Redux", level: 88 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Material UI", level: 85 },
      { name: "Bootstrap", level: 82 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: <FiServer />,
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 93 },
      { name: "Microservices", level: 85 },
      { name: "Socket.IO", level: 80 },
      { name: "JWT Auth", level: 88 },
      { name: "WebSockets", level: 78 },
      { name: "MS Teams API", level: 75 },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: <FiDatabase />,
    skills: [
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 82 },
    ],
  },
  {
    id: "devops",
    label: "Cloud & DevOps",
    icon: <FiCloud />,
    skills: [
      { name: "AWS (EC2, S3)", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD", level: 78 },
      { name: "Agile / Scrum", level: 88 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    icon: <FiTool />,
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 90 },
      { name: "Jira", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Webpack", level: 78 },
      { name: "npm", level: 90 },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    icon: <FiUsers />,
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Agile Methodology", level: 88 },
      { name: "Problem Solving", level: 92 },
      { name: "Collaboration", level: 90 },
      { name: "Communication", level: 88 },
      { name: "Time Management", level: 85 },
    ],
  },
];

const Skills = () => {
  const [active, setActive] = useState("frontend");
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const currentCategory = categories.find((c) => c.id === active);

  return (
    <section
      id="skills"
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
          <span className="section-label">{`// Tech Stack`}</span>
          <h2 className="section-title">
            Skills & <span>Expertise</span>
          </h2>
          <p className="section-subtitle">
            Technologies I work with to build modern, scalable applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "48px",
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(cat.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "var(--radius-md)",
                border: "1px solid",
                borderColor:
                  active === cat.id ? "var(--accent)" : "var(--border)",
                background:
                  active === cat.id ? "var(--accent-glow)" : "var(--bg-card)",
                color:
                  active === cat.id ? "var(--accent)" : "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {cat.icon}
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "16px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {currentCategory.skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                style={{
                  padding: "20px 24px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      color: "var(--accent)",
                      fontWeight: 600,
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  style={{
                    height: "6px",
                    borderRadius: "3px",
                    background: "var(--bg-tertiary)",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      inView ? { width: `${skill.level}%` } : { width: 0 }
                    }
                    transition={{
                      delay: 0.5 + i * 0.08,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    style={{
                      height: "100%",
                      borderRadius: "3px",
                      background: "var(--gradient-accent)",
                      boxShadow: "0 0 10px rgba(249,115,22,0.3)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
