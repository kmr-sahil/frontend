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
  maxOpacity = 0.030,
  duration = 4,
  repeatDelay = 0,
  ...props
}) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares));
  
  // Add iOS detection
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check for iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                       (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOS(isIOSDevice);
  }, []);

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

  const containerStyles = {
    position: 'relative',
    width: '100%',
    backgroundColor: 'white',
    isolation: 'isolate',
    ...(isIOS && {
      transform: 'translateZ(0)',
      WebkitTransform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      WebkitBackfaceVisibility: 'hidden',
    }),
  };

  const svgContainerStyles = {
    position: 'absolute',
    inset: 0,
    height: '40rem',
    overflow: 'hidden',
    ...(isIOS && {
      transform: 'translate3d(0,0,0)',
      WebkitTransform: 'translate3d(0,0,0)',
    }),
  };

  return (
    <div 
      className={cn(className)} 
      style={containerStyles}
      {...props}
    >
      <div
        ref={containerRef}
        style={svgContainerStyles}
      >
        <svg 
          className="w-full h-full"
          style={{
            ...(isIOS && {
              transform: 'translate3d(0,0,0)',
              WebkitTransform: 'translate3d(0,0,0)',
            })
          }}
        >
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
          <rect 
            width="100%" 
            height="100%" 
            fill={`url(#${id}-pattern)`}
            style={{ opacity: isIOS ? 0.5 : 1 }}
          />
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
              style={isIOS ? { mixBlendMode: 'normal' } : {}}
            />
          ))}
        </svg>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '5rem',
          zIndex: 1,
          background: isIOS 
            ? 'linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.001) 100%)'
            : 'linear-gradient(to top, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)',
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
        }}
      />
    </div>
  );
}

export default GridBackground;