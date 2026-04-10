"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    number: "01",
    title: "Explore Prototypes",
    description:
      "Review healthcare systems and validation opportunities aligned to real care workflows and implementation questions.",
  },
  {
    number: "02",
    title: "Request Access",
    description:
      "Create your account and confirm whether you are submitting an AI tool or joining as a clinical site.",
  },
  {
    number: "03",
    title: "Evaluate and Refine",
    description:
      "Test your system in structured scenarios and identify workflow gaps, communication issues, and decision boundaries.",
  },
  {
    number: "04",
    title: "Extend to Real World Validation",
    description:
      "Selected systems are observed in active care workflows to generate structured validation insights before broader deployment.",
  },
];

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
        Structured Validation Through Review, Testing, and Real World Observation
      </h1>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 items-stretch justify-center pt-16 max-w-7xl w-full">
        {steps.map((step, index) => (
          <div
            key={step.number}
            data-aos="zoom-in"
            data-aos-duration={1000 + index * 100}
            className="bg-brown text-lightBrown rounded-[2rem] px-6 py-8 shadow-lg flex flex-col items-center text-center min-h-[260px]"
          >
            <div className="w-20 h-20 rounded-full bg-lightBrown text-brown flex items-center justify-center text-3xl font-bold mb-6">
              {step.number}
            </div>
            <h2 className="font-bold text-xl mb-3">{step.title}</h2>
            <p className="text-sm leading-6">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrollmentSteps;
