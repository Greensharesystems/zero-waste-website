"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import PageHero from "./components/PageHero";

const aboutIcons = [
  {
    src: "/icons/mainpageicon1.svg",
    alt: "Circular Economy Solutions",
    text: "Deliver Advanced Circular Economy Solutions",
    iconSizeClass: "w-28",
  },
  {
    src: "/icons/mainpageicon2.svg",
    alt: "Support Government and Industry",
    text: "Support Government, Industries, and Communities",
    frameWidthClass: "w-52",
    iconSizeClass: "w-56",
  },
  {
    src: "/icons/mainpageicon3.svg",
    alt: "Infrastructure and Technology Integration",
    text: "Integrate Infrastructure and Operational Processes with Technology",
    iconSizeClass: "w-36",
  },
  {
    src: "/icons/mainpageicon4.svg",
    alt: "Systems Thinking",
    text: "Apply Systems Thinking",
    iconSizeClass: "w-28",
  },
  {
    src: "/icons/mainpageicon5.svg",
    alt: "Data Intelligence and Traceability",
    text: "Ensure Data Driven Intelligence and Traceability",
    iconSizeClass: "w-32",
  },
  {
    src: "/icons/mainpageicon6.svg",
    alt: "Commitment to Sustainability",
    text: "Uphold Unwavering Commitment to Sustainability",
    frameWidthClass: "w-44",
    iconSizeClass: "w-32",
  },
];

const circularSolutionCards = [
  {
    src: "/hazardouswaste.png",
    alt: "Hazardous and non hazardous waste processing",
    eyebrow: "Operational Domain",
    title: "Hazardous and\nNon Hazardous\nWaste Processing",
    cta: "Learn More",
  },
  {
    src: "/burntcargo.png",
    alt: "Burnt, expired, distressed cargo and product processing",
    eyebrow: "Operational Domain",
    title: "Burnt, Expired,\nDistressed Cargo and\nProduct Processing",
    cta: "Learn More",
    imagePositionClass: "object-[center_90%]",
  },
  {
    src: "/marinecleanup.png",
    alt: "Marine cleanup and waste processing",
    eyebrow: "Operational Domain",
    title: "Marine Cleanup\nand Waste\nProcessing",
    cta: "Learn More",
    imagePositionClass: "object-[center_65%]",
  },
  {
    src: "/fitoutremoval.png",
    alt: "Demolition fitout removal and waste processing",
    eyebrow: "Operational Domain",
    title: "Demolition, Fitout\nRemoval, and\nWaste Processing",
    cta: "Learn More",
    imagePositionClass: "object-[center_25%]",
  },
];

const ecosystemPartnerIcons = [
  {
    id: 1,
    src: "/supremecouncil.png",
    alt: "Supreme Council of Energy",
    imageClassName: "w-36",
  },
  {
    id: 2,
    src: "/decca.png",
    alt: "Dubai Environment and Climate Change Authority",
    imageClassName: "w-36",
  },
  {
    id: 3,
    src: "/dubaimunicipality.svg",
    alt: "Dubai Municipality",
    imageClassName: "w-36",
  },
  { id: 4, src: "/trakhees.png", alt: "Trakhees" },
  {
    id: 5,
    src: "/eadlogo.png",
    alt: "Environmental Agency Abu Dhabi",
    imageClassName: "w-36",
  },
  { id: 6, src: "/logos/borouge.png", alt: "Borouge" },
  { id: 7, src: "/logos/jswcement.png", alt: "JSW Cement" },
  {
    id: 8,
    src: "/logos/unilever.png",
    alt: "Unilever",
    imageClassName: "w-16",
  },
  { id: 9, src: "/logos/amazonlogo.jpg", alt: "Amazon" },
  { id: 10, src: "/logos/alec.png", alt: "Alec" },
];

