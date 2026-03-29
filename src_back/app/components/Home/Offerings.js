"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Offers = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    Aos.init({ once: true, disableMutationObserver: true });
  }, []);

  return (
    <div
      id="offerings"
      className="w-full items-center justify-center flex flex-col pt-8 pb-24 overflow-hidden relative z-20 bg-offWhite"
    >
      <h1 className="mainHeading text-brown uppercase">Offerings</h1>

      <div className="2xl:w-full max-w-screen-2xl w-[95%] grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 items-start justify-center mt-4">
        {/* Offering 1 */}
        <div data-aos="zoom-in" data-aos-duration="1200" className="w-56 bg-slate-200 text-white text-center mx-auto">
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
            style={{ background: "linear-gradient(to bottom, #33333399, transparent)" }}
          />

          <div className="w-0 h-52 z-10 mx-auto relative border-l-[15.6rem] border-l-lightBrown border-solid border-t-[0.6rem] border-t-transparent border-b-[0.6rem] border-b-transparent">
            <div className="w-[13.2rem] h-full pt-12 translate-x-[-14.3rem] absolute overflow-hidden bg-lightBrown text-brown">
              <h2 className="font-bold text-lg">Applied Health AI Courses</h2>
              <p className="pt-1 text-sm">
                Structured learning in clinical AI, workflow evaluation, and implementation rigor.
                CME accreditation is currently in progress.
              </p>
            </div>
          </div>

          <div className="w-0 h-0 z-0 mx-auto relative border-l-[7.8rem] border-l-brown border-solid border-b-[3.4rem] border-b-transparent translate-x-[4.7rem] translate-y-[-0.6rem]" />
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
        <div data-aos="zoom-in" data-aos-duration="1200" className="w-56 bg-slate-200 text-white text-center mx-auto lg:mt-24 mt-0">
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
            style={{ background: "linear-gradient(to bottom, #33333399, transparent)" }}
          />

          <div className="w-0 h-52 z-10 mx-auto relative border-l-[15.6rem] border-l-lightBrown border-solid border-t-[0.6rem] border-t-transparent border-b-[0.6rem] border-b-transparent">
            <div className="w-[13.2rem] h-full pt-12 translate-x-[-14.3rem] absolute overflow-hidden bg-lightBrown text-brown">
              <h2 className="font-bold text-lg">Prototype-Based Testing</h2>
              <p className="pt-1 text-sm">
                Guided evaluation of AI behavior in simulated workflows—edge cases, escalation boundaries,
                and documentation reliability.
              </p>
            </div>
          </div>

          <div className="w-0 h-0 z-0 mx-auto relative border-l-[7.8rem] border-l-brown border-solid border-b-[3.4rem] border-b-transparent translate-x-[4.7rem] translate-y-[-0.6rem]" />
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
        <div data-aos="zoom-in" data-aos-duration="1200" className="w-56 bg-slate-200 text-white text-center mx-auto">
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
            style={{ background: "linear-gradient(to bottom, #33333399, transparent)" }}
          />

          <div className="w-0 h-52 z-10 mx-auto relative border-l-[15.6rem] border-l-lightBrown border-solid border-t-[0.6rem] border-t-transparent border-b-[0.6rem] border-b-transparent">
            <div className="w-[13.2rem] h-full pt-12 translate-x-[-14.3rem] absolute overflow-hidden bg-lightBrown text-brown">
              <h2 className="font-bold text-lg">Workflow Evaluation Frameworks</h2>
              <p className="pt-1 text-sm">
                Methods to assess clinical risk, operational impact, and implementation readiness across care environments.
              </p>
            </div>
          </div>

          <div className="w-0 h-0 z-0 mx-auto relative border-l-[7.8rem] border-l-brown border-solid border-b-[3.4rem] border-b-transparent translate-x-[4.7rem] translate-y-[-0.6rem]" />
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
        <div data-aos="zoom-in" data-aos-duration="1200" className="w-56 bg-slate-200 text-white text-center mx-auto lg:mt-24 mt-0">
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
            style={{ background: "linear-gradient(to bottom, #33333399, transparent)" }}
          />

          <div className="w-0 h-52 z-10 mx-auto relative border-l-[15.6rem] border-l-lightBrown border-solid border-t-[0.6rem] border-t-transparent border-b-[0.6rem] border-b-transparent">
            <div className="w-[13.2rem] h-full pt-12 translate-x-[-14.3rem] absolute overflow-hidden bg-lightBrown text-brown">
              <h2 className="font-bold text-lg">Research Collaboration</h2>
              <p className="pt-1 text-sm">
                Partnership pathways for academic teams and institutions to study responsible clinical AI implementation and evaluation.
              </p>
            </div>
          </div>

          <div className="w-0 h-0 z-0 mx-auto relative border-l-[7.8rem] border-l-brown border-solid border-b-[3.4rem] border-b-transparent translate-x-[4.7rem] translate-y-[-0.6rem]" />
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
        <a
          href="https://medaistudio.moodlecloud.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange text-white uppercase text-xs md:text-sm font-bold tracking-wide px-5 sm:px-8 md:px-12 lg:px-16 py-3 rounded-3xl text-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
        >
          Access Learning Platform <br /> (CME Accreditation in Progress)
        </a>

        <p className="text-brown text-sm md:text-base mt-4 max-w-2xl text-center px-6">
          Courses are available through our learning platform. Continuing medical education (CME)
          accreditation is currently in progress.
        </p>
      </div>
    </div>
  );
};

export default Offers;
