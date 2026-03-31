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
        <div className="flex flex-col items-center justify-center gap-8 relative xl:h-[100vh] lg:h-[100vh] h-[84vh]">
          
          <div className="text-center z-20 px-6 md:px-10 max-w-5xl">
            
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
              Applied Intelligence for Health and Wellness
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Top Health AI Studio
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3">
              Advancing clinically defensible AI through evaluation and prototype based education.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3">
              Artifacts from research and applied design are evaluated based on real world use, then translated into structured learning.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-3">
              Not vendor training. Designed for those responsible for care decisions.
            </p>

            <p className="text-base sm:text-lg md:text-xl text-white/80">
              Built for providers, caregivers, and researchers. Informed by real patient experience.
            </p>

          </div>

          <Link
            href="https://medaistudio.moodlecloud.com/"
            target="_blank"
            className="bg-orange text-white uppercase text-sm md:text-md font-bold px-8 md:px-12 py-4 rounded-3xl text-center shadow-lg hover:scale-105 transition"
          >
            Access Courses
          </Link>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
