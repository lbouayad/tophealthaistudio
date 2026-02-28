'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    title: "CME Program Development Underway",
    desc: "Continuing medical education (CME) accreditation is currently in progress. Course access is available through our learning platform while we finalize accreditation workflows and documentation.",
  },
  {
    title: "Prototype-Based Evaluation Frameworks",
    desc: "We are expanding structured testing methods for clinical AI—focused on workflow integrity, escalation boundaries, documentation reliability, and real-world implementation feasibility.",
  },
  {
    title: "Clinical Accountability Training",
    desc: "New case-based modules examine where AI supports care delivery and where responsibility remains clinician-led, emphasizing defensible decision-making in AI-supported workflows.",
  },
  {
    title: "Interdisciplinary Collaboration Opportunities",
    desc: "We welcome collaboration across medicine, engineering, operations research, and health policy to study responsible deployment and evaluation of AI in complex care environments.",
  },
  {
    title: "Research & Publication Alignment",
    desc: "Our methodology is designed to support publication-quality analysis, including structured evaluation protocols, reproducible testing scenarios, and implementation-readiness assessment.",
  },
  {
    title: "Learning Platform Access",
    desc: "Courses and materials are available through our dedicated learning environment, supporting structured coursework, prototype exercises, and evaluation tools in one place.",
  },
]

const News = () => {
  const responsiveSlidesPerView = {
    1024: 3,
    768: 2,
    640: 1,
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<span class="' +
        className +
        '"style="width: 24; height: 24;background-color:#FDE74C">' +
        "</span>"
      );
    }
  };

  return (
    <div className='w-full items-center justify-center flex py-16 bg-blue'>
      <div className='w-[90%] sm:w-3/5 md:w-[90%] lg:w-[96%] xl:w-4/5 md:ml-0 ml-1 items-center justify-center flex flex-col'>
        <h1 className='text-white text-3xl font-bold'>News & Updates</h1>

        <p className='text-white/90 text-sm md:text-base text-center mt-3 max-w-3xl'>
          Ongoing program development, evaluation work, and collaboration updates from Top Health AI Studio.
        </p>

        <div className='w-full'>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            pagination={pagination}
            breakpoints={{
              1024: { slidesPerView: responsiveSlidesPerView[1024] },
              768: { slidesPerView: responsiveSlidesPerView[768] },
              640: { slidesPerView: responsiveSlidesPerView[640] },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='my-16 pt-5 pb-7 rounded-2xl px-5 flex flex-col items-center justify-center relative border border-yellow 
                  ml-2.5 sm:ml-0 md:ml-0 lg:ml-3 xl:ml-4 text-center text-white group hover:bg-yellow transition-colors duration-300'>
                  <h2 className='text-lg font-bold group-hover:text-blue leading-6'>
                    {item.title}
                  </h2>
                  <p className='text-xs sm:text-sm pt-4 group-hover:text-blue'>
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default News
