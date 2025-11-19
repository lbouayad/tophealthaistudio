import React from 'react'

const Forward = ({ color, className }) => {
    return (
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
            <path d="M1.04012 12.2992C1.35533 12.6144 1.86353 12.6144 2.17874 12.2992L7.52448 6.9535C7.77537 6.70261 7.77537 6.29734 7.52448 6.04646L2.17874 0.700718C1.86353 0.385506 1.35533 0.385506 1.04012 0.700718C0.724909 1.01593 0.724909 1.52413 1.04012 1.83934L5.69754 6.50319L1.03369 11.167C0.724911 11.4758 0.724909 11.9905 1.04012 12.2992Z" fill={color} />
        </svg>
    )
}

export default Forward