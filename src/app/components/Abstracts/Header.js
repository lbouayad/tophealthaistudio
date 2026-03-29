"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Hamburger from "../Svgs/Hamburger";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Define navigation links directly in the component
  const navLinks = [
    { name: "About Us", path: "#about-us" },
    { name: "Enrollment", path: "#enrollment" },
    { name: "Choose Us", path: "#choose-us" },
    { name: "Offerings", path: "#offerings" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the mobile menu
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    handleLinkClick(); // Close the mobile menu after scrolling
  };

  const isActiveLink = (path) => {
    // Check if we're in a browser environment before accessing window
    if (path.startsWith('#')) {
      const currentHash = typeof window !== 'undefined' ? window.location.hash : '';
      return pathname === '/' && currentHash === path;
    }
    return pathname === path || (path !== '/' && pathname.startsWith(path));
  };

  return (
    <div className="flex w-full items-center justify-center">
      <nav className="w-[90%] rounded-[20px] absolute md:h-24 h-20 flex flex-row bg-[#c06f33] text-white items-center justify-between mt-10 px-6 md:pl-12 md:pr-20 top-0 z-50">
        <Link href="https://www.tophealthaistudio.org" target="_blank" className="flex justify-center items-center gap-1 sm:gap-2" >
          <Image src="/Wordmark.png" width={1000} height={1000} className="h-7 sm:h-10 md:h-16 w-auto" alt="Logo" />
          <span className="text-2xl sm:text-4xl md:text-6xl text-[#FEF9F6] opacity-90">Studio</span>
        </Link>

        {/* Menu Icon for Mobile */}
        <div className="flex justify-end xl:hidden" onClick={toggleMenu}>
          <Hamburger className="md:h-10 h-7 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden xl:flex flex-row items-center justify-center gap-x-7">
          {navLinks.map((item, index) => {
            const isActive = isActiveLink(item.path);
            if (item.path.startsWith('#')) {
              return (
                <a
                  key={index}
                  href={item.path}
                  onClick={(e) => handleScroll(e, item.path.replace('#', ''))}
                  className={`py-1.5 3xl:text-xl text-lg tracking-wide font-medium text-lightBrown`}
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={index}
                href={item.path}
                target="_blank"
                onClick={handleLinkClick}
                className={`py-1.5 3xl:text-xl text-lg tracking-wide font-medium text-brown bg-lightBrown p-2 px-4 rounded-lg`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 min-h-screen left-0 w-full bg-white py-4 shadow z-50 transform border-2 border-blue transition-transform ease-in-out duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } xl:hidden`}
        >
          <div className="flex flex-col space-y-6 bg-white">
            <div className="flex justify-end pr-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-black"
                onClick={toggleMenu}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="flex flex-col justify-center gap-y-5 px-6 w-fit">
              {navLinks.map((item, index) => {
                const isActive = isActiveLink(item.path);
                if (item.path.startsWith('#')) {
                  return (
                    <a
                      key={index}
                      href={item.path}
                      onClick={(e) => handleScroll(e, item.path.replace('#', ''))}
                      className={`py-1.5 text-xl tracking-wide font-bold text-brown`}
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={handleLinkClick}
                    className={`py-1.5 text-xl tracking-wide font-bold text-black`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
