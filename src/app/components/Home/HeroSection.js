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
              Applied Intelligence for All
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide mb-4 max-w-6xl mx-auto">
              The AI Playground for Health and Wellness Providers
            </h2>
            <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto mb-4">
              What if, instead of searching for the right employee for your clinic, you could build one?
            </p>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Clinics, med spas, therapists, and wellness centers can now create their own AI Receptionist, AI Scheduler, AI Intake Assistant, and AI Scribe. Each AI staff member is built by you and trained instantly on your services, your workflows, your tone, and your patient expectations.
            </p>
          </div>
          <Link
            href="https://calendly.com/d/cq5y-3yd-6gs/join-our-ai-powered-specialist-network"
            target="_blank"
            className="bg-orange text-white uppercase text-sm md:text-md font-bold tracking-wide px-6 sm:px-10 md:px-16 lg:px-20 py-4 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
          >
            Start Building Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
