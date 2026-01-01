"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { stats as baseStats } from "@/data";
import { Loader2 } from "lucide-react";

const Stats = () => {
  const [stats, setStats] = useState(baseStats);
  const [loadingCommits, setLoadingCommits] = useState(false);

  useEffect(() => {
    const fetchCommits = async () => {
      setLoadingCommits(true);
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
      } finally {
        setLoadingCommits(false);
      }
    };

    fetchCommits();
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-24 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            const isCommits = stat.name === "Code Commits";
            return (
              <div
                key={index}
                className="flex gap-4 items-center justify-center xl:justify-between flex-1 bg-surface-dark rounded-xl px-6 py-4"
              >
                {isCommits && loadingCommits ? (
                  <span className="text-4xl xl:text-6xl font-extrabold  animate-spin">
                    <Loader2 className="" />
                  </span>
                ) : (
                  <CountUp
                    end={stat.value}
                    duration={5}
                    delay={1}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    className="text-4xl xl:text-6xl font-extrabold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent"
                  />
                )}
                <p
                  className={`${
                    stat.name.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } text-white/80 leading-snug text-lg`}
                >
                  {stat.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
