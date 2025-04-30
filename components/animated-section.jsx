"use client";

// import type { ReactNode } from "react"
import { motion } from "framer-motion";

// interface AnimatedSectionProps {
//   children: ReactNode
//   className?: string
//   delay?: number
// }

export default function AnimatedSection({ children, className, delay = 0.1 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
