"use client";

import { motion, Variants } from "framer-motion";
import BackgroundEffects from "@/components/BackgroundEffects";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { FaArrowRightLong } from "react-icons/fa6";
import Connect from "@/components/Connect";
import { AiOutlineDownload } from "react-icons/ai";
import { PiPlugsConnectedThin } from "react-icons/pi";

export default function Home() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10 px-4 sm:px-6 lg:px-10 xl:px-16 max-w-screen-2xl mx-auto">
        {/* ── Hero ── */}
        <div className="flex min-h-screen items-center justify-center mt-10">
          <motion.div
            className="w-full max-w-4xl text-center space-y-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-neutral-400 via-white to-neutral-400"
              variants={fadeUp}
            >
              Ali Hassan
            </motion.h1>

            <motion.h2
              className="text-3xl md:text-4xl font-medium text-neutral-300"
              variants={fadeUp}
            >
              Fullstack Developer
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-neutral-400 leading-relaxed"
              variants={fadeUp}
            >
              Self-motivated fullstack developer with hands-on experience
              building scalable, secure, and efficient web applications. Skilled
              in API design, database architecture, and real-time systems —
              comfortable owning both the frontend and backend of a project end
              to end.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-5 pt-8"
              variants={fadeUp}
            >
              <motion.a
                href="#projects"
                className="group relative flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-semibold text-base relative z-10">
                  View Projects
                </span>
                <motion.div
                  className="relative z-10"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaArrowRightLong size={16} />
                </motion.div>
              </motion.a>

              <motion.a
                href="#connect"
                className="group relative flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-semibold text-base relative z-10">
                  Let&apos;s Connect
                </span>
                <motion.div
                  className="relative z-10"
                  whileHover={{ x: 4, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <PiPlugsConnectedThin size={16} />
                </motion.div>
              </motion.a>

              <motion.a
                href="/cv/Fullstack_CV.pdf"
                download
                className="group relative flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-semibold text-base relative z-10">
                  Download CV
                </span>
                <motion.div
                  className="w-4 h-4 relative z-10"
                  whileHover={{ y: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <AiOutlineDownload />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Technologies ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6 }}
        >
          <Technologies />
        </motion.div>

        {/* ── Projects ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.div>

        {/* ── Connect ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6 }}
        >
          <Connect />
        </motion.div>
      </div>
    </main>
  );
}
