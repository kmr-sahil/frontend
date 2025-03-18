"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Work() {
  const [windowWidth, setWindowWidth] = useState(0);

  const items = [
    "/port/img2.webp",
    "/port/img1.webp",
    "/port/img3.webp",
    "/port/img4.webp",
  ];

  // Handle window resize for responsiveness
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const itemClass = `
    my-[0.5rem] flex-shrink-0 w-[20rem] h-[15rem] sm:w-[30rem] sm:h-[20rem] md:w-[40rem] md:h-[30rem]
    rounded-lg outline outline-[6px] outline-[#c8cbd06e] flex items-center justify-center
    text-2xl relative transition-transform duration-[0.8s] ease-out will-change-transform
    hover:scale-[1.025] hover:transition-[transform] hover:duration-[1.5s]
  `;

  const animationSpeed = windowWidth < 640 ? "60s" : "40s"; // Adjust speed based on window size

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        <div
          className="flex gap-[1rem] sm:gap-[2rem] p-1 whitespace-nowrap"
          style={{
            display: "flex",
            animation: `slide ${animationSpeed} linear infinite`,
            minWidth: "max-content",
          }}
        >
          {items.concat(items).map((item, index) => (
            <div key={index} className={itemClass}>
              <Image
                src={item}
                alt={`Product Image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 20rem, (max-width: 768px) 30rem, 40rem"
                className="rounded-lg object-cover"
                loading={index < 4 ? "eager" : "lazy"}
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
