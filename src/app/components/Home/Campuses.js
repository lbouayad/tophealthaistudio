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
            <h1 className='text-brown text-3xl font-bold px-6 text-center py-2 uppercase'>Applina.ai</h1>
            <h1 className='text-brown text-3xl font-bold px-6 text-center'>Supporting Global Health and Wellness</h1>

            <div className='flex md:flex-row flex-col text-white pt-10 relative'>

                <div data-aos="fade-right" data-aos-duration="1200"
                    className='md:w-1/2 w-full md:text-start text-center bg-lightBrown text-brown flex flex-col justify-center md:px-0 sm:px-16 px-0 
                    xl:pl-28 lg:pl-16 md:pl-10 sm:pt-20 sm:pb-20 pt-14 pb-24'>
                    <h2 className='font-bold text-3xl'>A platform built for clinics and wellness centers everywhere</h2>
                    <p className='text-base md:text-lg lg:text-lg xl:text-xl pt-4 md:w-2/3 sm:px-0 px-8 normal-case'>
                        Applina supports multiple languages and international phone numbers.
                        Your AI staff member can speak the language of your patients and answer calls in many countries worldwide.
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1200"
                    className='md:w-1/2 w-full md:text-start text-center bg-brown text-lightBrown flex flex-col justify-center md:px-0 sm:px-16 px-0 
                    lg:pl-28 md:pl-24 lg:pr-0 pr-2 md:pt-20 md:pb-20 pt-24 pb-16'>
                    <h2 className='font-bold text-3xl'>What You Can Build With Applina</h2>
                    <div className="text-base md:text-lg lg:text-lg xl:text-xl pt-4 xl:w-2/3 lg:w-3/4 md:w-[90%] sm:px-0 px-8 normal-case">
                        <p>
                            <strong>A clear path to automation for clinics and wellness practices.</strong>
                        </p>
                        <p className='pt-2'>
                            Applina gives you the power to turn real operational needs into custom AI staff.
                            No engineers needed. No consultants. No waiting.
                        </p>
                        <p className='pt-2'>
                            You can create AI staff who reflect your workflows, your style, and your patient experience.
                            You decide how they work and where they are deployed.
                        </p>
                    </div>
                </div>

                <div className='absolute self-center left-1/2 top-[42%] transform -translate-x-1/2 w-36 h-36 border-[0.3rem] bg-offWhite border-blue 
                    rounded-full flex items-center justify-center'>
                    <Image src={"/Final_Number1.png"} width={200} height={200} alt='logo' className='' />
                </div>
            </div>

            <div className='w-full bg-brown text-lightBrown flex flex-row justify-center py-6 lg:px-16 sm:px-10 px-4 text-center'>
                <p className='text-base md:text-lg lg:text-lg xl:text-xl font-semibold'>
                    <span className='font-extrabold'>Build the Next Breakthrough in AI Powered Care</span> — Your AI Receptionist. Your AI Scheduler. Your AI Intake Assistant. Your AI Scribe. Built today and ready to work immediately.
                </p>
            </div>
        </div>
    )
}

export default Campuses