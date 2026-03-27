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
      // Guard: refs may not be ready yet
      if (!animation.current || !animation.current.style) {
        Animation();
        return;
      }
      animation.current.style.transitionDuration = "4000ms";
      RandomAnimation();
      Animation();
    }, 3900);
  }

  useEffect(() => {
    Animation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    if (!animation.current) return;
    animation.current.style.transitionDuration = "800ms";
    animation.current.style.transform = `translateX(${window.innerWidth / 2}px) translateY(${scrollRef.current + 100}px)`;
    scrollRef.current = window.scrollY;
  };

  const handleRoundAnimation = () => {
    if (!animation.current) return;

    checkRef.current = false;
    animation.current.style.transform = `translateX(${window.innerWidth / 6}px) translateY(${window.innerHeight / 2}px)`;

    setTimeout(() => {
      if (!animation.current) return;
      animation.current.style.transform = `translateX(${window.innerWidth / 2}px) translateY(${window.innerHeight / 1.4}px)`;

      setTimeout(() => {
        if (!animation.current) return;
        animation.current.style.transform = `translateX(${window.innerWidth / 1.2}px) translateY(${window.innerHeight / 2}px)`;
        checkRef.current = true;
      }, 850);
    }, 650);
  };

  const RandomAnimation = () => {
    if (!animation.current) return;
    if (!checkRef.current) return;

    const x = Math.round(Math.random() * (window.innerWidth - 96) + 60);
    const y = Math.round(Math.random() * (window.innerHeight - 220 + 1)) + scrollRef.current + 120;

    animation.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="w-auto h-auto relative">
      {children}

      <div
        ref={animation}
        onClick={handleRoundAnimation}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleRoundAnimation();
        }}
        role="button"
        tabIndex={0}
        aria-label="Activate Applina animation"
        className="w-24 h-24 absolute hover:-rotate-6 hover:scale-[0.6] z-50 top-1 cursor-pointer"
      >
        <Image src="/diamond.png" width={500} height={500} alt="Applina badge" />
      </div>
    </div>
  );
};

export default BeeAnimation;
