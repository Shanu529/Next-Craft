"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Globe,
  Monitor,
  Palette,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const packages = [
  {
    name: "Landing Page",
    price: "₹250",
    max: "₹999",
    description: "A clean, focused page for your product, service, or campaign.",
    icon: Monitor,
    featured: true,
    limit: "Never more than ₹999",
    features: [
      "Single-page website",
      "Mobile-friendly layout",
      "Modern visual design",
      "Contact CTA",
    ],
    href: "/contact?service=landing-page",
  },
  {
    name: "Business Website",
    price: "₹500",
    max: "₹1,999+",
    description: "Build your online presence with a professional business site.",
    icon: Globe,
    featured: false,
    limit: "Price depends on requirements",
    features: [
      "Business-focused design",
      "Responsive page layouts",
      "Essential business sections",
      "Contact integration",
    ],
    href: "/contact?service=business-website",
  },
  {
    name: "Portfolio Website",
    price: "₹250",
    max: "₹999",
    description: "Showcase your skills, projects, and personal brand online.",
    icon: Code2,
    featured: false,
    limit: "Never more than ₹999",
    features: [
      "Personal portfolio",
      "Project showcase",
      "Responsive layout",
      "Contact section",
    ],
    href: "/contact?service=portfolio",
  },
  {
    name: "Graphic Design",
    price: "₹250",
    max: "₹999",
    description: "Professional visuals for your brand, promotions, and social media.",
    icon: Palette,
    featured: false,
    limit: "Depends on design requirements",
    features: [
      "Social media creatives",
      "Promotional graphics",
      "Brand-consistent visuals",
      "Digital-ready exports",
    ],
    href: "/contact?service=graphic-design",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export function Pricing() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#080808] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Subtle NextCraft blue accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-32 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#008CFF]/[0.07] blur-[110px]"
      />

      <div className="container-x relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            variants={reveal}
            className="mb-5 inline-flex items-center gap-2 border border-[#008CFF]/30 bg-[#008CFF]/[0.08] px-3 py-2"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#008CFF]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#80C6FF]">
              Quality within your budget
            </span>
          </motion.div>

          <motion.h2
            variants={reveal}
            className="font-display text-3xl font-medium tracking-[-0.045em] sm:text-4xl lg:text-5xl"
          >
            Great work.
            <br />
            <span className="text-[#008CFF]">Affordable prices.</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mx-auto mt-5 max-w-lg text-sm leading-7 text-neutral-400 sm:text-base"
          >
            You don&apos;t need a huge budget to build a great digital presence.
            Choose a service that fits your needs and your budget.
          </motion.p>

          {/* Animated hand-drawn circle */}
          <motion.div
            variants={reveal}
            className="relative mx-auto mt-7 inline-flex items-center justify-center px-5 py-3"
          >
            <span className="text-sm font-medium sm:text-base">
              Starting at just{" "}
              <span className="text-[#008CFF]">₹250</span>
            </span>

            <svg
              aria-hidden="true"
              viewBox="0 0 340 66"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              fill="none"
            >
              <motion.path
                d="M 21 34 C 24 10, 88 5, 171 8 C 253 5, 315 13, 321 32 C 326 53, 256 60, 166 57 C 77 61, 18 53, 21 34 Z"
                stroke="#008CFF"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  pathLength: {
                    duration: reduceMotion ? 0 : 1.2,
                    ease: "easeInOut",
                    delay: reduceMotion ? 0 : 0.4,
                  },
                  opacity: { duration: 0.2 },
                }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;

            return (
              <motion.article
                key={pkg.name}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 28 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : index * 0.09,
                  ease,
                }}
                className={`group relative flex flex-col overflow-hidden border p-5 transition-all duration-300 sm:p-6 ${
                  pkg.featured
                    ? "border-[#008CFF] bg-[#008CFF] text-white shadow-[0_0_35px_rgba(0,140,255,0.12)]"
                    : "border-white/10 bg-[#101010] hover:border-[#008CFF]/60 hover:bg-[#11151a]"
                }`}
              >
                {/* Blue card corner detail */}
                {pkg.featured && (
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-12 h-32 w-32 rounded-full border border-white/15"
                  />
                )}

                <div className="relative flex items-center justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center border ${
                      pkg.featured
                        ? "border-white/25 bg-white/10"
                        : "border-[#008CFF]/25 bg-[#008CFF]/10"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        pkg.featured ? "text-white" : "text-[#008CFF]"
                      }`}
                    />
                  </div>

                  {pkg.featured && (
                    <span className="border border-white/30 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.12em]">
                      Budget pick
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {pkg.name}
                </h3>

                <p
                  className={`mt-2 min-h-[60px] text-xs leading-6 sm:text-sm ${
                    pkg.featured ? "text-white/80" : "text-neutral-400"
                  }`}
                >
                  {pkg.description}
                </p>

                {/* Price range */}
                <div
                  className={`mt-5 border-y py-5 ${
                    pkg.featured ? "border-white/25" : "border-white/10"
                  }`}
                >
                  <p
                    className={`text-[10px] uppercase tracking-[0.15em] ${
                      pkg.featured ? "text-white/75" : "text-neutral-500"
                    }`}
                  >
                    Starting at
                  </p>

                  <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                      {pkg.price}
                    </span>
                    <span
                      className={`text-xs ${
                        pkg.featured ? "text-white/80" : "text-neutral-400"
                      }`}
                    >
                      – {pkg.max}
                    </span>
                  </div>

                  <p
                    className={`mt-2 text-[10px] leading-5 ${
                      pkg.featured ? "text-white/80" : "text-neutral-500"
                    }`}
                  >
                    {pkg.limit}
                  </p>
                </div>

                {/* Included services */}
                <ul className="mt-5 flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-xs leading-5 ${
                        pkg.featured ? "text-white" : "text-neutral-300"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                          pkg.featured ? "text-white" : "text-[#008CFF]"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={pkg.href}
                  className={`mt-7 inline-flex min-h-11 items-center justify-center gap-2 border px-3 py-3 text-xs font-medium transition-all duration-200 sm:text-sm ${
                    pkg.featured
                      ? "border-white bg-white text-[#080808] hover:bg-neutral-100"
                      : "border-white/15 text-white hover:border-[#008CFF] hover:bg-[#008CFF] hover:text-white"
                  }`}
                >
                  Choose this service
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
          className="mt-8 flex flex-col gap-5 border border-white/10 bg-[#0e0e0e] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div>
            <h3 className="text-base font-medium sm:text-lg">
              Have a different requirement?
            </h3>
            <p className="mt-2 max-w-xl text-xs leading-6 text-neutral-400 sm:text-sm">
              Tell us your idea and budget. We&apos;ll discuss the scope and
              confirm the price before beginning your project.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 bg-[#008CFF] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0076db]"
          >
            Let&apos;s discuss
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <p className="mt-5 text-center text-[10px] leading-5 text-neutral-600">
          Prices are in INR. Final scope and deliverables are agreed upon before
          work begins. Domain, hosting, third-party services, and extra
          requirements may cost additional amounts where applicable.
        </p>
      </div>
    </section>
  );
}