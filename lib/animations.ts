import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function fadeInUp(
  element: string | Element | Element[],
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    stagger?: number;
    trigger?: string | Element;
  }
) {
  return gsap.from(element, {
    y: options?.y ?? 60,
    opacity: 0,
    duration: options?.duration ?? 1,
    delay: options?.delay ?? 0,
    stagger: options?.stagger ?? 0.15,
    ease: "power3.out",
    scrollTrigger: options?.trigger
      ? {
          trigger: options.trigger,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none none",
        }
      : undefined,
  });
}

export function fadeIn(
  element: string | Element | Element[],
  options?: {
    delay?: number;
    duration?: number;
    trigger?: string | Element;
  }
) {
  return gsap.from(element, {
    opacity: 0,
    duration: options?.duration ?? 1,
    delay: options?.delay ?? 0,
    ease: "power2.out",
    scrollTrigger: options?.trigger
      ? {
          trigger: options.trigger,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      : undefined,
  });
}

export function staggerReveal(
  elements: string | Element | Element[],
  options?: {
    trigger?: string | Element;
    stagger?: number;
    y?: number;
  }
) {
  return gsap.from(elements, {
    y: options?.y ?? 40,
    opacity: 0,
    duration: 0.8,
    stagger: options?.stagger ?? 0.1,
    ease: "power3.out",
    scrollTrigger: options?.trigger
      ? {
          trigger: options.trigger,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      : undefined,
  });
}

export function scaleIn(
  element: string | Element | Element[],
  options?: {
    delay?: number;
    trigger?: string | Element;
  }
) {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay: options?.delay ?? 0,
    ease: "back.out(1.4)",
    scrollTrigger: options?.trigger
      ? {
          trigger: options.trigger,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      : undefined,
  });
}

export function typeWriter(
  element: Element,
  text: string,
  options?: { speed?: number; delay?: number }
) {
  const speed = options?.speed ?? 50;
  const delay = options?.delay ?? 0;

  element.textContent = "";

  return new Promise<void>((resolve) => {
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, speed);
    }, delay);
  });
}
