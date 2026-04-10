"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const offerings = [
  {
    number: "01",
    title: "Prototype Publishing",
    description:
      "Publish health and wellness AI systems in a structured environment designed for visibility, review, and early relevance testing.",
  },
  {
    number: "02",
    title: "Scenario Based Testing",
    description:
      "Explore how a system behaves in realistic communication and decision environments before real world validation.",
  },
  {
    number: "03",
    title: "Structured Validation",
    description:
      "Evaluate usefulness, context fit, workflow alignment, and practical viability alongside technical performance.",
  },
  {
    number: "04",
    title: "Clinical AI Validation",
    description:
      "Real world evaluation of healthcare AI systems in active care environments. Structured outputs include workflow findings, system limitations, and actionable recommendations.",
  },
];

const Offerings = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full items-center justify-center flex flex-col bg-offWhite text-brown pt-16 pb-20 px-6 lg:px-12">
      <h1 className="mainHeading text-brown uppercase text-center">Offerings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 pt-14 w-full max-w-7xl">
        {offerings.map((item, index) => (
          <div
            key={item.number}
            data-aos="zoom-in"
            data-aos-duration={1000 + index * 100}
            className="bg-lightBrown rounded-[2rem] p-6 shadow-lg min-h-[280px] flex flex-col"
          >
            <div className="w-16 h-16 rounded-full bg-brown text-lightBrown flex items-center justify-center text-2xl font-bold mb-5">
              {item.number}
            </div>
            <h2 className="font-bold text-2xl mb-4">{item.title}</h2>
            <p className="text-base leading-7">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
        <Link
          href="#"
          className="bg-orange text-white uppercase text-xs md:text-sm font-bold tracking-wide px-5 sm:px-8 md:px-12 lg:px-16 py-3 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
        >
          Submit Your AI Tool for Real World Validation
        </Link>

        <Link
          href="#"
          className="border-2 border-orange text-orange uppercase text-xs md:text-sm font-bold tracking-wide px-5 sm:px-8 md:px-12 lg:px-16 py-3 rounded-3xl text-center hover:bg-orange hover:text-white transition duration-300 ease-in-out"
        >
          Join as a Clinical Site
        </Link>
      </div>
    </div>
  );
};

export default Offerings;
