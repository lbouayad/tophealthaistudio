'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosMail } from "react-icons/io";
import { FaFileAlt, FaGlobe, FaLinkedin } from 'react-icons/fa'
import { MdPrivacyTip } from "react-icons/md";
import { FaLocationDot, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";

const data = [
    { icon: <FaSquareFacebook className='text-2xl text-brown' />, path: "http://facebook.com/tophealthai" },
    { icon: <FaLinkedin className='text-2xl text-brown' />, path: "http://linkedin.com/company/tophealthai" },
    { icon: <FaSquareInstagram className='text-2xl text-brown' />, path: "http://instagram.com/tophealthai" },
]

const Footer = () => {

    return (
        <div className='bg-offWhite w-full flex flex-col items-center justify-center text-brown md:pt-16 pt-6 pb-6 relative z-20'>
            <ToastContainer />
            <div className='xl:px-24 lg:px-8 px-10 flex lg:flex-row flex-col w-full'>

                <div className='w-full flex md:flex-row flex-col lg:pl-0 md:pl-10'>
                    <div className='lg:w-3/5 md:w-1/2 flex flex-col items-start'>
                        <ul className="text-sm font-medium space-y-1">
                            <h2 className='font-bold text-2xl'>Download App</h2>
                            <div className="">
                                <Image src={"/google-icon-andriod.svg"} width={200} height={200} alt='image' className='h-20 w-auto object-cover object-center' />
                            </div>
                        </ul>
                    </div>

                    <div className="lg:w-2/5 md:w-1/2 mt-12 lg:mt-0 md:mt-6 xl:pl-10 pl-0">
                        <ul className="text-base md:text-lg font-medium space-y-1">
                            <h2 className='font-bold text-2xl'>Contact</h2>
                            <li className='flex items-center gap-x-2 lg:pt-8 pt-4'>
                                <Link className='hover:underline inline-flex items-center gap-x-1' href={"mailto:"}>
                                    <IoIosMail className='text-2xl' /> Top Health AI
                                </Link>
                            </li>
                            <li className='flex items-center gap-x-2 pt-2'>
                                <Link className='hover:underline inline-flex items-center gap-x-1' target='_blank' href={"https://www.tophealth.ai"}>
                                    <FaGlobe className='text-xl' />
                                    www.tophealth.ai
                                </Link>
                            </li>
                            <li>
                                <div className='flex items-center gap-x-2 pt-2'>
                                    {data.map((item, index) => {
                                        return (
                                            <Link key={index} href={item.path} target='_blank' className='hover:underline inline-flex items-center gap-x-1'>
                                                {item.icon}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='w-full flex md:flex-row flex-col md:pl-10 lg:pl-10 pl-0'>
                    <div className="lg:w-1/2 md:w-1/2 mt-12 lg:mt-0">
                        <ul className="text-base md:text-lg font-medium space-y-1">
                            <h2 className='font-bold text-2xl'>About Us</h2>
                            <li className='flex items-center gap-x-2 lg:pt-8 pt-4'>
                                <Link className='hover:underline inline-flex items-center gap-x-1' target='_blank' href={"https://www.tophealth.ai/privacy"}>
                                    <MdPrivacyTip className='text-2xl' />
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className='flex items-center gap-x-2 pt-2'>
                                <Link className='hover:underline inline-flex items-center gap-x-1' target='_blank' href={"https://www.tophealth.ai/terms-and-conditions"}>
                                    <FaFileAlt className='text-2xl' />
                                    Terms and Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="xl:w-2/3 lg:w-3/4 md:w-2/5 mt-12 lg:mt-0">
                        <h2 className='font-bold text-2xl'>Address</h2>
                        <div className='md:pt-8 pt-4 font-medium flex items-start gap-x-2'>
                            <FaLocationDot className='text-2xl' />
                            <div className="">371 Channelside Walkway, Tampa, FL, 33602</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full px-10 mt-10 flex items-center justify-center lg:flex-row flex-col'>
                <div className='mt-8 lg:mt-0 text-center'>
                    <p>Copyright © {new Date().getFullYear()} All Rights Reserved by <a target='_blank' href="https://tophealth.ai">Top Health AI</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer