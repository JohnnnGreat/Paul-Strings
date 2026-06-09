"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

/* Character-by-character stagger reveal */
type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  once = true,
}: AnimatedTextProps) {
  const chars = text.split("");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const char: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className={cn("inline-flex flex-wrap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={container}
      aria-label={text}
    >
      {chars.map((c, i) => (
        <motion.span
          key={i}
          variants={char}
          className={c === " " ? "inline-block w-[0.25em]" : "inline-block"}
        >
          {c === " " ? " " : c}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* Word-by-word reveal — more readable for longer phrases */
type AnimatedWordsProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

export function AnimatedWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.08,
  once = true,
}: AnimatedWordsProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className={cn("inline-flex flex-wrap gap-x-[0.25em]", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={container}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className={cn("inline-block", wordClassName)}>
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}
