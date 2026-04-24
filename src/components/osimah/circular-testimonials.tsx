"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}
interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}
interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024, maxWidth = 1456, minGap = 60, maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  const colorName = colors.name ?? "#0d1117";
  const colorDesignation = colors.designation ?? "#6b7280";
  const colorTestimony = colors.testimony ?? "#374151";
  const colorArrowBg = colors.arrowBackground ?? "#141414";
  const colorArrowFg = colors.arrowForeground ?? "#f1f1f7";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#0FA39C";
  const fontSizeName = fontSizes.name ?? "1.5rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.925rem";
  const fontSizeQuote = fontSizes.quote ?? "1.125rem";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(600);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = useMemo(() => testimonials.length, [testimonials]);
  const active = useMemo(() => testimonials[activeIndex], [activeIndex, testimonials]);

  useEffect(() => {
    const el = imageContainerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerWidth(el.offsetWidth));
    ro.observe(el);
    setContainerWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    autoplayRef.current = setInterval(() => setActiveIndex((p) => (p + 1) % count), 5000);
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
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handlePrev, handleNext]);

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + count) % count === index;
    const isRight = (activeIndex + 1) % count === index;
    if (isActive) return { zIndex: 3, opacity: 1, pointerEvents: "auto", transform: "translateX(0px) translateY(0px) scale(1) rotateY(0deg)", transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
    if (isLeft) return { zIndex: 2, opacity: 1, pointerEvents: "auto", transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`, transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
    if (isRight) return { zIndex: 2, opacity: 1, pointerEvents: "auto", transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`, transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
    return { zIndex: 1, opacity: 0, pointerEvents: "none", transition: "all 0.8s cubic-bezier(.4,2,.3,1)" };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="ct-container">
      <div className="ct-grid">
        <div className="ct-images" ref={imageContainerRef}>
          {testimonials.map((t, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={t.src} src={t.src} alt={t.name} className="ct-img" style={getImageStyle(index)} />
          ))}
        </div>

        <div className="ct-content">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} variants={quoteVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3, ease: "easeInOut" }}>
              <h3 className="ct-name serif" style={{ color: colorName, fontSize: fontSizeName }}>{active.name}</h3>
              <p className="ct-designation" style={{ color: colorDesignation, fontSize: fontSizeDesignation }}>{active.designation}</p>
              <motion.p className="ct-quote" style={{ color: colorTestimony, fontSize: fontSizeQuote }}>
                {active.quote.split(" ").map((word, i) => (
                  <motion.span key={i} initial={{ filter: "blur(10px)", opacity: 0, y: 5 }} animate={{ filter: "blur(0px)", opacity: 1, y: 0 }} transition={{ duration: 0.22, ease: "easeInOut", delay: 0.025 * i }} style={{ display: "inline-block" }}>
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="ct-arrows">
            <button
              className="ct-arrow"
              onClick={handlePrev}
              style={{ backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous"
            >
              <FaArrowLeft size={18} color={colorArrowFg} />
            </button>
            <button
              className="ct-arrow"
              onClick={handleNext}
              style={{ backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next"
            >
              <FaArrowRight size={18} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularTestimonials;
