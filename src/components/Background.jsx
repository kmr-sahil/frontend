"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GridBackground({
  width = 80,
  height = 80,
  x = -7,
  y = -7,
  strokeDasharray = 4,
  numSquares = 50,
  className,
  maxOpacity = 0.025,
  duration = 4,
  repeatDelay = 0,
  ...props
}) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  function getPos() {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }

  function generateSquares(count) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
    }));
  }

  const updateSquarePosition = (id) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
            }
          : sq
      )
    );
  };

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <div className={cn("relative w-full", className)} {...props}>
      <div
        ref={containerRef}
        className="absolute inset-0 md:h-[40rem] h-[40rem] overflow-hidden"
      >
        <svg className="w-full h-full">
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          <defs>
            <pattern
              id={`${id}-pattern`}
              width={width}
              height={height}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${width} 0 L 0 0 0 ${height}`}
                fill="none"
                stroke="currentColor"
                strokeOpacity="0.1"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id}-pattern)`} />
          {squares.map(({ pos: [x, y], id }, index) => (
            <motion.rect
              key={`${x}-${y}-${index}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
              fill="currentColor"
              strokeWidth="0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, maxOpacity, 0] }}
              transition={{
                duration,
                repeat: Infinity,
                repeatDelay,
                delay: Math.random() * 10,
                ease: "easeInOut",
              }}
              onAnimationComplete={() => updateSquarePosition(id)}
            />
          ))}
        </svg>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"
        style={{ zIndex: 1 }}
      />
    </div>
  );
}

export default GridBackground;