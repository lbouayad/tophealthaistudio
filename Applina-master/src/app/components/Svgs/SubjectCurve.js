import React from "react";

const SubjectCurve = ({ count, text, className, classNameText, rotate, color, mt, ml }) => {
    return (
        <svg width="279" height="215" viewBox="0 0 279 215" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
            <path d="M 126.6 214.5 L 278.7 62.4 C 263.9 44.8 254.8 23.1 252.6 0.2 H 37.5 C 40 80.1 71.7 156.3 126.6 214.5 Z" fill={color} />
            <path d="M 137.1 204 L 143.5 197.6 C 93 144 63.7 73.8 61.1 0.2 H 52 C 54.6 76.2 84.9 148.7 137.1 204 Z" fill="white" />
            <path d="M 61.2 168.5 C 92.5 168.5 117.8 143.7 117.8 112.9 C 117.8 82.1 92.5 57.3 61.2 57.3 C 29.9 57.3 4.6 82.1 4.6 112.9 C 4.6 143.7 29.9 168.5 61.2 168.5 Z" fill="white" />
            <path d="M 69 161.1 C 95.7 156.9 113.8 132.2 109.4 106.1 C 105.2 80 80.1 62.2 53.4 66.4 C 26.7 70.7 8.6 95.3 13 121.5 C 17.2 147.6 42.3 165.4 69 161.1 Z" fill={color} />
            <path d="M 60.7 154.1 C 83.7 154.1 102.4 135.9 102.4 113.4 C 102.4 90.9 83.7 72.7 60.7 72.7 C 37.7 72.7 19 90.9 19 113.4 C 19 135.9 37.7 154.1 60.7 154.1 Z" fill="url(#paint0_radial_0_1)" />
            <defs>
                <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(63.181 112.883) scale(46.2084 46.2084)">
                    <stop offset="0.8" stopColor="white" />
                    <stop offset="1" stopColor="#d4e5fc" />
                </radialGradient>
            </defs>
            <text transform={`rotate(${rotate} 36 130.3)`} fontSize="40" textLength="50" x={ml} y={mt} fill="rgb(39, 47, 84)">
                {count}
            </text>
            <foreignObject x="110" y="34" width="150" height="200" className="overflow-visible">
                <p className={`${classNameText} w-full h-auto text-white text-center text-xl font-medium`} xmlns="http://www.w3.org/1999/xhtml">
                    {text}
                </p>
            </foreignObject>
        </svg>

    );
};

export default SubjectCurve;