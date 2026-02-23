"use client";

import { useEffect, useRef, useState } from "react";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "bounce-in"
  | "rotate-in"
  | "slide-left"
  | "slide-right"
  | "fly-in-left"
  | "fly-in-right"
  | "fly-in-bottom"
  | "swing-in-left"
  | "swing-in-right"
  | "scale-up-center"
  | "roll-in-left"
  | "roll-in-right"
  | "clip-from-left"
  | "clip-from-right"
  | "clip-from-bottom";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.15,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const hiddenStyles: Record<Animation, string> = {
    "fade-up": "opacity-0 translate-y-16",
    "fade-down": "opacity-0 -translate-y-16",
    "fade-left": "opacity-0 -translate-x-20",
    "fade-right": "opacity-0 translate-x-20",
    "zoom-in": "opacity-0 scale-50",
    "zoom-out": "opacity-0 scale-125",
    "flip-up": "opacity-0 [transform:perspective(800px)_rotateX(25deg)_translateY(40px)]",
    "bounce-in": "opacity-0 scale-50",
    "rotate-in": "opacity-0 rotate-12 scale-75",
    "slide-left": "opacity-0 -translate-x-full",
    "slide-right": "opacity-0 translate-x-full",
    "fly-in-left": "opacity-0 [transform:translateX(-120px)_scale(0.8)_rotate(-8deg)]",
    "fly-in-right": "opacity-0 [transform:translateX(120px)_scale(0.8)_rotate(8deg)]",
    "fly-in-bottom": "opacity-0 [transform:translateY(100px)_scale(0.85)]",
    "swing-in-left": "opacity-0 [transform:perspective(600px)_rotateY(40deg)_translateX(-60px)]",
    "swing-in-right": "opacity-0 [transform:perspective(600px)_rotateY(-40deg)_translateX(60px)]",
    "scale-up-center": "opacity-0 [transform:scale(0.4)]",
    "roll-in-left": "opacity-0 [transform:translateX(-150px)_rotate(-120deg)]",
    "roll-in-right": "opacity-0 [transform:translateX(150px)_rotate(120deg)]",
    "clip-from-left": "[clip-path:inset(0_100%_0_0)] opacity-0",
    "clip-from-right": "[clip-path:inset(0_0_0_100%)] opacity-0",
    "clip-from-bottom": "[clip-path:inset(100%_0_0_0)] opacity-0",
  };

  const visibleStyles: Partial<Record<Animation, string>> = {
    "clip-from-left": "[clip-path:inset(0_0_0_0)] opacity-100",
    "clip-from-right": "[clip-path:inset(0_0_0_0)] opacity-100",
    "clip-from-bottom": "[clip-path:inset(0_0_0_0)] opacity-100",
  };

  const defaultVisibleStyle =
    "opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0 [transform:perspective(800px)_rotateX(0deg)_rotateY(0deg)_translateX(0px)_translateY(0px)_scale(1)_rotate(0deg)]";

  const visibleStyle = visibleStyles[animation] || defaultVisibleStyle;

  const bounceExtra = animation === "bounce-in" && isVisible ? " animate-bounce-settle" : "";

  return (
    <div
      ref={ref}
      className={`${isVisible ? visibleStyle : hiddenStyles[animation]}${bounceExtra} ${className}`}
      style={{
        transitionProperty: "opacity, transform, clip-path",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction:
          animation === "bounce-in"
            ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
            : animation.startsWith("fly-in") || animation.startsWith("roll-in")
            ? "cubic-bezier(0.16, 1, 0.3, 1)"
            : animation.startsWith("swing-in")
            ? "cubic-bezier(0.175, 0.885, 0.32, 1.275)"
            : "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Stagger container - wraps children with staggered delays
interface StaggerContainerProps {
  children: React.ReactNode;
  animation?: Animation;
  staggerDelay?: number;
  baseDelay?: number;
  duration?: number;
  className?: string;
  itemClassName?: string;
}

export function StaggerContainer({
  children,
  animation = "fade-up",
  staggerDelay = 120,
  baseDelay = 0,
  duration = 600,
  className = "",
  itemClassName = "",
}: StaggerContainerProps) {
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <AnimateOnScroll
          key={index}
          animation={animation}
          delay={baseDelay + index * staggerDelay}
          duration={duration}
          className={itemClassName}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </div>
  );
}
