import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiUsers, FiActivity, FiZap, FiAward, FiBook } from "react-icons/fi";
import { profile, highlights, awards, education } from "../data/portfolio";

const highlightIcons = [<FiCode />, <FiUsers />, <FiActivity />, <FiZap />];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const award = awards[0];
  const degree = education[0];

  return (
    <section id="about" className="section" ref={ref} aria-labelledby="about-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">{`// About Me`}</span>
          <h2 id="about-heading" className="section-title">
            Shipping Production <span>Web & Mobile Apps</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {profile.summary.map((para) => (
              <p
                key={para}
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  marginBottom: "16px",
                }}
              >
                {para}
              </p>
            ))}

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "24px",
              }}
            >
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--text-primary)" }}>
                <FiAward aria-hidden="true" style={{ color: "var(--accent)", marginTop: "5px", flexShrink: 0 }} />
                <span>
                  <strong>{award.title}</strong>, {award.org} ({award.period})
                </span>
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--text-primary)" }}>
                <FiBook aria-hidden="true" style={{ color: "var(--accent)", marginTop: "5px", flexShrink: 0 }} />
                <span>
                  {degree.degree}, {degree.institution} ({degree.period.replace(" — ", "–")}), {degree.grade}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Stats Column */}
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              listStyle: "none",
            }}
          >
            {highlights.map((h, i) => (
              <li
                key={h.label}
                style={{
                  padding: "28px 16px",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  textAlign: "center",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--accent)",
                    marginBottom: "12px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {highlightIcons[i]}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.6rem, 4vw, 2rem)",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  {h.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {h.label}
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
