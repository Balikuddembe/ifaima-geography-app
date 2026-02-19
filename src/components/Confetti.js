/* Lightweight confetti for celebrations – no dependencies */

import { useEffect, useState } from "react";

const COLORS = [
  "var(--ifaima-primary)",
  "var(--ifaima-accent)",
  "#0d3d47",
  "#c9a227",
  "#e8c547",
  "#145c6b",
];

function createPieces(count = 50) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.6,
    duration: 2 + Math.random() * 1.5,
    color: COLORS[i % COLORS.length],
    size: 6 + Math.random() * 8,
    rotation: Math.random() * 360,
  }));
}

export function Confetti({ active, onComplete, duration = 3200 }) {
  const [pieces] = useState(() => createPieces(55));

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      onComplete?.();
    }, duration);
    return () => clearTimeout(t);
  }, [active, duration, onComplete]);

  if (!active) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none"
      style={{ zIndex: 3000 }}
      aria-hidden="true"
    >
      {pieces.map((p) => (
        <div
          key={p.id}
          className="position-absolute confetti-piece"
          style={{
            left: `${p.left}%`,
            top: "-20px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            animation: `confetti-fall ${p.duration}s ease-out ${p.delay}s forwards`,
            transform: `rotate(${p.rotation}deg)`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
