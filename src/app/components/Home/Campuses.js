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
        <div className='w-full flex flex-col items-center justify-center pt-6 relative capitalize z-50 relative bg-offWhite'>
            <h1 className='text-brown text-3xl font-bold px-6 text-center py-2 uppercase'>Top Health AI</h1>
            <h1 className='text-brown text-3xl font-bold px-6 text-center'>Transcends national boundaries</h1>

            <div className='flex md:flex-row flex-col text-white pt-10 relative'>

                <div data-aos="fade-right" data-aos-duration="1200"
                    className='md:w-1/2 w-full md:text-start text-center bg-lightBrown text-brown flex flex-col justify-center md:px-0 sm:px-16 px-0 
                    xl:pl-28 lg:pl-16 md:pl-10 sm:pt-20 sm:pb-20 pt-14 pb-24'>
                    <h2 className='font-bold text-3xl'>Global Innovation Platform</h2>
                    <p className='text-base md:text-lg lg:text-lg xl:text-xl pt-4 md:w-2/3 sm:px-0 px-8 normal-case'>
                        <strong>What will you discover at Top Health AI Studio?</strong>
                        <br />
                        A smarter way to start building.
                        At Top Health AI Studio, we support the earliest stage of health AI innovation: turning frontline insights into strong, buildable ideas. Our global network of clinicians, founders, and design engineers work together to solve high-impact problems—like catching cancer earlier, improving triage systems, or supporting underserved populations.
                        Here, good ideas don&apos;t get lost. They get aligned.

                    </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1200"
                    className='md:w-1/2 w-full md:text-start text-center bg-brown text-lightBrown flex flex-col justify-center md:px-0 sm:px-16 px-0 
                    lg:pl-28 md:pl-24 lg:pr-0 pr-2 md:pt-20 md:pb-20 pt-24 pb-16'>
                    <h2 className='font-bold text-3xl'>From Insight to MVP</h2>
                    <div className="text-base md:text-lg lg:text-lg xl:text-xl pt-4 xl:w-2/3 lg:w-3/4 md:w-[90%] sm:px-0 px-8 normal-case">
                        <p>
                            <strong>We turn early ideas into build-ready plans.</strong>
                        </p>
                        <ul>
                            <li>
                                Got an idea for a health AI tool but unsure what to build—or whether it&apos;s even worth building? That&apos;s where we come in.
                            </li>
                            <li>
                                Through our CoCaaS framework, we help founders and clinicians validate their concept, define the right AI solution, and score it for clinical relevance, feasibility, and traction—all before you write a single line of code.
                            </li>
                            <li>
                                You bring the problem. We help you shape the solution.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='absolute self-center left-1/2 top-[42%] transform -translate-x-1/2 w-36 h-36 border-[0.3rem] bg-offWhite border-blue 
                    rounded-full flex items-center justify-center'>
                    <Image src={"/Final_Number1.png"} width={200} height={200} alt='logo' className='' />
                </div>
            </div>

            <div className='w-full bg-brown text-lightBrown flex flex-row justify-center py-6 lg:px-16 sm:px-10 px-4 text-center'>
                <p className='text-base md:text-lg lg:text-lg xl:text-xl font-semibold'>
                    <span className='font-extrabold'>Join the #1</span> design studio helping health innovators worldwide turn intent into intelligent action—before the first line of code.
                </p>
            </div>
        </div>
    )
}

export default Campuses