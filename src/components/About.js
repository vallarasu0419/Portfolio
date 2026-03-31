import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCode, FiLayers, FiUsers, FiZap } from "react-icons/fi";

const highlights = [
  { icon: <FiCode />, value: "3+", label: "Years Experience" },
  { icon: <FiLayers />, value: "10+", label: "Projects Delivered" },
  { icon: <FiUsers />, value: "5000+", label: "Users Served" },
  { icon: <FiZap />, value: "99.9%", label: "Uptime Achieved" },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">{`// About Me`}</span>
          <h2 className="section-title">
            Turning Ideas Into <span>Scalable Solutions</span>
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
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "20px",
              }}
            >
              I'm a results-driven{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                Full Stack Developer
              </strong>{" "}
              based in Chennai, India, with over 3 years of hands-on experience
              designing, developing, and deploying web and mobile applications
              using{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                Microservices Architecture
              </strong>
              .
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "20px",
              }}
            >
              My expertise spans the full JavaScript ecosystem — from building
              responsive, high-performance frontends with{" "}
              <strong style={{ color: "var(--text-primary)" }}>React.js</strong>{" "}
              and{" "}
              <strong style={{ color: "var(--text-primary)" }}>Next.js</strong>{" "}
              to engineering robust backend services with{" "}
              <strong style={{ color: "var(--text-primary)" }}>Node.js</strong>{" "}
              and Express.js. I've successfully led development teams, delivered
              products from scratch, and integrated complex third-party APIs
              including Microsoft Teams, IoT biometric devices, and real-time
              systems via Socket.IO.
            </p>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "28px",
              }}
            >
              I thrive on building products that make a real impact — whether
              it's a school management platform serving thousands, an academy
              app for IAS aspirants, or a scheduling system that became an
              organization's key revenue product. I believe in clean code, smart
              collaboration, and delivering on time.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                "Team Leadership",
                "Agile/Scrum",
                "Problem Solving",
                "On-Time Delivery",
                "Collaboration",
              ].map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "100px",
                    background: "var(--accent-glow)",
                    border: "1px solid var(--border-hover)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--accent)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: "var(--shadow-glow)" }}
                style={{
                  padding: "32px 24px",
                  borderRadius: "var(--radius-lg)",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--accent)",
                    marginBottom: "12px",
                  }}
                >
                  {h.icon}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
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
                    fontSize: "0.73rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  {h.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
