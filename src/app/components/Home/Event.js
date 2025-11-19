'use client'
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import YellowButton from '../Abstracts/YellowButton';

const data = [
    {
        img: "/Seerah2.png",
        title: "Seerah",
    },
    {
        img: "/GrandParentsDay3.png",
        title: "Grand Parents Day",
    },
    {
        img: "/SportsDay1.png",
        title: "Sports Day",
    },
    {
        img: "/BakeSale2.png",
        title: "Bake Sale",
    },
]

const Event = () => {
    const responsiveSlidesPerView = {
        1024: 3,
        768: 2,
        640: 1,
    };

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"style="width: 24; height: 24;background-color:#272F54">' + "</span>";
        }
    };

    return (
        <div className='w-full items-center justify-center flex pb-16 pt-24'>
            <div className='w-[90%] sm:w-1/2 md:w-[94%] xl:w-4/5 items-center justify-center flex flex-col'>
                <h1 className='mainHeading text-textBlack text-3xl font-bold'>ACTIVITIES & EVENTS</h1>
                <div className='w-full'>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        pagination={pagination}
                        breakpoints={{
                            1024: {
                                slidesPerView: responsiveSlidesPerView[1024],
                            },
                            768: {
                                slidesPerView: responsiveSlidesPerView[768],
                            },
                            640: {
                                slidesPerView: responsiveSlidesPerView[640],
                            },
                        }}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='my-16 pt-4 pb-6 rounded-3xl px-4 flex flex-col items-center w-[95%] justify-center relative 
                                    ml-2.5 md:ml-2 lg:ml-3 text-center text-black bg-white'
                                    style={{ boxShadow: "0px 4px 10px 4px rgba(0.5, 0.5, 0.2, 0.2)" }}>
                                    <Image src={item.img} width={1000} height={1000} alt='image' className='h-52 w-full rounded-3xl' />
                                    <h2 className='text-lg pt-6 font-bold leading-6 pb-4'>{item.title}</h2>
                                    {/* <p className='text-xs pt-4 pb-12'>{item.desc}</p> */}
                                    <YellowButton title={"See More"} link={"/school-activities"} px={6} py={1.5} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Event