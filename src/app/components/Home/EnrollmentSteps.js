"use client";
import React, { useEffect } from "react";
import UpperCurve from "../Svgs/UpperCurve";
import BottomCurve from "../Svgs/BottomCurve";
import Aos from "aos";
import "aos/dist/aos.css";

const EnrollmentSteps = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    Aos.init({ once: true, disableMutationObserver: true });
  }, []);

  return (
    <div
      id="enrollment"
      className="w-full items-center justify-center flex flex-col text-center pt-16 pb-28 relative xl:px-0 lg:px-16 sm:px-8 px-4 z-20 bg-lightBrown"
    >
      <h1 className="mainHeading text-brown uppercase">How It Works</h1>
      <h1 className="mainHeading text-brown">
        Structured Validation Through Training, Observation, and Iteration
      </h1>

      <h1 className="mainHeading text-brown uppercase">Enrollment</h1>
      <h1 className="mainHeading text-brown">
        Steps Guided by Purpose, Rigor, and Clinical Responsibility
      </h1>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-20 lg:gap-y-0 gap-y-20 items-center justify-center pt-24 relative">
        <div className="relative group">
          <UpperCurve className={"absolute sm:-top-6 sm:-left-6 left-14 top-14 sm:rotate-0 rotate-90"} />
          <div data-aos="zoom-in" data-aos-duration="1000"
            className="bg-brown text-lightBrown border-[0.6rem] h-48 w-48 flex flex-col items-center justify-center border-white font-bold rounded-full"
          >
            <h2 className="text-3xl">01</h2>
            <h2 className="text-xl pt-2">
              Explore
              <br />
              Prototypes
            </h2>
              
          </div>
          <div className="absolute z-10 bottom-full !-bottom-[4.6rem] left-1/2 transform -translate-x-1/2 mb-2 w-56 p-2 text-sm text-white bg-brown rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
             Review healthcare prototypes and validation opportunities aligned to real care workflows and implementation questionsstions
          </div>
        </div>

        <div className="relative group">
          <BottomCurve className={"absolute sm:-bottom-6 sm:-left-6 -left-28 bottom-12 sm:rotate-0 rotate-90"} />
          <div data-aos="zoom-in" data-aos-duration="1000"
            className="bg-orange text-lightBrown border-[0.6rem] h-48 w-48 flex flex-col items-center justify-center border-white font-bold rounded-full"
          >
            <h2 className="text-3xl">02</h2>
            <h2 className="text-xl pt-2">
              Join the
              <br />
              Program
            </h2>
              
          </div>
          <div className="absolute z-10 sm:bottom-full -bottom-[4.6rem] left-1/2 transform -translate-x-1/2 mb-2 w-56 p-2 text-sm text-white bg-orange rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Indicate whether you are joining as a CareFlow Shadower, provider partner, or startup seeking structured validationspecific artifact
          </div>
        </div>

        <div className="relative group">
          <UpperCurve className={"absolute sm:-top-6 sm:-left-6 left-14 top-14 sm:rotate-0 rotate-90"} />
          <div data-aos="zoom-in" data-aos-duration="1000"
            className="bg-brown text-lightBrown border-[0.6rem] h-48 w-48 flex flex-col items-center justify-center border-white font-bold rounded-full"
          >
            <h2 className="text-3xl">03</h2>
            <h2 className="text-xl pt-2">Complete<br />Training</h2>
          </div>
          <div className="absolute z-10 bottom-full !-bottom-[4.6rem] left-1/2 transform -translate-x-1/2 mb-2 w-56 p-2 text-sm text-white bg-brown rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Students complete pre-shadowing training to learn workflow observation, prototype context, and structured evaluation methods
          </div>
        </div>

        <div className="relative group">
          <BottomCurve className={"absolute sm:-bottom-6 sm:-left-6 -left-28 bottom-12 sm:rotate-0 rotate-90"} />
          <div data-aos="zoom-in" data-aos-duration="1000"
            className="bg-orange text-lightBrown border-[0.6rem] h-48 w-48 flex flex-col items-center justify-center border-white font-bold rounded-full"
          >
            <h2 className="text-3xl">04</h2>
            <h2 className="text-xl pt-2">
              Apply
              <br />
              and Evaluate
            </h2>
          </div>
          <div className="absolute z-10 sm:bottom-full -bottom-[4.6rem] left-1/2 transform -translate-x-1/2 mb-2 w-56 p-2 text-sm text-white bg-orange rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Use evaluated prototypes and structured learning to understand what is worth advancing before data collection, partnerships, or deployment
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-24">
        <a
          href="https://medaistudio.moodlecloud.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange text-white uppercase text-sm md:text-md font-bold tracking-wide px-6 sm:px-10 md:px-16 lg:px-20 py-4 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
        >
          Access Learning Platform
        </a>

        <p className="text-brown/80 text-sm md:text-base mt-4 max-w-2xl text-center px-6">
          CME accreditation is currently in progress. Course access and participation are available through our learning platform alongside non CME offerings and artifact grounded learning modules.
        </p>
      </div>
    </div>
  );
};

export default EnrollmentSteps;
