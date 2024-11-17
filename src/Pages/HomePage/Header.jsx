import React from 'react';
import LogoImg from '../../Images/logo.png';

const componentName = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Features</a></li>
      <li><a>Workflow</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testimonials</a></li>
      </ul>
    </div>
    <div className="flex items-center pl-3">
        <img className='w-12 h-12 pr-3' src={LogoImg} alt="" />
        <h3 className='text-xl font-bold text-white'>VirtualR</h3>
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
  <div className="navbar-end pr-2">
    <a className="py-2 px-3 border rounded-md">Button</a>
    <a className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 ml-4 rounded-md">Create an account</a>
  </div>
</div>
    );
};

export default componentName;