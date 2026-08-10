"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = ".scroll-reveal, .scroll-stagger > *";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(revealSelector).forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -4% 0px",
        threshold: 0.04,
      },
    );

    document.querySelectorAll(revealSelector).forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
