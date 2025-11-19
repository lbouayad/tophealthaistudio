"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import BubblesVector from "../Svgs/BubblesVector";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      id="about-us"
      className="w-full items-center justify-center flex md:flex-row flex-col pb-16 pt-20 relative z-10 bg-offWhite"
    >
      <div className="md:w-1/2 w-full xl:pl-32 lg:pl-16 pl-8 xl:pr-20 lg:pr-10 pr-8">
        <h1 className="text-brown text-3xl font-bold md:text-start text-center uppercase">
          About Us
        </h1>
        <p className="text-brown text-base md:text-lg lg:text-lg xl:text-xl  pt-4 text-justify md:px-0 sm:px-14 px-0">
          Top Health AI Studio is the experimentation and evaluation playground
          of Top Health AI. Our mission is to accelerate adoption of clinically
          relevant AI by supporting early testing, alignment, and informed
          decision-making. Whether you&apos;re a physician, educator, student,
          or researcher, we provide a collaborative space to try tools that
          already exist—and contribute to what works.
        </p>
      </div>
      <div className="md:w-1/2 w-full relative flex items-center justify-center gap-x-4 md:pt-0 pt-16">
        <div className="">
          <div
            data-aos="fade-down"
            data-aos-duration="1200"
            className="bg-lightBrown rounded-full overflow-hidden w-28 flex items-center justify-center"
          >
            <Image
              src={"/About1.jpg"}
              width={200}
              height={200}
              alt="image"
              className="h-60 w-auto object-cover object-center"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="bg-lightBrown rounded-full overflow-hidden w-24 h-24 flex items-center justify-center mt-4"
          >
            <Image
              src={"/About2.png"}
              width={200}
              height={200}
              alt="image"
              className="h-24 w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="">
          <div
            data-aos="fade-down"
            data-aos-duration="1200"
            className="bg-blue rounded-full overflow-hidden w-24 h-24 pt-2 flex items-center justify-center"
          >
            <Image
              src={"/About3.png"}
              width={200}
              height={200}
              alt="image"
              className="h-24 w-auto object-cover object-center"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="bg-blue rounded-full overflow-hidden w-28 pt-6 flex items-center justify-center mt-4"
          >
            <Image
              src={"/About4.jpg"}
              width={200}
              height={200}
              alt="image"
              className="h-56 w-auto object-cover object-center"
            />
          </div>
        </div>
        <div className="">
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="bg-lightBrown rounded-full overflow-hidden w-28 flex items-center justify-center"
          >
            <Image
              src={"/About5.jpg"}
              width={200}
              height={200}
              alt="image"
              className="h-56 w-auto object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
