"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { colors, styles, cardHoverIn, cardHoverOut } from "@/lib/styles";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: "⌘",
    color: "linear-gradient(135deg, #00ff88, #00ccff)",
    skills: [
      { name: "Go", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "React.js", level: 88 },
      { name: "TypeScript", level: 82 },
    ],
  },
  {
    title: "Databases",
    icon: "⛁",
    color: "linear-gradient(135deg, #00ccff, #6b8aff)",
    skills: [
      { name: "MySQL", level: 92 },
      { name: "MongoDB", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "ProxySQL", level: 80 },
    ],
  },
  {
    title: "Infrastructure & Cloud",
    icon: "☁",
    color: "linear-gradient(135deg, #ff6b9d, #ffd700)",
    skills: [
      { name: "AWS SDK", level: 88 },
      { name: "NATS / JetStream", level: 90 },
      { name: "Kong API Gateway", level: 78 },
      { name: "Docker", level: 85 },
    ],
  },
  {
    title: "Architecture",
    icon: "◈",
    color: "linear-gradient(135deg, #ffd700, #00ff88)",
    skills: [
      { name: "Microservices", level: 92 },
      { name: "Database Automation", level: 95 },
      { name: "Full Stack Dev", level: 88 },
      { name: "DevOps / CI-CD", level: 82 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-cat", {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" style={{ paddingTop: "4rem", paddingBottom: "4rem", position: "relative" }}>
      <hr style={styles.sectionDivider} />
      <div style={{ ...styles.sectionContainer, position: "relative", zIndex: 10 }}>
        <div style={styles.sectionLabel}>
          <span style={{ opacity: 0.5 }}>//</span> Skills
        </div>
        <h2 style={styles.sectionTitle}>
          Tech <span style={styles.gradientText}>Stack</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              className="skill-cat"
              style={styles.card}
              onMouseEnter={cardHoverIn}
              onMouseLeave={cardHoverOut}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.1rem" }}>{category.icon}</span>
                <h3 style={{ fontSize: "0.75rem", fontWeight: 600, color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {category.title}
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.35rem" }}>
                      <span style={{ fontSize: "0.75rem", color: colors.textDim }}>{skill.name}</span>
                      <span style={{ fontSize: "0.6rem", color: colors.textMuted }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: "6px", borderRadius: "3px", background: "rgba(255,255,255,0.05)", overflow: "hidden", width: "100%" }}>
                      <div
                        style={{
                          height: "6px",
                          borderRadius: "3px",
                          width: `${skill.level}%`,
                          background: category.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
