import React from 'react';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';
import { profile, navLinks } from '../data/portfolio';

const socials = [
  { icon: <FiGithub />, href: profile.links.github, label: 'GitHub', external: true },
  { icon: <FiLinkedin />, href: profile.links.linkedin, label: 'LinkedIn', external: true },
  { icon: <FiMail />, href: `mailto:${profile.email}`, label: `Email ${profile.email}` },
  { icon: <FiPhone />, href: profile.phoneHref, label: `Call ${profile.phone}` },
];

const headingStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.75rem',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: '16px',
};

const Footer = () => {
  return (
    <footer
      style={{
        background: 'var(--bg-tertiary)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
      }}
    >
      <div className="container" style={{ padding: '48px 16px 32px' }}>
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
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--accent)',
                marginBottom: '12px',
              }}
            >
              {profile.name}
            </p>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '320px',
              }}
            >
              {profile.role} · {profile.stack.join(' · ')} · {profile.shortLocation}
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer">
            <h2 style={headingStyle}>Quick Links</h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '4px', listStyle: 'none' }}>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    href={`#${link.to}`}
                    smooth
                    offset={-72}
                    duration={600}
                    className="footer-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h2 style={headingStyle}>Connect</h2>
            <ul style={{ display: 'flex', gap: '10px', marginBottom: '20px', listStyle: 'none', flexWrap: 'wrap' }}>
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="icon-btn"
                    aria-label={s.external ? `${s.label} (opens in a new tab)` : s.label}
                    {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span aria-hidden="true" style={{ display: 'inline-flex' }}>{s.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '24px' }} />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.3px',
            }}
          >
            © {new Date().getFullYear()} {profile.name}. Built with React.js
          </p>

          <Link
            to="hero"
            href="#hero"
            smooth
            duration={800}
            className="icon-btn"
            aria-label="Back to top"
          >
            <FiArrowUp aria-hidden="true" />
          </Link>
        </div>
      </div>

      <style>{`
        .footer-link {
          display: inline-block;
          padding: 6px 0;
          font-size: 0.92rem;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .footer-link:hover {
          color: var(--accent);
        }
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
