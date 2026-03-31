import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'var(--gradient-hero)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative grid */}
      <div
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
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '20%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              borderRadius: '100px',
              background: 'var(--accent-glow)',
              border: '1px solid var(--border-hover)',
              marginBottom: '32px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--accent)',
              letterSpacing: '1px',
            }}
          >
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#22c55e',
              animation: 'pulse-glow 2s infinite',
            }} />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '20px',
              letterSpacing: '-2px',
            }}
          >
            Hi, I'm{' '}
            <span
              style={{
                background: 'var(--gradient-accent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Vikkaraman
            </span>
          </motion.h1>

          {/* Typed subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              color: 'var(--text-secondary)',
              marginBottom: '28px',
              minHeight: '40px',
            }}
          >
            <span style={{ color: 'var(--accent)', marginRight: '8px' }}>{'>'}</span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React.js Developer',
                2000,
                'Frontend Developer',
                2000,
                'Software Developer',
                2000,
                'Node.js Developer',
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '620px',
              margin: '0 auto 40px',
              lineHeight: 1.8,
            }}
          >
            3+ years crafting scalable web & mobile apps with{' '}
            <strong style={{ color: 'var(--text-primary)' }}>React.js</strong>,{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Node.js</strong>, and{' '}
            <strong style={{ color: 'var(--text-primary)' }}>Microservices Architecture</strong>.
            From database design to pixel-perfect UIs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <Link to="projects" spy smooth offset={-72} duration={600}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249,115,22,0.3)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '14px 36px',
                  background: 'var(--gradient-accent)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '0.3px',
                }}
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="contact" spy smooth offset={-72} duration={600}>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '14px 36px',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  letterSpacing: '0.3px',
                  transition: 'all 0.3s ease',
                }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
            }}
          >
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
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={s.label}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  fontSize: '1.15rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.background = 'var(--accent-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'var(--bg-card)';
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
      >
        <Link to="about" spy smooth offset={-72} duration={600}>
          <FiArrowDown style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
