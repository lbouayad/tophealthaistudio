"use client";
import React from "react";
import Link from "next/link";

const SampleUseCase = () => {
  return (
    <section className="w-full bg-offWhite text-brown py-20 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="mainHeading text-brown uppercase text-center">
          Sample Use Case
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-2">
          Ongoing Validation Through CareFlow Shadowing
        </h2>

        <div className="mt-10 space-y-5 text-base md:text-lg xl:text-xl leading-relaxed text-justify">
          <p>
            AI tools for administrative and operational workflows in small
            clinical practices are currently being evaluated across real
            scheduling and intake environments.
          </p>

          <p>
            Through structured observation, systems are assessed as they operate
            in live care settings, capturing workflow friction across patient,
            caregiver, and provider interactions.
          </p>

          <div>
            <p className="font-semibold mb-3">Early observations focus on:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>alignment between available slots and booking logic</li>
              <li>patient readiness and eligibility verification</li>
              <li>edge cases in new versus returning patient classification</li>
            </ul>
          </div>

          <p>
            These insights are continuously synthesized into structured
            validation reports to guide iteration before broader deployment.
          </p>

          <p className="font-semibold">
            This work is ongoing. We are actively expanding participation across
            additional clinical sites and use cases.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Link
            href="#"
            className="inline-flex items-center justify-center bg-orange text-white uppercase text-xs sm:text-sm md:text-base font-bold tracking-wide px-8 sm:px-10 md:px-14 py-4 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
          >
            Submit Your AI Tool for Real World Validation
          </Link>

          <Link
            href="#"
            className="inline-flex items-center justify-center border-2 border-orange text-orange uppercase text-xs sm:text-sm md:text-base font-bold tracking-wide px-8 sm:px-10 md:px-14 py-4 rounded-3xl text-center hover:bg-orange hover:text-white transition duration-300 ease-in-out"
          >
            Join as a Clinical Site
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SampleUseCase;
