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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // Account for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        background: scrolled || menuOpen ? "#06060ee6" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom: scrolled || menuOpen ? `1px solid ${colors.border}` : "1px solid transparent",
        padding: scrolled ? "0.5rem 0" : "1rem 0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "0.25rem", 
            fontSize: "0.9rem", 
            fontWeight: 700, 
            textDecoration: "none", 
            fontFamily: "'IBM Plex Mono', monospace" 
          }}
        >
          <span style={{ color: colors.accent }}>&gt;</span>
          <span style={{ color: "#fff" }}>naresh</span>
          <span style={{ color: colors.accent }}>.dev</span>
          <span className="blink-cursor" style={{ color: colors.accent }}>_</span>
        </a>

        {/* Desktop Links - Managed via CSS class for responsiveness */}
        <div className="nav-desktop-links" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              style={{
                color: colors.textDim,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 500
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = colors.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.textDim; }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-toggle"
          style={{ 
            background: "none", 
            border: "none", 
            cursor: "pointer", 
            padding: "8px",
            zIndex: 101,
            display: "none" // Hidden by default, shown via CSS
          }}
          aria-label="Toggle menu"
        >
          <div style={{ position: "relative", width: "22px", height: "14px" }}>
            <span style={{ 
              position: "absolute", top: 0, left: 0, width: "100%", height: "2px", 
              background: colors.accent, transition: "0.3s",
              transform: menuOpen ? "rotate(45deg) translateY(8.5px)" : "none" 
            }} />
            <span style={{ 
              position: "absolute", top: "6px", left: 0, width: "100%", height: "2px", 
              background: colors.accent, transition: "0.2s",
              opacity: menuOpen ? 0 : 1 
            }} />
            <span style={{ 
              position: "absolute", bottom: 0, left: 0, width: "100%", height: "2px", 
              background: colors.accent, transition: "0.3s",
              transform: menuOpen ? "rotate(-45deg) translateY(-8.5px)" : "none" 
            }} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className="nav-mobile-menu"
        style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "#06060ef8",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${colors.border}`,
          overflow: "hidden",
          maxHeight: menuOpen ? "400px" : "0",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "none" // Managed via CSS
        }}
      >
        <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              style={{
                color: colors.textDim,
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontFamily: "'IBM Plex Mono', monospace",
                display: "flex",
                alignItems: "center"
              }}
            >
              <span style={{ color: colors.accent, opacity: 0.5, marginRight: "0.75rem" }}>//</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scoped CSS for responsiveness and animations */}
      <style jsx global>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .blink-cursor {
          animation: blink 1s step-end infinite;
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .nav-desktop-links {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: flex !important;
          }
          .nav-mobile-menu {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}