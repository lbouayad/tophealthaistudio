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
        <div className="flex flex-col items-center justify-center gap-10 relative xl:h-[100vh] lg:h-[100vh] h-[80vh]">
          {/* Text Content */}
          <div className="text-center z-20 px-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide mb-2 max-w-6xl mx-auto">
              Responsible AI Education & Research for Healthcare
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide mb-4 max-w-6xl mx-auto">
              Top Health AI Studio
            </h2>

            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-4">
              Advancing clinically defensible AI through structured evaluation, prototype-based testing, and interdisciplinary collaboration.
            </p>

            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              We offer applied courses in health AI, clinical accountability training, and workflow evaluation frameworks designed for real-world care environments. CME accreditation is currently in progress, and courses are available through our learning platform.
            </p>
          </div>

          <Link
            href="https://medaistudio.moodlecloud.com/"
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
