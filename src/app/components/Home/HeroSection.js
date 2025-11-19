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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide mb-4 max-w-6xl mx-auto">
              The AI Playground for Clinicians, Researchers, and Educators
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore, test, and review real-world AI agents built for
              healthcare. This is where innovation meets usability—tools are
              live, searchable, sortable, and rated by peers.
            </p>
          </div>
          <Link
            href="https://calendly.com/d/cq5y-3yd-6gs/join-our-ai-powered-specialist-network"
            target="_blank"
            className="bg-orange text-white uppercase text-sm md:text-md font-bold tracking-wide px-6 sm:px-10 md:px-16 lg:px-20 py-4 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
          >
            Shape the Next Breakthrough in Healthcare AI <br /> Schedule Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
