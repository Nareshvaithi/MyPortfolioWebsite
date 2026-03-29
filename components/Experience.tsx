"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors, styles, cardHoverIn, cardHoverOut } from "@/lib/styles";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Software Developer Engineer",
    company: "Mydbops",
    period: "Mar 2019 — Present",
    description:
      "Building production-grade database automation tools, monitoring infrastructure, and full-stack platforms for managed database services at scale.",
    responsibilities: [
      "Architected and built the Bifrost platform — SSH access control, query executor, backup/restore, and RDS operations",
      "Developed Go microservices with NATS JetStream for event-driven database automation",
      "Built React/TypeScript frontends with Zustand, shadcn/ui, and TanStack Table",
      "Created Sensu monitoring plugins for MySQL, PostgreSQL, and MongoDB across AWS, GCP, and Azure",
      "Designed Ansible automation for database installation, ProxySQL clustering, and credential management via Vault",
      "Implemented MySQL logical backup system with multi-cloud storage and AI log analysis",
      "Built MongoDB query executor with AI safety checks via AWS Bedrock",
    ],
    tags: ["Go", "React", "TypeScript", "NATS", "AWS", "Ansible", "Sensu"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-item", {
        x: -30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none none" },
      });
      gsap.from(".tl-line", {
        scaleY: 0, transformOrigin: "top", duration: 1.2, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" style={{ paddingTop: "4rem", paddingBottom: "4rem", position: "relative" }}>
      <hr style={styles.sectionDivider} />
      <div style={{ ...styles.sectionContainer, position: "relative", zIndex: 10 }}>
        <div style={styles.sectionLabel}>
          <span style={{ opacity: 0.5 }}>//</span> Experience
        </div>
        <h2 style={styles.sectionTitle}>
          Where I&apos;ve <span style={styles.gradientText}>Worked</span>
        </h2>

        <div style={{ position: "relative", paddingLeft: "2.5rem" }}>
          {/* Timeline line */}
          <div
            className="tl-line"
            style={{
              position: "absolute", left: "12px", top: 0, bottom: 0, width: "2px",
              background: `linear-gradient(to bottom, ${colors.accent}, ${colors.accent2}, ${colors.border})`,
            }}
          />

          {experiences.map((exp, i) => (
            <div key={i} className="exp-item" style={{ position: "relative", marginBottom: "2rem" }}>
              {/* Dot */}
              <div style={{
                position: "absolute", left: "-2rem", top: "6px",
                width: "14px", height: "14px", borderRadius: "50%",
                background: colors.accent, boxShadow: "0 0 12px rgba(0,255,136,0.4)",
              }} />

              <div
                style={styles.card}
                onMouseEnter={cardHoverIn}
                onMouseLeave={cardHoverOut}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.75rem" }} className="md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", fontFamily: "'Syne', sans-serif" }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: colors.accent }}>{exp.company}</p>
                  </div>
                  <span style={{
                    fontSize: "0.65rem", color: colors.textMuted,
                    padding: "0.25rem 0.625rem", borderRadius: "9999px",
                    border: `1px solid ${colors.border}`, background: colors.bg2,
                    whiteSpace: "nowrap", alignSelf: "flex-start",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}>
                    {exp.period}
                  </span>
                </div>

                <p style={{ fontSize: "0.75rem", color: colors.textDim, marginBottom: "0.75rem", lineHeight: 1.65 }}>
                  {exp.description}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem", marginBottom: "1rem" }}>
                  {exp.responsibilities.map((resp, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.68rem", color: colors.textDim }}>
                      <span style={{ color: colors.accent, marginTop: "2px", flexShrink: 0 }}>▸</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {exp.tags.map((tag, j) => (
                    <span key={j} style={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
