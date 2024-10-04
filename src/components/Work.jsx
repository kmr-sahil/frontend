"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function Work() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef)
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    } else {
      controls.stop()
    }
  }, [isInView, controls])

  const items = [1, 2, 3, 4, 5]

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        className="flex gap-[1.5rem] p-1"
        variants={{
          animate: {
            x: [0, -100 * items.length],
            transition: {
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            },
          },
        }}
        animate={controls}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="my-[0.5rem] flex-shrink-0 w-[30rem] h-[20rem] rounded-lg outline outline-[6px] outline-[#C8CBD0] flex items-center justify-center text-2xl"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  )
}