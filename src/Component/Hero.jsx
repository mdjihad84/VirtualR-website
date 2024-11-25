import React from "react";

const Hero = () => {
  return (
    <section id="Home" className="flex justify-center mt-16 md:mt-32 px-4">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl w-full lg:w-[770px] text-white">
          VirtualR build tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            for developers
          </span>
        </h1>
        <p className="text-white py-6 sm:py-10 md:py-12 lg:py-14 w-full md:w-[700px] lg:w-[792px] text-base sm:text-lg font-system-ui">
          Empower your creativity and bring your VR app ideas to life with our
          intuitive development tools. Get started today and turn your
          imagination into immersive reality!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            aria-label="Learn More"
            className="py-2 px-4 border border-gray-300 rounded-md text-white hover:bg-gray-700"
          >
            Button
          </a>
          <a
            href="#"
            aria-label="Create an account"
            className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md hover:bg-opacity-90"
          >
            Create an account
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
