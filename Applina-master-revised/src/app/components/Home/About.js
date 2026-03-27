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

        <p className="text-brown text-base md:text-lg lg:text-lg xl:text-xl pt-4 text-justify md:px-0 sm:px-14 px-0">
          <strong>Applina</strong> is the platform for publishing, testing, and validating health and wellness AI prototypes before deployment.
        </p>

        <p className="text-brown text-base md:text-lg lg:text-lg xl:text-xl pt-4 text-justify md:px-0 sm:px-14 px-0">
          It is operated by <strong>Top Health AI Studio, LLC</strong>, which supports the educational and research layer around selected prototypes. Through the Studio, prototypes may be extended into courses, demonstrations, and structured learning experiences delivered through a dedicated learning platform.
        </p>

        <p className="text-brown text-base md:text-lg lg:text-lg xl:text-xl pt-4 text-justify md:px-0 sm:px-14 px-0">
          <strong>Top Health AI Studio, LLC is a separate legal entity from Top Health AI, LLC.</strong> The Studio does not produce, market, or sell healthcare products. Applina exists to help researchers, builders, and organizations evaluate whether a prototype is relevant, usable, and worth advancing in realistic settings.
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
            className="bg-lightBrown rounded-full overflow-hidden w-32 mt-4 flex items-center justify-center"
          >
            <Image
              src={"/About4.jpg"}
              width={200}
              height={200}
              alt="image"
              className="h-72 w-auto object-cover object-center"
            />
          </div>
        </div>

        <div className="">
          <div
            data-aos="fade-down"
            data-aos-duration="1200"
            className="bg-lightBrown rounded-full overflow-hidden w-32 flex items-center justify-center"
          >
            <Image
              src={"/About5.jpg"}
              width={200}
              height={200}
              alt="image"
              className="h-72 w-auto object-cover object-center"
            />
          </div>
        </div>

        <BubblesVector className="absolute bottom-0 right-0 w-40 h-auto opacity-30" />
      </div>
    </div>
  );
};

export default About;
