import Link from 'next/link'
import React from 'react'
import Forward from '../Svgs/Forward';

const BlueButton = ({ px, link, type, title, icon, py, bg, className, iconStyle, style }) => {
    const defaultPx = px ? px : 4
    const defaultPy = py ? py : 2
    const defaultBg = bg ? bg : "blue"

    return (
        <Link href={link} className='w-fit'>
            <button type={type} title={title} className={`bg-${defaultBg} flex text-white items-center justify-center gap-x-2 text-base font-bold tracking-wide
                px-${defaultPx} py-${defaultPy} rounded-full ${className}`}
                style={{ ...style, whiteSpace: 'nowrap' }}
            >
                {title}
                {icon ? <div className='bg-yellow w-6 h-6 rounded-full items-center justify-center flex'>
                    <Forward color={"black"} className={`${iconStyle}`} /></div>
                    : null}
            </button>
        </Link>
    )
}

export default BlueButton