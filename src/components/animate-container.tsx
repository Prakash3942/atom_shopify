// import React from "react";
import { motion } from "framer-motion";

export enum AnimationType {
  SlideInLeft = "slideInLeft",
  SlideInRight = "slideInRight",
}

const properties = {
  slideInLeft: {
    initial: {
      opacity: 0,
      x: -80,
    },
    whileInView: {
      opacity: 1,
      x: 0,
    },
  },
  slideInRight: {
    initial: {
      opacity: 0,
      x: 80,
    },
    whileInView: {
      opacity: 1,
      x: 0,
    },
  },
};

interface Props {
  children: any;
  animationType: AnimationType;
  duration?: number;
  delay?: number;
}

const AnimateContainer = ({
  children,
  animationType,
  duration,
  delay,
}: Props) => {
  return (
    <motion.div
      initial={properties[animationType].initial}
      whileInView={properties[animationType].whileInView}
      transition={{ duration: duration || 0.2, delay: delay || 0.1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateContainer;
