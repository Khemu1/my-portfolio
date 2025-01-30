"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { services } from "@/data";
import Link from "next/link";
const Services = () => {
  return (
    <section className="flex flex-col justify-center py-12 lx:py-0 min-h-[80vh] ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 justify-center gap-6 group"
            >
              <div className="flex justify-between items-center w-full pt-8">
                <div className="font-extrabold text-5xl text-outline text-transparent transition-all duration-500 group-hover:text-outline-hover">
                  {service.number}
                </div>
                <Link href="/contact" className="flex justify-center items-center w-[70px] h-[70px] rounded-full bg-white hover:rotate-[-45deg] group-hover:bg-accent transition-all duration-500">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="font-semibold text-2xl">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
