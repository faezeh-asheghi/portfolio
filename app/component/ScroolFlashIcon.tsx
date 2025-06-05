'use client';

import { useState, useEffect } from "react";

type Flash = { id: number; x: number; y: number };

export default function TouchFlash() {
  const [flashes, setFlashes] = useState<Flash[]>([]);

  useEffect(() => {
    const handlePointer = (e: MouseEvent | TouchEvent) => {
      let clientX: number, clientY: number;
      if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      }
      const id = Date.now() + Math.random();
      setFlashes((prev) => [...prev, { id, x: clientX, y: clientY }]);
    };

    window.addEventListener("click", handlePointer, { passive: true });
    window.addEventListener("touchstart", handlePointer, { passive: true });
    return () => {
      window.removeEventListener("click", handlePointer);
      window.removeEventListener("touchstart", handlePointer);
    };
  }, []);

  const handleAnimationEnd = (id: number) => {
    setFlashes((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <>
      {flashes.map((flash) => (
        <div
          key={flash.id}
          onAnimationEnd={() => handleAnimationEnd(flash.id)}
          style={{
            position: "fixed",
            top: flash.y - 20,
            left: flash.x - 20,
            width: 40,
            height: 40,
            zIndex: 9999,
          }}
          className="touch-flash-circle"
        />
      ))}

      <style jsx>{`
        @keyframes touchFlash {
          0% {
            transform: scale(0.4);
            opacity: 0.85;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }
          40% {
            transform: scale(1.1);
            opacity: 0.6;
            box-shadow: 0 0 10px rgba(253, 195, 53, 0.5),
                        0 0 20px rgba(253, 195, 53, 0.3);
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
          }
        }

        .touch-flash-circle {
          pointer-events: none;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(253, 195, 53, 0.7),
            rgba(253, 195, 53, 0.2),
            transparent
          );
          backdrop-filter: blur(4px);
          animation: touchFlash 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}
