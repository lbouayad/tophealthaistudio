'use client';
import { useState, useEffect, useRef } from 'react';
import Down from '../Svgs/Down';

const Dropdown = ({ label, dropdownItems, setValue, className }) => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState('Choose one');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleSelect = (item) => {
        setIsSelected(item);
        setIsActive(false);
    };

    return (
        <div ref={dropdownRef} className={`w-full md:mt-12 mt-6 relative pb-4 ${className}`}>
            <p className='pl-6 font-medium text-lg text-textGray'>{label}</p>
            <div className='border-2 border-textGray bg-[#fafafa] rounded-2xl font-medium outline-none text-lg h-[3.3rem] px-6 mt-2 cursor-pointer z-20'>
                <div onClick={() => setIsActive(!isActive)} className="flex flex-row items-center justify-between h-full">
                    {selected}
                    <span className={`icon ${isActive ? 'rotate-180' : ''}`}><Down color={"black"} /></span>
                </div>
                <div className="dropdown-content absolute bg-white left-0 mt-2 w-full rounded-lg z-20 h-96 overflow-auto"
                    style={{
                        height: isActive ? `${dropdownItems.length * 3.3}rem` : '0',
                        transition: 'height 0.3s ease-in-out',
                        overflow: 'hidden',
                    }}>
                    {dropdownItems && dropdownItems.map((item, index) => (
                        <div key={index} className="item px-6 py-3"
                            onClick={() => {
                                handleSelect(item)
                                setValue(item)
                            }}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
