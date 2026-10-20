"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Figma,
  Layers3,
  Monitor,
  Palette,
} from "lucide-react";
import { Button } from "../ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const reveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const services = [
  { label: "Websites", icon: Monitor },
  { label: "Landing pages", icon: Layers3 },
  { label: "Portfolios", icon: Code2 },
  { label: "Graphic design", icon: Palette },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#080808] pb-20 pt-28 text-white sm:pt-32 lg:pb-24 lg:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-180px] top-24 -z-10 h-[420px] w-[420px] rounded-full bg-[#008CFF]/[0.06] blur-[110px]"
      />

      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          {/* LEFT: BRAND MESSAGE */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div
              variants={reveal}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-7 bg-[#008CFF]" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 sm:text-xs">
                Independent digital creative studio
              </span>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="max-w-xl font-display text-[clamp(2.7rem,5vw,4.5rem)] font-medium leading-[1.06] tracking-[-0.055em]"
            >
              We make your
              <br />
              digital presence
              <br />
              <span className="text-[#008CFF]">stand out.</span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-6 max-w-md text-sm leading-7 text-neutral-400 sm:text-base sm:leading-8"
            >
              Thoughtful websites and striking visuals for businesses,
              creators, and brands ready to make their mark.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button href="/work/websites">
                Explore our work
                <ArrowRight className="ml-2 inline-block h-4 w-4" />
              </Button>

              <a
                href="/contact"
                className="group inline-flex items-center gap-2 px-3 py-3 text-sm text-neutral-300 transition-colors hover:text-white"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-10 border-t border-white/10 pt-5 sm:mt-12"
            >
              <p className="mb-4 text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                Our services
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                {services.map(({ label, icon: Icon }) => (
                  <a
                    key={label}
                    href="/services"
                    className="group flex items-center gap-3 text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-[#008CFF]" />
                    <span>{label}</span>
                    <ArrowUpRight className="ml-auto h-3.5 w-3.5 text-neutral-600 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: CUSTOM DESIGN SHOWCASE */}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[600px] lg:ml-auto"
          >
            {/* Canvas heading */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#008CFF]" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
                  The creative workspace
                </span>
              </div>
              <span className="text-[10px] text-neutral-600">
                NC — 001
              </span>
            </div>

            <div className="relative min-h-[390px] overflow-hidden border border-white/10 bg-[#0d0d0d] p-4 sm:min-h-[460px] sm:p-6">
              {/* Subtle grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Background annotation */}
              <div className="absolute right-5 top-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#008CFF]" />
                <span className="text-[9px] uppercase tracking-[0.14em] text-neutral-500">
                  Design / Develop
                </span>
              </div>

              {/* Main website design board */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, -5, 0] }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 mt-10 border border-white/15 bg-[#111111] shadow-2xl shadow-black/50 sm:mt-12"
              >
                {/* Browser chrome */}
                <div className="flex h-9 items-center gap-1.5 border-b border-white/10 px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-600" />
                  <div className="mx-auto max-w-36 truncate rounded-sm bg-white/[0.04] px-4 py-1 text-[8px] text-neutral-500">
                    yourbrand.com
                  </div>
                </div>

                {/* Website mockup */}
                <div className="grid min-h-[205px] grid-cols-[1.1fr_0.9fr] gap-3 p-4 sm:min-h-[250px] sm:gap-5 sm:p-6">
                  <div className="flex flex-col items-start justify-center">
                    <span className="mb-3 text-[8px] uppercase tracking-[0.18em] text-[#008CFF] sm:text-[9px]">
                      Digital experiences
                    </span>

                    <p className="text-xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-3xl">
                      Make your
                      <br />
                      next move
                      <br />
                      <span className="text-[#008CFF]">count.</span>
                    </p>

                    <div className="mt-4 h-1 w-14 bg-[#008CFF]" />

                    <div className="mt-4 space-y-1.5">
                      <div className="h-1 w-28 max-w-full bg-white/15" />
                      <div className="h-1 w-20 max-w-full bg-white/10" />
                    </div>

                    <div className="mt-5 flex items-center gap-2 bg-white px-3 py-2 text-[9px] font-medium text-black">
                      Explore <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>

                  {/* Abstract architectural visual */}
                  <div className="relative min-h-[170px] overflow-hidden bg-[#171717] sm:min-h-[205px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#008CFF]/20 via-transparent to-transparent" />

                    <div className="absolute inset-x-[12%] bottom-0 top-[14%] border-x border-t border-white/20 bg-[#202020]">
                      <div className="grid h-full grid-cols-3 gap-1 p-2">
                        <div className="border border-white/10 bg-white/[0.04]" />
                        <div className="border border-white/10 bg-[#008CFF]/20" />
                        <div className="border border-white/10 bg-white/[0.07]" />
                        <div className="col-span-2 border border-white/10 bg-white/[0.03]" />
                        <div className="border border-white/10 bg-white/[0.06]" />
                      </div>
                    </div>

                    <div className="absolute bottom-[18%] left-0 h-px w-full bg-white/20" />
                    <div className="absolute right-[14%] top-[9%] h-2 w-2 bg-[#008CFF]" />
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 sm:px-6">
                  <span className="text-[9px] text-neutral-500">
                    RESPONSIVE BY DESIGN
                  </span>
                  <span className="text-[9px] text-neutral-500">
                    01 / WEB DESIGN
                  </span>
                </div>
              </motion.div>

              {/* Floating graphic design tile */}
              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : { y: [0, 6, 0], rotate: [0, -1, 0] }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-[13%] left-3 z-20 w-[135px] border border-white/15 bg-[#151515] p-2.5 shadow-xl sm:bottom-[11%] sm:left-5 sm:w-[170px] sm:p-3"
              >
                <div className="relative flex aspect-[1.12/1] flex-col justify-between overflow-hidden bg-[#e9e7e1] p-3 text-black sm:p-4">
                  <span className="text-[7px] uppercase tracking-[0.15em] sm:text-[8px]">
                    Visual identity / 001
                  </span>

                  <div>
                    <p className="text-lg font-bold leading-[0.9] tracking-[-0.06em] sm:text-2xl">
                      LESS
                      <br />
                      BUT
                      <br />
                      BETTER.
                    </p>
                    <div className="mt-2 h-1 w-8 bg-[#008CFF]" />
                  </div>

                  <div className="flex items-center justify-between text-[7px]">
                    <span>FORM / FUNCTION</span>
                    <span>NC.</span>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[9px] text-neutral-300 sm:text-[10px]">
                    Graphic design
                  </span>
                  <Figma className="h-3 w-3 text-[#008CFF]" />
                </div>
              </motion.div>

              {/* Floating palette card */}
              <div className="absolute bottom-6 right-4 z-20 w-[125px] border border-white/10 bg-[#151515] p-3 sm:right-6 sm:w-[150px]">
                <p className="mb-3 text-[9px] uppercase tracking-[0.12em] text-neutral-400">
                  Brand palette
                </p>
                <div className="flex gap-1.5">
                  <span className="h-7 flex-1 bg-[#080808]" />
                  <span className="h-7 flex-1 border border-white/10 bg-white" />
                  <span className="h-7 flex-1 bg-[#008CFF]" />
                  <span className="h-7 flex-1 bg-[#777777]" />
                </div>
                <div className="mt-2 flex items-center justify-between text-[8px] text-neutral-500">
                  <span>Minimal</span>
                  <span>01—04</span>
                </div>
              </div>

              {/* Tiny technical marker */}
              <div className="absolute bottom-4 right-4 hidden items-center gap-2 sm:flex">
                <span className="h-px w-5 bg-[#008CFF]" />
                <span className="text-[8px] uppercase tracking-[0.15em] text-neutral-600">
                  Made with purpose
                </span>
              </div>
            </div>

            {/* Bottom caption */}
            <div className="mt-4 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-medium text-white">
                  Ideas into experiences.
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Websites, portfolios and visual design.
                </p>
              </div>

              <a
                href="/work/graphic-design"
                aria-label="Explore graphic design portfolio"
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 transition-colors hover:border-[#008CFF] hover:bg-[#008CFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#008CFF]"
              >
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom brand statement */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 sm:mt-20 sm:flex-row sm:items-center">
          <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            Design <span className="px-2 text-[#008CFF]">/</span> Develop{" "}
            <span className="px-2 text-[#008CFF]">/</span> Grow
          </p>

          <a
            href="/work/websites"
            className="group inline-flex items-center gap-2 text-xs text-neutral-400 transition-colors hover:text-white"
          >
            Discover what we create
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}