"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "flip-up"
  | "flip-left"
  | "bounce-in"
  | "rotate-in";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Hook for staggered children animations
export function useStaggerAnimation(options: UseScrollAnimationOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -30px 0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

// Animated counter hook
export function useCountUp(end: number, duration: number = 2000, startOnVisible: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const startCounting = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);

    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  useEffect(() => {
    if (!startOnVisible) {
      startCounting();
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [startCounting, startOnVisible]);

  return { count, ref };
}

// Helper to get animation classes
export function getAnimationClass(type: AnimationType, isVisible: boolean, delay: number = 0): string {
  const base = "transition-all duration-700 ease-out";
  const delayClass = delay > 0 ? ` delay-[${delay}ms]` : "";

  if (!isVisible) {
    switch (type) {
      case "fade-up":
        return `${base} opacity-0 translate-y-12`;
      case "fade-down":
        return `${base} opacity-0 -translate-y-12`;
      case "fade-left":
        return `${base} opacity-0 translate-x-16`;
      case "fade-right":
        return `${base} opacity-0 -translate-x-16`;
      case "zoom-in":
        return `${base} opacity-0 scale-75`;
      case "zoom-out":
        return `${base} opacity-0 scale-110`;
      case "flip-up":
        return `${base} opacity-0 [transform:perspective(600px)_rotateX(20deg)]`;
      case "flip-left":
        return `${base} opacity-0 [transform:perspective(600px)_rotateY(20deg)]`;
      case "bounce-in":
        return `${base} opacity-0 scale-50`;
      case "rotate-in":
        return `${base} opacity-0 rotate-12 scale-90`;
      default:
        return `${base} opacity-0 translate-y-12`;
    }
  }

  return `${base}${delayClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0 [transform:perspective(600px)_rotateX(0deg)_rotateY(0deg)]`;
}
