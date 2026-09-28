import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiLayers, FiLock } from "react-icons/fi";
import { projects } from "../data/portfolio";

const labelStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.72rem",
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "6px",
};

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="projects"
      className="section"
      ref={ref}
      aria-labelledby="projects-heading"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">{`// Case Studies`}</span>
          <h2 id="projects-heading" className="section-title">
            Featured <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Production products with real users.
          </p>
          <p
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              marginTop: "12px",
              fontSize: "0.85rem",
              color: "var(--text-muted)",
            }}
          >
            <FiLock aria-hidden="true" />
            Source code is proprietary, so each project links to its live site.
          </p>
        </motion.div>

        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "24px",
            listStyle: "none",
          }}
        >
          {projects.map((project, i) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              style={{
                borderRadius: "var(--radius-lg)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Project header bar */}
              <div
                aria-hidden="true"
                style={{
                  height: "6px",
                  background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
                }}
              />

              <article
                style={{
                  padding: "clamp(20px, 4vw, 28px)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  flex: 1,
                }}
              >
                {/* Icon + Title */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div
                    aria-hidden="true"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "var(--radius-md)",
                      background: `${project.color}1f`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: project.color,
                      fontSize: "1.3rem",
                      flexShrink: 0,
                    }}
                  >
                    <FiLayers />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: "0.93rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                  {project.context}
                </p>

                <div>
                  <h4 style={labelStyle}>My role</h4>
                  <p style={{ fontSize: "0.93rem", color: "var(--text-primary)", fontWeight: 500 }}>
                    {project.role}
                  </p>
                </div>

                <div>
                  <h4 style={labelStyle}>Key work</h4>
                  <ul style={{ paddingLeft: "18px" }}>
                    {project.contributions.map((c) => (
                      <li
                        key={c}
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.65,
                          marginBottom: "4px",
                        }}
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={labelStyle}>Outcome</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "4px" }}>
                    {project.outcomes.map((o) => (
                      <li key={o} style={{ fontSize: "0.93rem", color: "var(--accent)", fontWeight: 600 }}>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <ul
                  aria-label="Tech stack"
                  style={{ display: "flex", flexWrap: "wrap", gap: "6px", listStyle: "none" }}
                >
                  {project.tech.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ marginTop: "auto", alignSelf: "flex-start" }}
                >
                  <FiExternalLink aria-hidden="true" />
                  Live site
                  <span className="visually-hidden">: {project.title} (opens in a new tab)</span>
                </a>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
