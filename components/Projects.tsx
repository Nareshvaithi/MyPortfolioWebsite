"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors, styles, cardHoverIn, cardHoverOut } from "@/lib/styles";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "MySQL Logical Backup & Restore",
    description:
      "Production-grade backup system supporting MySQLsh and MyDumper with multi-step backup types, cloud storage integration (S3, GCS, Azure), retention policies, lifecycle hooks, and AI-powered log analysis.",
    tags: ["Go", "MySQL", "AWS S3", "GCS", "Azure", "Jinja2"],
    status: "production",
    icon: "🗄️",
    highlights: ["Multi-cloud storage support", "AI log analysis via AWS Bedrock", "Automated retention & cleanup"],
  },
  {
    title: "MongoDB Query Executor",
    description:
      "End-to-end query execution system with Go-based parser (goja/AST), precheck/postcheck generation, AI safety validation via AWS Bedrock, shell execution fallback, and rollback with backup files.",
    tags: ["Go", "MongoDB", "NATS", "React", "TypeScript", "AWS Bedrock"],
    status: "production",
    icon: "⚡",
    highlights: ["AI-powered safety checks", "Real-time status via NATS JetStream", "Automatic rollback support"],
  },
  {
    title: "Bifrost Platform",
    description:
      "SSH terminal access control platform with command restriction framework, process manager, backup/restore orchestration, query executor, and RDS operations with RE2-compatible regex deny lists across 16+ profiles.",
    tags: ["Go", "React", "NATS", "WebSocket", "HAProxy", "Terraform"],
    status: "active",
    icon: "🌉",
    highlights: ["16+ command restriction profiles", "WebSocket cluster with HAProxy", "AWS WAF + Global Accelerator"],
  },
  {
    title: "Sensu Monitoring Infrastructure",
    description:
      "Comprehensive monitoring plugin suite for MySQL, PostgreSQL, and MongoDB across AWS, GCP, and Azure. Features restart detection with crash classification and automated Ansible deployment.",
    tags: ["Go", "Sensu", "Ansible", "AWS", "GCP", "Azure"],
    status: "production",
    icon: "📡",
    highlights: ["Cross-cloud monitoring", "Crash vs graceful restart detection", "Ansible-automated deployment"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force ScrollTrigger to recalculate positions for Next.js routing
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      gsap.from(".proj-card", {
        y: 60, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out",
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: "top 82%", // Slightly earlier trigger for a smoother feel
          toggleActions: "play none none none" 
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" style={{ paddingTop: "6rem", paddingBottom: "6rem", position: "relative" }}>
      <hr style={styles.sectionDivider} />
      <div style={styles.sectionContainer}>
        <div style={styles.sectionLabel}>
          <span style={{ opacity: 0.5 }}>//</span> Projects
        </div>
        <h2 style={styles.sectionTitle}>
          Things I&apos;ve <span style={styles.gradientText}>Built</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="proj-card"
              style={{
                ...styles.card,
                opacity: 1, // Ensure cards are visible by default
                display: "flex",
                flexDirection: "column",
                height: "100%", // Ensures cards in the same row have equal height
              }}
              onMouseEnter={cardHoverIn}
              onMouseLeave={cardHoverOut}
            >
              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{project.icon}</span>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", fontFamily: "'Syne', sans-serif" }}>
                    {project.title}
                  </h3>
                </div>
                <span
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "4px",
                    flexShrink: 0,
                    border: `1px solid ${project.status === "production" ? "rgba(0,255,136,0.2)" : "rgba(0,204,255,0.2)"}`,
                    color: project.status === "production" ? colors.accent : colors.accent2,
                    background: project.status === "production" ? "rgba(0,255,136,0.03)" : "rgba(0,204,255,0.03)",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p style={{ fontSize: "0.8rem", color: colors.textDim, marginBottom: "1.25rem", lineHeight: 1.6, flexGrow: 1 }}>
                {project.description}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {project.highlights.map((h, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.7rem", color: colors.textMuted }}>
                    <span style={{ color: colors.accent, marginTop: "0.1rem" }}>▸</span> 
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
                {project.tags.map((tag, j) => (
                  <span key={j} style={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}