"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors, styles, btnHoverIn, btnHoverOut } from "@/lib/styles";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Nareshvaithi",
    icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nareshvaithi",
    icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: "Email",
    href: "mailto:nareshvaithi4@gmail.com",
    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-left", {
        x: -30, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none none" },
      });
      gsap.from(".contact-right", {
        x: 30, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mnjopzny", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputStyle = (field: string) => ({
    ...styles.inputField,
    borderColor: focusedField === field ? colors.accent : colors.border,
    boxShadow: focusedField === field ? "0 0 0 3px rgba(0,255,136,0.08)" : "none",
  });

  return (
    <section ref={sectionRef} id="contact" style={{ paddingTop: "4rem", paddingBottom: "4rem", position: "relative" }}>
      <hr style={styles.sectionDivider} />
      <div style={styles.sectionContainer}>
        <div style={styles.sectionLabel}>
          <span style={{ opacity: 0.5 }}>//</span> Contact
        </div>
        <h2 style={styles.sectionTitle}>
          Let&apos;s <span style={styles.gradientText}>Connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left */}
          <div className="contact-left">
            <p style={{ fontSize: "0.85rem", color: colors.textDim, marginBottom: "1.5rem", lineHeight: 1.7, maxWidth: "28rem" }}>
              Have a project in mind or want to discuss database automation,
              microservices, or full-stack development? Drop me a message.
            </p>

            {/* Terminal */}
            <div style={{ ...styles.terminalWindow, marginBottom: "1.5rem" }}>
              <div style={styles.terminalDots}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                <span style={{ color: colors.textMuted, marginLeft: "0.5rem", fontSize: "0.62rem" }}>contact.sh</span>
              </div>
              <code style={{ color: colors.textDim, lineHeight: 1.8, fontSize: "0.68rem" }}>
                <div><span style={{ color: colors.accent }}>$</span> cat contact.json</div>
                <div style={{ color: colors.textMuted }}>{"{"}</div>
                <div style={{ paddingLeft: "0.75rem" }}>
                  <span style={{ color: colors.accent3 }}>&quot;email&quot;</span>
                  <span style={{ color: colors.textMuted }}>: </span>
                  <span style={{ color: colors.accent2 }}>&quot;nareshvaithi4@gmail.com&quot;</span>
                </div>
                <div style={{ paddingLeft: "0.75rem" }}>
                  <span style={{ color: colors.accent3 }}>&quot;github&quot;</span>
                  <span style={{ color: colors.textMuted }}>: </span>
                  <span style={{ color: colors.accent2 }}>&quot;github.com/Nareshvaithi&quot;</span>
                </div>
                <div style={{ paddingLeft: "0.75rem" }}>
                  <span style={{ color: colors.accent3 }}>&quot;linkedin&quot;</span>
                  <span style={{ color: colors.textMuted }}>: </span>
                  <span style={{ color: colors.accent2 }}>&quot;linkedin.com/in/nareshvaithi&quot;</span>
                </div>
                <div style={{ color: colors.textMuted }}>{"}"}</div>
              </code>
            </div>

            {/* Socials */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "40px", height: "40px", borderRadius: "8px",
                    border: `1px solid ${colors.border}`, background: colors.surface,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: colors.textDim, transition: "all 0.3s ease", textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.accent;
                    e.currentTarget.style.borderColor = "rgba(0,255,136,0.3)";
                    e.currentTarget.style.boxShadow = colors.glow;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = colors.textDim;
                    e.currentTarget.style.borderColor = colors.border;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="contact-right">
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.65rem", color: colors.textMuted, marginBottom: "0.375rem", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'IBM Plex Mono', monospace" }}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle("name")}
                  required
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.65rem", color: colors.textMuted, marginBottom: "0.375rem", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'IBM Plex Mono', monospace" }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  style={inputStyle("email")}
                  required
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.65rem", color: colors.textMuted, marginBottom: "0.375rem", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'IBM Plex Mono', monospace" }}>
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  style={{ ...inputStyle("message"), resize: "none" as const }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{ ...styles.btnPrimary, width: "100%", justifyContent: "center" }}
                disabled={status === "sending"}
                onMouseEnter={btnHoverIn}
                onMouseLeave={btnHoverOut}
              >
                {status === "idle" && (
                  <>
                    <span>Send Message</span>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                  </>
                )}
                {status === "sending" && <span>Sending...</span>}
                {status === "sent" && <span>✓ Message Sent!</span>}
                {status === "error" && <span>✗ Failed — Try Again</span>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
