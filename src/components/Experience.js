import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiExternalLink, FiAward } from "react-icons/fi";
import { experience } from "../data/portfolio";

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section" ref={ref} aria-labelledby="experience-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">{`// Career`}</span>
          <h2 id="experience-heading" className="section-title">
            Work <span>Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          {/* Timeline line */}
          <div
            aria-hidden="true"
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

          <ol style={{ listStyle: "none" }}>
          {experience.map((exp, expIdx) => (
            <motion.li
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: expIdx * 0.2, duration: 0.6 }}
              className="timeline-item"
              style={{
                position: "relative",
                paddingLeft: "64px",
                marginBottom: "48px",
              }}
            >
              {/* Timeline dot */}
              <div
                aria-hidden="true"
                className="timeline-dot"
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
                <FiBriefcase style={{ fontSize: "0.6rem", color: "var(--accent)" }} />
              </div>

              {/* Role Header */}
              <div style={{ marginBottom: "6px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.1rem, 3vw, 1.3rem)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1.3,
                  }}
                >
                  {exp.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "var(--accent)",
                    fontWeight: 600,
                  }}
                >
                  {exp.company}, {exp.location}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  {exp.period}
                </p>
                {exp.award && (
                  <p className="chip chip-accent" style={{ marginTop: "10px", display: "inline-flex", gap: "6px", alignItems: "center" }}>
                    <FiAward aria-hidden="true" />
                    {exp.award}
                  </p>
                )}
              </div>

              {/* Projects */}
              {exp.projects.map((proj) => (
                <div
                  key={proj.name}
                  style={{
                    marginTop: "20px",
                    padding: "clamp(16px, 4vw, 24px)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    {proj.name}
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${proj.name.split(" — ")[0]} live site (opens in a new tab)`}
                        style={{
                          color: "var(--accent)",
                          display: "inline-flex",
                          padding: "6px",
                        }}
                      >
                        <FiExternalLink aria-hidden="true" />
                      </a>
                    )}
                  </h4>

                  <ul style={{ listStyle: "none", marginBottom: "16px" }}>
                    {proj.bullets.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: "0.93rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.7,
                          marginBottom: "8px",
                          paddingLeft: "16px",
                          position: "relative",
                        }}
                      >
                        <span
                          aria-hidden="true"
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

                  <ul
                    aria-label="Tech stack"
                    style={{ display: "flex", gap: "8px", flexWrap: "wrap", listStyle: "none" }}
                  >
                    {proj.tech.map((t) => (
                      <li key={t} className="chip chip-accent">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.li>
          ))}
          </ol>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 10px !important; }
          .timeline-dot { left: 0 !important; }
          .timeline-item { padding-left: 36px !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
