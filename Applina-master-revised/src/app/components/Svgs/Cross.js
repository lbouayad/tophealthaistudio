import React from 'react'

const Cross = ({ className, onClick, width, height }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={`cursor-pointer ${className}`} onClick={onClick}>
            <path fillRule="evenodd" clipRule="evenodd" d="M25.8908 1.97869C26.3564 1.52604 26.3564 0.792152 25.8908 0.339503C25.4249 -0.113168 24.6697 -0.113168 24.2038 0.339503L13.12 11.1108L2.03611 0.339503C1.57033 -0.113168 0.81514 -0.113168 0.349356 0.339503C-0.116452 0.792152 -0.116452 1.52604 0.349356 1.97869L11.4332 12.75L0.349356 23.5212C-0.116452 23.9739 -0.116452 24.7079 0.349356 25.1606C0.81514 25.6131 1.57033 25.6131 2.03611 25.1606L13.12 14.3892L24.2038 25.1606C24.6697 25.6131 25.4249 25.6131 25.8908 25.1606C26.3564 24.7079 26.3564 23.9739 25.8908 23.5212L14.8068 12.75L25.8908 1.97869Z" fill="red" />
        </svg>

    )
}

export default Cross