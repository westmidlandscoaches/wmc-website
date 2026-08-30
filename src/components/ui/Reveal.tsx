import { motion, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { motionDurations, motionEasing } from '../../lib/motion';

export interface RevealProps {
  /** Vertical offset in pixels the content travels in from. */
  distance?: number;
  /** Motion duration in seconds. Defaults to an editorial reveal. */
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * Reveal primitive for editorial content that genuinely benefits from motion.
 * Respects prefers-reduced-motion by skipping the transform entirely.
 */
export default function Reveal({
  children,
  distance = 16,
  duration = motionDurations.revealEditorial,
  delay = 0,
  className,
}: PropsWithChildren<RevealProps>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: motionEasing,
      }}
    >
      {children}
    </motion.div>
  );
}
