"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Offers = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      id="offerings"
      className="w-full items-center justify-center flex flex-col pt-8 pb-24 overflow-hidden relative z-20 bg-offWhite"
    >
      <h1 className="mainHeading text-brown uppercase">Offerings</h1>
      <div className="2xl:w-full max-w-screen-2xl w-[95%] grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 items-start justify-center mt-4">
        {/* Offering 1 */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="w-56 bg-slate-200 text-white text-center mx-auto"
        >
          <div className="circle w-28 h-28 bg-brown rounded-full mx-auto z-20 relative translate-y-[2.2rem] translate-x-5">
            <div
              className="w-full h-full rounded-full flex justify-center items-center text-5xl font-semibold"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(241, 229, 216, 0) 0%, rgba(224, 204, 186, 0.2) 52%, rgba(210, 190, 175, 0.4) 55%, rgba(180, 160, 145, 0.65) 62%, rgba(241, 229, 216, 0) 63%, rgba(241, 229, 216, 0) 100%)",
              }}
            >
              01
            </div>
          </div>
          <div
            className="w-24 h-28 absolute rounded-ss-[2.4rem] translate-x-[3.4rem] -translate-y-[4rem] rotate-[47deg]"
            style={{
              background: "linear-gradient(to bottom, #33333399, transparent)",
            }}
          />
          <div className="w-0 h-52 z-10 mx-auto relative border-l-[15.6rem] border-l-lightBrown border-solid border-t-[0.6rem] border-t-transparent border-b-[0.6rem] border-b-transparent">
            <div className="w-[13.2rem] h-full pt-12 translate-x-[-14.3rem] absolute overflow-hidden bg-lightBrown text-brown">
              <h1 className="font-bold text-lg">AI Agent Explorer</h1>
              <p className="pt-1 text-sm">
                Browse and test AI tools built for frontline healthcare.
              </p>
            </div>
          </div>
          <div className="w-0 h-0 z-0 mx-auto relative border-l-[7.8rem] border-l-brown border-solid border-b-[3.4rem] border-b-transparent translate-x-[4.7rem] translate-y-[-0.6rem]"></div>
          <div
            className="-mt-3 mx-[4.7rem]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(50,50,50,0.7) 0%, rgba(120,120,120,0.5) 35%, rgba(125,125,125,0.2) 50%, rgba(255,255,255,0) 70%, rgba(255,255,255,0) 100%)",
              width: "100px",
              height: "16px",
            }}
          />
        </div>

        {/* Offering 2 */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="w-56 bg-slate-200 text-white text-center mx-auto lg:mt-24 mt-0"
        >
          <div className="circle w-28 h-28 bg-brown rounded-full mx-auto z-20 relative translate-y-[2.2rem] translate-x-5">
            <div
              className="w-full h-full rounded-full flex justify-center items-center text-5xl font-semibold"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(241, 229, 216, 0) 0%, rgba(224, 204, 186, 0.2) 52%, rgba(210, 190, 175, 0.4) 55%, rgba(180, 160, 145, 0.65) 62%, rgba(241, 229, 216, 0) 63%, rgba(241, 229, 216, 0) 100%)",
              }}
            >
              02
            </div>
          </div>
          <div
            className="w-24 h-28 absolute rounded-ss-[2.4rem] translate-x-[3.4rem] -translate-y-[4rem] rotate-[47deg]"
            style={{
              background: "linear-gradient(to bottom, #33333399, transparent)",
            }}
          />
          <div className="w-0 h-52 z-10 mx-auto relative border-l-[15.6rem] border-l-lightBrown border-solid border-t-[0.6rem] border-t-transparent border-b-[0.6rem] border-b-transparent">
            <div className="w-[13.2rem] h-full pt-12 translate-x-[-14.3rem] absolute overflow-hidden bg-lightBrown text-brown">
              <h1 className="font-bold text-lg">Educational Integration</h1>
              <p className="pt-1 text-sm">
                Use agents in classrooms, capstone projects, or research.
              </p>
            </div>
          </div>
          <div className="w-0 h-0 z-0 mx-auto relative border-l-[7.8rem] border-l-brown border-solid border-b-[3.4rem] border-b-transparent translate-x-[4.7rem] translate-y-[-0.6rem]"></div>
          <div
            className="-mt-3 mx-[4.7rem]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(50,50,50,0.7) 0%, rgba(120,120,120,0.5) 35%, rgba(125,125,125,0.2) 50%, rgba(255,255,255,0) 70%, rgba(255,255,255,0) 100%)",
              width: "100px",
              height: "16px",
            }}
          />
        </div>

        {/* Offering 3 */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="w-56 bg-slate-200 text-white text-center mx-auto"
        >
          <div className="circle w-28 h-28 bg-brown rounded-full mx-auto z-20 relative translate-y-[2.2rem] translate-x-5">
            <div
              className="w-full h-full rounded-full flex justify-center items-center text-5xl font-semibold"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(241, 229, 216, 0) 0%, rgba(224, 204, 186, 0.2) 52%, rgba(210, 190, 175, 0.4) 55%, rgba(180, 160, 145, 0.65) 62%, rgba(241, 229, 216, 0) 63%, rgba(241, 229, 216, 0) 100%)",
              }}
            >
              03
            </div>
          </div>
          <div
            className="w-24 h-28 absolute rounded-ss-[2.4rem] translate-x-[3.4rem] -translate-y-[4rem] rotate-[47deg]"
            style={{
              background: "linear-gradient(to bottom, #33333399, transparent)",
            }}
          />
          <div className="w-0 h-52 z-10 mx-auto relative border-l-[15.6rem] border-l-lightBrown border-solid border-t-[0.6rem] border-t-transparent border-b-[0.6rem] border-b-transparent">
            <div className="w-[13.2rem] h-full pt-12 translate-x-[-14.3rem] absolute overflow-hidden bg-lightBrown text-brown">
              <h1 className="font-bold text-lg">Live Agent Reviews</h1>
              <p className="pt-1 text-sm">
                Share structured feedback and earn recognition.
              </p>
            </div>
          </div>
          <div className="w-0 h-0 z-0 mx-auto relative border-l-[7.8rem] border-l-brown border-solid border-b-[3.4rem] border-b-transparent translate-x-[4.7rem] translate-y-[-0.6rem]"></div>
          <div
            className="-mt-3 mx-[4.7rem]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(50,50,50,0.7) 0%, rgba(120,120,120,0.5) 35%, rgba(125,125,125,0.2) 50%, rgba(255,255,255,0) 70%, rgba(255,255,255,0) 100%)",
              width: "100px",
              height: "16px",
            }}
          />
        </div>

        {/* Offering 4 */}
        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="w-56 bg-slate-200 text-white text-center mx-auto lg:mt-24 mt-0"
        >
          <div className="circle w-28 h-28 bg-brown rounded-full mx-auto z-20 relative translate-y-[2.2rem] translate-x-5">
            <div
              className="w-full h-full rounded-full flex justify-center items-center text-5xl font-semibold"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(241, 229, 216, 0) 0%, rgba(224, 204, 186, 0.2) 52%, rgba(210, 190, 175, 0.4) 55%, rgba(180, 160, 145, 0.65) 62%, rgba(241, 229, 216, 0) 63%, rgba(241, 229, 216, 0) 100%)",
              }}
            >
              04
            </div>
          </div>
          <div
            className="w-24 h-28 absolute rounded-ss-[2.4rem] translate-x-[3.4rem] -translate-y-[4rem] rotate-[47deg]"
            style={{
              background: "linear-gradient(to bottom, #33333399, transparent)",
            }}
          />
          <div className="w-0 h-52 z-10 mx-auto relative border-l-[15.6rem] border-l-lightBrown border-solid border-t-[0.6rem] border-t-transparent border-b-[0.6rem] border-b-transparent">
            <div className="w-[13.2rem] h-full pt-12 translate-x-[-14.3rem] absolute overflow-hidden bg-lightBrown text-brown">
              <h1 className="font-bold text-lg">Digital Sandbox Access</h1>
              <p className="pt-1 text-sm">
                Securely explore AI tools aligned to your goals.
              </p>
            </div>
          </div>
          <div className="w-0 h-0 z-0 mx-auto relative border-l-[7.8rem] border-l-brown border-solid border-b-[3.4rem] border-b-transparent translate-x-[4.7rem] translate-y-[-0.6rem]"></div>
          <div
            className="-mt-3 mx-[4.7rem]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(50,50,50,0.7) 0%, rgba(120,120,120,0.5) 35%, rgba(125,125,125,0.2) 50%, rgba(255,255,255,0) 70%, rgba(255,255,255,0) 100%)",
              width: "100px",
              height: "16px",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-16">
        <Link
          href="https://calendly.com/d/cq5y-3yd-6gs/join-our-ai-powered-specialist-network"
          target="_blank"
          className="bg-orange text-white uppercase text-xs md:text-sm font-bold tracking-wide px-5 sm:px-8 md:px-12 lg:px-16 py-3 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
        >
          Exclusive Provider Onboarding <br /> Schedule Now
        </Link>
      </div>
    </div>
  );
};

export default Offers;
