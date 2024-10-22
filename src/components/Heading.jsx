"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

const words = ["drive results", "boost sales", "stands out", "skyrocket sales"];

export default function AnimatedHeading() {
  const [scope, animate] = useAnimate();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      }
    );
  }, [currentWordIndex, animate]);

  const renderWords = () => {
    const currentWord = words[currentWordIndex];
    const wordsArray = currentWord.split(" ");

    return (
      <motion.div ref={scope} className="inline-block whitespace-pre">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="inline-block"
            style={{ 
              filter: "blur(20px)",
              opacity: 0,
            }}
          >
            {idx > 0 ? ` ${word}` : word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="text-black inline-block bg-transparent">
      {renderWords()}
    </div>
  );
}