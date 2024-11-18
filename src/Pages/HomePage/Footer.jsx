import React from 'react';

const Footer = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-0 lg:ml-32 mt-4 mb-8 px-4 sm:px-8 lg:px-16">
            <div className="text-white text-base leading-8">
                <h4 className='text-xl font-semibold mb-4'>Resources</h4>
                <p>Getting Started</p>
                <p>Documentation</p>
                <p>Tutorials</p>
                <p>API Reference</p>
                <p>Community Forums</p>
            </div>
            <div className="text-white text-base leading-8">
                <h4 className='text-xl font-semibold mb-4'>Platform</h4>
                <p>Features</p>
                <p>Supported Devices</p>
                <p>System Requirements</p>
                <p>Downloads</p>
                <p>Release Notes</p>
            </div>
            <div className="text-white text-base leading-8">
                <h4 className='text-xl font-semibold mb-4'>Community</h4>
                <p>Events</p>
                <p>Meetups</p>
                <p>Conferences</p>
                <p>Hackathons</p>
                <p>Jobs</p>
            </div>
            <div className="text-white text-base leading-8">
                <h4 className='text-xl font-semibold mb-4'>Company</h4>
                <p>About Us</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Press</p>
                <p>Contact</p>
            </div>
        </div>
    );
};

export default Footer;
