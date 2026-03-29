import { CSSProperties } from "react";

// ── Colors ──
export const colors = {
  bg: "#06060e",
  bg2: "#0b0b16",
  bg3: "#10101f",
  surface: "#161628",
  surface2: "#1e1e35",
  border: "#2a2a48",
  text: "#e2e2f0",
  textDim: "#8888aa",
  textMuted: "#55557a",
  accent: "#00ff88",
  accent2: "#00ccff",
  accent3: "#ff6b9d",
  accent4: "#ffd700",
  gradient: "linear-gradient(135deg, #00ff88, #00ccff)",
  glow: "0 0 20px rgba(0,255,136,0.15)",
  glowStrong: "0 0 40px rgba(0,255,136,0.25)",
};

// ── Reusable Styles ──
export const styles = {
  sectionContainer: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 1.5rem",
  } as CSSProperties,

  sectionDivider: {
    border: "none",
    height: "1px",
    background: `linear-gradient(90deg, transparent, ${colors.border}, transparent)`,
    marginBottom: "3.5rem",
  } as CSSProperties,

  sectionLabel: {
    fontSize: "0.7rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase" as const,
    color: colors.accent,
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginBottom: "0.5rem",
    fontFamily: "'IBM Plex Mono', monospace",
  } as CSSProperties,

  sectionTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(1.8rem, 4vw, 3rem)",
    fontWeight: 700,
    color: "#fff",
    lineHeight: 1.15,
    marginBottom: "1.5rem",
  } as CSSProperties,

  gradientText: {
    background: colors.gradient,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  } as CSSProperties,

  card: {
    background: colors.surface,
    border: `1px solid ${colors.border}`,
    borderRadius: "10px",
    padding: "1.5rem",
    transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    position: "relative" as const,
    overflow: "hidden" as const,
  } as CSSProperties,

  tag: {
    display: "inline-block",
    padding: "0.2rem 0.55rem",
    fontSize: "0.62rem",
    letterSpacing: "0.04em",
    borderRadius: "4px",
    background: "rgba(0,255,136,0.08)",
    color: colors.accent,
    border: "1px solid rgba(0,255,136,0.15)",
    fontFamily: "'IBM Plex Mono', monospace",
  } as CSSProperties,

  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.65rem 1.4rem",
    background: colors.accent,
    color: colors.bg,
    fontWeight: 600,
    fontSize: "0.78rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    fontFamily: "'IBM Plex Mono', monospace",
  } as CSSProperties,

  btnOutline: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.65rem 1.4rem",
    background: "transparent",
    color: colors.accent,
    fontWeight: 500,
    fontSize: "0.78rem",
    border: `1px solid ${colors.accent}`,
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    fontFamily: "'IBM Plex Mono', monospace",
  } as CSSProperties,

  inputField: {
    width: "100%",
    padding: "0.75rem 1rem",
    background: colors.bg2,
    border: `1px solid ${colors.border}`,
    borderRadius: "6px",
    color: colors.text,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: "0.8rem",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    outline: "none",
  } as CSSProperties,

  terminalWindow: {
    padding: "1rem",
    borderRadius: "8px",
    background: colors.bg2,
    border: `1px solid ${colors.border}`,
    fontSize: "0.7rem",
    fontFamily: "'IBM Plex Mono', monospace",
  } as CSSProperties,

  terminalDots: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.75rem",
  } as CSSProperties,
};

// ── Hover Handlers ──
export function cardHoverIn(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.borderColor = "rgba(0,255,136,0.3)";
  e.currentTarget.style.transform = "translateY(-3px)";
  e.currentTarget.style.boxShadow = colors.glow;
}

export function cardHoverOut(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.borderColor = colors.border;
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "none";
}

export function btnHoverIn(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = "translateY(-2px)";
  e.currentTarget.style.boxShadow = colors.glowStrong;
}

export function btnHoverOut(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "none";
}
