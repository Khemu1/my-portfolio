"use client";

import { categorizedSkills } from "@/data/skills";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
type Category = keyof typeof categorizedSkills;

const skillColors: Record<string, string> = {
  sky: "bg-sky-500/10 border-sky-400/30 text-sky-300",
  blue: "bg-blue-500/10 border-blue-400/30 text-blue-300",
  cyan: "bg-cyan-500/10 border-cyan-400/30 text-cyan-300",
  green: "bg-green-500/10 border-green-400/30 text-green-300",
  emerald: "bg-emerald-500/10 border-emerald-400/30 text-emerald-300",
  violet: "bg-violet-500/10 border-violet-400/30 text-violet-300",
  indigo: "bg-indigo-500/10 border-indigo-400/30 text-indigo-300",
  purple: "bg-purple-500/10 border-purple-400/30 text-purple-300",
  pink: "bg-pink-500/10 border-pink-400/30 text-pink-300",
  rose: "bg-rose-500/10 border-rose-400/30 text-rose-300",
  orange: "bg-orange-500/10 border-orange-400/30 text-orange-300",
  amber: "bg-amber-500/10 border-amber-400/30 text-amber-300",
  yellow: "bg-yellow-500/10 border-yellow-400/30 text-yellow-300",
  lime: "bg-lime-500/10 border-lime-400/30 text-lime-300",
  teal: "bg-teal-500/10 border-teal-400/30 text-teal-300",
  red: "bg-red-500/10 border-red-400/30 text-red-300",
  slate: "bg-slate-500/10 border-slate-400/30 text-slate-300",
  dark: "bg-black/30 border-white/20 text-neutral-300",
  nuxt: "bg-[#00DC82]/10 border-[#00DC82]/20 text-[#4ADE80]",
  mocha: "bg-amber-900/20 border-amber-800/40 text-amber-500",
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const Technologies = () => {
  const categories = Object.keys(categorizedSkills) as Category[];
  const [activeTab, setActiveTab] = useState(categories[0]);

  const activeSkills = categorizedSkills[activeTab] ?? [];

  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      {/* Heading */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-fit">
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tighter text-neutral-300 whitespace-nowrap">
            TECHNOLOGIES
          </h2>
          <div className="mt-4 h-0.5 w-full bg-linear-to-r from-white/80 to-transparent" />
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="mb-10 flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {categories.map((category) => {
          const isActive = category === activeTab;
          return (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`
                relative px-5 py-2 rounded-full text-sm font-medium tracking-wide
                border transition-all duration-200
                ${
                  isActive
                    ? "bg-white/10 border-white/30 text-white"
                    : "bg-transparent border-white/10 text-neutral-500 hover:text-neutral-300 hover:border-white/20"
                }
              `}
            >
              {category}
              {isActive && (
                <motion.span
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-full bg-white/5"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </motion.div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {activeSkills.map((skill) => {
            const colorClasses =
              skillColors[skill.color] ??
              "bg-white/5 border-white/10 text-white";

            return (
              <motion.div
                key={skill.name}
                className={`group flex flex-col items-center justify-center gap-3
                  rounded-xl border p-6 backdrop-blur-sm transition-all
                  hover:scale-[1.04] hover:shadow-lg cursor-pointer
                  ${colorClasses}`}
                variants={fadeIn}
                whileHover={{ transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="text-4xl transition-transform duration-300 group-hover:scale-110"
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-sm font-medium tracking-wide">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Technologies;
