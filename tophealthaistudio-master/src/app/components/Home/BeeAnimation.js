'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const BeeAnimation = ({ children }) => {
    const ref = useRef(null);
    const checkRef = useRef(true);
    const animation = useRef(null);
    const scrollRef = useRef(0);

    function Animation() {
        setTimeout(() => {
            if (!animation.current?.style) {
                Animation()
                return
            }
            animation.current.style.transitionDuration = "4000ms";
            RandomAnimation();
            Animation();
        }, 3900);
    }

    useEffect(() => {
        Animation();
    }, []);

    const handleScroll = () => {
        animation.current.style.transitionDuration = "800ms";
        animation.current.style.transform = `translateX(${window.innerWidth / 2}px) translateY(${scrollRef.current + 100}px)`;
        scrollRef.current = window.scrollY
    };

    const handleRoundAnimation = () => {
        checkRef.current = false;
        animation.current.style.transform = `translateX(${window.innerWidth / 6}px) translateY(${window.innerHeight / 2}px)`;
        setTimeout(() => {
            animation.current.style.transform = `translateX(${window.innerWidth / 2}px) translateY(${window.innerHeight / 1.4}px)`;
            setTimeout(() => {
                animation.current.style.transform = `translateX(${window.innerWidth / 1.2}px) translateY(${window.innerHeight / 2}px)`;
                checkRef.current = true;
            }, 850);
        }, 650);
    };

    const RandomAnimation = () => {
        let x = Math.round(Math.random() * (window.innerWidth - 96) + 60);
        let y = Math.round(Math.random() * (window.innerHeight - 220 + 1)) + scrollRef.current + 120;
        if (!checkRef.current) return;
        animation.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={ref} className="w-auto h-auto relative">
            {children}
            <div ref={animation} onClick={handleRoundAnimation}
                className="w-24 h-24 absolute hover:-rotate-6 hover:scale-[0.6] z-50 top-1">
                <Image src="/diamond.png" width={500} height={500} alt="star" />
            </div>
        </div>
    );
};

export default BeeAnimation;