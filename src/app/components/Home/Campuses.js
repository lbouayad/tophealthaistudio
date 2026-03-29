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

                <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    className='md:w-1/2 w-full bg-lightBrown text-brown flex flex-col justify-center xl:pl-28 lg:pl-16 md:pl-10 sm:px-16 px-8 sm:pt-20 sm:pb-20 pt-14 pb-24'
                >
                    <h2 className='font-bold text-3xl'>
                        Prototype Based Evaluation (via Applina)
                    </h2>

                    <p className='text-base md:text-lg lg:text-lg xl:text-xl pt-4 md:w-2/3 normal-case'>
                        We use Applina to evaluate AI artifacts in realistic scenarios, including edge cases, escalation boundaries, communication patterns, and workflow fit.
                    </p>

                    <p className='pt-4 text-base md:text-lg lg:text-lg xl:text-xl md:w-2/3 normal-case'>
                        The Studio translates these evaluated artifacts into structured learning. Prototypes are used to teach concepts, design decisions, limitations, and implementation considerations.
                    </p>

                    <p className='pt-4 text-base md:text-lg lg:text-lg xl:text-xl md:w-2/3 normal-case'>
                        This is not case based education. It is prototype based learning grounded in how systems actually behave.
                    </p>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className='md:w-1/2 w-full bg-brown text-lightBrown flex flex-col justify-center lg:pl-28 md:pl-24 sm:px-16 px-8 md:pt-20 md:pb-20 pt-24 pb-16'
                >
                    <h2 className='font-bold text-3xl'>
                        Interdisciplinary Research Collaboration
                    </h2>

                    <div className="text-base md:text-lg lg:text-lg xl:text-xl pt-4 xl:w-2/3 lg:w-3/4 md:w-[90%] normal-case">

                        <p>
                            We collaborate across medicine, engineering, design science, and health policy to examine how AI artifacts perform in complex environments.
                        </p>

                        <p className='pt-4'>
                            Our work supports publication quality analysis, artifact visibility, and structured learning derived directly from research contributions.
                        </p>

                        <p className='pt-4'>
                            We focus on making high value artifacts visible and usable beyond publication, so they can be evaluated, understood, and considered for real world use.
                        </p>

                    </div>
                </div>

                <div className='absolute self-center left-1/2 top-[42%] transform -translate-x-1/2 md:block hidden'>
                    <Image src={'/Final_Number1.png'} width={500} height={500} alt='image' className='w-48 h-48' />
                </div>
            </div>
        </div>
    )
}

export default Campuses