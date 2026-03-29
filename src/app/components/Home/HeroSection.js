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
              Top Health AI Studio
            </h2>

            <div className="space-y-5 max-w-4xl mx-auto">
              {/* 🔥 Slightly larger primary line */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed font-medium">
                Advancing clinically defensible AI through evaluation and
                prototype based education.
              </p>

              {/* 🔥 Increased secondary text size */}
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                Artifacts from research and applied design are evaluated on
                Applina in realistic scenarios, then translated into structured
                learning.
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-semibold leading-relaxed">
                Not vendor training.
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                Courses are developed by researchers and domain experts using
                real artifacts to teach concepts, frameworks, and real world
                decision making.
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                Making innovation visible and usable before research,
                partnerships, or deployment.
              </p>
            </div>
          </div>

          <div className="z-20 mt-10 md:mt-12">
            <Link
              href="https://medaistudio.moodlecloud.com/login/index.php"
              target="_blank"
              className="inline-flex items-center justify-center bg-orange text-white uppercase text-xs sm:text-sm md:text-base font-bold tracking-wide px-8 sm:px-10 md:px-14 py-4 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
            >
              Access Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;