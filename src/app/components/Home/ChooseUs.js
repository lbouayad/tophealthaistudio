'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Aos from "aos";
import "aos/dist/aos.css";
import { FaUserMd, FaChartBar, FaTools, FaCode, FaLightbulb, FaStar, FaRobot, FaSearch } from "react-icons/fa";
import { LuHandshake } from "react-icons/lu";

const ChooseUs = () => {
    const pillStyle = "absolute flex flex-row top-0 left-0 rounded-full gap-x-4 w-[19.5rem] items-center bg-orange p-4 z-40";
    const pillStyleSmall = "flex flex-row top-0 left-0 rounded-full gap-x-4 w-[19.5rem] items-center bg-orange p-4 z-40 mt-10";

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div id='choose-us' className='w-full items-center justify-center flex flex-col pt-14 lg:pb-52 pb-20 relative overflow-hidden relative z-10'>
            <h1 className='mainHeading text-lightBrown uppercase text-center'>Why Choose Applina</h1>
            <div data-aos="zoom-out" data-aos-duration="1200" data-aos-delay="400"
                className='relative pt-[11.2rem] w-full max-w-[1525px] hidden lg:flex items-center justify-center z-50'>
                <div className='w-56 h-56 rounded-full border-[0.3rem] border-lightBrown flex items-center justify-center'>
                    <Image src={"/WhyChooseUs.png"} width={500} height={500} alt='image' className='h-48 w-auto rounded-full' />
                </div>

                {/* 1st */}
                <div className={`relative -left-[30.6rem] -top-[15.2rem]`}>
                    <div className={`${pillStyle}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <FaStar className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>Made for Health and Wellness</h2>
                    </div>
                    <div className='w-28 border-t-2 border-t-lightBrown absolute rotate-[56deg] top-[6.84rem] left-[15rem] lg:block hidden' />
                </div>

                {/* 2nd */}
                <div className={`relative -left-[2.8rem] -top-[15.2rem]`}>
                    <div className={`${pillStyle}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <FaRobot className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>Build Your Own AI Staff</h2>
                    </div>
                    <div className='w-28 border-t-2 border-t-lightBrown absolute -rotate-[56deg] top-[6.9rem] -left-[2.5rem] lg:block hidden' />
                </div>

                {/* 3rd */}
                <div className={`relative -left-[36.6rem] -top-[3rem]`}>
                    <div className={`${pillStyle}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <FaSearch className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>Built on Real Provider Insight</h2>
                    </div>
                    <div className='w-20 border-t-2 border-t-lightBrown absolute top-[3rem] left-[18.3rem] z-20 lg:block hidden' />
                </div>

                {/* 4th */}
                <div className={`relative left-[3rem] -top-[3rem]`}>
                    <div className={`${pillStyle}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <FaCode className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>No Code Needed</h2>
                    </div>
                    <div className='w-20 border-t-2 border-t-lightBrown absolute top-[3rem] -left-[3.68rem] z-20 lg:block hidden' />
                </div>

                {/* 5th */}
                <div className={`relative -left-[30.7rem] top-[9rem]`}>
                    <div className={`${pillStyle}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <FaLightbulb className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>Smart Search</h2>
                    </div>
                    <div className='w-24 border-t-2 border-t-lightBrown absolute -rotate-[56deg] -top-[0.6rem] left-[17rem] z-20 lg:block hidden' />
                </div>

                {/* 6th */}
                <div className={`relative -left-[3rem] top-[9rem]`}>
                    <div className={`${pillStyle}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <LuHandshake className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>Ideal for Learning and Professional Development</h2>
                    </div>
                    <div className='w-24 border-t-2 border-t-lightBrown absolute rotate-[56deg] -top-[1rem] -left-[2.4rem] z-20 lg:block hidden' />
                </div>
            </div>

            {/* Small Screen */}
            <div className='relative w-full max-w-[1525px] flex flex-col items-center justify-center lg:hidden'>
                {/* 1st */}
                <div className={`relative`}>
                    <div className={`${pillStyleSmall}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <FaStar className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>Made for Health and Wellness</h2>
                    </div>
                </div>

                {/* 2nd */}
                <div className={`relative`}>
                    <div className={`${pillStyleSmall}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <FaRobot className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>Build Your Own AI Staff</h2>
                    </div>
                </div>

                {/* 3rd */}
                <div className={`relative`}>
                    <div className={`${pillStyleSmall}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <FaSearch className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>Built on Real Provider Insight</h2>
                    </div>
                </div>

                <div className='w-56 h-56 rounded-full border-[0.3rem] border-lightBrown flex items-center justify-center mt-10'>
                    <Image src={"/WhyChooseUs.png"} width={500} height={500} alt='image' className='h-48 w-auto rounded-full' />
                </div>

                {/* 4th */}
                <div className={`relative`}>
                    <div className={`${pillStyleSmall}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <FaCode className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>No Code Needed</h2>
                    </div>
                </div>

                {/* 5th */}
                <div className={`relative`}>
                    <div className={`${pillStyleSmall}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <FaLightbulb className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>Smart Search</h2>
                    </div>
                </div>

                {/* 6th */}
                <div className={`relative`}>
                    <div className={`${pillStyleSmall}`}>
                        <div className='bg-lightBrown flex items-center justify-center rounded-full w-16 h-16 border-[0.4rem] border-white'>
                            <LuHandshake className='text-3xl text-brown' />
                        </div>
                        <h2 className='text-white w-2/3 text-lg font-bold'>Ideal for Learning and Professional Development</h2>
                    </div>
                </div>
            </div>

            <div className='animate-pulse lg:block hidden w-[28rem] h-[28rem] self-center top-44 rounded-full absolute border-[1.3rem] border-lightBrown' />
            <div className='animate-pulse sm:block hidden w-[36rem] h-[36rem] lg:-left-96 sm:-left-[26rem] -top-6 rounded-full absolute border border-lightBrown' />
            <div className='animate-pulse sm:block hidden w-[36rem] h-[36rem] lg:-left-96 sm:-left-[26rem] lg:top-20 sm:top-80 rounded-full absolute border border-lightBrown' />
            <div className='animate-pulse sm:block hidden w-48 h-48 -right-28 top-12 rounded-full absolute border border-lightBrown' />
            <div className='animate-pulse sm:block hidden w-28 h-28 -right-20 top-28 rounded-full absolute border border-lightBrown' />
        </div>
    )
}

export default ChooseUs