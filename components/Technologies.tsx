"use client";

import { categorizedSkills } from "@/data/skills"; // adjust path
import { motion, Variants } from "framer-motion";

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
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const Technologies = () => {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-fit">
          <h2
            className="
            text-4xl sm:text-7xl
            font-extrabold tracking-tighter
            text-neutral-300
            whitespace-nowrap
            "
          >
            TECHNOLOGIES
          </h2>

          <div className="mt-4 h-0.5 w-full bg-linear-to-r from-white/80 to-transparent" />
        </div>
      </motion.div>

      {/* Categories */}
      <div className="space-y-20">
        {Object.entries(categorizedSkills).map(
          ([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {skills.map((skill, i) => {
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
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="text-4xl transition-transform duration-300 group-hover:scale-110"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
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
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
};

export default Technologies;
