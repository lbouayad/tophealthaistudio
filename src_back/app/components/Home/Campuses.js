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

            <h1 className='text-brown text-3xl font-bold px-6 text-center py-2 uppercase'>
                Clinical AI Evaluation Frameworks
            </h1>

            <h1 className='text-brown text-2xl font-semibold px-6 text-center'>
                Advancing Responsible Implementation in Healthcare
            </h1>

            <div className='flex md:flex-row flex-col pt-10 relative'>

                {/* LEFT PANEL */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    className='md:w-1/2 w-full bg-lightBrown text-brown flex flex-col justify-center 
                    xl:pl-28 lg:pl-16 md:pl-10 sm:px-16 px-8 sm:pt-20 sm:pb-20 pt-14 pb-24'
                >
                    <h2 className='font-bold text-3xl'>
                        Structured Prototype Testing
                    </h2>

                    <p className='text-base md:text-lg lg:text-lg xl:text-xl pt-4 md:w-2/3 normal-case'>
                        We design applied evaluation environments that simulate real clinical workflows.
                        AI tools are assessed for safety, interpretability, workflow disruption,
                        escalation pathways, and accountability boundaries.
                    </p>

                    <p className='pt-4 text-base md:text-lg lg:text-lg xl:text-xl md:w-2/3 normal-case'>
                        Our methodology emphasizes structured scenario testing,
                        edge-case identification, and documentation integrity
                        before implementation in live care environments.
                    </p>
                </div>

                {/* RIGHT PANEL */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className='md:w-1/2 w-full bg-brown text-lightBrown flex flex-col justify-center 
                    lg:pl-28 md:pl-24 sm:px-16 px-8 md:pt-20 md:pb-20 pt-24 pb-16'
                >
                    <h2 className='font-bold text-3xl'>
                        Interdisciplinary Research Collaboration
                    </h2>

                    <div className="text-base md:text-lg lg:text-lg xl:text-xl pt-4 xl:w-2/3 lg:w-3/4 md:w-[90%] normal-case">

                        <p>
                            We collaborate across medicine, engineering, operations research,
                            and health policy to examine how AI systems perform in complex care environments.
                        </p>

                        <p className='pt-4'>
                            Our work supports publication-quality analysis, institutional partnerships,
                            and CME-informed educational programming grounded in clinical accountability.
                        </p>

                        <p className='pt-4'>
                            The Studio operates independently from commercial AI vendors,
                            maintaining a research-first and education-centered mission.
                        </p>

                    </div>
                </div>

                {/* Center Visual Element */}
                <div className='absolute self-center left-1/2 top-[42%] transform -translate-x-1/2 w-36 h-36 border-[0.3rem] bg-offWhite border-blue 
                    rounded-full flex items-center justify-center'>
                    <Image
                        src={"/Final_Number1.png"}
                        width={200}
                        height={200}
                        alt='Top Health AI Studio Emblem'
                    />
                </div>
            </div>

            {/* Bottom Banner */}
            <div className='w-full bg-brown text-lightBrown flex flex-row justify-center py-6 lg:px-16 sm:px-10 px-4 text-center'>
                <p className='text-base md:text-lg lg:text-lg xl:text-xl font-semibold'>
                    <span className='font-extrabold'>
                        Responsible AI Requires Structured Evaluation.
                    </span>
                    {" "}Innovation must be clinically defensible, operationally sound, and ethically deployed.
                </p>
            </div>

        </div>
    )
}

export default Campuses
