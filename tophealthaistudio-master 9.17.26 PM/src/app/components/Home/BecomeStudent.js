import React from 'react'
import YellowButton from '../Abstracts/YellowButton'
import Bee1 from '../Svgs/Bee1';
import Bee2 from '../Svgs/Bee2';
import Bee3 from '../Svgs/Bee3';
import Bee4 from '../Svgs/Bee4';
import Bee5 from '../Svgs/Bee5';
import Bee6 from '../Svgs/Bee6';
import Star1 from '../Svgs/Star1';

const BecomeStudent = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("/BeeBg.svg")`,
    backgroundSize: 'cover',
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <div
        className='w-full md:h-[64rem] h-[40rem] xl:pt-[23rem] md:pt-80 sm:pt-60 pt-52 xl:pl-64 lg:pl-10 pl-1 relative'
        style={backgroundImageStyle}
      >
        <div className='flex flex-col items-center justify-center text-center xl:w-2/5 lg:w-1/2 md:w-3/5 sm:w-1/2 w-[70%]'>

          <h1
            className='md:text-[48px] text-3xl md:leading-[3.5rem] font-bold text-yellow'
            style={{ textShadow: "-4px 0 2px #5B5C5C, 0 0 4px #5B5C5C" }}
          >
            Responsible AI Education for Healthcare
          </h1>

          <h2 className='md:text-4xl text-xl font-semibold text-blue sm:my-8 my-6 xl:w-[96%]'>
            Structured Courses in Clinical AI Evaluation
          </h2>

          <p className='text-blue md:text-lg text-sm mb-4 max-w-xl'>
            We offer applied courses in health AI, workflow evaluation, and clinical accountability.
            Continuing medical education (CME) accreditation is currently in progress.
          </p>

          <p className='text-blue md:text-base text-sm mb-8 max-w-xl'>
            Courses are available through our dedicated learning platform.
          </p>

          <YellowButton
            link={"https://medaistudio.moodlecloud.com/"}
            title={"Access Learning Platform"}
            icon
            className='z-20 h-fit'
          />
        </div>

        {/* Decorative Animations (kept as-is) */}
        <Bee6 className={"absolute right-[28rem] top-[15.8rem] beeUpDownAnimation"} />
        <Bee5 className={"absolute beeLeftRightAnimation bottom-12"} />
        <Bee1 className={"absolute rightLeftAnimation right-8 top-[34.5rem]"} />
        <Bee2 className={"absolute rightLeftAnimation right-12 bottom-14"} />
        <Bee3 className={"absolute rightLeftAnimation right-[32.4rem] bottom-64"} />
        <Bee4 className={"absolute rightLeftAnimation right-[15rem] bottom-[17rem]"} />
        <Star1 className={"absolute left-24 top-[19.6rem] starAnimation"} />
        <Star1 className={"absolute left-8 top-[26.4rem] starAnimation"} />
        <Star1 className={"absolute left-12 top-[34rem] starAnimation"} />
      </div>
    </>
  )
}

export default BecomeStudent
