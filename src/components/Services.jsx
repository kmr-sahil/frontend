"use client";
import React from "react";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";

const services = [
  "UI Design", "Web Design", "Web Development", "App Development", "Social Media", 
  "Motion Design", "Brand Design", "Cloud & Hosting", "Copywriting", "Landing Page"
];

// Marquee Animation Settings
const marqueeVariantsLeftToRight = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
    },
  },
};

const marqueeVariantsRightToLeft = {
  animate: {
    x: ["0%", "100%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
    },
  },
};

const MarqueeLeftToRight = () => {
  return (
    <div className="relative w-full h-4">
      <motion.div
        className="absolute whitespace-nowrap w-full z-20"
        whileHover={{ animationPlayState: "paused" }}
      >
        <motion.div
          className="flex gap-8"
          variants={marqueeVariantsLeftToRight}
          animate="animate"
        >
          {services.concat(services).map((service, index) => (
            <motion.span
              key={index}
              className="text-5xl sm:text-4xl md:text-6xl font-bold text-zinc-300 hover:text-zinc-600 transition-colors cursor-pointer"
              whileHover={{ color: "#4a4a4a" }}
            >
              {service}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const MarqueeRightToLeft = () => {
  return (
    <div className="relative w-full ">
      <motion.div
        className="absolute whitespace-nowrap w-full z-20"
        whileHover={{ animationPlayState: "paused" }}
      >
        <motion.div
          className="flex gap-8 justify-end"
          variants={marqueeVariantsRightToLeft}
          animate="animate"
        >
          {services.concat(services).map((service, index) => (
            <motion.span
              key={index}
              className="text-5xl sm:text-4xl md:text-6xl font-bold text-zinc-300 hover:text-zinc-400 transition-colors cursor-pointer"
              whileHover={{ color: "#4a4a4a" }}
            >
              {service}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col items-center text-center gap-6 mx-auto md:max-w-6xl mt-[5rem] mb-[10rem]">
      <Balancer><h2 className="title">Everything Creative, All in One Place</h2></Balancer>
      <Balancer><p className="title-primary">
        We're your one-stop shop for all things creative and digital
      </p></Balancer>
      
      {/* Marquee Sections */}
      <div className="w-full space-y-16 mt-[2rem]">
        <MarqueeLeftToRight />
        <MarqueeRightToLeft />
      </div>
    </div>
  );
};

export default Services;