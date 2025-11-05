"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { stats as baseStats } from "@/data";

const Stats = () => {
  const [stats, setStats] = useState(baseStats);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const res = await fetch("/api/commits");
        const data = await res.json();

        setStats((prev) =>
          prev.map((stat) =>
            stat.name === "Code Commits"
              ? { ...stat, value: data.totalCommits }
              : stat
          )
        );
      } catch (err) {
        console.error("Failed to load commits:", err);
      }
    };

    fetchCommits();
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-24 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex gap-4 items-center justify-center xl:justify-start flex-1"
            >
              <CountUp
                end={stat.value}
                duration={5}
                delay={1}
                decimals={stat.value % 1 !== 0 ? 1 : 0} // show 1 decimal if value is not integer
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.name.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } text-white/80 leading-snug`}
              >
                {stat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
