"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const reducedMotion = useReducedMotion();
  const pathname = usePathname();
  const router = useRouter();

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
    <motion.header
      initial={{ opacity: 0, y: reducedMotion ? 0 : -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reducedMotion ? 0.01 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass-shell relative left-0 top-0 z-50 w-full text-white md:absolute"
    >
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 sm:pb-6 md:pb-4 md:pt-8 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          
          {/* Left: Logo */}
          <div className="shrink-0 self-start">
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
                priority
                className="h-auto w-22 sm:w-24 md:w-32.5"
              />
            </Link>
          </div>

          {/* Right: Contact + Navigation */}
          <div className="flex flex-col items-stretch gap-4 lg:items-end">

            {/* Contact Row */}
            <div className="grid grid-cols-1 gap-2.5 text-sm sm:grid-cols-2 sm:gap-3 md:flex md:flex-row md:items-center md:gap-6">

              <a
                href="mailto:care@zerowaste.ae"
                className="nav-link-fx flex min-w-0 items-center gap-2 text-[15px] text-white/90 transition hover:text-white md:text-sm"
              >
                <Image
                  src="/icons/emailicon.svg"
                  alt=""
                  width={28}
                  height={28}
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 object-contain md:h-7 md:w-7"
                />
                <span className="truncate">care@zerowaste.ae</span>
              </a>

              <a
                href="tel:+971547499963"
                className="nav-link-fx flex min-w-0 items-center gap-2 text-[15px] text-white/90 transition hover:text-white md:text-sm"
              >
                <Image
                  src="/icons/callicon.svg"
                  alt=""
                  width={28}
                  height={28}
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 object-contain md:h-7 md:w-7"
                />
                <span>+971 56 142 2288</span>
              </a>

              <Link
                href="https://greenshare.ae"
                className="cta-sheen inline-flex w-fit justify-self-start self-start items-center justify-center rounded-full bg-[#2F80ED] px-3.5 py-2 text-[13px] font-medium text-white transition hover:scale-105 hover:bg-[#256fce] sm:col-span-2 sm:px-4 sm:text-sm sm:justify-self-start md:px-5 md:py-3"
              >
                Login to Greenshare
              </Link>

            </div>

            {/* Navigation */}
            <nav className="grid grid-cols-2 gap-x-4 gap-y-3 text-[15px] sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:gap-x-6 md:gap-y-3 md:text-[15px]">

              <Link href="/" className="nav-link-fx w-fit justify-self-start text-white/90 transition hover:text-white">
                Overview
              </Link>

              <Link
                href="/zero-waste-system"
                className="nav-link-fx w-fit justify-self-start text-white/90 transition hover:text-white"
              >
                Zero Waste System
              </Link>

              <Link
                href="/circular-solutions"
                className="nav-link-fx w-fit justify-self-start text-white/90 transition hover:text-white"
              >
                Circular Solutions
              </Link>

              <Link
                href="/sustainability-and-innovation"
                className="nav-link-fx w-fit justify-self-start text-white/90 transition hover:text-white"
              >
                Sustainability & Innovation
              </Link>

              <Link
                href="/ecosystem-partners"
                className="nav-link-fx w-fit justify-self-start text-white/90 transition hover:text-white"
              >
                Ecosystem Partners
              </Link>

            </nav>

          </div>
        </div>
      </div>
    </motion.header>
  );
}