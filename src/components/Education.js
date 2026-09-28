import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBook, FiAward } from "react-icons/fi";
import { education } from "../data/portfolio";

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="education"
      className="section"
      ref={ref}
      aria-labelledby="education-heading"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">{`// Education`}</span>
          <h2 id="education-heading" className="section-title">
            Academic <span>Background</span>
          </h2>
        </motion.div>

        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "20px",
            maxWidth: "960px",
            margin: "0 auto",
            listStyle: "none",
          }}
        >
          {education.map((edu, i) => (
            <motion.li
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              style={{
                padding: "28px 24px",
                borderRadius: "var(--radius-lg)",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--accent-glow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  fontSize: "1.2rem",
                  marginBottom: "16px",
                }}
              >
                {i === 0 ? <FiBook /> : <FiAward />}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "6px",
                }}
              >
                {edu.degree}
              </h3>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  marginBottom: "10px",
                  lineHeight: 1.6,
                }}
              >
                {edu.institution}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {edu.period}
                </span>
                {edu.grade && <span className="chip chip-accent">{edu.grade}</span>}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
