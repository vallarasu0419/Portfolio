import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data/portfolio";

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="section" ref={ref} aria-labelledby="skills-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">{`// Tech Stack`}</span>
          <h2 id="skills-heading" className="section-title">
            Skills & <span>Tools</span>
          </h2>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {skills.map((cat) => (
            <div
              key={cat.group}
              className="skill-row"
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: "16px",
                alignItems: "start",
                padding: "16px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <dt
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  paddingTop: "4px",
                }}
              >
                {cat.group}
              </dt>
              <dd>
                <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px", listStyle: "none" }}>
                  {cat.items.map((item) => (
                    <li key={item} className="chip" style={{ fontSize: "0.8rem" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .skill-row {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
