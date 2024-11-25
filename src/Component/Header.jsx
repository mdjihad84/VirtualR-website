import React, { useState } from "react";
import LogoImg from "../Images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      id="header"
      className="sticky top-0 z-50 navbar lg:justify-center backdrop-blur-lg border-b-[1px]"
    >
      <div className="navbar-start lg:w-auto flex items-center justify-between w-full">
        {/* Dropdown Menu for Small Devices */}
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost text-white"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute left-[-8px] top-full bg-base-100 z-[50] h-[265px] mt-3 p-4 shadow">
              <ul className="menu menu-sm text-center leading-8 text-white">
                <li>
                  <a href="#Feature" className="leading-8">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#Workflow" className="leading-8">
                    Workflow
                  </a>
                </li>
                <li>
                  <a href="#Pricing" className="leading-8">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#Community" className="leading-8">
                    Testimonials
                  </a>
                </li>
              </ul>
              <div className="flex flex-col sm:hidden gap-2 justify-center mt-3">
                <a className="w-[128px] bg-gradient-to-r cursor-pointer from-orange-500 to-orange-800 py-2 px-4 rounded-md text-xs sm:text-sm md:text-base lg:text-lg text-white">
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Logo Section */}
        <div className="hidden sm:flex items-center pr-3">
          <img className="w-12 h-12" src={LogoImg} alt="VirtualR Logo" />
          <h3 className="text-xl font-bold text-white ml-2">VirtualR</h3>
        </div>
      </div>

      {/* Center Navbar Links for Large Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-sans-serif text-lg">
          <li>
            <a href="#Feature">Features</a>
          </li>
          <li>
            <a href="#Workflow">Workflow</a>
          </li>
          <li>
            <a href="#Pricing">Pricing</a>
          </li>
          <li>
            <a href="#Community">Testimonials</a>
          </li>
        </ul>
      </div>

      {/* Right-Side Button for Small Screens Only */}
      <div className="navbar-end pr-2 space-x-4 sm:block lg:hidden">
        <a className="py-2 px-4 border rounded-md text-xs sm:text-sm">Button</a>
      </div>

      {/* Right-Side Buttons for Large Screens Only */}
      <div className="navbar-end pr-2 space-x-4 hidden lg:flex">
        <a className="py-2 px-3 border rounded-md text-sm sm:text-base cursor-pointer">
          Button
        </a>
        <a className="bg-gradient-to-r cursor-pointer from-orange-500 to-orange-800 py-2 px-3 ml-4 rounded-md text-sm sm:text-base text-white">
          Create an account
        </a>
      </div>
    </div>
  );
};
export default Header;
