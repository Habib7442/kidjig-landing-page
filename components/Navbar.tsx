"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#00000033] p-2">
      <div className="flex lg:justify-evenly justify-between items-center">
        <div className="left">
          <Image
            src="/logo.png"
            height={1000}
            width={1000}
            alt="logo"
            className="w-[60px] h-[37px] md:w-[87px] md:h-[54px] object-cover"
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="flex text-white gap-2 md:gap-4 text-sm md:text-base">
            <li>About</li>
            <li>Services</li>
            <li>Process</li>
            <li>Work</li>
            <li>Pricing</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="text-white text-xs md:text-sm border border-[#6881FF] rounded-xl px-3 py-1 md:px-4 md:py-2">
            Book a call
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col text-white gap-2 text-base">
            <li>About</li>
            <li>Services</li>
            <li>Process</li>
            <li>Work</li>
            <li>Pricing</li>
            <li>FAQs</li>
          </ul>
          <button className="text-white text-sm border border-[#6881FF] rounded-xl px-3 py-1 mt-4">
            Book a call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
