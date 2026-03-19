"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

const INITIAL_LOAD_DURATION_MS = 900;
const ROUTE_CHANGE_DURATION_MS = 650;

export default function RouteLoader() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const isFirstRender = useRef(true);
  const hideTimeoutRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  function scheduleHide(duration: number) {
    if (hideTimeoutRef.current !== null) {
      window.clearTimeout(hideTimeoutRef.current);
    }

    hideTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
      hideTimeoutRef.current = null;
    }, reducedMotion ? 120 : duration);
  }

  useEffect(() => {
    const duration = isFirstRender.current
      ? INITIAL_LOAD_DURATION_MS
      : ROUTE_CHANGE_DURATION_MS;

    isFirstRender.current = false;
    setIsVisible(true);

    scheduleHide(duration);

    return () => {
      if (hideTimeoutRef.current !== null) {
        window.clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [pathname, reducedMotion]);

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a");

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (
        !href ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);

      if (destination.origin !== current.origin) {
        return;
      }

      const isSameDocumentHashJump =
        destination.pathname === current.pathname &&
        destination.search === current.search &&
        destination.hash.length > 0;

      const isSameDocumentNavigation =
        destination.pathname === current.pathname &&
        destination.search === current.search &&
        destination.hash === current.hash;

      if (isSameDocumentHashJump || isSameDocumentNavigation) {
        return;
      }

      setIsVisible(true);
    }

    function handlePopState() {
      setIsVisible(true);
    }

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0.15 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.98 }}
            transition={{ duration: reducedMotion ? 0.12 : 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="px-6"
          >
            <Image
              src="/logos/zerowastelogo.png"
              alt="Zero Waste"
              width={260}
              height={120}
              priority
              className="h-auto w-45 object-contain md:w-60"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}