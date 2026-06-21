"use client";

import { useState, useCallback, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  IoChevronBack,
  IoChevronForward,
  IoOpenOutline,
} from "react-icons/io5";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "@/data/projects";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

/* ---------------- types ---------------- */

type Project = (typeof projects)[0];
type Category = "All" | "Fullstack" | "Backend" | "Frontend";

/* ---------------- helpers ---------------- */

const normalizeStatus = (status?: unknown) =>
  status === "completed"
    ? "completed"
    : status === "cancelled"
      ? "cancelled"
      : "in-progress";

const getImages = (project: Project) =>
  project.album?.length
    ? project.album
    : project.mainImage
      ? [project.mainImage]
      : [];

const getYouTubeId = (url: string) => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/,
    /youtube\.com\/embed\/([^?]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return url;
};

const STATUS_CONFIG = {
  completed: {
    label: "Completed",
    className:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-red-500/10 text-red-400 border border-red-500/20",
  },
  "in-progress": {
    label: "In progress",
    className: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  },
} as const;

const CATEGORIES: Category[] = ["All", "Fullstack", "Backend", "Frontend"];

/* ---------------- StatusBadge ---------------- */

const StatusBadge = ({ status }: { status: string }) => {
  const normalized = normalizeStatus(status);
  const config = STATUS_CONFIG[normalized];
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
};

/* ---------------- ProjectCard ---------------- */

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => {
  const imageCount = getImages(project).length;
  const hasVideos = !!project.videos?.length;

  return (
    <motion.div
      onClick={onClick}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer
        backdrop-blur-xl bg-white/5 border border-white/10
        hover:bg-white/8 hover:border-white/20 transition-all duration-300"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      whileHover={{ y: -3 }}
      layout
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-white/5">
        {project.mainImage ? (
          <Image
            src={project.mainImage || ""}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/20">
            <IoOpenOutline size={32} />
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-sm font-medium px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
            View project
          </span>
        </div>

        {/* Media indicators */}
        <div className="absolute top-2.5 right-2.5 flex gap-1.5">
          {imageCount > 1 && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-xs text-white/80">
              <IoOpenOutline size={11} />
              {imageCount}
            </span>
          )}
          {hasVideos && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-xs text-white/80">
              ▶ {project.videos!.length}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-2.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
              {project.category}
            </p>
            <h3 className="text-base font-semibold text-white leading-snug">
              {project.title}
            </h3>
          </div>
          <StatusBadge status={project.status ?? ""} />
        </div>

        <p className="text-sm text-white/60 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.stack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs rounded-md bg-white/5 text-white/50 border border-white/10"
            >
              {tech.name}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-0.5 text-xs text-white/30">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------- VideoSection ---------------- */

const VideoSection = ({
  videos,
  title,
}: {
  videos: string[];
  title: string;
}) => {
  const [failedThumbnails, setFailedThumbnails] = useState<Set<string>>(
    new Set(),
  );
  if (!videos?.length) return null;

  return (
    <div className="mb-6">
      <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3">
        Videos ({videos.length})
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {videos.map((video, i) => {
          const videoId = getYouTubeId(video);
          const thumbnailUrl = failedThumbnails.has(videoId)
            ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
            : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

          return (
            <a
              key={i}
              href={video}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full aspect-video rounded-xl overflow-hidden bg-black/40"
            >
              <Image
                src={thumbnailUrl}
                alt={`${title} - Video ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                onError={() =>
                  setFailedThumbnails((prev) => new Set(prev).add(videoId))
                }
                priority={i < 2}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition flex items-center justify-center">
                <div className="p-3 rounded-full bg-white/20 backdrop-blur-md group-hover:scale-110 transition">
                  <IoOpenOutline size={22} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-xs text-white/80">
                Video {i + 1}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

/* ---------------- ProjectDialog ---------------- */

const ProjectDialog = ({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const images = useMemo(() => (project ? getImages(project) : []), [project]);

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-3xl w-[92vw] bg-neutral-950/95 border border-white/10 p-0 max-h-[88vh] overflow-y-auto rounded-2xl">
        {/* Gallery / Videos */}
        <div className="p-5 pb-0">
          <DialogTitle className="sr-only">{project.title}</DialogTitle>

          {project.videos?.length ? (
            <VideoSection videos={project.videos} title={project.title} />
          ) : null}

          {images.length > 0 && (
            <div className="relative group mb-5">
              <div ref={emblaRef} className="overflow-hidden rounded-xl">
                <div className="flex">
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="flex-[0_0_100%] flex items-center justify-center max-h-[50vh] bg-black/20 rounded-xl overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} ${i + 1}`}
                        width={1600}
                        height={900}
                        quality={75}
                        priority={i === 0}
                        sizes="90vw"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {images.length > 1 && (
                <>
                  <motion.button
                    onClick={scrollPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-white opacity-0 group-hover:opacity-100 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Previous image"
                  >
                    <IoChevronBack size={20} />
                  </motion.button>
                  <motion.button
                    onClick={scrollNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-white opacity-0 group-hover:opacity-100 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Next image"
                  >
                    <IoChevronForward size={20} />
                  </motion.button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs text-white/70">
                    {images.length} images
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="px-5 pb-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                {project.category}
              </p>
              <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            </div>
            <StatusBadge status={project.status ?? ""} />
          </div>

          <p className="text-white/70 leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Actions */}
          <div className="flex gap-3 flex-wrap">
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm backdrop-blur-md bg-white/20 border border-white/30 text-white hover:bg-white/30 transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiExternalLink size={14} /> Live
              </motion.a>
            )}
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm backdrop-blur-md bg-white/5 border border-white/10 text-white hover:bg-white/15 transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiGithub size={14} /> GitHub
              </motion.a>
            )}
            {!project.live && !project.github && (
              <span className="px-5 py-2.5 rounded-xl text-sm bg-white/5 text-white/40 border border-white/10">
                Private
              </span>
            )}
          </div>

          {/* Tech stack */}
          <div className="pt-4 border-t border-white/10">
            <h4 className="text-xs uppercase tracking-wider text-white/40 mb-3">
              Tech stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1.5 text-sm backdrop-blur-sm bg-white/5 text-white/80 rounded-lg border border-white/10"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/* ---------------- Main Component ---------------- */

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    projects.forEach((p) => {
      counts[p.category] = (counts[p.category] ?? 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <section id="projects" className="mb-16">
      {/* Header */}
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-fit">
          <h2 className="text-4xl sm:text-7xl font-extrabold tracking-tighter text-neutral-300 whitespace-nowrap">
            PROJECTS
          </h2>
          <div className="mt-4 h-0.5 w-full bg-linear-to-r from-white/80 to-transparent" />
        </div>
      </motion.div>

      {/* Category filter tabs */}
      <motion.div
        className="flex gap-2 flex-wrap mb-8"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-4 py-1.5 rounded-full text-sm transition-all duration-200 border
              ${
                activeCategory === cat
                  ? "bg-white text-neutral-900 border-white font-medium"
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white/80"
              }
            `}
          >
            {cat}
            <span
              className={`ml-1.5 text-xs ${activeCategory === cat ? "text-neutral-500" : "text-white/30"}`}
            >
              {categoryCounts[cat] ?? 0}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 items-stretch"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id ?? project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              layout
              className="h-full"
            >
              <ProjectCard
                project={project}
                onClick={() => openProject(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Dialog */}
      <ProjectDialog
        project={selectedProject}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
};

export default Projects;
