"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl w-full text-center rounded-[2rem] border border-[#DFD8CC] bg-[#FCFAF6]/90 p-10 shadow-[0_25px_70px_rgba(22,49,38,0.08)] backdrop-blur-xl"
      >
        {/* Label */}
        <p className="text-xs uppercase tracking-[0.35em] text-[#C5A46D]">
          Inquiry Received
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-[#163126] leading-tight">
          You’re in — I’ve got your request.
        </h1>

        {/* Message */}
        <p className="mt-6 text-[#7B746B] leading-8 text-sm md:text-base">
          I’ll personally review your inquiry and get back to you within
          <span className="text-[#163126] font-medium"> 24–48 hours</span>.
          <br /><br />
          In the meantime, feel free to explore my work or gather inspiration
          for your project — it helps me understand your vision better.
        </p>

        {/* Divider */}
        <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-transparent via-[#D8D2C8] to-transparent" />

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="rounded-full bg-[#163126] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_34px_rgba(22,49,38,0.18)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#10241C]"
          >
            Back to Home
          </Link>

          <Link
            href="/#work"
            className="rounded-full border border-[#D6C4A7] bg-[#F7EFE4] px-6 py-3 text-sm font-medium text-[#163126] transition duration-300 hover:-translate-y-[1px] hover:bg-[#F2E7D7]"
          >
            View Portfolio
          </Link>
        </div>
      </motion.div>
    </main>
  );
}