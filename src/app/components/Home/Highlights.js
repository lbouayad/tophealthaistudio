import Image from 'next/image'
import React from 'react'

const Highlights = () => {
    return (
        <div className='w-full items-center justify-center pt-16 flex flex-col'>
            <h1 className='mainHeading text-center text-textBlack'>
                Research & Program Highlights
            </h1>

            <p className='text-center max-w-3xl mt-4 text-base md:text-lg text-gray-700 px-6'>
                A snapshot of our applied learning environments, structured prototype testing,
                and interdisciplinary collaboration in responsible clinical AI.
            </p>

            <div className="flex md:flex-row flex-col gap-x-6 items-center justify-center pt-14 xl:w-3/4 md:w-[94%]">
                
                {/* Column 1 */}
                <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-6 md:w-1/3">
                    <div>
                        <Image
                            src={"/project1.png"}
                            width={1500}
                            height={1500}
                            alt='Prototype Evaluation Session'
                            className='h-60 md:h-[36rem] w-full object-cover'
                        />
                        <p className="text-sm mt-2 text-gray-600">
                            Structured prototype testing in simulated clinical workflows.
                        </p>
                    </div>

                    <div>
                        <Image
                            src={"/project2.png"}
                            width={1500}
                            height={1500}
                            alt='CME Program Session'
                            className='h-60 w-full object-cover'
                        />
                        <p className="text-sm mt-2 text-gray-600">
                            Case-based learning focused on clinical accountability.
                        </p>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-6 md:w-1/3 md:pt-0 pt-6">
                    <div>
                        <Image
                            src={"/Feature1.png"}
                            width={1500}
                            height={1500}
                            alt='Workflow Evaluation Framework'
                            className='h-60 w-full object-cover'
                        />
                        <p className="text-sm mt-2 text-gray-600">
                            Evaluation frameworks assessing workflow integrity and escalation pathways.
                        </p>
                    </div>

                    <div>
                        <Image
                            src={"/project4.png"}
                            width={1500}
                            height={1500}
                            alt='Interdisciplinary Collaboration'
                            className='h-60 md:h-[36rem] w-full object-cover'
                        />
                        <p className="text-sm mt-2 text-gray-600">
                            Collaboration across medicine, engineering, and policy.
                        </p>
                    </div>
                </div>

                {/* Column 3 */}
                <div className="grid md:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-6 md:w-1/3 md:pt-0 pt-6">
                    <div>
                        <Image
                            src={"/project5.png"}
                            width={1500}
                            height={1500}
                            alt='Clinical AI Testing Environment'
                            className='h-60 md:h-[36rem] w-full object-cover'
                        />
                        <p className="text-sm mt-2 text-gray-600">
                            Applied testing environments examining AI behavior in care scenarios.
                        </p>
                    </div>

                    <div>
                        <Image
                            src={"/project6.png"}
                            width={1500}
                            height={1500}
                            alt='Education & Research Initiative'
                            className='h-60 w-full object-cover'
                        />
                        <p className="text-sm mt-2 text-gray-600">
                            Education-driven research advancing responsible AI implementation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