const sectionViewport = {
  once: true,
  amount: 0.2,
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = (delay = 0) => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 32,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(10px)",
    },
    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    transition: {
      duration: shouldReduceMotion ? 0.01 : 0.85,
      delay: shouldReduceMotion ? 0 : delay,
      ease: smoothEase,
    },
    viewport: sectionViewport,
  });

  const heroReveal = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 36,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(14px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    transition: {
      duration: shouldReduceMotion ? 0.01 : 1,
      ease: smoothEase,
      delay: shouldReduceMotion ? 0 : 0.15,
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const staggerItem = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 26,
      scale: shouldReduceMotion ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.8,
        ease: smoothEase,
      },
    },
  };

  return (
    <>
      <PageHero id="overview-start" image="/mainpagev2.png">
        <motion.div
          {...heroReveal}
          className="relative"
        >
          <div className="pointer-events-none absolute -left-12 -top-10 h-32 w-32 rounded-full bg-white/16 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-[#2F80ED]/40 blur-3xl" />
          <motion.h1
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -6, 0] }
            }
            transition={
              shouldReduceMotion
                ? undefined
                : {
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                  }
            }
            className="text-3xl font-light leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Enabling Sustainable Ecosystems
          </motion.h1>
        </motion.div>
      </PageHero>

      <main className="overflow-x-clip">
        {/* SECTION 1 — About Zero Waste */}
        <section className="relative overflow-hidden bg-white py-14 md:py-20">
          <div className="ambient-orb ambient-orb-emerald left-[8%] top-12" />
          <div className="ambient-orb ambient-orb-sky right-[10%] top-24" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2 {...reveal()} className="mb-5 text-2xl font-bold sm:text-3xl">
              About Zero Waste
            </motion.h2>

            <motion.p
              {...reveal(0.08)}
              className="mb-12 w-full text-base leading-7 text-gray-600 md:mb-16 md:text-lg md:leading-8"
            >
              Zero Waste, a joint venture between IMYAT and PSB Investment,
              delivers advanced circular solutions to governments, industries,
              and communities. We integrate infrastructure and operational
              processes with digital technology to ensure traceable resource
              flows, data-driven intelligence, and transparent reporting. Guided
              by systems thinking and underpinned by an unwavering commitment to
              sustainability, we support stakeholders in driving measurable
              impact.
            </motion.p>

            {/* ICON GRID */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-3"
            >
              {aboutIcons.map((icon) => (
                <motion.div
                  key={icon.src}
                  variants={staggerItem}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -10,
                          scale: 1.02,
                          rotateX: 6,
                        }
                  }
                  className="group flex flex-col items-center px-2 py-3 sm:px-4 sm:py-4"
                >
                  <div
                    className={`mb-4 flex h-28 items-center justify-center sm:mb-6 sm:h-36 ${icon.frameWidthClass ?? "w-32"}`}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={112}
                      height={112}
                      className={`${icon.iconSizeClass} h-auto object-contain transition duration-300 hover:scale-110`}
                    />
                  </div>
                  <p className="max-w-52 text-sm leading-6 text-gray-600">
                    {icon.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — Zero Waste System */}
        <section className="relative overflow-hidden bg-white py-14 md:py-20">
          <div className="ambient-orb ambient-orb-sky left-[14%] top-10" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2 {...reveal()} className="mb-5 text-2xl font-bold sm:text-3xl">
              Zero Waste System
            </motion.h2>

            <motion.p
              {...reveal(0.08)}
              className="mb-10 w-full text-base leading-7 text-gray-600 md:mb-12 md:text-lg md:leading-8"
            >
              Greenshare is the digital intelligence and traceability layer of
              the Zero Waste system, structured around three integrated pillars:
              Engage, Transform, and Sustain.
            </motion.p>

            <motion.div
              {...reveal(0.14)}
              className="flex justify-center"
            >
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { y: [0, -10, 0], rotate: [0, -0.8, 0.8, 0] }
                }
                transition={
                  shouldReduceMotion
                    ? undefined
                    : {
                        duration: 8,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                      }
                }
                className="float-gentle relative"
              >
                <Image
                  src="/greensharemodel.png"
                  alt="Greenshare Model"
                  width={960}
                  height={640}
                  className="h-auto w-full max-w-xl md:max-w-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — Circular Solutions */}
        <section className="relative overflow-hidden bg-white py-14 md:py-20">
          <div className="ambient-orb ambient-orb-emerald right-[8%] top-16" />
          <div className="ambient-orb ambient-orb-sky left-[6%] bottom-12" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2 {...reveal()} className="mb-5 text-2xl font-bold sm:text-3xl">
              Circular Solutions
            </motion.h2>

            <motion.p
              {...reveal(0.08)}
              className="mb-10 w-full text-base leading-7 text-gray-600 md:mb-12 md:text-lg md:leading-8"
            >
              Our Circular Solutions operate across four operational domains,
              delivering specialized project management and innovative
              processing of complex material streams with safety, efficiency,
              and transparency at the core.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10"
            >
              {circularSolutionCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={staggerItem}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -12, scale: 1.015 }
                  }
                  className="group flex flex-col gap-4 md:gap-5"
                >
                  <div className="overflow-hidden">
                    <Image
                      src={card.src}
                      alt={card.alt}
                      width={640}
                      height={480}
                      className={`h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 ${card.imagePositionClass ?? "object-center"}`}
                    />
                  </div>
                  <div className="flex h-full flex-col">
                    <p className="text-[11px] text-black/70">{card.eyebrow}</p>
                    <p
                      className="mt-2 whitespace-pre-line text-[2rem] font-light leading-[1.04] tracking-[-0.03em] text-black sm:mt-3 sm:text-3xl md:text-[2.25rem]"
                      style={{ fontFamily: "'Nunito Sans', sans-serif" }}
                    >
                      {card.title}
                    </p>
                    <div className="mt-5 flex justify-end sm:mt-6">
                      <Link
                        href="/circular-solutions"
                        className="cta-sheen inline-flex items-center gap-3 rounded-full bg-[#36B37E] px-5 py-2 text-sm font-medium text-white transition duration-300 group-hover:bg-[#2d996b]"
                      >
                        {card.cta}
                        <span className="text-base leading-none">›</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — Ecosystem Partners */}
        <section className="relative overflow-hidden bg-white py-14 md:py-20">
          <div className="ambient-orb ambient-orb-emerald left-[12%] top-8" />
          <div className="ambient-orb ambient-orb-sky right-[12%] bottom-14" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2 {...reveal()} className="mb-5 text-2xl font-bold sm:text-3xl">
              Ecosystem Partners
            </motion.h2>

            <motion.p
              {...reveal(0.08)}
              className="mb-10 w-full text-base leading-7 text-gray-600 md:mb-12 md:text-lg md:leading-8"
            >
              Zero Waste collaborates with regulators, municipalities, and partners to
              enable traceable material flows and scalable circular outcomes.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={sectionViewport}
              className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 lg:grid-cols-5"
            >
              {ecosystemPartnerIcons.map((icon) => (
                <motion.div
                  key={icon.id}
                  variants={staggerItem}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -8, scale: 1.03 }
                  }
                  className="flex h-24 items-center justify-center sm:h-28 md:h-36"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={128}
                    height={128}
                    className={`h-auto ${icon.imageClassName ?? "w-24"} object-contain transition duration-300 hover:scale-105`}
                  />
                </motion.div>
              ))}
            </motion.div>
            <motion.div {...reveal(0.12)} className="mt-8 flex justify-end sm:mt-10">
              <Link
                href="/ecosystem-partners"
                className="cta-sheen inline-flex items-center gap-3 rounded-full bg-[#36B37E] px-5 py-2 text-sm font-medium text-white transition duration-300 hover:bg-[#2d996b]"
              >
                Learn More
                <span className="text-base leading-none">›</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
