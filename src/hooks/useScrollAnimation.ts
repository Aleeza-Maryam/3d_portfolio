"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useScrollAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    gsap.utils.toArray(".section-reveal").forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}