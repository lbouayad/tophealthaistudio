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
        <div className="flex flex-col items-center justify-center gap-10 relative xl:h-[100vh] lg:h-[100vh] h-[84vh]">
          <div className="text-center z-20 px-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide mb-2 max-w-6xl mx-auto">
              Applied Intelligence for Health and Wellness
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide mb-4 max-w-6xl mx-auto">
              Top Health AI Studio
            </h2>

            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-4">
              Advancing clinically defensible AI through evaluation and prototype based education.
            </p>

            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-4">
              Artifacts from research and applied design are evaluated on Applina in realistic scenarios, then translated into structured learning.
            </p>

            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-4">
              Not vendor training.
            </p>

            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-4">
              Courses are developed by researchers and domain experts using real artifacts to teach concepts, frameworks, and real world decision making.
            </p>

            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto">
              Making innovation visible and usable before research, partnerships, or deployment.
            </p>
          </div>

          <Link
            href="https://medaistudio.moodlecloud.com/login/index.php"
            target="_blank"
            className="bg-orange text-white uppercase text-sm md:text-md font-bold tracking-wide px-6 sm:px-10 md:px-16 lg:px-20 py-4 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
          >
            Access Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;