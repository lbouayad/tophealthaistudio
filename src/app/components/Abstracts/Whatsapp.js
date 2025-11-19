import React from 'react';
import Link from 'next/link';
import WhatsappIcon from '../Svgs/WhatsappIcon';

const Whatsapp = () => {
    const phoneNumber = +923217796844;

    return (
        <div className='relative group z-50'>
            <Link passHref target="_blank" href={`https://api.whatsapp.com/send?phone=${phoneNumber}`}>
                <div target='_blank' rel='noopener noreferrer'
                    className='right-10 bottom-10 bg-gradient-to-b from-[#00fd84] to-[#00c444] cursor-pointer fixed button
                    w-12 h-12 rounded-lg justify-center items-center flex'
                >
                    <WhatsappIcon size={32} color='white' />
                </div>
            </Link>
            <div className='hidden group-hover:block fixed right-24 bottom-12'>
                <div className='bg-[#00c444] relative flex items-center p-[6px] rounded-full py-2 px-4'>
                    <div className='text-xs text-white leading-none font-semibold capitalize'>WhatsApp Us</div>
                </div>
            </div>
        </div>
    );
}

export default Whatsapp;
