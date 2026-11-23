"use client";

import { useEffect, useRef, useState } from "react";

export type RevealVariant =
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "zoom-in"
  | "pop-up"
  | "blur-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
}

const variantConfig: Record<
  RevealVariant,
  { hidden: React.CSSProperties; visible: React.CSSProperties; easing: string; defaultDuration: number }
> = {
  "fade-up": {
    hidden: { opacity: 0, transform: "translate3d(0, 28px, 0)" },
    visible: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    defaultDuration: 650,
  },
  "slide-left": {
    hidden: { opacity: 0, transform: "translate3d(-32px, 0, 0)" },
    visible: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    defaultDuration: 680,
  },
  "slide-right": {
    hidden: { opacity: 0, transform: "translate3d(32px, 0, 0)" },
    visible: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    defaultDuration: 680,
  },
  "zoom-in": {
    hidden: { opacity: 0, transform: "translate3d(0, 18px, 0) scale(0.94)" },
    visible: { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    defaultDuration: 650,
  },
  "pop-up": {
    hidden: { opacity: 0, transform: "translate3d(0, 22px, 0) scale(0.92)" },
    visible: { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" },
    easing: "cubic-bezier(0.34, 1.4, 0.64, 1)",
    defaultDuration: 620,
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(6px)", transform: "translate3d(0, 14px, 0)" },
    visible: { opacity: 1, filter: "blur(0px)", transform: "translate3d(0, 0, 0)" },
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    defaultDuration: 750,
  },
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cfg = variantConfig[variant];
  const ms = duration ?? cfg.defaultDuration;
  const activeStyle = isVisible ? cfg.visible : cfg.hidden;

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{
        ...activeStyle,
        transition: `opacity ${ms}ms ${cfg.easing} ${delay}ms, transform ${ms}ms ${cfg.easing} ${delay}ms, filter ${ms}ms ${cfg.easing} ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
