"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => Promise<void> | void) => {
    finished: Promise<void>;
  };
};

const transitionTimeout = 1200;

function shouldHandleLinkClick(event: MouseEvent, anchor: HTMLAnchorElement) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return false;
  }

  if (
    anchor.target ||
    anchor.hasAttribute("download") ||
    anchor.dataset.transition === "false"
  ) {
    return false;
  }

  const url = new URL(anchor.href);

  if (url.origin !== window.location.origin) {
    return false;
  }

  const isSamePage =
    url.pathname === window.location.pathname &&
    url.search === window.location.search;

  return !isSamePage;
}

export default function RouteTransitions() {
  const router = useRouter();
  const pathname = usePathname();
  const resolveTransitionRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    resolveTransitionRef.current?.();
    resolveTransitionRef.current = null;
  }, [pathname]);

  useEffect(() => {
    const viewTransitionDocument = document as ViewTransitionDocument;

    if (!viewTransitionDocument.startViewTransition) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>("a[href]");

      if (!anchor || !shouldHandleLinkClick(event, anchor)) {
        return;
      }

      event.preventDefault();

      const url = new URL(anchor.href);
      const href = `${url.pathname}${url.search}${url.hash}`;

      const navigationSettled = new Promise<void>((resolve) => {
        resolveTransitionRef.current = resolve;
        window.setTimeout(resolve, transitionTimeout);
      });

      viewTransitionDocument
        .startViewTransition(() => {
          router.push(href);
          return navigationSettled;
        })
        .finished.finally(() => {
          resolveTransitionRef.current = null;
        });
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [router]);

  return null;
}
