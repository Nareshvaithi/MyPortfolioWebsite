"use client";

import { colors } from "@/lib/styles";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${colors.border}`, padding: "2rem 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.72rem", color: colors.textMuted, fontFamily: "'IBM Plex Mono', monospace" }}>
            <span style={{ color: colors.accent }}>&gt;</span>
            <span>Designed & built by <span style={{ color: colors.textDim }}>Naresh Vaithi</span></span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", fontSize: "0.72rem", color: colors.textMuted, fontFamily: "'IBM Plex Mono', monospace" }}>
            <span>© {new Date().getFullYear()}</span>
            <span style={{ color: colors.border }}>|</span>
            <span>Next.js + GSAP + Lenis</span>
            <span style={{ color: colors.border }}>|</span>
            <a
              href="https://github.com/Nareshvaithi"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.textMuted, textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = colors.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.textMuted; }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
