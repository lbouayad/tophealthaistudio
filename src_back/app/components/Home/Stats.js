"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={statsRef}
      className="bg-lightBrown w-full items-center relative justify-center flex flex-col text-brown lg:px-0 md:px-6 px-8 
      overflow-hidden text-center z-10 md:py-24 py-16"
    >
      <h1 className="text-brown z-10 font-bold text-3xl text-center mb-16">
        Top Health AI Studio — Program Snapshot
      </h1>

      <div className="lg:w-4/5 flex flex-wrap justify-center z-20 gap-y-10">
        {statsInView && (
          <>
            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">
                <CountUp start={0} end={12} duration={5} />+
              </div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                Case-based learning modules in development
              </div>
            </div>

            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">
                <CountUp start={0} end={25} duration={5} />+
              </div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                Prototype evaluation scenarios for structured testing
              </div>
            </div>

            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">
                <CountUp start={0} end={6} duration={5} />+
              </div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                Evaluation dimensions (safety, workflow impact, escalation, etc.)
              </div>
            </div>

            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">
                <CountUp start={0} end={10} duration={5} />+
              </div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                Clinical domains represented across course content
              </div>
            </div>

            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">
                <CountUp start={0} end={3} duration={5} />
              </div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                Tracks: Education, Evaluation, and Collaboration
              </div>
            </div>

            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">
                <CountUp start={0} end={0} duration={2} />
              </div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                Required coding to participate in core coursework
              </div>
            </div>

            <div className="w-full pt-10 px-4">
              <p className="text-brown/80 text-sm md:text-base max-w-3xl mx-auto">
                Figures reflect current program development and may evolve as courses expand and research
                collaborations mature. CME accreditation is currently in progress.
              </p>
            </div>
          </>
        )}
      </div>

      <div className="absolute right-0 lg:block hidden triangle-right bottom-0" />
      <div className="absolute bottom-0 left-0 lg:block hidden triangle-left" />
    </div>
  );
};

export default Stats;
