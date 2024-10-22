"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

function Navbar() {
  const { scrollY } = useScroll();
  const [showBookCall, setShowBookCall] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Adjust this value based on your hero section height
    const heroSectionHeight = 500;
    setShowBookCall(latest > heroSectionHeight);
  });

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-center z-50">
      <motion.div
        className="overflow-hidden flex items-center justify-center gap-4 mt-4 rounded-[12px] px-[0.5rem] py-[0.75rem] md:rounded-[1rem] md:px-[0.75rem] md:py-[0.9rem] bg-gradient-to-br from-[#131313] via-[#41444B] to-[#131313]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{paddingLeft: showBookCall ? "1rem" : ""}}
      >
        <Image
          src="/orus.svg"
          width={60}
          height={20}
          alt="logo"
          className="w-auto h-4 md:h-[1.75rem]"
        />

        <AnimatePresence>
          {showBookCall && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="facebook.com"
                className="px-[1rem] py-[0.5rem] rounded-[8px] md:rounded-[12px] text-[1rem] md:text-[1.25rem] text-center bg-white font-medium whitespace-nowrap"
              >
                Book a Call
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}

export default Navbar;
