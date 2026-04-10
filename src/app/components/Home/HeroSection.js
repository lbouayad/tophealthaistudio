"use client";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="w-full items-center justify-center flex relative z-20"
    >
      <div className="w-full">
        <div className="flex flex-col items-center justify-center relative xl:h-[100vh] lg:h-[100vh] min-h-[88vh] pt-40 md:pt-44 lg:pt-48 pb-16">
          <div className="text-center z-20 px-6 sm:px-8 md:px-10 max-w-5xl mx-auto">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-wide mb-4">
              Applied Intelligence for Health and Wellness
            </h1>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-8">
              Applina
            </h2>

            <div className="space-y-5 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-medium">
                The AI research and validation layer for real world healthcare.
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                Researchers, builders, and health organizations can publish
                prototypes, explore realistic scenarios, gather structured
                feedback, and evaluate whether a system is relevant before
                moving toward real world deployment.
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                Through Applina, selected systems are extended into structured
                validation in live clinical workflows, where performance is
                observed across patient, caregiver, and provider interactions.
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed">
                Test workflow fit. Identify failure modes. Refine before
                deployment.
              </p>
            </div>
          </div>

          <div className="z-20 mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center px-6">
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-orange text-white uppercase text-xs sm:text-sm md:text-base font-bold tracking-wide px-8 sm:px-10 md:px-14 py-4 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
            >
              Submit Your AI Tool for Real World Validation
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center border-2 border-orange text-orange bg-white/95 uppercase text-xs sm:text-sm md:text-base font-bold tracking-wide px-8 sm:px-10 md:px-14 py-4 rounded-3xl text-center hover:bg-orange hover:text-white transition duration-300 ease-in-out"
            >
              Join as a Clinical Site
            </Link>
          </div>

          <div className="z-20 mt-5 text-center px-6 max-w-4xl mx-auto space-y-1">
            <p className="text-sm sm:text-base md:text-lg text-white/85">
              For researchers and small businesses preparing for deployment or partnerships
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/85">
              For practices interested in evaluating AI tools in real workflows
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
