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
  // Animation variants
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
    <main className="relative min-h-screen text-white overflow-hidden ">
      <BackgroundEffects />
      <div className="relative z-10 flex min-h-screen items-center justify-center mt-10 ">
        <motion.div
          className="w-full max-w-4xl text-center space-y-8 px-2 md:px-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-neutral-400 via-white to-neutral-400"
            variants={fadeUp}
          >
            Ali Hassan
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            className="text-3xl md:text-4xl font-medium text-neutral-300"
            variants={fadeUp}
          >
            Full Stack Developer
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            className="text-lg md:text-xl text-neutral-400 leading-relaxed"
            variants={fadeUp}
          >
            Self-motivated backend-leaning full stack developer with hands-on
            experience building scalable, secure, and efficient web
            applications. Skilled in API design, database architecture, and
            real-time systems, with solid frontend expertise using modern
            JavaScript frameworks.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-5 pt-8"
            variants={fadeUp}
          >
            {/* View Projects Button */}
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
                <FaArrowRightLong className="" size={16} />
              </motion.div>
            </motion.a>

            {/* Let's Connect Button */}
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

            {/* Download CV Button */}
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
              {/* Fast gradient border */}

              <span className="text-white font-semibold text-base relative z-10">
                Download CV
              </span>

              <motion.div
                className="w-4 h-4  relative z-10"
                whileHover={{ y: 2 }}
                transition={{ duration: 0.2 }}
              >
                <AiOutlineDownload />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Technologies & Projects & Connect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Technologies />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Projects />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Connect />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
