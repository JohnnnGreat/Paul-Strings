"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springCfg = { damping: 28, stiffness: 600, mass: 0.5 };
  const ringCfg   = { damping: 22, stiffness: 180, mass: 0.8 };

  const dotX  = useSpring(cursorX, springCfg);
  const dotY  = useSpring(cursorY, springCfg);
  const ringX = useSpring(cursorX, ringCfg);
  const ringY = useSpring(cursorY, ringCfg);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive = el.closest("a, button, [data-cursor]");
      setIsHovering(!!interactive);
      setLabel(interactive?.getAttribute("data-cursor") ?? null);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [cursorX, cursorY, isVisible]);

  /* Hide on touch devices */
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full bg-amber"
          animate={{ width: isHovering ? 6 : 8, height: isHovering ? 6 : 8 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: isVisible ? 1 : 0 }}
      >
        <motion.div
          className="rounded-full border border-amber/50 flex items-center justify-center"
          animate={{
            width:  isHovering ? 52 : 32,
            height: isHovering ? 52 : 32,
          }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {label && (
            <span className="text-[9px] font-jakarta font-600 text-amber uppercase tracking-wider whitespace-nowrap">
              {label}
            </span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
