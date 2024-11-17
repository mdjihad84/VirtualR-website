import React, { useState } from 'react';
import LogoImg from '../../Images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="sticky top-0 z-50 navbar backdrop-blur-lg border-b-[1px]">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost"
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
                    </div>
                    {isMenuOpen && (
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Features</a></li>
                            <li><a>Workflow</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                        </ul>
                    )}
                </div>
                <div className="flex items-center pl-3">
                    <img className="w-12 h-12 pr-3" src={LogoImg} alt="VirtualR Logo" />
                    <h3 className="text-xl font-bold text-white">VirtualR</h3>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-sans-serif text-lg">
                    <li><a>Features</a></li>
                    <li><a>Workflow</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                </ul>
            </div>
            <div className="navbar-end pr-2 space-x-4">
                <a className="py-2 px-3 border rounded-md text-sm sm:text-base">Button</a>
                <a className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 ml-4 rounded-md text-sm sm:text-base">Create an account</a>
            </div>
        </div>
    );
};

export default Header;
