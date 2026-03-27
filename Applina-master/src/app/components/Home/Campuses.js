'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Aos from "aos";
import "aos/dist/aos.css";

const Campuses = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='w-full flex flex-col items-center justify-center pt-6 relative z-50 bg-offWhite'>
      <h1 className='text-brown text-3xl font-bold px-6 text-center py-2 uppercase'>Applina.ai</h1>
      <h1 className='text-brown text-3xl font-bold px-6 text-center'>From isolated artifact to real-world relevance</h1>

      <div className='flex md:flex-row flex-col text-white pt-10 relative'>
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          className='md:w-1/2 w-full md:text-start text-center bg-lightBrown text-brown flex flex-col justify-center md:px-0 sm:px-16 px-0 xl:pl-28 lg:pl-16 md:pl-10 sm:pt-20 sm:pb-20 pt-14 pb-24'
        >
          <h2 className='font-bold text-3xl'>Why most health AI prototypes never get used</h2>
          <div className='text-base md:text-lg lg:text-lg xl:text-xl pt-4 md:w-2/3 sm:px-0 px-8 normal-case'>
            <p>
              Many health tech artifacts are built in isolation. They may contribute to the literature or show promising technical performance, but rarely fit real settings well enough to be adopted.
            </p>
            <p className='pt-2'>
              Common gaps include limited context, weak workflow relevance, unrealistic testing conditions, and no early check on whether the idea makes practical or business sense.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className='md:w-1/2 w-full md:text-start text-center bg-brown text-lightBrown flex flex-col justify-center md:px-0 sm:px-16 px-0 lg:pl-28 md:pl-24 lg:pr-0 pr-2 md:pt-20 md:pb-20 pt-24 pb-16'
        >
          <h2 className='font-bold text-3xl'>What Applina adds beyond code repositories</h2>
          <div className="text-base md:text-lg lg:text-lg xl:text-xl pt-4 xl:w-2/3 lg:w-3/4 md:w-[90%] sm:px-0 px-8 normal-case">
            <p>
              <strong>GitHub stores code. Applina tests relevance.</strong>
            </p>
            <p className='pt-2'>
              Applina helps you publish prototypes, explore realistic scenarios, and gather structured feedback on whether an artifact is usable, understandable, and worth advancing.
            </p>
            <p className='pt-2'>
              It is built for both technical and non-technical users who want to shape stronger prototypes before deployment, collaboration, or publication.
            </p>
          </div>
        </div>

        <div className='absolute self-center left-1/2 top-[42%] transform -translate-x-1/2 w-36 h-36 border-[0.3rem] bg-offWhite border-blue rounded-full flex items-center justify-center'>
          <Image src={"/Final_Number1.png"} width={200} height={200} alt='Applina mark' className='' />
        </div>
      </div>

      <div className='w-full bg-brown text-lightBrown flex flex-row justify-center py-6 lg:px-16 sm:px-10 px-4 text-center'>
        <p className='text-base md:text-lg lg:text-lg xl:text-xl font-semibold normal-case'>
          <span className='font-extrabold'>Build what actually matters</span> — publish prototypes, test them in realistic environments, validate relevance early, and reduce the risk of building something that never fits real-world use.
        </p>
      </div>
    </div>
  )
}

export default Campuses
