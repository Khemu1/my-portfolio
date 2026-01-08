"use client";
import { projects } from "@/data/work";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub, BsImages } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useState } from "react";
import SliderButtons from "@/components/swiper/SliderButtons";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ImagesSwiper from "@/components/swiper/ImagesSwiper";
import { DialogTitle } from "@radix-ui/react-dialog";

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveProject(projects[swiper.activeIndex]);
  };

  return (
    <div className="flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left info */}
          <div className="flex flex-col xl:justify-between order-2 xl:order-none w-full xl:w-[50%] xl:h-[460px]">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                0
                {projects.findIndex(
                  (project) => project.id === activeProject.id
                ) + 1}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {activeProject.title}
              </h2>
              <h4 className="text-[32px] font-semibold text-white">
                Role:{" "}
                <b className="text-accent/95">
                  {activeProject.category} Developer
                </b>
              </h4>
              <p className="text-white/60 text-lg">
                {activeProject.description}
              </p>
              {activeProject.status !== "completed" && (
                <p className="text-warning font-bold capitalize text-xl">
                  {activeProject.status}
                </p>
              )}
              <ul className="flex gap-4 flex-wrap">
                {activeProject.stack.map((stack, index) => (
                  <li
                    key={index}
                    className="text-xl text-accent bg-surface-dark px-3 py-1 rounded-full glass"
                  >
                    {stack.name}
                  </li>
                ))}
              </ul>
              <div className="border border-accent/30"></div>
              <div className="flex items-center gap-4">
                {activeProject.live && (
                  <Link href={activeProject.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-surface-dark flex justify-center items-center group glass hover:bg-surface-light">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                          <TooltipContent className="bg-surface-dark border-accent/30">
                            <p className="text-white">Live Project</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {activeProject.github && (
                  <Link href={activeProject.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-surface-dark flex justify-center items-center group glass hover:bg-surface-light">
                          <BsGithub className="text-white text-3xl group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                          <TooltipContent className="bg-surface-dark border-accent/30">
                            <p className="text-white">Github Repository</p>
                          </TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%] relative">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative flex justify-center items-center h-[460px]">
                    <div className="relative w-full h-full rounded-xl overflow-hidden glass">
                      <Image
                        loading="lazy"
                        src={project.mainImage}
                        alt="project"
                        fill
                        className="object-contain"
                      />
                      {/* Album button */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="absolute m-2 bottom-2 right-2 w-[70px] h-[70px] rounded-full bg-surface-dark flex justify-center items-center glass hover:bg-surface-light transition-all">
                            <BsImages className="text-white text-3xl hover:text-accent hover:scale-110 transition-all duration-300" />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="bg-surface-dark border-accent/30">
                          <DialogTitle className="text-accent font-semibold text-xl mb-4">
                            {project.title} - Gallery
                          </DialogTitle>
                          {/* Pass the images of THIS project directly */}
                          <ImagesSwiper
                            images={project.album}
                            title={project.title}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <SliderButtons
                continerStyle="flex w-max justify-none gap-2 absolute right-2 bottom-1 z-20 w-full"
                btnStyle="flex justify-center items-center transition-all bg-accent hover:bg-accent-hover text-white text-[22px] w-[44px] h-[44px] rounded-sm hover:scale-110"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
