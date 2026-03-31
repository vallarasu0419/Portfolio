import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'var(--bg-tertiary)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
      }}
    >
      <div
        className="container"
        style={{
          padding: '48px 24px 32px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1fr',
            gap: '40px',
            marginBottom: '40px',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.6rem',
              fontWeight: 800,
              background: 'var(--gradient-accent)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '12px',
            }}>
              Vikkaraman.
            </div>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '320px',
            }}>
              Full Stack Developer passionate about building scalable web applications 
              with modern JavaScript technologies. Let's build something great together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '16px',
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((label) => (
                <Link
                  key={label}
                  to={label.toLowerCase()}
                  spy
                  smooth
                  offset={-72}
                  duration={600}
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={(e) => { e.target.style.color = 'var(--accent)'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'var(--text-secondary)'; }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '16px',
            }}>
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
              {[
                { icon: <FiGithub />, href: 'https://github.com/vallarasu0419', label: 'GitHub' },
                { icon: <FiLinkedin />, href: 'https://linkedin.com/in/vikkaraman', label: 'LinkedIn' },
                { icon: <FiMail />, href: 'mailto:vallarasu0410@gmail.com', label: 'Email' },
                { icon: <FiPhone />, href: 'tel:+916383797129', label: 'Phone' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  aria-label={s.label}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid var(--border)',
                    background: 'var(--bg-card)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <a
              href="https://vallarasu0419.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.3px',
              }}
            >
              vallarasu0419.github.io/Portfolio
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'var(--border)',
          marginBottom: '24px',
        }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.3px',
          }}>
            © {new Date().getFullYear()} Vikkaraman. Crafted with React.js
          </p>

          <Link to="hero" spy smooth duration={800}>
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
              }}
              aria-label="Back to top"
            >
              <FiArrowUp />
            </motion.button>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
