"use client";
import React from "react";

const Stats = () => {
  return (
    <div className="bg-lightBrown w-full flex flex-col items-center justify-center text-brown px-8 md:py-20 py-14 text-center relative z-10">
      <h1 className="font-bold text-3xl mb-6">
        Where the Studio Fits
      </h1>

      <p className="max-w-5xl text-lg md:text-xl leading-[1.7]">
        Applina is where prototypes are built, published, tested, and evaluated in realistic scenarios.
        <br /><br />
        Top Health AI Studio is where those insights are translated into structured education, research, and applied learning.
        <br /><br />
        Together, they bridge the gap between technical innovation and real-world implementation.
      </p>
    </div>
  );
};

export default Stats;
