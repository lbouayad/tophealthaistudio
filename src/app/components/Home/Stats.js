"use client";
import React from "react";

const stats = [
  {
    value: "Real world workflow evaluation",
    label: "Understand how systems perform under live operational conditions and real constraints.",
  },
  {
    value: "Failure mode identification",
    label: "Surface where performance breaks across communication, readiness, and workflow execution.",
  },
  {
    value: "Structured validation insights",
    label: "Generate findings that help teams refine systems before broader deployment.",
  },
  {
    value: "Deployment readiness assessment",
    label: "Evaluate whether a system is usable, relevant, and worth advancing in practice.",
  },
];

const Stats = () => {
  return (
    <div className="bg-lightBrown w-full items-center justify-center flex flex-col text-brown lg:px-0 md:px-6 px-8 overflow-hidden text-center relative z-10 md:py-24 py-16">
      <h1 className="text-brown z-10 font-bold text-3xl text-center mb-6">
        Why Applina Matters
      </h1>
      <p className="max-w-5xl text-lg md:text-xl leading-[1.7] mb-14">
        Health AI does not fail in code. It fails in workflows. Most systems are
        evaluated in controlled environments that do not reflect real clinical
        conditions.
      </p>

      <div className="lg:w-11/12 flex flex-wrap justify-center z-20 gap-y-10">
        {stats.map((item) => (
          <div
            key={item.value}
            className="lg:px-8 md:px-6 sm:px-6 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center"
          >
            <div className="lg:text-2xl text-xl font-extrabold mb-3">{item.value}</div>
            <div className="text-lg tracking-wide leading-[1.5] text-center">{item.label}</div>
          </div>
        ))}
      </div>

      <p className="max-w-4xl text-lg md:text-xl leading-[1.7] mt-14 font-semibold">
        Applina is where healthcare AI gets proven or breaks before it scales.
      </p>
    </div>
  );
};

export default Stats;
