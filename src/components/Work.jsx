"use client";

import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function Work() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  const autoplayInterval = useRef(null);

  const items = [
    "/port/img1.webp",
    "/port/img3.webp",
    "/port/img4.webp",
    "/port/img2.webp",
  ];

  // Add 2 backups of the items
  const loopItems = [...items, ...items, ...items];

  useEffect(() => {
    if (!emblaApi) return;

    autoplayInterval.current = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);

    return () => {
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current);
      }
    };
  }, [emblaApi]);

  return (
    <div className="w-full px-4">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {loopItems.map((item, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 w-[280px] h-[200px] sm:w-[350px] sm:h-[250px] md:w-[550px] md:h-[400px] relative rounded-lg overflow-hidden"
            >
              <Image
                src={item}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, 550px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
