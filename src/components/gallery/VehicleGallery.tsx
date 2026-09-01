import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import './VehicleGallery.css';

export interface GalleryImage {
  src: string;
  thumb: string;
  width: number;
  height: number;
  alt: string;
  view: 'exterior' | 'interior';
}

export interface GalleryGroup {
  id: string;
  label: string;
  categoryLabel: string;
  quoteHref: string;
  images: GalleryImage[];
}

export interface VehicleGalleryProps {
  groups: GalleryGroup[];
}

type ViewFilter = 'all' | 'exterior' | 'interior';

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function VehicleGallery({ groups }: VehicleGalleryProps) {
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const [filter, setFilter] = useState<ViewFilter>('all');
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const group = groups.find((g) => g.id === openGroupId) ?? null;
  const images = group
    ? filter === 'all'
      ? group.images
      : group.images.filter((image) => image.view === filter)
    : [];
  const current = images[Math.min(index, images.length - 1)];

  const hasExterior = Boolean(group?.images.some((i) => i.view === 'exterior'));
  const hasInterior = Boolean(group?.images.some((i) => i.view === 'interior'));
  const showFilters = hasExterior && hasInterior;

  const close = useCallback(() => {
    setOpenGroupId(null);
    setFilter('all');
    setIndex(0);
    // Focus returns to whatever opened the gallery.
    openerRef.current?.focus();
    openerRef.current = null;
  }, []);

  const step = useCallback(
    (delta: number) => {
      setIndex((prev) => {
        if (images.length === 0) return 0;
        return (prev + delta + images.length) % images.length;
      });
    },
    [images.length],
  );

  // Openers live in static Astro markup, so the island listens for their clicks.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>('[data-gallery-open]');
      if (!trigger) return;
      const id = trigger.dataset.galleryOpen;
      if (!id || !groups.some((g) => g.id === id)) return;
      event.preventDefault();
      openerRef.current = trigger;
      setFilter('all');
      setIndex(0);
      setOpenGroupId(id);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [groups]);

  // Keyboard: Escape closes, arrows move, Tab is trapped inside the dialog.
  useEffect(() => {
    if (!group) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        step(1);
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        step(-1);
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [group, close, step]);

  // Lock background scrolling and move focus into the dialog.
  useEffect(() => {
    if (!group) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => {
      dialogRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(timer);
    };
  }, [group]);

  if (!group || !current) return null;

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null) return;
    const delta = (event.changedTouches[0]?.clientX ?? start) - start;
    if (Math.abs(delta) < 40) return;
    step(delta < 0 ? 1 : -1);
  };

  const setView = (next: ViewFilter) => {
    setFilter(next);
    setIndex(0);
  };

  return (
    <div
      className="vgal"
      role="dialog"
      aria-modal="true"
      aria-label={`${group.categoryLabel} ${group.label} photography`}
    >
      <div className="vgal__backdrop" onClick={close} aria-hidden="true" />

      <motion.div
        ref={dialogRef}
        className="vgal__panel"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <header className="vgal__head">
          <div>
            <p className="vgal__eyebrow">{group.categoryLabel}</p>
            <h2 className="vgal__title">{group.label}</h2>
          </div>
          <button type="button" className="vgal__close" onClick={close}>
            <span className="vgal__sr">Close gallery</span>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </button>
        </header>

        {showFilters && (
          <div className="vgal__filters" role="tablist" aria-label="Photograph type">
            {(
              [
                ['all', `All (${group.images.length})`],
                ['exterior', `Exterior (${group.images.filter((i) => i.view === 'exterior').length})`],
                ['interior', `Interior (${group.images.filter((i) => i.view === 'interior').length})`],
              ] as [ViewFilter, string][]
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={filter === value}
                className="vgal__filter"
                data-active={filter === value}
                onClick={() => setView(value)}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        <div className="vgal__stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <AnimatePresence initial={false} mode="popLayout">
            <motion.img
              key={current.src}
              src={current.src}
              width={current.width}
              height={current.height}
              alt={current.alt}
              className="vgal__image"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="vgal__nav vgal__nav--prev"
                onClick={() => step(-1)}
              >
                <span className="vgal__sr">Previous photograph</span>
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
                  <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M15 5l-7 7 7 7" />
                </svg>
              </button>
              <button type="button" className="vgal__nav vgal__nav--next" onClick={() => step(1)}>
                <span className="vgal__sr">Next photograph</span>
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
                  <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <p className="vgal__counter" aria-live="polite">
            {Math.min(index + 1, images.length)} / {images.length}
          </p>
        </div>

        {images.length > 1 && (
          <div className="vgal__rail" role="tablist" aria-label="Photographs">
            {images.map((image, i) => (
              <button
                key={image.thumb}
                type="button"
                role="tab"
                aria-selected={i === index}
                className="vgal__thumb"
                data-active={i === index}
                onClick={() => setIndex(i)}
              >
                <span className="vgal__sr">{`Photograph ${i + 1}`}</span>
                <img src={image.thumb} alt="" loading="lazy" width={160} height={120} />
              </button>
            ))}
          </div>
        )}

        <footer className="vgal__foot">
          <p className="vgal__caption">{current.alt}</p>
          <a className="vgal__cta" href={group.quoteHref}>
            {`Request a Quote for a ${group.categoryLabel}`}
          </a>
        </footer>
      </motion.div>
    </div>
  );
}
