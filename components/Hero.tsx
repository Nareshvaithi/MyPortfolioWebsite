"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { colors, styles, btnHoverIn, btnHoverOut } from "@/lib/styles";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(".hero-terminal", { opacity: 0, y: 15, duration: 0.5, ease: "power2.out" })
        .from(".hero-name", { opacity: 0, y: 30, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .from(".hero-title", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .from(".hero-desc", { opacity: 0, y: 15, duration: 0.6, ease: "power3.out" }, "-=0.2")
        .from(".hero-cta", { opacity: 0, y: 15, duration: 0.5, ease: "power3.out" }, "-=0.1")
        .from(".hero-status", { opacity: 0, duration: 0.5, ease: "power2.out" }, "-=0.1");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}
    >
      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "33%", left: "-160px", width: "500px", height: "500px", background: colors.accent, borderRadius: "50%", opacity: 0.04, filter: "blur(150px)" }} />
      <div style={{ position: "absolute", bottom: "33%", right: "-160px", width: "500px", height: "500px", background: colors.accent2, borderRadius: "50%", opacity: 0.04, filter: "blur(150px)" }} />

      <div style={{ ...styles.sectionContainer, position: "relative", zIndex: 10, paddingTop: "6rem", paddingBottom: "4rem" }}>
        {/* Terminal prompt */}
        <div
          className="hero-terminal"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            marginBottom: "1.5rem", padding: "0.375rem 0.75rem",
            borderRadius: "9999px", border: `1px solid ${colors.border}`,
            background: colors.surface, fontSize: "0.75rem",
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: colors.accent, animation: "pulse 2s infinite" }} />
          <span style={{ color: colors.textMuted }}>~/portfolio</span>
          <span style={{ color: colors.accent }}>$</span>
          <span style={{ color: colors.textDim }}>cat intro.md</span>
        </div>

        {/* Name */}
        <h1
          className="hero-name"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(3rem, 8vw, 5.5rem)", fontWeight: 800, lineHeight: 0.95, marginBottom: "1.25rem" }}
        >
          <span style={{ color: "#fff" }}>Naresh</span>
          <br />
          <span style={styles.gradientText}>Vaithi</span>
          <span style={{ color: colors.accent, animation: "blink 1s step-end infinite" }}>.</span>
        </h1>

        {/* Title */}
        <p
          className="hero-title"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", color: colors.textDim, marginBottom: "1rem", maxWidth: "36rem", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          <span style={{ color: colors.accent }}>&gt;</span> Software Developer Engineer{" "}
          <span style={{ color: colors.textMuted }}>@</span>{" "}
          <span style={{ color: colors.accent2 }}>Mydbops</span>
        </p>

        {/* Description */}
        <p
          className="hero-desc"
          style={{ fontSize: "0.85rem", color: colors.textDim, maxWidth: "32rem", marginBottom: "2rem", lineHeight: 1.7 }}
        >
          Crafting production-grade backend systems, database automation tools,
          and full-stack applications. Specialized in Go microservices, React
          frontends, and managing databases at scale.
        </p>

        {/* CTA */}
        <div className="hero-cta" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem" }}>
          <a
            href="#projects"
            style={styles.btnPrimary}
            onMouseEnter={btnHoverIn}
            onMouseLeave={btnHoverOut}
          >
            <span>View Projects</span>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
          <a href="#contact" style={styles.btnOutline}>Get in Touch</a>
        </div>

        {/* Status */}
        <div className="hero-status" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.25rem", fontSize: "0.7rem", color: colors.textMuted }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: colors.accent }} />
            Available for opportunities
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: colors.accent }}>⌘</span> Based in India
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: colors.accent }}>↓</span> Scroll to explore
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      `}</style>
    </section>
  );
}
