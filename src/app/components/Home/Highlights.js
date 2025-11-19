import Image from 'next/image'
import React from 'react'

const Highlights = () => {
    return (
        <div className='w-full items-center justify-center pt-16 flex flex-col'>
            <h1 className='mainHeading text-center text-textBlack'>Highlights</h1>
            <div className="flex md:flex-row flex-col gap-x-6 items-center justify-center pt-14 xl:w-3/4 md:w-[94%]">
                <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-6 md:w-1/3">
                    <Image src={"/project1.png"} width={1500} height={1500} alt='image' className='h-60 md:h-[36rem] w-full' />
                    <Image src={"/project2.png"} width={1500} height={1500} alt='image' className='h-60 w-full' />
                </div>
                <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-6 md:w-1/3 md:pt-0 pt-6">
                    <Image src={"/Feature1.png"} width={1500} height={1500} alt='image' className='h-60 w-full' />
                    <Image src={"/project4.png"} width={1500} height={1500} alt='image' className='h-60 md:h-[36rem] w-full' />
                </div>
                <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-6 md:w-1/3 md:pt-0 pt-6">
                    <Image src={"/project5.png"} width={1500} height={1500} alt='image' className='h-60 md:h-[36rem] w-full' />
                    <Image src={"/project6.png"} width={1500} height={1500} alt='image' className='h-60 w-full' />
                </div>
            </div>
        </div>
    )
}

export default Highlights