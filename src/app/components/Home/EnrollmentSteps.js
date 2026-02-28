"use client";
import React, { useEffect } from "react";
import UpperCurve from "../Svgs/UpperCurve";
import BottomCurve from "../Svgs/BottomCurve";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const EnrollmentSteps = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      id="enrollment"
      className="w-full items-center justify-center flex flex-col text-center pt-16 pb-28 relative xl:px-0 lg:px-16 sm:px-8 px-4 z-20 bg-lightBrown"
    >
      <h1 className="mainHeading text-brown uppercase">Enrollment</h1>
      <h1 className="mainHeading text-brown">
        Steps Guided by Purpose, Rigor, and Clinical Responsibility
      </h1>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-20 lg:gap-y-0 gap-y-20 items-center justify-center pt-24 relative">
        {/* 01 */}
        <div className="relative group">
          <UpperCurve
            className={
              "absolute sm:-top-6 sm:-left-6 left-14 top-14 sm:rotate-0 rotate-90"
            }
          />
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="bg-brown text-lightBrown border-[0.6rem] h-48 w-48 flex flex-col items-center justify-center border-white font-bold rounded-full"
          >
            <h2 className="text-3xl">01</h2>
            <h2 className="text-xl pt-2">
              Explore
              <br />
              Programs
            </h2>
          </div>

          {/* Tooltip */}
          <div className="absolute z-10 bottom-full !-bottom-[4.6rem] left-1/2 transform -translate-x-1/2 mb-2 w-60 p-2 text-sm text-white bg-brown rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Review courses and evaluation frameworks aligned to real clinical workflows.
          </div>
        </div>

        {/* 02 */}
        <div className="relative group">
          <BottomCurve
            className={
              "absolute sm:-bottom-6 sm:-left-6 -left-28 bottom-12 sm:rotate-0 rotate-90"
            }
          />
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="bg-orange text-lightBrown border-[0.6rem] h-48 w-48 flex flex-col items-center justify-center border-white font-bold rounded-full"
          >
            <h2 className="text-3xl">02</h2>
            <h2 className="text-xl pt-2">
              Request
              <br />
              Enrollment
            </h2>
          </div>

          {/* Tooltip */}
          <div className="absolute z-10 sm:bottom-full -bottom-[4.6rem] left-1/2 transform -translate-x-1/2 mb-2 w-60 p-2 text-sm text-white bg-orange rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Submit your program interest and indicate your educational or research goals.
          </div>
        </div>

        {/* 03 */}
        <div className="relative group">
          <UpperCurve
            className={
              "absolute sm:-top-6 sm:-left-6 left-14 top-14 sm:rotate-0 rotate-90"
            }
          />
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="bg-brown text-lightBrown border-[0.6rem] h-48 w-48 flex flex-col items-center justify-center border-white font-bold rounded-full"
          >
            <h2 className="text-3xl">03</h2>
            <h2 className="text-xl pt-2">Orientation</h2>
          </div>

          {/* Tooltip */}
          <div className="absolute z-10 bottom-full !-bottom-[4.6rem] left-1/2 transform -translate-x-1/2 mb-2 w-60 p-2 text-sm text-white bg-brown rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Learn expectations, evaluation methods, and clinical accountability boundaries.
          </div>
        </div>

        {/* 04 */}
        <div className="relative group">
          <BottomCurve
            className={
              "absolute sm:-bottom-6 sm:-left-6 -left-28 bottom-12 sm:rotate-0 rotate-90"
            }
          />
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="bg-orange text-lightBrown border-[0.6rem] h-48 w-48 flex flex-col items-center justify-center border-white font-bold rounded-full"
          >
            <h2 className="text-3xl">04</h2>
            <h2 className="text-xl pt-2">
              Apply
              <br />
              and Evaluate
            </h2>
          </div>

          {/* Tooltip */}
          <div className="absolute z-10 sm:bottom-full -bottom-[4.6rem] left-1/2 transform -translate-x-1/2 mb-2 w-64 p-2 text-sm text-white bg-orange rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Use prototypes and structured testing to assess workflow impact and readiness for practice.
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-24">
        <Link
          href="https://medaistudio.moodlecloud.com/"
          target="_blank"
          className="bg-orange text-white uppercase text-sm md:text-md font-bold tracking-wide px-6 sm:px-10 md:px-16 lg:px-20 py-4 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
        >
          Access Courses <br /> (CME Accreditation in Progress)
        </Link>

        <p className="text-brown text-sm md:text-base mt-4 max-w-2xl">
          Continuing medical education (CME) accreditation is currently in progress. Course access and participation are available through our learning platform.
        </p>
      </div>
    </div>
  );
};

export default EnrollmentSteps;
