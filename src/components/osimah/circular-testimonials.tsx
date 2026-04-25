"use client";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

export const CircularTestimonials = ({ testimonials, autoplay = true }: CircularTestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = useMemo(() => testimonials.length, [testimonials]);
  const active = testimonials[activeIndex];

  useEffect(() => {
    if (!autoplay) return;
    autoplayRef.current = setInterval(() => setActiveIndex((p) => (p + 1) % count), 6000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [autoplay, count]);

  const handleNext = useCallback(() => {
    setActiveIndex((p) => (p + 1) % count);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, [count]);

  const handlePrev = useCallback(() => {
    setActiveIndex((p) => (p - 1 + count) % count);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, [count]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrev]);

  return (
    <div className="ct2">
      <div className="ct2__grid">
        <motion.div
          className="ct2__media"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.18}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) handleNext();
            else if (info.offset.x > 60) handlePrev();
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              // eslint-disable-next-line @next/next/no-img-element
              key={active.src}
              src={active.src}
              alt={active.name}
              className="ct2__img"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              draggable={false}
            />
          </AnimatePresence>
        </motion.div>

        <div className="ct2__content">
          <span className="ct2__mark serif" aria-hidden>“</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <p className="ct2__quote serif">{active.quote}</p>
              <div className="ct2__attr">
                <div className="ct2__name">{active.name}</div>
                <div className="ct2__designation">{active.designation}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="ct2__controls">
            <div className="ct2__progress" aria-hidden>
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="ct2__progress-bar"><span style={{ width: `${((activeIndex + 1) / count) * 100}%` }} /></span>
              <span>{String(count).padStart(2, "0")}</span>
            </div>
            <div className="ct2__arrows">
              <button className="ct2__arrow" onClick={handlePrev} aria-label="Previous">
                <FaArrowLeft size={14} />
              </button>
              <button className="ct2__arrow" onClick={handleNext} aria-label="Next">
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularTestimonials;
