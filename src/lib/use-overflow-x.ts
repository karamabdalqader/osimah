"use client";
import { useEffect, useRef } from "react";

export function useOverflowX<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const overflowing = el.scrollWidth - el.clientWidth > 1;
      el.dataset.overflowing = overflowing ? "true" : "false";
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return ref;
}
