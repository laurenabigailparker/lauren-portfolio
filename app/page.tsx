"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.75, ease: "easeOut" as const },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  viewport: { once: true, amount: 0.18 },
};

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

function ProjectCard({
  title,
  category,
  description,
  image,
  href,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(45,74,58,0.18),transparent_55%)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

      <motion.div
        whileHover={{ rotateX: 2, rotateY: -2 }}
        transition={{ duration: 0.25 }}
        className="relative overflow-hidden rounded-[2rem] border border-[#DFD8CC] bg-[#FCFAF6]/85 p-4 shadow-[0_18px_50px_rgba(22,49,38,0.08)] backdrop-blur-xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        <Link href={href} target="_blank" className="block">
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#163126]/18 via-transparent to-transparent opacity-70" />
            <img
              src={image}
              alt={title}
              className="h-[290px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div className="px-2 pb-2 pt-6">
            <div className="mb-3 inline-flex rounded-full border border-[#E1D0B3] bg-[#F7EFE1] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#C5A46D]">
              {category}
            </div>

            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-semibold text-[#163126]">{title}</h3>
              <div className="rounded-full bg-[#EEF3EE] p-2 text-[#163126] transition duration-300 group-hover:bg-[#163126] group-hover:text-white">
                <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </div>
            </div>

            <p className="mt-3 text-sm leading-7 text-[#7B746B]">
              {description}
            </p>

            <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-[#C5A46D] via-[#D8D2C8] to-transparent" />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 180 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 180 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main
      className="relative overflow-x-hidden bg-[#F7F3EC] text-[#1E221F]"
      onMouseMove={(e) => {
        mouseX.set(e.clientX - 160);
        mouseY.set(e.clientY - 160);
      }}
      onMouseLeave={() => {
        mouseX.set(-200);
        mouseY.set(-200);
      }}
    >
      {mounted && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(45,74,58,0.14)_0%,rgba(197,164,109,0.08)_35%,transparent_72%)] blur-3xl"
          style={{ x: smoothX, y: smoothY }}
        />
      )}

      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-[#163126] px-5 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(22,49,38,0.22)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#10241C]"
      >
        Start Project
      </a>

      {/* NAV */}
      <nav className="sticky top-0 z-40 border-b border-[#E8E0D4] bg-[#F7F3EC]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12 lg:px-20">
          <a
            href="#"
            className="text-lg font-semibold tracking-[0.14em] text-[#163126]"
          >
            LAUREN PARKER
          </a>

          <div className="hidden items-center gap-8 text-sm text-[#5F6B63] md:flex">
            <a href="#work" className="transition hover:text-[#163126]">
              Work
            </a>
            <a href="#case-study" className="transition hover:text-[#163126]">
              Case Study
            </a>
            <a href="#pricing" className="transition hover:text-[#163126]">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-[#163126]">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 overflow-hidden px-6 pt-10 md:px-12 lg:px-20 lg:pt-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(22,49,38,0.13),transparent_42%)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#DAE6DC] blur-3xl opacity-60" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-[#EFE4D3] blur-3xl opacity-60" />

        <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="relative z-10"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.38em] text-[#C5A46D]">
              Luxury Web Design & Development
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.04] text-[#163126] md:text-6xl xl:text-7xl">
              I design websites that make your brand look like it already
              attracts high-value clients.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#7B746B] md:text-lg">
              Designed for brands that want to look more premium, charge higher,
              and feel more established online. Clean strategy, refined visuals,
              and polished development — all built to position you at a higher
              level.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full bg-[#163126] px-7 py-3 text-sm font-medium text-white shadow-[0_14px_34px_rgba(22,49,38,0.18)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#10241C] hover:shadow-[0_18px_40px_rgba(22,49,38,0.24)]"
              >
                View Portfolio
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[#D6C4A7] bg-[#FFFDF9] px-7 py-3 text-sm font-medium text-[#163126] shadow-[0_10px_24px_rgba(22,49,38,0.05)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#F6F1E8]"
              >
                Book a Project
              </a>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-12 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-3"
            >
              {[
                ["2+", "featured builds"],
                ["Custom", "design + development"],
                ["$3.5k+", "starting investment"],
              ].map(([num, label]) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-2xl border border-[#E2DDD2] bg-[#FCFAF6]/85 p-5 shadow-[0_14px_35px_rgba(22,49,38,0.05)] backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-[#163126]">{num}</p>
                  <p className="mt-1 text-sm text-[#7B746B]">{label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative z-10"
          >
            <div className="absolute -inset-5 rounded-[2.4rem] bg-gradient-to-br from-[#D9E4DC] via-[#F7F3EC] to-[#E8D9C3] blur-2xl opacity-90" />
            <div className="group relative overflow-hidden rounded-[2.4rem] border border-white/60 bg-white/35 shadow-[0_30px_90px_rgba(22,49,38,0.16)] backdrop-blur-xl">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#C5A46D]/20 blur-3xl" />
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#2D4A3A]/20 blur-3xl" />
              <img
                src="/home-hero.jpg"
                alt="Lauren Parker portfolio hero"
                className="h-[560px] w-full object-cover transition duration-700 group-hover:scale-[1.02] md:h-[670px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163126]/72 via-[#163126]/12 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="max-w-md rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/75">
                    Designer Portfolio
                  </p>
                  <p className="mt-3 text-lg font-medium leading-7 text-white">
                    Strategic design, elevated visuals, and a premium digital
                    presence that feels intentional at every touchpoint.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="relative z-10 px-6 py-20 md:px-12 lg:px-20">
        <motion.div {...fadeUp} className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A46D]">
              Best Fit Clients
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#163126] md:text-5xl">
              Who I love building for
            </h2>
            <div className="mt-4 h-[2px] w-14 bg-[#C5A46D]" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {[
              "Service-based brands",
              "Interior designers & luxury creatives",
              "Personal brands & consultants",
              "Businesses ready to look more established",
            ].map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[1.8rem] border border-[#DFD8CC] bg-[#FCFAF6]/85 p-6 shadow-[0_16px_40px_rgba(22,49,38,0.05)]"
              >
                <p className="text-lg font-medium text-[#163126]">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="relative z-10 px-6 py-24 md:px-12 md:py-28 lg:px-20">
        <motion.div {...fadeUp} className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#C5A46D]">
                Selected Work
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#163126] md:text-5xl">
                Featured projects
              </h2>
              <div className="mt-4 h-[2px] w-14 bg-[#C5A46D]" />
            </div>

            <p className="max-w-xl text-sm leading-8 text-[#7B746B] md:text-base">
              Websites built to position brands with more authority, refinement,
              and visual confidence.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-8 lg:grid-cols-3"
          >
            <ProjectCard
              title="PMP Inc"
              category="Business / Professional"
              description="A polished business website designed to increase credibility, elevate brand presence, and create a stronger premium first impression."
              image="/pmp.jpg"
              href="https://pmp-inc-website.vercel.app/"
            />

            <ProjectCard
              title="Gateway Rock Design"
              category="Interior Design / Luxury"
              description="A warm, upscale interior design website focused on refined aesthetics, elevated service positioning, and an intentional luxury feel."
              image="/gateway-cover.jpg"
              href="https://gateway-rock-design.vercel.app/"
            />

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group rounded-[2rem] border border-dashed border-[#D8D2C8] bg-[linear-gradient(180deg,#FCFAF6_0%,#EEF3EE_100%)] p-6 shadow-[0_20px_55px_rgba(22,49,38,0.05)] transition duration-300 hover:shadow-[0_28px_70px_rgba(22,49,38,0.1)]"
            >
              <div className="flex h-[290px] items-center justify-center rounded-[1.5rem] border border-[#E1E6E0] bg-white/70">
                <span className="text-sm uppercase tracking-[0.3em] text-[#C5A46D]">
                  Currently Booking
                </span>
              </div>

              <div className="px-2 pb-2 pt-6">
                <div className="mb-3 inline-flex rounded-full border border-[#E1D0B3] bg-[#F7EFE1] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[#C5A46D]">
                  Open for Projects
                </div>
                <h3 className="text-2xl font-semibold text-[#163126]">
                  Your Brand Here
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#7B746B]">
                  I’m currently taking on select client projects for premium
                  website design and development.
                </p>
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-[#C5A46D] via-[#D8D2C8] to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* PMP CASE STUDY */}
      <section
        id="case-study"
        className="relative z-10 bg-[linear-gradient(180deg,#EEF4EF_0%,#F7F3EC_100%)] px-6 py-24 md:px-12 md:py-28 lg:px-20"
      >
        <motion.div {...fadeUp} className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A46D]">
              Case Study
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#163126] md:text-5xl">
              PMP Inc
            </h2>
            <div className="mt-4 h-[2px] w-14 bg-[#C5A46D]" />
            <p className="mt-5 text-base leading-8 text-[#7B746B]">
              A business website designed to feel more credible, polished, and
              premium — helping the brand present itself with more clarity and
              authority online.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              {...fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[2.2rem] border border-[#DFD8CC] bg-[#FCFAF6]/85 p-5 shadow-[0_24px_70px_rgba(22,49,38,0.08)] backdrop-blur-xl"
            >
              <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 shadow-[0_25px_70px_rgba(22,49,38,0.08)]">
  <img
    src="/pmp-case.jpg"
    alt="PMP Inc case study"
    className="w-full object-cover"
  />
</div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-6"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-[1.8rem] border border-[#DFD8CC] bg-[#FCFAF6]/85 p-7 shadow-[0_18px_55px_rgba(22,49,38,0.06)] backdrop-blur-xl"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-[#C5A46D]">
                  The Goal
                </p>
                <p className="mt-3 text-sm leading-8 text-[#7B746B]">
                  Create a more elevated online presence that communicates
                  professionalism, trust, and brand strength from the first
                  interaction.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-[1.8rem] border border-[#DFD8CC] bg-[#FCFAF6]/85 p-7 shadow-[0_18px_55px_rgba(22,49,38,0.06)] backdrop-blur-xl"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-[#C5A46D]">
                  What I Focused On
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-8 text-[#7B746B]">
                  <li>Luxury-inspired visual direction</li>
                  <li>Cleaner layout and stronger hierarchy</li>
                  <li>More intentional brand presentation</li>
                  <li>Professional, high-trust first impression</li>
                  <li>Smooth responsive experience across devices</li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-[1.8rem] border border-[#163126] bg-[linear-gradient(180deg,#163126_0%,#10241B_100%)] p-7 text-white shadow-[0_22px_70px_rgba(22,49,38,0.18)]"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-[#DCC5A1]">
                  Result
                </p>
                <p className="mt-3 text-sm leading-8 text-white/85">
                  The final site feels more established, more premium, and more
                  aligned with the kind of brand experience that builds
                  confidence with potential clients.
                </p>

                <Link
                  href="https://pmp-inc-website.vercel.app/"
                  target="_blank"
                  className="mt-6 inline-flex rounded-full bg-[#F5EDE3] px-6 py-3 text-sm font-medium text-[#163126] transition hover:opacity-90"
                >
                  View PMP Inc
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* WHY WORK WITH ME */}
      <section className="relative z-10 px-6 py-24 md:px-12 md:py-28 lg:px-20">
        <motion.div {...fadeUp} className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A46D]">
              Why Work With Me
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#163126] md:text-5xl">
              Premium presentation with strategy behind it.
            </h2>
            <div className="mt-4 h-[2px] w-14 bg-[#C5A46D]" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {[
              {
                title: "Luxury visual direction",
                text: "Refined, modern aesthetics that immediately make your brand feel more elevated and intentional.",
              },
              {
                title: "Custom-built experience",
                text: "No generic template feel. Every section is tailored to support your brand and digital presence.",
              },
              {
                title: "Responsive and polished",
                text: "Your site is designed to feel smooth, premium, and cohesive across desktop, tablet, and mobile.",
              },
              {
                title: "Business-minded execution",
                text: "I combine design and development with structure, helping your site look strong and function beautifully.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[1.9rem] border border-[#DFD8CC] bg-[#FCFAF6]/85 p-6 shadow-[0_18px_45px_rgba(22,49,38,0.07)] backdrop-blur-xl"
              >
                <div className="mb-5 h-11 w-11 rounded-full bg-[#EEF3EE] ring-1 ring-[#D6C4A7]" />
                <h3 className="text-xl font-semibold text-[#163126]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#7B746B]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-10 bg-[linear-gradient(180deg,#F7F3EC_0%,#EEF4EF_100%)] px-6 py-24 md:px-12 md:py-28 lg:px-20">
        <motion.div {...fadeUp} className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A46D]">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#163126] md:text-5xl">
              Kind words from clients
            </h2>
            <div className="mt-4 h-[2px] w-14 bg-[#C5A46D]" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {[
              {
                quote:
                  "Lauren has a real eye for making a brand feel elevated. The site came together beautifully and felt much more polished than what I had before.",
                name: "Founder, PMP Inc",
                role: "Business Website Project",
              },
              {
                quote:
                  "She understood the direction immediately and turned it into something that felt clean, modern, and premium. It looked like a real luxury brand site.",
                name: "Design Client",
                role: "Brand Presentation",
              },
              {
                quote:
                  "What stood out most was how intentional everything felt. It wasn’t just pretty — it felt strategic, professional, and ready for real clients.",
                name: "Website Client",
                role: "Custom Website Build",
              },
            ].map((item) => (
              <motion.div
                key={item.quote}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 p-7 shadow-[0_20px_55px_rgba(22,49,38,0.07)] backdrop-blur-xl"
              >
                <p className="text-3xl leading-none text-[#163126]">“</p>
                <p className="mt-4 text-sm leading-8 text-[#7B746B]">
                  {item.quote}
                </p>
                <div className="mt-6">
                  <p className="font-medium text-[#163126]">{item.name}</p>
                  <p className="text-sm text-[#6F7D75]">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="relative z-10 bg-[linear-gradient(180deg,#EEF4EF_0%,#F7F3EC_100%)] px-6 py-24 md:px-12 md:py-28 lg:px-20"
      >
        <motion.div {...fadeUp} className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.35em] text-[#C5A46D]">
              Investment
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#163126] md:text-5xl">
              Premium websites, priced with intention.
            </h2>
            <div className="mt-4 h-[2px] w-14 bg-[#C5A46D]" />
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#7B746B]">
              Every project is custom, but these ranges help set expectations
              for the level of strategy, design, and development included.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 p-8 shadow-[0_20px_60px_rgba(22,49,38,0.08)] backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#C5A46D]">
                Essential
              </p>
              <h3 className="mt-4 text-4xl font-semibold text-[#163126]">
                $3,500+
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#7B746B]">
                A polished custom site for brands that need a clean, elevated,
                and professional online presence.
              </p>

              <ul className="mt-7 space-y-3 text-sm text-[#163126]">
                <li>Custom homepage design</li>
                <li>Responsive build</li>
                <li>Branded content sections</li>
                <li>Inquiry or contact CTA</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="relative rounded-[2rem] border border-[#1D4131] bg-[linear-gradient(180deg,#163126_0%,#10241C_100%)] p-8 text-white shadow-[0_30px_85px_rgba(22,49,38,0.24)]"
            >
              <div className="absolute right-6 top-6 rounded-full bg-[#F3E8D8] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#163126]">
                Most Popular
              </div>

              <p className="text-sm uppercase tracking-[0.25em] text-[#DCC5A1]">
                Signature
              </p>
              <h3 className="mt-4 text-4xl font-semibold">$5,500+</h3>
              <p className="mt-4 text-sm leading-7 text-white/82">
                A fuller luxury website experience for brands ready to look more
                established, refined, and conversion-ready.
              </p>

              <ul className="mt-7 space-y-3 text-sm text-white">
                <li>Multi-section or multi-page build</li>
                <li>Luxury design direction</li>
                <li>Higher-end brand positioning</li>
                <li>Refined call-to-action flow</li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 p-8 shadow-[0_20px_60px_rgba(22,49,38,0.08)] backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#C5A46D]">
                Bespoke
              </p>
              <h3 className="mt-4 text-4xl font-semibold text-[#163126]">
                $8,000+
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#7B746B]">
                For brands needing a more tailored experience with expanded
                scope, more advanced pages, and a fully premium presentation.
              </p>

              <ul className="mt-7 space-y-3 text-sm text-[#163126]">
                <li>Custom scope and visual strategy</li>
                <li>Premium design direction</li>
                <li>Expanded pages or features</li>
                <li>Built for stronger brand presence</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT / BOOKING */}
      <section id="contact" className="relative z-10 px-6 py-24 md:px-12 md:py-28 lg:px-20">
        <motion.div
          {...fadeUp}
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="rounded-[2.1rem] border border-[#DFD8CC] bg-[linear-gradient(180deg,#163126_0%,#10241C_100%)] p-8 text-white shadow-[0_28px_80px_rgba(22,49,38,0.22)] md:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-[#DCC5A1]">
              Start Your Project
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
              Let’s build a website that positions your brand at a higher level.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/82">
              Reach out for custom design and development, premium website
              builds, or a luxury refresh for your current brand presence.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/85">
              <p>Email: laurenabigailparker@gmail.com</p>
              <p>Custom projects starting at $3,500+</p>
              <p>Luxury-focused design and development</p>
            </div>
          </div>

          <div className="rounded-[2.1rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 p-8 shadow-[0_22px_70px_rgba(22,49,38,0.08)] backdrop-blur-xl md:p-10">
            <p className="text-sm uppercase tracking-[0.24em] text-[#C5A46D]">
              Booking / Intake
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-[#163126]">
              Ready to inquire?
            </h3>
            <p className="mt-4 text-sm leading-8 text-[#7B746B]">
              Share a few details about your brand, goals, and project vision.
              This helps me understand your needs and create a website
              experience that feels aligned, strategic, and premium.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href="mailto:laurenabigailparker@gmail.com"
                className="block rounded-full bg-[#163126] px-6 py-4 text-center text-sm font-medium text-white shadow-[0_14px_34px_rgba(22,49,38,0.18)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#10241C]"
              >
                Email Me Directly
              </a>

   <form
  action="https://formspree.io/f/mwvabobn"
  method="POST"
  className="mt-8 space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Your name"
    required
    className="w-full rounded-2xl border border-[#D6C4A7] bg-white px-5 py-4 text-sm text-[#163126] outline-none placeholder:text-[#7B746B]"
  />

  <input
  type="hidden"
  name="_next"
  value="https://laurenparkerstudio.com/thank-you"
/>

  <input
    type="email"
    name="email"
    placeholder="Your email"
    required
    className="w-full rounded-2xl border border-[#D6C4A7] bg-white px-5 py-4 text-sm text-[#163126] outline-none placeholder:text-[#7B746B]"
  />

  <input
    type="text"
    name="business"
    placeholder="Business name"
    className="w-full rounded-2xl border border-[#D6C4A7] bg-white px-5 py-4 text-sm text-[#163126] outline-none placeholder:text-[#7B746B]"
  />

  <select
    name="website_type"
    className="w-full rounded-2xl border border-[#D6C4A7] bg-white px-5 py-4 text-sm text-[#163126] outline-none"
    defaultValue=""
    required
  >
    <option value="" disabled>
      What type of website do you need?
    </option>
    <option value="Portfolio website">Portfolio website</option>
    <option value="Business website">Business website</option>
    <option value="Service-based website">Service-based website</option>
    <option value="Luxury brand website">Luxury brand website</option>
    <option value="Website redesign">Website redesign</option>
  </select>

  <select
    name="budget"
    className="w-full rounded-2xl border border-[#D6C4A7] bg-white px-5 py-4 text-sm text-[#163126] outline-none"
    defaultValue=""
    required
  >
    <option value="" disabled>
      Investment range
    </option>
    <option value="$3,500-$5,500">$3,500–$5,500</option>
    <option value="$5,500-$8,000">$5,500–$8,000</option>
    <option value="$8,000+">$8,000+</option>
    <option value="Not sure yet">Not sure yet</option>
  </select>

  <textarea
    name="message"
    placeholder="Tell me about your project, goals, and the vibe you want."
    required
    rows={6}
    className="w-full rounded-[1.5rem] border border-[#D6C4A7] bg-white px-5 py-4 text-sm text-[#163126] outline-none placeholder:text-[#7B746B]"
  />

  <button
    type="submit"
    className="block w-full rounded-full bg-[#163126] px-6 py-4 text-center text-sm font-medium text-white shadow-[0_14px_34px_rgba(22,49,38,0.18)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#10241C]"
  >
    Submit Inquiry
  </button>
  <input
  type="hidden"
  name="_next"
  value="https://your-site-url.com/thank-you"
/>
</form>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#E4DED4] bg-[#F8FAF8] p-5">
              <p className="text-sm font-medium text-[#163126]">
                Suggested intake questions
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-[#7B746B]">
                <li>What is your business name?</li>
                <li>What type of website do you need?</li>
                <li>What is your target launch date?</li>
                <li>What investment range are you comfortable with?</li>
                <li>What overall style or mood do you want your brand to have?</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}