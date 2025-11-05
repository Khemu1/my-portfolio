"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { GiScarabBeetle, GiEgyptianProfile } from "react-icons/gi";
import { personal } from "@/data";
import Socials from "@/components/home/Socials";
import Photo from "@/components/home/Photo";
import Stats from "@/components/home/Stats";
import { useCallback } from "react";

export default function Home() {
  const handleDownloadCV = useCallback(() => {
    window.open(personal.cv, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <section className="h-full flex flex-col justify-between py-8">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between gap-8">
        {/* 🧍‍♂️ Left Section (Text + Buttons) */}
        <div className="text-center xl:text-left order-2 xl:order-none max-w-xl">
          <span className="font-semibold flex items-center justify-center xl:justify-start gap-2 text-yellow-400">
            <GiEgyptianProfile aria-hidden />
            Full Stack Web Developer
            <GiScarabBeetle aria-hidden />
          </span>

          <h1 className="h1 mt-2 leading-tight">
            Hello, I&apos;m <br />
            <span className="text-accent">{personal.name}</span>
          </h1>

          <p className="mb-9 mt-3 text-white/80">{personal.summary}</p>

          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 uppercase"
              onClick={handleDownloadCV}
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>

            <div className="xl:mb-0">
              <Socials
                containerStyle="flex gap-6"
                iconStyle="flex justify-center items-center w-9 h-9 border border-accent rounded-full text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* 🖼️ Right Section (Photo) */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>

      {/* 📊 Stats Section */}
      <Stats />
    </section>
  );
}
