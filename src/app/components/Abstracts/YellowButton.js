import Link from 'next/link'
import React from 'react'
import Forward from '../Svgs/Forward';

const YellowButton = ({ px, link, type, title, icon, py, bg, className, iconStyle, style, onClick }) => {
    const defaultPx = px ? px : 4
    const defaultPy = py ? py : 2
    const defaultBg = bg ? bg : "yellow"

    return (
        <Link href={link} className='w-fit'>
            <button type={type} title={title} className={`bg-${defaultBg} flex text-blue items-center justify-center gap-x-2 text-base font-bold tracking-wide
                px-${defaultPx} py-${defaultPy} rounded-full ${className}`}
                style={{ ...style, whiteSpace: 'nowrap' }}
                onClick={onClick}
            >
                {title}
                {icon ? <div className='bg-blue w-6 h-6 rounded-full items-center justify-center flex'>
                    <Forward color={"white"} className={`${iconStyle}`} /></div>
                    : null}
            </button>
        </Link>
    )
}

export default YellowButton