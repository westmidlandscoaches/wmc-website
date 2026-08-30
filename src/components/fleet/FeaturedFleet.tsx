import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { motionDurations } from '../../lib/motion';
import './FeaturedFleet.css';

export interface FeaturedFleetItem {
  category: 'car' | 'minibus' | 'coach';
  label: string;
  copy: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface FeaturedFleetProps {
  items: FeaturedFleetItem[];
}

export default function FeaturedFleet({ items }: FeaturedFleetProps) {
  const [activeCategory, setActiveCategory] = useState(items[0]?.category);
  const shouldReduceMotion = useReducedMotion();
  const active = items.find((item) => item.category === activeCategory) ?? items[0];

  if (!active) return null;

  return (
    <div className="featured-fleet">
      <div className="featured-fleet__tabs" role="tablist" aria-label="Fleet category">
        {items.map((item) => (
          <button
            key={item.category}
            type="button"
            role="tab"
            aria-selected={item.category === active.category}
            className="featured-fleet__tab text-navigation"
            data-active={item.category === active.category}
            onClick={() => setActiveCategory(item.category)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="featured-fleet__stage">
        <AnimatePresence mode="wait">
          <motion.figure
            key={active.category}
            className="featured-fleet__figure"
            initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : motionDurations.standard }}
          >
            <img
              src={active.src}
              width={active.width}
              height={active.height}
              alt={active.alt}
              loading="lazy"
              className="featured-fleet__image"
            />
            <figcaption className="text-body featured-fleet__caption">{active.copy}</figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
    </div>
  );
}
