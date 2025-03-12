"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Work() {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const items = [
    "/port/img2.webp",
    "/port/img1.webp",
    "/port/img3.webp",
    "/port/img4.webp",
  ];

  // Handle intersection observer for viewport detection
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

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

  // Animation logic
  useEffect(() => {
    if (!isInView) return;
    
    let animationFrameId;
    let startTime;
    let xPosition = 0;
    
    // Much slower duration for a more relaxed scroll
    const duration = windowWidth < 640 ? 60 : 40; // seconds
    const totalDistance = document.querySelector(".carousel-track")?.offsetWidth || 0;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000; // seconds
      
      // Calculate position based on time
      xPosition = -(elapsed * (totalDistance / duration)) % totalDistance;
      
      // Apply transform directly for better performance
      const track = document.querySelector(".carousel-track");
      if (track) {
        track.style.transform = `translateX(${xPosition}px)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, windowWidth]);

  const itemClass = "my-[0.5rem] flex-shrink-0 w-[20rem] h-[15rem] sm:w-[30rem] sm:h-[20rem] md:w-[40rem] md:h-[30rem] rounded-lg outline outline-[6px] outline-[#c8cbd06e] flex items-center justify-center text-2xl relative";

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div className="flex relative">
        <div className="flex gap-[1.5rem] p-1 whitespace-nowrap carousel-track">
          {items.map((item, index) => (
            <div
              key={`original-${index}`}
              className={itemClass}
            >
              <Image
                src={item}
                alt={`Product Image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 20rem, (max-width: 768px) 30rem, 40rem"
                className="rounded-lg object-cover"
                loading="eager"
                priority={index < 2}
              />
            </div>
          ))}
          {items.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className={itemClass}
            >
              <Image
                src={item}
                alt={`Product Image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 20rem, (max-width: 768px) 30rem, 40rem"
                className="rounded-lg object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}