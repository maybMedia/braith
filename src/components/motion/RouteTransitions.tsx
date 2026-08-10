"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => Promise<void> | void) => {
    finished: Promise<void>;
  };
};

const transitionTimeout = 1200;
const offeringsRoutes = ["/services", "/packages"];

function getOfferingsTransition(pathname: string, nextPathname: string) {
  const currentIndex = offeringsRoutes.indexOf(pathname);
  const nextIndex = offeringsRoutes.indexOf(nextPathname);

  if (currentIndex === -1 || nextIndex === -1) {
    return null;
  }

  return nextIndex > currentIndex ? "offerings-forward" : "offerings-back";
}

function getRouteTransition(
  anchor: HTMLAnchorElement,
  pathname: string,
  nextPathname: string,
) {
  if (anchor.dataset.offeringsSwitcher === "true") {
    return getOfferingsTransition(pathname, nextPathname);
  }

  return null;
}

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
      const transitionName = getRouteTransition(
        anchor,
        window.location.pathname,
        url.pathname,
      );

      const navigationSettled = new Promise<void>((resolve) => {
        resolveTransitionRef.current = resolve;
        window.setTimeout(resolve, transitionTimeout);
      });

      if (transitionName) {
        document.documentElement.dataset.routeTransition = transitionName;
        document.documentElement.dataset.suppressPageEnter = "true";
      } else {
        delete document.documentElement.dataset.suppressPageEnter;
      }

      viewTransitionDocument
        .startViewTransition(() => {
          router.push(href);
          return navigationSettled;
        })
        .finished.finally(() => {
          resolveTransitionRef.current = null;
          delete document.documentElement.dataset.routeTransition;
        });
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [router]);

  return null;
}
