"use client";
import React from "react";

const stats = [
  { value: "Research-first", label: "Designed to help teams assess relevance before investing in data collection or partner outreach" },
  { value: "Scenario-based", label: "Built for realistic exploration, structured feedback, and early workflow sense-checking" },
  { value: "Multi-stakeholder", label: "Useful for researchers, builders, and health organizations evaluating whether an artifact is worth advancing" },
  { value: "Pre-commitment", label: "A place to test assumptions before expensive validation, business development, or implementation efforts begin" },
];

const Stats = () => {
  return (
    <div className="bg-lightBrown w-full items-center justify-center flex flex-col text-brown lg:px-0 md:px-6 px-8 overflow-hidden text-center relative z-10 md:py-24 py-16">
      <h1 className="text-brown z-10 font-bold text-3xl text-center mb-6">
        Why Applina Matters
      </h1>
      <p className="max-w-5xl text-lg md:text-xl leading-[1.7] mb-14">
        Health AI needs a more realistic starting point than vanity metrics or isolated demos. Applina helps teams pressure-test whether an idea is relevant, usable, and worth pursuing before larger research or business commitments are made.
      </p>

      <div className="lg:w-11/12 flex flex-wrap justify-center z-20 gap-y-10">
        {stats.map((item) => (
          <div key={item.label} className="lg:px-8 md:px-6 sm:px-6 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center">
            <div className="lg:text-2xl text-xl font-extrabold mb-3">{item.value}</div>
            <div className="text-lg tracking-wide leading-[1.5] text-center">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
