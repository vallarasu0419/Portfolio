import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { navLinks, profile } from '../data/portfolio';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);
  const themeLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    document.body.style.overflow = 'hidden';
    const firstLink = menuRef.current && menuRef.current.querySelector('a');
    if (firstLink) firstLink.focus();

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        if (menuBtnRef.current) menuBtnRef.current.focus();
        return;
      }
      // Keep Tab inside the header + menu while the overlay is open
      if (e.key === 'Tab' && menuRef.current) {
        const focusables = [
          menuBtnRef.current,
          ...menuRef.current.querySelectorAll('a'),
        ].filter(Boolean);
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header>
      <motion.nav
        aria-label="Primary"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          backdropFilter: scrolled || mobileOpen ? 'blur(20px) saturate(1.5)' : 'none',
          background: scrolled || mobileOpen ? 'var(--bg-glass)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container-max)',
            width: '100%',
            padding: '0 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            to="hero"
            href="#hero"
            spy
            smooth
            duration={600}
            onClick={closeMenu}
            aria-label={`${profile.name} — back to top`}
            style={{
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              color: 'var(--accent)',
              padding: '4px 8px',
            }}
          >
            V.
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                href={`#${link.to}`}
                spy
                smooth
                offset={-72}
                duration={600}
                activeClass="nav-active"
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '8px 18px', minHeight: '40px', fontSize: '0.85rem', marginLeft: '8px' }}
            >
              <FiDownload aria-hidden="true" />
              Resume
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>

            <button
              type="button"
              onClick={toggleTheme}
              className="icon-btn"
              style={{ marginLeft: '8px' }}
              aria-label={themeLabel}
              title={themeLabel}
            >
              {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="mobile-nav-btn" style={{ display: 'none', gap: '8px' }}>
            <button
              type="button"
              onClick={toggleTheme}
              className="icon-btn"
              aria-label={themeLabel}
            >
              {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
            </button>
            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="icon-btn"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              style={{ fontSize: '1.3rem' }}
            >
              {mobileOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100dvh',
              background: 'var(--bg-primary)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                href={`#${link.to}`}
                spy
                smooth
                offset={-64}
                duration={600}
                onClick={closeMenu}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  padding: '10px 24px',
                  display: 'block',
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: '16px' }}
              onClick={closeMenu}
            >
              <FiDownload aria-hidden="true" />
              Download Resume
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link {
          padding: 10px 14px;
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }
        .nav-link:hover,
        .nav-active {
          color: var(--accent) !important;
          background: var(--accent-glow) !important;
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
