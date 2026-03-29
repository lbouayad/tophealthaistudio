import React from 'react'

const LeftTextHeader = ({ text1, text2, img, className, className2 }) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className='flex flex-col justify-center w-full h-[26rem] relative overflow-hidden' style={backgroundImageStyle}>
            <div className={`w-full absolute top-0 z-10 items-center justify-center h-full 
            bg-gradient-to-r from-[#F2B108] to-[#F2B10824] opacity-60 ${className}`} />
            <div className='flex flex-col pt-28 px-8 justify-center z-20 xl:pl-36 md:pl-16 italic md:text-start text-center'>
                <h1 className='font-extrabold lg:text-[40px] md:text-4xl text-3xl text-white'>{text1}</h1>
                <h1 className={`font-extrabold lg:text-[40px] md:text-4xl text-3xl text-blue pt-2 ${className2}`}>{text2}</h1>
            </div>
        </div>
    )
}

export default LeftTextHeader