'use client'
import React from 'react'
import Image from 'next/image'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosMail } from "react-icons/io";
import { FaFileAlt, FaGlobe, FaLinkedin } from 'react-icons/fa'
import { MdPrivacyTip } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='bg-offWhite w-full flex flex-col items-center justify-center text-brown md:pt-16 pt-6 pb-6 relative z-20'>
      <ToastContainer />

      <div className='xl:px-24 lg:px-8 px-10 flex lg:flex-row flex-col w-full'>
        <div className='w-full flex md:flex-row flex-col lg:pl-0 md:pl-10'>
          <div className='lg:w-3/5 md:w-1/2 flex flex-col items-start'>
            <ul className="text-sm font-medium space-y-1">
              <h2 className='font-bold text-2xl'>Courses</h2>

              <p className='text-sm pt-3 max-w-sm'>
                Access applied health AI coursework and prototype-based exercises through our learning platform.
              </p>

              <a
                href="https://medaistudio.moodlecloud.com/"
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-x-2 pt-4 hover:underline'
              >
                <Image
                  src={"/google-icon-andriod.svg"}
                  width={200}
                  height={200}
                  alt='Learning platform'
                  className='h-16 w-auto object-cover object-center'
                />
                <span className='text-brown font-semibold'>Open Learning Platform</span>
              </a>

              <p className='text-xs pt-2 text-brown/80'>
                CME accreditation is currently in progress.
              </p>
            </ul>
          </div>

          <div className="lg:w-2/5 md:w-1/2 mt-12 lg:mt-0 md:mt-6 xl:pl-10 pl-0">
            <ul className="text-base md:text-lg font-medium space-y-1">
              <h2 className='font-bold text-2xl'>Contact</h2>

              <li className='flex items-center gap-x-2 lg:pt-8 pt-4'>
                <a className='hover:underline inline-flex items-center gap-x-1' href={"mailto:dr.lina@tophealthaistudio.org"}>
                  <IoIosMail className='text-2xl' /> dr.lina@tophealthaistudio.org
                </a>
              </li>

              <li className='flex items-center gap-x-2 pt-2'>
                <a
                  className='hover:underline inline-flex items-center gap-x-1'
                  target='_blank'
                  rel="noopener noreferrer"
                  href={"https://tophealthaistudio.org"}
                >
                  <FaGlobe className='text-xl' />
                  tophealthaistudio.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full flex md:flex-row flex-col md:pl-10 lg:pl-10 pl-0'>
          <div className="lg:w-1/2 md:w-1/2 mt-12 lg:mt-0">
            <ul className="text-base md:text-lg font-medium space-y-1">
              <h2 className='font-bold text-2xl'>About</h2>

              <li className='flex items-center gap-x-2 lg:pt-8 pt-4'>
                <a className='hover:underline inline-flex items-center gap-x-1' target='_blank' rel="noopener noreferrer" href={"https://tophealthaistudio.org/privacy"}>
                  <MdPrivacyTip className='text-2xl' />
                  Privacy Policy
                </a>
              </li>

              <li className='flex items-center gap-x-2 pt-2'>
                <a className='hover:underline inline-flex items-center gap-x-1' target='_blank' rel="noopener noreferrer" href={"https://tophealthaistudio.org/terms"}>
                  <FaFileAlt className='text-2xl' />
                  Terms
                </a>
              </li>

              <li className='flex items-center gap-x-2 pt-2'>
                <a className='hover:underline inline-flex items-center gap-x-1' target='_blank' rel="noopener noreferrer" href={"https://tophealthaistudio.org/collaborate"}>
                  <FaLinkedin className='text-2xl' />
                  Collaboration Inquiries
                </a>
              </li>
            </ul>
          </div>

          <div className="xl:w-2/3 lg:w-3/4 md:w-2/5 mt-12 lg:mt-0">
            <h2 className='font-bold text-2xl'>Location</h2>
            <div className='md:pt-8 pt-4 font-medium flex items-start gap-x-2'>
              <FaLocationDot className='text-2xl' />
              <div className="">Tampa, Florida (Administrative)</div>
            </div>

            <p className='text-xs pt-3 text-brown/80 max-w-sm'>
              Top Health AI Studio is distinct from Top Health AI LLC (clinical AI solutions) and the Top Health AI Foundation (nonprofit).
            </p>
          </div>
        </div>
      </div>

      <div className='w-full px-10 mt-10 flex items-center justify-center lg:flex-row flex-col'>
        <div className='mt-8 lg:mt-0 text-center'>
          <p className='text-sm md:text-base'>
            Copyright © {year} All Rights Reserved by{" "}
            <a
              target='_blank'
              rel="noopener noreferrer"
              href="https://tophealthaistudio.org"
              className='hover:underline font-semibold'
            >
              Top Health AI Studio
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
