"use client";
import React from "react";
import Link from "next/link";

const offerings = [
  {
    number: "01",
    title: "Prototype Based Health AI Courses",
    description:
      "Structured learning grounded in evaluated artifacts. Focused on clinical AI, evaluation, and implementation.",
  },
  {
    number: "02",
    title: "Artifact Based Learning and Evaluation",
    description:
      "Direct interaction with evaluated systems to understand behavior, limitations, and real world constraints.",
  },
  {
    number: "03",
    title: "Evaluation Frameworks",
    description:
      "Methods to assess clinical risk, operational impact, and implementation readiness.",
  },
  {
    number: "04",
    title: "Research Translation and Visibility",
    description:
      "Turning research artifacts into usable, decision relevant knowledge.",
  },
];

const Offerings = () => {
  return (
    <div
      id="offerings"
      className="bg-brown w-full flex flex-col items-center justify-center text-white px-8 lg:px-16 xl:px-32 py-16 relative z-20"
    >
      <div className="w-full max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center lg:text-left">
          Offerings
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((item) => (
            <div
              key={item.number}
              className="border border-white/20 rounded-3xl p-6 bg-white/5"
            >
              <div className="text-lightBrown font-bold text-xl mb-3">
                {item.number}
              </div>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                {item.title}
              </h2>
              <p className="text-white/85 text-base md:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center lg:items-start">
          <Link
            href="https://medaistudio.moodlecloud.com/login/index.php"
            target="_blank"
            className="bg-orange text-white uppercase text-sm md:text-md font-bold tracking-wide px-8 md:px-12 py-4 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
          >
            Access Learning Platform
          </Link>

          <p className="mt-4 text-white/80 text-center lg:text-left max-w-3xl">
            CME accreditation is currently in progress. Offerings include CME
            and non CME courses, artifact grounded learning modules, and
            research translation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
