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
    // 1. Force ScrollTrigger to recalculate for Next.js soft-navigation
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // Left side content animation
      gsap.from(".about-left", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Right side stats grid animation
      gsap.from(".stat-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      // Terminal window fade-in
      gsap.from(".terminal-box", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" style={{ paddingTop: "6rem", paddingBottom: "6rem", position: "relative" }}>
      <hr style={styles.sectionDivider} />
      <div style={styles.sectionContainer}>
        <div style={styles.sectionLabel}>
          <span style={{ opacity: 0.5 }}>//</span> About
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Bio */}
          <div className="about-left" style={{ opacity: 1 }}>
            <h2 style={styles.sectionTitle}>
              Building systems<br />that <span style={styles.gradientText}>scale</span>.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.9rem", color: colors.textDim, lineHeight: 1.8 }}>
              <p>
                I&apos;m Naresh Vaithi, a Software Developer Engineer at{" "}
                <span style={{ color: colors.accent, fontWeight: 600 }}>Mydbops</span> — a managed database
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

          {/* Right Side: Stats & Terminal */}
          <div>
            <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="stat-card"
                  style={{ 
                    ...styles.card, 
                    opacity: 1,
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "flex-start", 
                    gap: "0.4rem",
                    padding: "1.25rem" 
                  }}
                  onMouseEnter={cardHoverIn}
                  onMouseLeave={cardHoverOut}
                >
                  <span style={{ ...styles.gradientText, fontSize: "1.8rem", fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>
                    {stat.value}
                  </span>
                  <span style={{ fontSize: "0.65rem", color: colors.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Terminal Window */}
            <div className="terminal-box" style={{ ...styles.terminalWindow, marginTop: "1rem", opacity: 1 }}>
              <div style={styles.terminalDots}>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ff5f57" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ffbd2e" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28c840" }} />
                </div>
                <span style={{ color: colors.textMuted, marginLeft: "0.75rem", fontSize: "0.7rem", fontFamily: "monospace" }}>~/naresh — zsh</span>
              </div>
              <div style={{ padding: "0.5rem 0" }}>
                <code style={{ color: colors.textDim, fontSize: "0.75rem", lineHeight: 2, fontFamily: "'IBM Plex Mono', monospace" }}>
                  <span style={{ color: colors.accent }}>$</span> echo $STACK<br />
                  <span style={{ color: colors.accent2 }}>[&quot;Go&quot;, &quot;React&quot;, &quot;TypeScript&quot;, &quot;MongoDB&quot;, &quot;MySQL&quot;]</span><br />
                  <span style={{ color: colors.accent }}>$</span> uptime<br />
                  <span style={{ color: colors.accent2 }}>building since 2019 — still going strong</span>
                  <span className="terminal-cursor" style={{ color: colors.accent, marginLeft: "4px" }}>▊</span>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Adding a global style for the blinking cursor */}
      <style jsx global>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .terminal-cursor {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
}