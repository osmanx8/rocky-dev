"use client";
import React from "react";

const text = "UDIN DIN DIN DON";

const positions = [
  { top: "10%", left: "5%", size: "3rem" },
  { top: "25%", left: "75%", size: "3.5rem" },
  { top: "45%", left: "15%", size: "3rem" },
  { top: "65%", left: "85%", size: "2.8rem" },
  { top: "85%", left: "25%", size: "3.2rem" },
  { top: "15%", left: "55%", size: "3rem" },
  { top: "35%", left: "35%", size: "3.4rem" },
  { top: "75%", left: "65%", size: "3rem" },
  { top: "55%", left: "45%", size: "3.2rem" },
  { top: "95%", left: "5%", size: "3rem" },
  { top: "5%", left: "35%", size: "2.5rem" },
  { top: "20%", left: "90%", size: "2.8rem" },
  { top: "40%", left: "60%", size: "3.3rem" },
  { top: "60%", left: "10%", size: "3rem" },
  { top: "80%", left: "40%", size: "3.5rem" },
  { top: "30%", left: "5%", size: "2.7rem" },
  { top: "70%", left: "95%", size: "3.2rem" },
  { top: "90%", left: "75%", size: "3rem" },
  { top: "15%", left: "25%", size: "3.4rem" },
  { top: "50%", left: "80%", size: "2.9rem" },
];

export function BackgroundText() {
  return (
    <div
      className="background-text-container"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      {positions.map((pos, index) => {
        const duration = 6 + (index % 4);
        const delay = index * 0.3;
        const rotation = index % 3 === 0 ? Math.random() * 10 - 5 : 0;
        const opacity = 0.1 + (index % 3) * 0.05;

        const style: React.CSSProperties = {
          position: "absolute",
          top: pos.top,
          left: pos.left,
          fontSize: pos.size,
          animation: `textFadeInOut ${duration}s infinite`,
          animationDelay: `${delay}s`,
          transform: rotation !== 0 ? `rotate(${rotation}deg)` : undefined,
          opacity,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
        };

        return (
          <div
            key={index}
            className="background-text glitch-effect"
            data-text={text}
            style={style}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
}

export default BackgroundText;
