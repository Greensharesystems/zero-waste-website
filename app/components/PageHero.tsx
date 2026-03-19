"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { HeroReveal } from "./Animated";

type PageHeroProps = {
  id?: string;
  image: string;
  title?: string;
  children?: ReactNode;
};

export default function PageHero({ id, image, title, children }: PageHeroProps) {
	const reducedMotion = useReducedMotion();

  return (
    <section id={id} className="page-hero-shell hero-grid relative -mt-px isolate overflow-hidden bg-[#36B37E] pt-10 text-white md:mt-0 md:pt-44">
      <div className="pointer-events-none absolute inset-0 z-0 bg-linear-to-br from-[#36B37E] via-[#36B37E] to-[#2F80ED]/90" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-2 h-56 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, #36B37E 0%, #36B37E 44%, rgba(54, 179, 126, 0.985) 70%, rgba(54, 179, 126, 0) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 hidden h-64 md:block"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(180deg, #36B37E 0%, #36B37E 46%, rgba(54, 179, 126, 0.985) 72%, rgba(54, 179, 126, 0) 100%)",
        }}
      />
      <div className="ambient-orb ambient-orb-emerald left-[6%] top-10 z-0 opacity-40" />
      <div className="ambient-orb ambient-orb-sky right-[10%] bottom-8 z-0 opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100svh-6rem)] grid-cols-1 items-center gap-6 pb-8 md:min-h-[calc(100vh-8rem)] md:grid-cols-[760px_1fr] md:gap-0 md:pb-12">
          {/* LEFT IMAGE AREA */}
          <motion.div
            initial={{ opacity: 0, x: reducedMotion ? 0 : -28, scale: reducedMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: reducedMotion ? 0.01 : 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 flex h-full items-start justify-center pt-2 md:z-20 md:justify-start md:pt-4"
          >
            <motion.div
              animate={
                reducedMotion
                  ? undefined
                  : { y: [0, -12, 0], rotate: [0, -1, 1, 0] }
              }
              transition={
                reducedMotion
                  ? undefined
                  : {
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }
              }
              className="relative z-20 md:z-20"
            >
              <div className="pointer-events-none absolute inset-8 rounded-full bg-white/20 blur-3xl" />
              <Image
                src={image}
                alt={title ?? "Page hero image"}
                width={1200}
                height={1200}
                className="relative z-10 h-auto w-full max-w-88 sm:max-w-md md:w-auto md:max-w-190"
                priority
              />
            </motion.div>
          </motion.div>

          {/* RIGHT TEXT AREA */}
          <div className="relative z-10 flex items-center justify-center md:justify-center">
            <HeroReveal className="relative max-w-full px-2 text-center text-white md:max-w-130 md:px-0">
              <div className="pointer-events-none absolute -left-12 -top-12 h-28 w-28 rounded-full bg-white/18 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 right-0 h-24 w-24 rounded-full bg-[#2F80ED]/40 blur-3xl" />
              {children ?? (
                <h1 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  {title}
                </h1>
              )}
            </HeroReveal>
          </div>
        </div>
      </div>

      {/* ARROW */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:bottom-56 md:left-[calc(50%+380px)]">
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : { y: [0, 8, 0], boxShadow: ["0 0 0 rgba(255,255,255,0)", "0 0 28px rgba(255,255,255,0.28)", "0 0 0 rgba(255,255,255,0)"] }
          }
          transition={
            reducedMotion
              ? undefined
              : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          }
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2F80ED] text-lg text-white md:h-12 md:w-12 md:text-xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}