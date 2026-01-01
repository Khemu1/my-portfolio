"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import { experince, education, categorizedSkills, about } from "@/data/resume";

const SectionTitle = ({ title }: { title: string }) => (
  <h3 className="text-4xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent pb-2 -mb-1">
    {title}
  </h3>
);
const ResumeItem = ({
  duration,
  title,
  subtitle,
  name,
}: {
  duration: string;
  title: string;
  subtitle: string;
  name?: string;
}) => (
  <li className="bg-surface-dark py-6 px-10 border-0! rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 h-[184px] ">
    <span className="text-accent font-semibold">{duration}</span>
    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-white">
      {title}
    </h3>
    <div className="flex items-center gap-3">
      <span className="w-[6px] h-[6px] rounded-full bg-accent" />
      <p className="text-white/60">{subtitle}</p>
    </div>
    {name && (
      <div className="flex items-center gap-3">
        <span className="w-[6px] h-[6px] rounded-full bg-accent" />
        <p className="text-white/60">{name}</p>
      </div>
    )}
  </li>
);

const EducationItem = ({
  duration,
  degree,
  course,
  instructor,
  level,
  institution,
}: {
  duration: string;
  degree?: string | null;
  course?: string | null;
  instructor?: string;
  level?: string;
  institution?: string;
}) => (
  <div className="bg-surface-dark p-6 rounded-xl h-full flex flex-col ">
    <span className="text-accent mb-2 font-semibold">{duration}</span>
    <h3 className="text-xl font-medium mb-4 text-white">{degree ?? course}</h3>

    <div className="mt-auto space-y-2">
      {institution && (
        <div className="flex items-start gap-3">
          <span className="w-[6px] h-[6px] rounded-full bg-accent mt-2 flex-shrink-0" />
          <p className="text-white/60">{institution}</p>
        </div>
      )}
      {level && (
        <div className="flex items-start gap-3">
          <span className="w-[6px] h-[6px] rounded-full bg-accent mt-2 flex-shrink-0" />
          <p className="text-white/60">{level}</p>
        </div>
      )}
      {instructor && (
        <div className="flex items-start gap-3">
          <span className="w-[6px] h-[6px] rounded-full bg-accent mt-2 flex-shrink-0" />
          <p className="text-white/60">Instructor: {instructor}</p>
        </div>
      )}
    </div>
  </div>
);

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className=" flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experince"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger
              value="experince"
              className="bg-surface-dark border-2 border-accent hover:bg-surface-light data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="bg-surface-dark border-2 border-accent  hover:bg-surface-light  data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="categorizedSkills"
              className="bg-surface-dark border-2 border-accent hover:bg-surface-light data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              Skills by Category
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="bg-surface-dark border-2 border-accent hover:bg-surface-light data-[state=active]:bg-accent data-[state=active]:text-white"
            >
              About Me
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70dvh] w-full">
            <TabsContent value="experince">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <SectionTitle title={experince.title} />
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experince.items.map((item, index) => (
                      <ResumeItem
                        key={index}
                        duration={item.duration}
                        title={item.position}
                        subtitle={item.company}
                      />
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <SectionTitle title={education.title} />
                <ScrollArea className="h-[400px]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <EducationItem
                        key={index}
                        duration={item.duration}
                        degree={item.degree}
                        course={item.course}
                        instructor={item.instructor}
                        level={item.level}
                        institution={item.institution}
                      />
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="categorizedSkills">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <SectionTitle title="My Skills" />
                <ScrollArea className="h-[400px]">
                  <div className="space-y-10 mt-4">
                    {Object.entries(categorizedSkills).map(
                      ([category, items], index) => (
                        <div key={index}>
                          <h4 className="text-2xl font-semibold capitalize mb-4 text-accent-light">
                            {category}
                          </h4>
                          <ul className="grid gap-[20px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                            {items.map((skill, idx) => (
                              <li key={idx}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className="flex justify-center items-center w-full h-[150px] bg-surface-dark rounded-xl group  hover:bg-surface-light transition-all duration-300">
                                      <div className="text-6xl group-hover:text-accent transition-all duration-300 hover:scale-110">
                                        {skill.icon}
                                      </div>
                                      <TooltipContent className="bg-surface-dark border-accent/30">
                                        <p className="capitalize text-white">
                                          {skill.name}
                                        </p>
                                      </TooltipContent>
                                    </TooltipTrigger>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="about">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <SectionTitle title={about.title} />
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-lg leading-relaxed">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] gap-x-2 mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4 bg-surface-dark py-4 px-6 rounded-xl "
                    >
                      <span className="text-white/60">{item.name}</span>
                      <span className="text-xl text-white">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
