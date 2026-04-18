"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function PMPCaseStudy() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#1E221F]">
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <Link
            href="/"
            className="inline-flex rounded-full border border-[#D6C4A7] bg-[#FFFDF9] px-5 py-2 text-sm font-medium text-[#163126] transition duration-300 hover:bg-[#F6F1E8]"
          >
            ← Back to Home
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A46D]">
              Case Study
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#163126] md:text-6xl">
              PMP Inc
            </h1>

            <p className="mt-6 text-base leading-8 text-[#7B746B] md:text-lg">
              A refined business website designed to strengthen credibility,
              elevate visual presentation, and create a more premium first
              impression online.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-16 md:px-12 md:pb-20 lg:px-20">
        <motion.div {...fadeUp} className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2.2rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 shadow-[0_28px_80px_rgba(22,49,38,0.08)]">
            <img
              src="/pmp-case.jpg"
              alt="PMP Inc website mockup"
              className="w-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <motion.div
          {...fadeUp}
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"
        >
          <div className="rounded-[1.8rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 p-6 shadow-[0_16px_40px_rgba(22,49,38,0.05)]">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C5A46D]">
              Industry
            </p>
            <p className="mt-3 text-lg font-medium text-[#163126]">
              Business / Professional
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 p-6 shadow-[0_16px_40px_rgba(22,49,38,0.05)]">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C5A46D]">
              Focus
            </p>
            <p className="mt-3 text-lg font-medium text-[#163126]">
              Brand Presence + Credibility
            </p>
          </div>

          <div className="rounded-[1.8rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 p-6 shadow-[0_16px_40px_rgba(22,49,38,0.05)]">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C5A46D]">
              Services
            </p>
            <p className="mt-3 text-lg font-medium text-[#163126]">
              Web Design + Development
            </p>
          </div>
        </motion.div>
      </section>

      <section className="bg-[linear-gradient(180deg,#EEF4EF_0%,#F7F3EC_100%)] px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <motion.div
          {...fadeUp}
          className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A46D]">
              The Challenge
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#163126] md:text-5xl">
              Turning a standard business presence into something more polished.
            </h2>
            <div className="mt-4 h-[2px] w-14 bg-[#C5A46D]" />
          </div>

          <div className="space-y-6 text-base leading-8 text-[#7B746B]">
            <p>
              The goal for PMP Inc was to create a digital presence that felt
              more professional, more intentional, and more aligned with a
              premium brand experience.
            </p>
            <p>
              The site needed to communicate trust quickly, present the business
              in a more refined way, and feel visually strong without becoming
              overdesigned.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <motion.div
          {...fadeUp}
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3"
        >
          <div className="rounded-[1.9rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 p-7 shadow-[0_18px_45px_rgba(22,49,38,0.06)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[#C5A46D]">
              Strategy
            </p>
            <p className="mt-4 text-sm leading-8 text-[#7B746B]">
              Build a cleaner, more structured layout that immediately feels
              credible and visually organized.
            </p>
          </div>

          <div className="rounded-[1.9rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 p-7 shadow-[0_18px_45px_rgba(22,49,38,0.06)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[#C5A46D]">
              Design Direction
            </p>
            <p className="mt-4 text-sm leading-8 text-[#7B746B]">
              Use premium spacing, more intentional hierarchy, and a polished
              visual style that feels modern and established.
            </p>
          </div>

          <div className="rounded-[1.9rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 p-7 shadow-[0_18px_45px_rgba(22,49,38,0.06)]">
            <p className="text-sm uppercase tracking-[0.24em] text-[#C5A46D]">
              Outcome
            </p>
            <p className="mt-4 text-sm leading-8 text-[#7B746B]">
              A stronger first impression, elevated brand presentation, and a
              website that feels more premium from the first click.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-6xl rounded-[2.2rem] border border-[#163126] bg-[linear-gradient(180deg,#163126_0%,#10241C_100%)] p-8 text-white shadow-[0_28px_80px_rgba(22,49,38,0.16)] md:p-12"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#DCC5A1]">
            Result
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            A site that feels more established, more premium, and more aligned
            with the kind of brand experience that builds trust.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/82">
            The final direction gave PMP Inc a more confident and polished
            online presence — one that better supports credibility, reflects the
            professionalism of the brand, and leaves a stronger impression with
            potential clients.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://pmp-inc-website.vercel.app/"
              target="_blank"
              className="rounded-full bg-[#F5EDE3] px-6 py-3 text-sm font-medium text-[#163126] transition duration-300 hover:opacity-90"
            >
              View Live Site
            </Link>

            <Link
              href="/#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:bg-white/10"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}