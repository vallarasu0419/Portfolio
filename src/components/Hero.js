import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload, FiMapPin } from 'react-icons/fi';
import { profile } from '../data/portfolio';

const socials = [
  { icon: <FiGithub />, href: profile.links.github, label: 'GitHub', external: true },
  { icon: <FiLinkedin />, href: profile.links.linkedin, label: 'LinkedIn', external: true },
  { icon: <FiMail />, href: `mailto:${profile.email}`, label: `Email ${profile.email}` },
  { icon: <FiPhone />, href: profile.phoneHref, label: `Call ${profile.phone}` },
];

const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'var(--gradient-hero)',
        overflow: 'hidden',
        padding: 'calc(var(--nav-height) + 24px) 0 72px',
      }}
    >
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.3,
        }}
      />

      {/* Gradient orbs */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '20%',
          width: '400px',
          height: '400px',
          maxWidth: '80vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '100px',
              background: 'var(--accent-glow)',
              border: '1px solid var(--border-hover)',
              marginBottom: '24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--accent)',
              letterSpacing: '0.5px',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                animation: 'pulse-glow 2s infinite',
              }}
            />
            {profile.availability}
          </div>

          {/* Name */}
          <h1
            id="hero-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 7vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '16px',
              letterSpacing: '-1.5px',
              color: 'var(--text-primary)',
            }}
          >
            Hi, I'm <span style={{ color: 'var(--accent)' }}>{profile.name}</span>
          </h1>

          {/* Role + stack */}
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '8px',
            }}
          >
            {profile.role}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
              color: 'var(--accent)',
              marginBottom: '20px',
            }}
          >
            {profile.stack.join(' · ')}
          </p>

          {/* Value line */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
              color: 'var(--text-secondary)',
              maxWidth: '640px',
              margin: '0 auto 12px',
              lineHeight: 1.7,
            }}
          >
            {profile.valueLine}
          </p>
          <p
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              marginBottom: '32px',
            }}
          >
            <FiMapPin aria-hidden="true" />
            {profile.shortLocation}
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FiDownload aria-hidden="true" />
              Download Resume
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            <Link
              to="projects"
              href="#projects"
              smooth
              offset={-72}
              duration={600}
              className="btn btn-outline"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              href="#contact"
              smooth
              offset={-72}
              duration={600}
              className="btn btn-outline"
            >
              Contact
            </Link>
          </div>

          {/* Social links */}
          <ul
            aria-label="Profiles and contact"
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
              listStyle: 'none',
            }}
          >
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
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="scroll-indicator"
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          marginLeft: '-22px',
        }}
      >
        <Link
          to="about"
          href="#about"
          smooth
          offset={-72}
          duration={600}
          aria-label="Scroll to About section"
          style={{
            display: 'inline-flex',
            width: '44px',
            height: '44px',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <FiArrowDown aria-hidden="true" style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }} />
        </Link>
      </motion.div>

      <style>{`
        @media (max-height: 700px) {
          .scroll-indicator { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
