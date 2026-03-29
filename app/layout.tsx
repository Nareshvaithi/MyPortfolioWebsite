import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naresh Vaithi — Software Developer Engineer",
  description:
    "Full-stack developer specializing in Go, React, database automation, and microservices. Building production-grade systems at Mydbops.",
  keywords: ["Naresh Vaithi", "Software Developer", "Go Developer", "React Developer", "Mydbops"],
  authors: [{ name: "Naresh Vaithi" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
