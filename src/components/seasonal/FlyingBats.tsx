import { useEffect, useRef } from "react";
import { BatIcon } from "../../svgs/BatIcon";

const BAT_COUNT = 2;

export const FlyingBats = () => {
  const batRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Store random movement parameters for each bat
  const paramsRef = useRef(
    Array.from({ length: BAT_COUNT }).map(() => ({
      speed1: 30 + Math.random() * 40,
      speed2: 20 + Math.random() * 30,
      xAmplitude1:
        Math.random() * (window.innerWidth / 3) + window.innerWidth / 6,
      xAmplitude2: Math.random() * (window.innerWidth / 6),
      yAmplitude1:
        Math.random() * (window.innerHeight / 3) + window.innerHeight / 6,
      yAmplitude2: Math.random() * (window.innerHeight / 6),
      xCenter: Math.random() * window.innerWidth,
      yCenter: Math.random() * window.innerHeight,
      phase1: Math.random() * Math.PI * 2,
      phase2: Math.random() * Math.PI * 2,
      direction: Math.random() > 0.5 ? 1 : -1,
    }))
  );

  useEffect(() => {
    let running = true;
    const start = performance.now();
    const animate = () => {
      const now = performance.now();
      const t = (now - start) / 1000;
      batRefs.current.forEach((bat, i) => {
        if (!bat) return;
        const p = paramsRef.current[i];
        // Chaotic, fluttery movement
        const x =
          p.xCenter +
          Math.cos(t * p.speed1 * 0.02 * p.direction + p.phase1) *
            p.xAmplitude1 +
          Math.sin(t * p.speed2 * 0.03 * p.direction + p.phase2) *
            p.xAmplitude2;
        const y =
          p.yCenter +
          Math.sin(t * p.speed1 * 0.018 * p.direction + p.phase1) *
            p.yAmplitude1 +
          Math.cos(t * p.speed2 * 0.025 * p.direction + p.phase2) *
            p.yAmplitude2;
        bat.style.transform = `translate(${x}px, ${y}px)`;
      });
      if (running) requestAnimationFrame(animate);
    };
    animate();
    return () => {
      running = false;
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      {Array.from({ length: BAT_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            batRefs.current[i] = el;
          }}
          style={{
            position: "absolute",
            opacity: 0.7,
            willChange: "transform",
          }}
        >
          <BatIcon />
        </div>
      ))}
    </div>
  );
};
