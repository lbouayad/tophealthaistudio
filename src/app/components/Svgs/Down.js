import React from 'react'

const Down = ({ className, color, onClick }) => {
    return (
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`} onClick={onClick}>
            <path d="M0.972859 0.782309C0.657647 1.09752 0.657647 1.60572 0.972859 1.92093L6.3186 7.26667C6.56948 7.51755 6.97475 7.51755 7.22564 7.26667L12.5714 1.92093C12.8866 1.60572 12.8866 1.09752 12.5714 0.782309C12.2562 0.467097 11.748 0.467097 11.4328 0.782309L6.7689 5.43973L2.10505 0.775877C1.79627 0.467098 1.28164 0.467097 0.972859 0.782309Z" fill={color} />
        </svg>

    )
}

export default Down