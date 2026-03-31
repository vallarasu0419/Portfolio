import React, { useState, useRef } from "react";
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
} from "react-icons/fi";

// ============================================================
// EMAILJS CREDENTIALS
// ============================================================
// SERVICE_ID  → EmailJS Dashboard → "Email Services" → copy the ID shown on your Gmail card
// TEMPLATE_ID → EmailJS Dashboard → "Email Templates" → create template → copy the ID at top
// PUBLIC_KEY  → EmailJS Dashboard → "Account" → copy the "Public Key" value
// ============================================================
const EMAILJS_SERVICE_ID = "service_0hpr7lw";
const EMAILJS_TEMPLATE_ID = "template_puk85rj"; // ← Get from Email Templates page
const EMAILJS_PUBLIC_KEY = "o6W5h-LtwtkLilpPK"; // ← Get from Account page

const contactInfo = [
  {
    icon: <FiMail />,
    label: "Email",
    value: "vallarasu0410@gmail.com",
    href: "mailto:vallarasu0410@gmail.com",
  },
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "+91 6383797129",
    href: "tel:+916383797129",
  },
  {
    icon: <FiMapPin />,
    label: "Location",
    value: "Ekkaduthangal, Chennai, Tamil Nadu",
    href: null,
  },
];

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
  const formRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      setTimeout(() => setStatus("idle"), 3000);
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
        to_email: "vallarasu0410@gmail.com",
      });

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMsg("Failed to send. Please try again or email me directly.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--border)",
    background: "var(--bg-tertiary)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "all 0.3s ease",
  };

  // Google Drive direct download link (converted from your sharing link)
  const resumeURL =
    "https://drive.google.com/uc?export=download&id=1hHWmzg575Y3PeL8ai5eY3GyWjPcXkCCM";

  return (
    <section
      id="contact"
      className="section"
      ref={ref}
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">// Get In Touch</span>
          <h2 className="section-title">
            Let's Work <span>Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "48px",
            maxWidth: "960px",
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
            <div style={{ marginBottom: "32px" }}>
              {contactInfo.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div
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
                  <div>
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
                        style={{
                          fontSize: "0.92rem",
                          color: "var(--text-primary)",
                          fontWeight: 500,
                        }}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontSize: "0.92rem",
                          color: "var(--text-primary)",
                          fontWeight: 500,
                        }}
                      >
                        {c.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button — opens Google Drive direct download */}
            <motion.a
              href={resumeURL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(249,115,22,0.2)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 28px",
                borderRadius: "var(--radius-md)",
                background: "var(--gradient-accent)",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <FiDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              padding: "32px",
              borderRadius: "var(--radius-lg)",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "60px 20px" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
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
                </motion.div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "var(--text-primary)",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}
                >
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <div ref={formRef}>
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
                    <label
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                        display: "block",
                      }}
                    >
                      Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      disabled={status === "sending"}
                      style={{
                        ...inputStyle,
                        opacity: status === "sending" ? 0.6 : 1,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        marginBottom: "6px",
                        display: "block",
                      }}
                    >
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      disabled={status === "sending"}
                      style={{
                        ...inputStyle,
                        opacity: status === "sending" ? 0.6 : 1,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border)";
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                      display: "block",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project discussion"
                    disabled={status === "sending"}
                    style={{
                      ...inputStyle,
                      opacity: status === "sending" ? 0.6 : 1,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                    }}
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      marginBottom: "6px",
                      display: "block",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    disabled={status === "sending"}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                      opacity: status === "sending" ? 0.6 : 1,
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border)";
                    }}
                  />
                </div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "12px 16px",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      marginBottom: "16px",
                      color: "#ef4444",
                      fontSize: "0.85rem",
                    }}
                  >
                    <FiAlertCircle />
                    {errorMsg}
                  </motion.div>
                )}

                <motion.button
                  whileHover={
                    status !== "sending"
                      ? {
                          scale: 1.02,
                          boxShadow: "0 0 30px rgba(249,115,22,0.3)",
                        }
                      : {}
                  }
                  whileTap={status !== "sending" ? { scale: 0.97 } : {}}
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "14px 28px",
                    borderRadius: "var(--radius-md)",
                    background:
                      status === "sending"
                        ? "var(--bg-tertiary)"
                        : "var(--gradient-accent)",
                    color: status === "sending" ? "var(--text-muted)" : "#fff",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    border: "none",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ display: "inline-flex" }}
                      >
                        <FiSend />
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
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
