import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiDownload,
  FiCheck,
  FiAlertCircle,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import { profile } from "../data/portfolio";

// ============================================================
// EMAILJS CREDENTIALS
// ============================================================
// Set these in .env.local (local) and in Vercel → Project → Settings →
// Environment Variables. See .env.example. The fallbacks keep the current
// deployment working until the Vercel variables are added.
// EmailJS public keys are designed to be used in the browser; restrict the
// allowed origins in the EmailJS dashboard to stop reuse on other sites.
// ============================================================
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_0hpr7lw";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_puk85rj";
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "o6W5h-LtwtkLilpPK";

const contactInfo = [
  { icon: <FiMail />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: <FiPhone />, label: "Phone", value: profile.phone, href: profile.phoneHref },
  {
    icon: <FiLinkedin />,
    label: "LinkedIn",
    value: "vikkaraman-v",
    href: profile.links.linkedin,
    external: true,
  },
  {
    icon: <FiGithub />,
    label: "GitHub",
    value: "vallarasu0419",
    href: profile.links.github,
    external: true,
  },
  { icon: <FiMapPin />, label: "Location", value: profile.location, href: null },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const labelStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.75rem",
  color: "var(--text-secondary)",
  letterSpacing: "1px",
  textTransform: "uppercase",
  marginBottom: "6px",
  display: "block",
};

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in your name, email and message.");
      return;
    }
    if (!EMAIL_PATTERN.test(form.email.trim())) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    try {
      if (!window.emailjs) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src =
            "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
      }

      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject || "Portfolio Contact",
        message: form.message,
        to_email: profile.email,
      });

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMsg(`Failed to send. Please try again or email me at ${profile.email}.`);
    }
  };

  const sending = status === "sending";

  const inputStyle = {
    width: "100%",
    minHeight: "44px",
    padding: "12px 16px",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--border-strong)",
    background: "var(--bg-tertiary)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "1rem",
    transition: "border-color 0.3s ease",
    opacity: sending ? 0.6 : 1,
  };

  return (
    <section
      id="contact"
      className="section"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">{`// Get In Touch`}</span>
          <h2 id="contact-heading" className="section-title">
            Let's Work <span>Together</span>
          </h2>
          <p className="section-subtitle">
            {profile.availability}. The fastest way to reach me is email or LinkedIn.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "48px",
            maxWidth: "980px",
            margin: "0 auto",
          }}
          className="contact-grid"
        >
          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <ul style={{ marginBottom: "28px", listStyle: "none" }}>
              {contactInfo.map((c) => (
                <li
                  key={c.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border)",
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
                      fontSize: "1.1rem",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        marginBottom: "2px",
                      }}
                    >
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        style={{
                          fontSize: "0.95rem",
                          color: "var(--text-primary)",
                          fontWeight: 500,
                          overflowWrap: "anywhere",
                        }}
                      >
                        {c.value}
                        {c.external && <span className="visually-hidden"> (opens in a new tab)</span>}
                      </a>
                    ) : (
                      <p style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 500 }}>
                        {c.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              padding: "clamp(20px, 4vw, 32px)",
              borderRadius: "var(--radius-lg)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {status === "success" ? (
              <div role="status" style={{ textAlign: "center", padding: "48px 12px" }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(34, 197, 94, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    color: "#22c55e",
                    fontSize: "1.5rem",
                  }}
                >
                  <FiCheck />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "var(--text-primary)",
                  }}
                >
                  Message sent
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "20px" }}>
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button type="button" className="btn btn-outline" onClick={() => setStatus("idle")}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-describedby="form-note">
                <p id="form-note" style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "16px" }}>
                  Fields marked * are required.
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                  className="form-row"
                >
                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      disabled={sending}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      disabled={sending}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label htmlFor="contact-subject" style={labelStyle}>
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={sending}
                    style={inputStyle}
                  />
                </div>

                <div style={{ marginBottom: "20px" }}>
                  <label htmlFor="contact-message" style={labelStyle}>
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    aria-required="true"
                    disabled={sending}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                  />
                </div>

                <div role="alert" aria-live="assertive">
                  {status === "error" && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 16px",
                        borderRadius: "var(--radius-sm)",
                        background: "rgba(239, 68, 68, 0.1)",
                        border: "1px solid rgba(239, 68, 68, 0.4)",
                        marginBottom: "16px",
                        color: "var(--text-primary)",
                        fontSize: "0.9rem",
                      }}
                    >
                      <FiAlertCircle aria-hidden="true" style={{ color: "#ef4444", flexShrink: 0 }} />
                      {errorMsg}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    cursor: sending ? "not-allowed" : "pointer",
                    opacity: sending ? 0.7 : 1,
                  }}
                >
                  <FiSend aria-hidden="true" />
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        #contact input:focus,
        #contact textarea:focus {
          border-color: var(--accent) !important;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
