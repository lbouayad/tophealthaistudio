'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
    {
        title: "Lorem Ipsum is simply dummy text of the printing and pesetting ",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and pesetting ",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and pesetting ",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and pesetting ",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and pesetting ",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and pesetting ",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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
        renderBullet: function (index, className) {
            return '<span class="' + className + '"style="width: 24; height: 24;background-color:#FDE74C">' + "</span>";
        }
    };

    return (
        <div className='w-full items-center justify-center flex py-16 bg-blue'>
            <div className='w-[90%] sm:w-3/5 md:w-[90%] lg:w-[96%] xl:w-4/5 md:ml-0 ml-1 items-center justify-center flex flex-col'>
                <h1 className='text-white text-3xl font-bold'>News & Updates</h1>
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
                                <div className='my-16 pt-4 pb-6 rounded-2xl px-4 flex flex-col items-center justify-center relative border border-yellow 
                                    ml-2.5 sm:ml-0 md:ml-0 lg:ml-3 xl:ml-4 text-center text-white group hover:bg-yellow'>
                                    <h2 className='text-lg font-bold group-hover:text-blue leading-6'>{item.title}</h2>
                                    <p className='text-xs pt-4 group-hover:text-blue'>{item.desc}</p>
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