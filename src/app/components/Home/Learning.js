import Image from 'next/image'
import React from 'react'

const Learning = () => {
    return (
        <div className='flex flex-col items-center justify-center lg:pt-32 pb-24 pt-16 w-full md:text-start text-center xl:px-0 px-8'>
            <div className='w-full flex md:flex-row flex-col-reverse lg:gap-x-10 gap-x-8'>
                <div data-aos="zoom-in" data-aos-duration="1200" className='lg:w-1/2 w-full flex items-center justify-center lg:mt-0 mt-12'>
                    <div className='absolute lg:w-[31.6rem] md:w-[27rem] w-[24.6rem] md:h-[24rem] h-[18rem] bg-gradient-to-r from-[#FFCA4F] to-[#FFF33B] hexagon' />
                    <Image src={"/Learning.png"} width={1500} height={1000} alt='...' className='md:h-96 h-72 w-auto z-20' />
                </div>
                <div className='xl:w-2/5 lg:w-1/2 w-full flex flex-col justify-center'>
                    <h1 className='mainHeading md:text-start text-center text-textBlack'>Learning</h1>
                    <p className='text-black text-base text-justify pt-6 xl:w-[88%] lg:w-[96%] w-full'>
                        Welcome to the House of Islamic and Value Education. We are confident that you and your child will enjoy long association with our school.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Learning