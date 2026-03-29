"use client";
import React from "react";

const Stats = () => {
  return (
    <div className="bg-lightBrown w-full flex flex-col items-center justify-center text-brown px-8 md:py-20 py-14 text-center relative z-10">
      <h1 className="font-bold text-3xl mb-6">
        Where the Studio Fits
      </h1>

      <p className="max-w-5xl text-lg md:text-xl leading-[1.7]">
        Applina is where artifacts are built, published, tested, and evaluated.
        <br /><br />
        Top Health AI Studio is where those artifacts are translated into learning, visibility, and real world understanding.
        <br /><br />
        Together, they help ensure that innovation is not built in isolation, not lost in publication, and not advanced without evaluation.
      </p>
    </div>
  );
};

export default Stats;