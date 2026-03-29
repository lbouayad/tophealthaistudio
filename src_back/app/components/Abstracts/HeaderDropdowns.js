'use client'
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderDropdowns = ({ children, option, className, handleClick }) => {
    const menuRef = useRef();
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleItemClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className={`relative flex xl:flex-row flex-col xl:items-center text-left z-50 ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleItemClick}
            ref={menuRef}
        >
            {children}
            {isOpen && option && (
                <div className="origin-top-right xl:absolute -left-12 xl:w-64 w-full top-10 rounded-xl xl:border-none xl:bg-white bg-blue/20">
                    <div className="py-2">
                        {option && option.map((item, index) => {
                            let isActive;
                            if (pathname == item.path) {
                                isActive = true
                            } else if (pathname !== '/') {
                                pathname.startsWith(item.path)
                            }
                            return (
                                <Link key={index} href={item.path} onClick={() => {
                                    handleClick()
                                    handleItemClick
                                }}
                                    className={`block px-8 py-4 md:text-base text-base hover:bg-[#fffadb]
                                    ${isActive ? "font-extrabold text-textGray" : "font-medium text-black"}
                                    ${index !== option.length - 1 ? "xl:border-none border-b-2 border-blue/25" : ''}`}>
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeaderDropdowns