import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBook, FiAward } from 'react-icons/fi';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Information Technology',
    institution: 'Jeppiaar SRR Engineering College, Chennai',
    period: '2018 — 2022',
    grade: 'CGPA: 7.4',
    icon: <FiBook />,
  },
  {
    degree: 'HSC (Higher Secondary Certificate)',
    field: '',
    institution: 'Jawahar Matric Hr Sec School',
    period: '2018',
    grade: '',
    icon: <FiAward />,
  },
  {
    degree: 'SSLC (Secondary School Leaving Certificate)',
    field: '',
    institution: 'Jawahar Matric Hr Sec School',
    period: '2016',
    grade: '',
    icon: <FiAward />,
  },
];

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">// Education</span>
          <h2 className="section-title">
            Academic <span>Background</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '960px',
          margin: '0 auto',
        }}
          className="edu-grid"
        >
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, borderColor: 'var(--border-hover)' }}
              style={{
                padding: '32px 28px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '80px',
                height: '80px',
                background: 'var(--gradient-card)',
                borderRadius: '0 0 0 80px',
              }} />

              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--accent-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontSize: '1.2rem',
                marginBottom: '20px',
              }}>
                {edu.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '4px',
              }}>
                {edu.degree}
              </h3>

              {edu.field && (
                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--accent)',
                  fontWeight: 500,
                  marginBottom: '8px',
                }}>
                  {edu.field}
                </p>
              )}

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                marginBottom: '8px',
                lineHeight: 1.6,
              }}>
                {edu.institution}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.5px',
                }}>
                  {edu.period}
                </span>
                {edu.grade && (
                  <span style={{
                    padding: '3px 12px',
                    borderRadius: '100px',
                    background: 'var(--accent-glow)',
                    border: '1px solid var(--border-hover)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                  }}>
                    {edu.grade}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
