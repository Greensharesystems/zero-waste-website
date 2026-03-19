"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const [showInteractiveMap, setShowInteractiveMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const mapEmbedSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.335290513159!2d55.082861099999995!3d24.813195199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5fa164b0709503%3A0xa9f3281888fab2de!2sZero%20Waste!5e1!3m2!1sen!2sae!4v1773887076689!5m2!1sen!2sae";

  useEffect(() => {
    const mapContainer = mapContainerRef.current;

    if (!mapContainer || showInteractiveMap) {
      return;
    }

    const idleLoad = window.setTimeout(() => {
      setShowInteractiveMap(true);
    }, 1200);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) {
          return;
        }

        setShowInteractiveMap(true);
        observer.disconnect();
      },
      { rootMargin: "1400px 0px" },
    );

    observer.observe(mapContainer);

    return () => {
      window.clearTimeout(idleLoad);
      observer.disconnect();
    };
  }, [showInteractiveMap]);

  function handleOverviewLogoClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();

    const overviewStart = document.getElementById("overview-start");

    if (overviewStart) {
      overviewStart.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "/#overview-start");
      return;
    }

    router.push("/#overview-start");
  }

  return (
    <footer className="hero-grid relative isolate overflow-hidden bg-[#36B37E] text-white">
      <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-br from-[#36B37E] via-[#36B37E] to-[#2F80ED]/90" />
      <div className="ambient-orb ambient-orb-emerald left-[6%] top-10 z-0 opacity-40" />
      <div className="ambient-orb ambient-orb-sky right-[10%] bottom-8 z-0 opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Logo */}
          <div className="lg:col-span-3">
            <Link
              href="/#overview-start"
              onClick={handleOverviewLogoClick}
              className="inline-block transition duration-300 hover:scale-[1.03]"
            >
              <Image
                src="/zwlogowhite.png"
                alt="Zero Waste"
                width={150}
                height={90}
                className="h-auto w-22 sm:w-24 md:w-32.5"
                priority={false}
              />
            </Link>
          </div>

          {/* Middle + Right content */}
          <div className="lg:col-span-9">
            {/* Top title */}
            <div className="mb-8 sm:mb-10">
              <h2 className="max-w-3xl text-[2rem] font-light leading-tight sm:text-[2.4rem] md:text-5xl">
                Enabling Sustainable
                <br />
                Ecosystems
              </h2>
            </div>

            {/* Main footer grid */}
            <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
              {/* Learn More */}
              <div>
                <h3 className="mb-5 text-sm font-medium text-white/90">
                  Learn More
                </h3>

                <ul className="space-y-3.5 text-[15px] text-white/95 sm:text-base">
                  <li>
                    <Link
                      href="/zero-waste-system"
                      className="nav-link-fx transition hover:text-white/75"
                    >
                      Zero Waste System
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/circular-solutions"
                      className="nav-link-fx transition hover:text-white/75"
                    >
                      Circular Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sustainability-and-innovation"
                      className="nav-link-fx transition hover:text-white/75"
                    >
                      Sustainability & Innovation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ecosystem-partners"
                      className="nav-link-fx transition hover:text-white/75"
                    >
                      Ecosystem Partners
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="mb-5 text-sm font-medium text-white/90">
                  Connect
                </h3>

                <ul className="space-y-4 text-sm md:text-base">
                  <li className="flex w-full max-w-78 items-start gap-4">
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 sm:h-10 sm:w-10">
                        <Image
                          src="/icons/emailicon.svg"
                          alt="Email"
                          width={26}
                          height={26}
                          className="h-5.5 w-5.5 sm:h-6.5 sm:w-6.5"
                        />
                      </span>
                      <a
                        href="mailto:care@zerowaste.ae"
                        className="nav-link-fx min-w-0 break-all transition hover:text-white/75"
                      >
                        care@zerowaste.ae
                      </a>
                    </div>
                    <a
                      href="https://www.linkedin.com/company/zerowasteme"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 transition hover:scale-105 hover:bg-white/10 md:hidden"
                    >
                      <Image
                        src="/icons/linkedinicon.svg"
                        alt="LinkedIn"
                        width={40}
                        height={40}
                        className="h-8 w-8"
                      />
                    </a>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 sm:h-10 sm:w-10">
                      <Image
                        src="/icons/callicon.svg"
                        alt="Call"
                        width={26}
                        height={26}
                        className="h-5.5 w-5.5 sm:h-6.5 sm:w-6.5"
                      />
                    </span>
                    <a
                      href="tel:+971547499963"
                      className="nav-link-fx transition hover:text-white/75"
                    >
                      +971 56 142 2288
                    </a>
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 sm:h-10 sm:w-10">
                      <Image
                        src="/icons/websiteicon.svg"
                        alt="Website"
                        width={26}
                        height={26}
                        className="h-5.5 w-5.5 sm:h-6.5 sm:w-6.5"
                      />
                    </span>
                    <a
                      href="https://www.zerowaste.ae"
                      target="_blank"
                      rel="noreferrer"
                      className="nav-link-fx min-w-0 break-all transition hover:text-white/75"
                    >
                      www.zerowaste.ae
                    </a>
                  </li>

                  <li className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/50 sm:h-10 sm:w-10">
                        <Image
                          src="/icons/locationicon.svg"
                          alt="Location"
                          width={26}
                          height={26}
                          className="h-5.5 w-5.5 sm:h-6.5 sm:w-6.5"
                        />
                      </span>
                      <span className="block pt-1 leading-relaxed">
                        Dubai Industrial
                        <br />
                        City (DIC), Dubai, UAE
                      </span>
                    </div>

                    <div ref={mapContainerRef} className="aspect-4/3 overflow-hidden shadow-sm">
                      {showInteractiveMap ? (
                        <iframe
                          src={mapEmbedSrc}
                          title="Zero Waste location map"
                          className="h-full w-full border-0"
                          allowFullScreen
                          loading="eager"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col justify-between bg-white/8 p-5 backdrop-blur-[2px]">
                          <div>
                            <p className="text-sm font-medium text-white">Zero Waste</p>
                            <p className="mt-2 max-w-xs text-sm leading-6 text-white/85">
                              Dubai Industrial City (DIC), Dubai, UAE
                            </p>
                          </div>
                          <p className="text-sm font-medium text-white/85">Loading map...</p>
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="hidden pt-2 md:block md:pt-10">
                <div>
                  <a
                    href="https://www.linkedin.com/company/zerowasteme"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/50 transition hover:scale-105 hover:bg-white/10 sm:h-16 sm:w-16"
                  >
                    <Image
                      src="/icons/linkedinicon.svg"
                      alt="LinkedIn"
                      width={48}
                      height={48}
                      className="h-10 w-10 sm:h-12 sm:w-12"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="relative z-10 mt-12 text-center text-xs text-white/85 md:mt-20">
          Zero Waste. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}