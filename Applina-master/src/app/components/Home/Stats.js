"use client";
import React from "react";

const stats = [
  { value: "72 hr", label: "Turnaround from intake to specialist consult" },
  { value: "95%", label: "Patient satisfaction rate" },
  { value: "10+", label: "Countries served" },
  { value: "0", label: "Insurance friction" },
];

const Stats = () => {
  return (
    <div className="bg-lightBrown w-full items-center justify-center flex flex-col text-brown lg:px-0 md:px-6 px-8 overflow-hidden text-center relative z-10 md:py-24 py-16">
      <h1 className="text-brown z-10 font-bold text-3xl text-center mb-16">
        Top Health AI by the Numbers
      </h1>

      <div className="lg:w-4/5 flex flex-wrap justify-center z-20 gap-y-10">
        {stats.map((item) => (
          <div key={item.label} className="lg:px-10 md:px-8 sm:px-6 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center">
            <div className="lg:text-3xl text-2xl font-extrabold mb-3">{item.value}</div>
            <div className="text-xl tracking-wide leading-[1.4] text-center">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
