"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { info, services } from "@/data/contact";
import { FormEvent, useEffect, useState } from "react";
import { sendEmail } from "@/front-end-services";

const Contact = () => {
  const [data, setData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
    service: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setIsSubmitting(true);

    try {
      const result = await sendEmail(data);
      if (result.success) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    let successTimer: NodeJS.Timeout;
    let errorTimer: NodeJS.Timeout;

    if (success) {
      successTimer = setTimeout(() => setSuccess(false), 2000);
    }

    if (error) {
      errorTimer = setTimeout(() => setError(false), 2000);
    }

    return () => {
      clearTimeout(successTimer);
      clearTimeout(errorTimer);
      controller.abort();
    };
  }, [success, error]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] xl:w-[550px] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">
                Let&lsquo;s work together
              </h3>
              <div className="grid grid-cols-1 md:grid-2 gap-6">
                <Input
                  type="text"
                  placeholder="First Name"
                  className=""
                  required={true}
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className=""
                  required={true}
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className=""
                  required={true}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <Input
                  type="tel"
                  placeholder="Phone"
                  className=""
                  required={true}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </div>
              <Select
                required={true}
                onValueChange={(e) => setData({ ...data, service: e })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service.value}>
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              <Textarea
                className="h-[200px] "
                placeholder="Type your message here."
                onChange={(e) => setData({ ...data, message: e.target.value })}
              />
              <Button className="max-w-40" size={"md"} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              <p className="text-center text-xl text-accent ">
                {success && !error && "Message Sent Successfully"}
              </p>
              <p className="text-center text-xl text-accent">
                {!success && error && "Error Sending Message"}
              </p>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((i, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                    <div className="text-[28px]">{i.icons}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{i.name}</p>
                    <h3 className="text-xl">{i.value}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
