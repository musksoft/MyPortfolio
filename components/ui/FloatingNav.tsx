"use client";
import React, { JSX, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string>("Home");

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Show/hide on scroll
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) setVisible(true);
        else setVisible(false);
      }
    }
  });

  // Smooth scroll globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleNavClick = (name: string, link: string) => {
    setActive(name);
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{
          y: visible ? 0 : -80,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className={cn(
          "fixed top-6 inset-x-0 mx-auto flex max-w-fit border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black/80 bg-white/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-7 py-3 items-center justify-center space-x-6",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={`link-${idx}`}
            onClick={() => handleNavClick(navItem.name, navItem.link)}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors duration-200 text-sm sm:text-[14px]",
              active === navItem.name
                ? "text-blue-500 font-semibold"
                : "font-normal"
            )}
          >
            <span className="block sm:hidden text-[17px]">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>

            {/* Blue underline when active */}
            {active === navItem.name && (
              <span className="absolute inset-x-0 w- 2/3 mx-auto -bottom-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] rounded-full" />
            )}
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
