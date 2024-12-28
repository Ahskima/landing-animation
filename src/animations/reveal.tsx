'use client'
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const variantMap = {
  scale: {
    hidden: { opacity: 1, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 },
  },
  opacity: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  custom: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
};
export interface RevealProps {
  children: React.ReactNode;
  type?:
    | "scale"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "opacity"
    | "custom";
  duration?: number;
  y?: number;
  x?: number;
}

const Reveal = (props: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={props.type ? variantMap[props.type] : variantMap.slideUp}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: props.duration ? props.duration : 0.3,
        delay: 0.15,
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default Reveal;

