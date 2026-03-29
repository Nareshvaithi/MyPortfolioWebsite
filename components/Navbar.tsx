"use client";

import { useState, useEffect } from "react";
import { colors } from "@/lib/styles";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s ease",
        background: scrolled ? "#06060eee" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${colors.border}` : "1px solid transparent",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", fontFamily: "'IBM Plex Mono', monospace" }}
        >
          <span style={{ color: colors.accent, opacity: 0.5 }}>&gt;</span>
          <span style={{ color: "#fff" }}>naresh</span>
          <span style={{ color: colors.accent }}>.dev</span>
          <span style={{ color: colors.accent, animation: "blink 1s step-end infinite" }}>_</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              style={{
                color: colors.textDim,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.3s ease",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = colors.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.textDim; }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{ display: "flex", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: "20px", height: "2px", background: colors.accent, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: colors.accent, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "20px", height: "2px", background: colors.accent, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden"
        style={{
          overflow: "hidden",
          transition: "max-height 0.5s ease",
          background: "#06060ef5",
          backdropFilter: "blur(20px)",
          maxHeight: menuOpen ? "320px" : "0",
          borderBottom: menuOpen ? `1px solid ${colors.border}` : "none",
        }}
      >
        <div style={{ padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleClick(link.href)}
              style={{
                color: colors.textDim,
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              <span style={{ color: colors.accent, opacity: 0.4, marginRight: "0.5rem" }}>//</span>
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </nav>
  );
}
