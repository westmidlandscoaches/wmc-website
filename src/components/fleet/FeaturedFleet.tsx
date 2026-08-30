import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { motionDurations } from '../../lib/motion';
import './FeaturedFleet.css';

export interface FeaturedFleetItem {
  category: 'car' | 'minibus' | 'coach';
  label: string;
  copy: string;
  href: string;
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
      <div className="featured-fleet__controls" role="tablist" aria-label="Fleet category">
        {items.map((item) => {
          const isActive = item.category === active.category;
          return (
            <button
              key={item.category}
              type="button"
              role="tab"
              aria-selected={isActive}
              className="featured-fleet__tab"
              data-active={isActive}
              onClick={() => setActiveCategory(item.category)}
            >
              <span className="featured-fleet__tab-label">{item.label}</span>
              <span className="featured-fleet__tab-copy">{item.copy}</span>
            </button>
          );
        })}

        <a className="arrow-link featured-fleet__explore" href={active.href}>
          Explore {active.label.toLowerCase()}
        </a>
      </div>

      <div className="featured-fleet__stage">
        {/* Keyed remount crossfades on entry. No exit animation gates the
            swap, so a throttled or interrupted transition can never leave the
            stage showing the previous category. */}
        <motion.figure
          key={active.category}
          className="featured-fleet__figure"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 1.015 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : motionDurations.revealMedium }}
        >
            <img
              src={active.src}
              width={active.width}
              height={active.height}
              alt={active.alt}
              loading="lazy"
              className="featured-fleet__image"
            />
          <figcaption className="featured-fleet__caption">{active.label}</figcaption>
        </motion.figure>
      </div>
    </div>
  );
}
