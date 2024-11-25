import React from 'react';

const Pricing = () => {
    return (
        <div id='Pricing' className="px-4 py-8 sm:px-8 lg:px-20">
            <div className="text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl text-white">Pricing</h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-5 mt-10 md:mt-20">
                <div className="mx-auto md:mx-0 mb-10 border border-solid w-full sm:w-[300px] md:w-[350px] lg:w-[400px] lg:h-[535px] h-auto p-6 sm:p-10 rounded-lg">
                    <div className="text-white text-base sm:text-lg">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Free</h2>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white my-5">$0 <span className="text-base">/Month</span></h2>
                        <div className="flex items-center mb-4">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">Private board sharing</p>
                        </div>
                        <div className="flex items-center my-8">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">5 Gb Storage</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">Web Analytics</p>
                        </div>
                        <div className="flex items-center mt-8">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">Private Mode</p>
                        </div>
                        <button className="w-full text-lg text-white border border-[#c53c3c] py-2 rounded-md mt-8 hover:bg-[#8b2121] lg:mt-[5rem]">Subscribe</button>
                    </div>
                </div>
                
                {/* Pro Plan */}
                <div className="mx-auto md:mx-0 mb-10 border border-solid w-full sm:w-[300px] md:w-[350px] lg:w-[400px] lg:h-[535px] h-auto p-6 sm:p-10 rounded-lg">
                    <div className="text-white text-base sm:text-lg">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Pro <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-sm md:text-xl">(Most Popular)</span></h2>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white my-5">$10 <span className="text-base">/Month</span></h2>
                        <div className="flex items-center mb-4">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">Private board sharing</p>
                        </div>
                        <div className="flex items-center my-8">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">10 Gb Storage</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">Web Analytics (Advance)</p>
                        </div>
                        <div className="flex items-center mt-8">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">Private Mode</p>
                        </div>
                        <button className="w-full text-lg text-white border border-[#c53c3c] py-2 rounded-md mt-8 hover:bg-[#8b2121] lg:mt-[5rem]">Subscribe</button>
                    </div>
                </div>

                {/* Enterprise Plan */}
                <div className="mx-auto md:mx-0 mb-10 border border-solid w-full sm:w-[300px] md:w-[350px] lg:w-[400px] lg:h-[535px] h-auto p-6 sm:p-10 rounded-lg">
                    <div className="text-white text-base sm:text-lg">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Enterprise</h2>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white my-5">$200 <span className="text-base">/Month</span></h2>
                        <div className="flex items-center mb-4">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">Private board sharing</p>
                        </div>
                        <div className="flex items-center my-8">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">Unlimited Storage</p>
                        </div>
                        <div className="flex items-center mb-8">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">High Performance Network</p>
                        </div>
                        <div className="flex items-center mt-8">
                            <div className="w-6 h-6 border-2 border-white text-white rounded-full flex justify-center items-center">
                                <i className="text-xs font-bold fa-solid fa-check"></i>
                            </div>
                            <p className="pl-3">Private Mode</p>
                        </div>
                        <button className="w-full text-lg text-white border border-[#c53c3c] py-2 rounded-md mt-8 hover:bg-[#8b2121] lg:mt-[5rem]">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
