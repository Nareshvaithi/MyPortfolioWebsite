"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors, styles, cardHoverIn, cardHoverOut } from "@/lib/styles";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "6000+", label: "Servers Managed" },
  { value: "3+", label: "Databases Mastered" },
  { value: "Go", label: "Primary Language" },
  { value: "∞", label: "Lines of Code" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-left", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
      });
      gsap.from(".stat-card", {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".stats-grid", start: "top 85%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" style={{ paddingTop: "4rem", paddingBottom: "4rem", position: "relative" }}>
      <hr style={styles.sectionDivider} />
      <div style={styles.sectionContainer}>
        <div style={styles.sectionLabel}>
          <span style={{ opacity: 0.5 }}>//</span> About
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div className="about-left">
            <h2 style={styles.sectionTitle}>
              Building systems<br />that <span style={styles.gradientText}>scale</span>.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.85rem", color: colors.textDim, lineHeight: 1.7 }}>
              <p>
                I&apos;m Naresh Vaithi, a Software Developer Engineer at{" "}
                <span style={{ color: colors.accent }}>Mydbops</span> — a managed database
                services company operating at scale with 6,000+ servers across 300+ clients.
              </p>
              <p>
                My work spans building Go-based microservices, React/TypeScript frontends,
                database automation pipelines, and DevOps tooling across AWS, GCP, and Azure.
              </p>
              <p>
                From designing MongoDB query executors with AI safety checks to building MySQL
                logical backup systems with cloud storage integration — I focus on code that
                runs in production and doesn&apos;t break at 3 AM.
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="stat-card"
                  style={{ ...styles.card, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.25rem" }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <span style={{ ...styles.gradientText, fontSize: "1.75rem", fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>
                    {stat.value}
                  </span>
                  <span style={{ fontSize: "0.62rem", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Terminal */}
            <div style={{ ...styles.terminalWindow, marginTop: "0.75rem" }}>
              <div style={styles.terminalDots}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                <span style={{ color: colors.textMuted, marginLeft: "0.5rem", fontSize: "0.65rem" }}>~/naresh</span>
              </div>
              <code style={{ color: colors.textDim, lineHeight: 1.8 }}>
                <span style={{ color: colors.accent }}>$</span> echo $STACK<br />
                <span style={{ color: colors.accent2 }}>[&quot;Go&quot;, &quot;React&quot;, &quot;TypeScript&quot;, &quot;MongoDB&quot;, &quot;MySQL&quot;, &quot;PostgreSQL&quot;]</span><br />
                <span style={{ color: colors.accent }}>$</span> uptime<br />
                <span style={{ color: colors.accent2 }}>building since 2019 — still going strong</span>
                <span style={{ color: colors.accent, animation: "blink 1s step-end infinite" }}>▊</span>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
