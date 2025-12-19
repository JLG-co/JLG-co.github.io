"use client";

import React from "react";

/**
 * FeaturesGrid component
 * Cloned with pixel-perfect accuracy based on provided HTML structure and computed styles.
 * 
 * Target section: Three-column feature grid displaying "2AS", "BAC", and "AI" cards,
 * with border-highlight effect on hover, featuring prominent labels and summarized descriptions in Arabic.
 */
const FeaturesGrid: React.FC = () => {
  const features = [
    {
      label: "2AS",
      title: "السنة الثانية ثانوي",
      description: "محتوى شامل ومنظم",
    },
    {
      label: "BAC",
      title: "بكالوريا 2027",
      description: "تحضير متقدم ومكثف",
    },
    {
      label: "AI",
      title: "أدوات ذكية",
      description: "تقنيات حديثة للتعلم",
    },
  ];

  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 direction-rtl"
      style={{
        display: "grid",
        gap: "1.5rem", // gap-6
        paddingTop: "4rem", // pt-16
      }}
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className="group cursor-default transition-all duration-200"
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.5)", // bg-card/50
            border: "1px solid #1e293b", // border-border
            borderRadius: "0.5rem", // rounded-lg
            padding: "1.5rem", // p-6
            textAlign: "right",
          }}
          // Managed via Tailwind class logic but mirroring style for hover
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#00a3ff"; // border-primary
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#1e293b";
          }}
        >
          <div
            className="glow-text-primary"
            style={{
              color: "#00a3ff", // text-primary
              fontSize: "2.25rem", // text-4xl
              lineHeight: "2.5rem",
              fontWeight: "700", // font-bold
              marginBottom: "0.5rem", // mb-2
              textShadow: "0 0 15px rgba(0, 163, 255, 0.6)",
            }}
          >
            {feature.label}
          </div>
          <h3
            style={{
              fontSize: "1.25rem", // text-xl
              fontWeight: "600", // font-semibold
              marginBottom: "0.5rem", // mb-2
              color: "#f8fafc", // text-foreground
              fontFamily: 'var(--font-sans)',
            }}
          >
            {feature.title}
          </h3>
          <p
            style={{
              color: "#94a3b8", // text-muted-foreground
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              fontFamily: 'var(--font-sans)',
            }}
          >
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;