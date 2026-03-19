"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";

const viewport = {
  once: true,
  amount: 0.18,
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

function buildReveal(delay: number, reducedMotion: boolean) {
  return {
    initial: {
      opacity: 0,
      y: reducedMotion ? 0 : 28,
      filter: reducedMotion ? "blur(0px)" : "blur(10px)",
    },
    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    transition: {
      duration: reducedMotion ? 0.01 : 0.82,
      delay: reducedMotion ? 0 : delay,
      ease: smoothEase,
    },
    viewport,
  };
}

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  children: ReactNode;
};

type HeadingProps = HTMLMotionProps<"h2"> & {
  delay?: number;
  children: ReactNode;
};

type TextProps = HTMLMotionProps<"p"> & {
  delay?: number;
  children: ReactNode;
};

type StaggerItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  hoverY?: number;
  hoverScale?: number;
};

export function RevealDiv({ children, delay = 0, ...props }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div {...buildReveal(delay, !!reducedMotion)} {...props}>
      {children}
    </motion.div>
  );
}

export function RevealHeading({ children, delay = 0, ...props }: HeadingProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.h2 {...buildReveal(delay, !!reducedMotion)} {...props}>
      {children}
    </motion.h2>
  );
}

export function RevealText({ children, delay = 0, ...props }: TextProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.p {...buildReveal(delay, !!reducedMotion)} {...props}>
      {children}
    </motion.p>
  );
}

export function StaggerGrid({ children, ...props }: HTMLMotionProps<"div">) {
  const reducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.1,
        delayChildren: reducedMotion ? 0 : 0.06,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  hoverY = 10,
  hoverScale = 1.02,
  ...props
}: StaggerItemProps) {
  const reducedMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 24,
      scale: reducedMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0.01 : 0.78,
        ease: smoothEase,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -hoverY,
              scale: hoverScale,
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FloatDiv({ children, ...props }: HTMLMotionProps<"div">) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        reducedMotion
          ? undefined
          : { y: [0, -10, 0], rotate: [0, -0.6, 0.6, 0] }
      }
      transition={
        reducedMotion
          ? undefined
          : {
              duration: 8,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function HeroReveal({ children, ...props }: HTMLMotionProps<"div">) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reducedMotion ? 0 : 32,
        filter: reducedMotion ? "blur(0px)" : "blur(12px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.95,
        ease: smoothEase,
        delay: reducedMotion ? 0 : 0.12,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}