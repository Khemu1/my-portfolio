"use client";

import { useState, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

/* ---------------- helpers (SAFE) ---------------- */

const normalizeStatus = (status?: unknown) =>
  status === "completed" ? "completed" : "in-progress";

const clamp = (text: string, max = 90) =>
  text.length > max ? text.slice(0, max) + "…" : text;

const getImages = (project: (typeof projects)[0]) =>
  project.album?.length
    ? project.album
    : project.mainImage
      ? [project.mainImage]
      : [];

/* ---------------- component ---------------- */

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const images = useMemo(() => getImages(selectedProject), [selectedProject]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const status = normalizeStatus(selectedProject.status);

  const projectCardVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const mainContentVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="mb-16 min-h-screen">
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
            PROJECTS
          </h2>

          <div className="mt-4 h-0.5 w-full bg-linear-to-r from-white/80 to-transparent" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.aside
          className="lg:col-span-4 order-2 lg:order-1 space-y-3 max-h-150 overflow-y-auto custom-scrollbar px-4 py-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {projects.map((project, idx) => {
              const active = selectedProject.id === project.id;
              const projectStatus = normalizeStatus(project.status);

              return (
                <motion.div
                  key={project.id + "-" + idx}
                  onClick={() => setSelectedProject(project)}
                  className={`
                  relative p-4 rounded-xl cursor-pointer
                  transition-all duration-300
                  backdrop-blur-xl
                  bg-white/5
                  border border-white/10
                  ${
                    active
                      ? "ring-1 ring-purple-400/40"
                      : "hover:bg-white/15 hover:border-white/30"
                  }
                  hover:-translate-y-0.5
                `}
                  variants={projectCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  layoutId={`project-${project.id}`}
                  transition={{ duration: 0.3 }}
                >
                  {active && (
                    <motion.span
                      className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1 h-10 bg-purple-400 rounded-r-full"
                      layoutId="active-indicator"
                    />
                  )}

                  <div className="flex gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-white truncate">
                        {project.title}
                      </h3>

                      <p className="text-sm text-white/70 mt-1 leading-snug line-clamp-2">
                        {clamp(project.description)}
                      </p>

                      <span className="mt-2 inline-block text-xs uppercase tracking-wide text-white/50">
                        {project.category}
                      </span>
                    </div>

                    <span
                      className={`mt-1 w-2.5 h-2.5 rounded-full shrink-0 ${
                        projectStatus === "completed"
                          ? "bg-green-400"
                          : "bg-yellow-400 animate-pulse"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.aside>

        <motion.div
          className="
          lg:col-span-8
          order-1 lg:order-2
          rounded-2xl p-6
          backdrop-blur-2xl
          bg-white/5
          border border-white/10
          ring-1 ring-white/5
        "
          variants={mainContentVariants}
          initial="hidden"
          animate="visible"
          key={selectedProject.id}
          transition={{ duration: 0.5 }}
        >
          {/* Image carousel */}
          <motion.div
            className="relative mb-6 group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div ref={emblaRef} className="overflow-hidden rounded-xl">
              <div className="flex">
                {images.map((img, i) => (
                  <motion.div
                    key={i}
                    className="flex-[0_0_100%]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Image
                      src={img}
                      alt={`${selectedProject.title} ${i + 1}`}
                      width={1600}
                      height={900}
                      quality={75}
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      className="w-full h-full object-fit"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {images.length > 1 && (
              <>
                <motion.button
                  onClick={scrollPrev}
                  className="
                  absolute left-4 top-1/2 -translate-y-1/2
                  p-2 rounded-full
                  backdrop-blur-md
                  bg-white/20
                  border border-white/30
                  text-white
                  opacity-0 group-hover:opacity-100
                  transition
                "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoChevronBack size={22} />
                </motion.button>

                <motion.button
                  onClick={scrollNext}
                  className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  p-2 rounded-full
                  backdrop-blur-md
                  bg-white/20
                  border border-white/30
                  text-white
                  opacity-0 group-hover:opacity-100
                  transition
                "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoChevronForward size={22} />
                </motion.button>
              </>
            )}
          </motion.div>

          {/* Info */}
          <div className="space-y-4">
            <motion.div
              className="flex items-start justify-between gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-white">
                {selectedProject.title}
              </h3>

              <motion.span
                className={`px-3 py-1 text-xs rounded-full border ${
                  status === "completed"
                    ? "bg-green-400/20 text-green-300 border-green-400/30"
                    : "bg-yellow-400/20 text-yellow-300 border-yellow-400/30"
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              >
                {status === "completed" ? "Completed" : "In Progress"}
              </motion.span>
            </motion.div>

            <motion.p
              className="text-white/80 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {selectedProject.description}
            </motion.p>

            {/* Actions */}
            <motion.div
              className="flex gap-3 pt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {selectedProject.live && (
                <motion.a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex items-center gap-2 px-6 py-3
                  rounded-lg font-semibold
                  backdrop-blur-md
                  bg-white/20
                  border border-white/30
                  text-white
                  hover:bg-white/30
                  transition
                "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink />
                  Live
                </motion.a>
              )}

              {selectedProject.github && (
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex items-center gap-2 px-6 py-3
                  rounded-lg
                  backdrop-blur-md
                  bg-white/5
                  border border-white/10
                  text-white
                  hover:bg-white/20
                  transition
                "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub />
                  GitHub
                </motion.a>
              )}

              {!selectedProject.live && !selectedProject.github && (
                <motion.span
                  className="px-6 py-3 rounded-lg bg-white/5 text-white/50 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  Private
                </motion.span>
              )}
            </motion.div>

            {/* Tech stack */}
            <motion.div
              className="pt-4 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-sm uppercase tracking-wide text-white/60 mb-3">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.slice(0, 8).map((tech, i) => (
                  <motion.span
                    key={i}
                    className="
                    px-3 py-1.5 text-sm
                    backdrop-blur-sm
                    bg-white/5
                    text-white
                    rounded-lg
                    border border-white/10
                  "
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}

                {selectedProject.stack.length > 8 && (
                  <motion.span
                    className="px-3 py-1.5 text-sm text-white/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    +{selectedProject.stack.length - 8} more
                  </motion.span>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
