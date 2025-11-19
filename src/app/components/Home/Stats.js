"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={statsRef}
      className="bg-lightBrown w-full items-center relative justify-center flex flex-col text-brown lg:px-0 md:px-6 px-8 
            overflow-hidden text-center relative z-10 md:py-24 py-16"
    >
      <h1 className="text-brown z-10 font-bold text-3xl text-center mb-16">
        Top Health AI by the Numbers
      </h1>

      <div className="lg:w-4/5 flex flex-wrap justify-center z-20 gap-y-10">
        {statsInView && (
          <>
            {/* 1st */}
            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">
                <CountUp start={0} end={30} duration={5} />+
              </div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                AI agents available for testing and review
              </div>
            </div>

            {/* 2nd */}
            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">
                <CountUp start={0} end={12} duration={5} />
              </div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                Specialties represented (oncology, surgery, psychiatry, etc.)
              </div>
            </div>

            {/* 3rd */}
            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">
                <CountUp start={0} end={3} duration={5} />
              </div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                Built-in compliance tiers (HIPAA-safe, audit-logged, encrypted)
              </div>
            </div>

            {/* 4th */}
            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">
                <CountUp start={0} end={95} duration={5} />%
              </div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                Clinician reviewers would recommend to peers
              </div>
            </div>

            {/* 5th */}
            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">
                <CountUp start={0} end={10} duration={5} />+
              </div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                Countries represented in user base
              </div>
            </div>

            {/* 6th */}
            <div className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center">
              <div className="lg:text-3xl text-2xl font-extrabold mb-3">0</div>
              <div className="text-xl tracking-wide leading-[1.4] text-center">
                Coding skills required to get started
              </div>
            </div>
          </>
        )}
      </div>

      {/* Medium */}
      <div className="absolute right-0 lg:block hidden triangle-right bottom-0" />
      <div className="absolute bottom-0 left-0 lg:block hidden triangle-left" />
    </div>
  );
};

export default Stats;
