import CodeImg from '../../Images/code.jpg';

const componentName = () => {
    return (
        <div className="">
            <div className="">
                <h2 className='text-7xl text-white mt-40 mb-8 text-center'>Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">coding workflow.</span></h2>
            </div>
            <div className="flex justify-around my-20 items-center">
                <div className="">
                    <img className='w-[653px]' src={CodeImg} alt="" />
                </div>
                <div className="">
                    <div className="flex items-center">
                        <div className="mb-6 w-6 h-6 border-2 border-[#0ede0e] text-[#0ede0e] rounded-full flex justify-center items-center mt-[-38px]">
                            <i className="text-[13px] font-bold fa-solid fa-check"></i>
                        </div>
                        <div className="pl-5">
                            <h3 className='text-lg sm:text-xl text-white mb-3'>Code merge made easy</h3>
                            <p className='w-full text-xl w-[588px]'>Track the performance of your VR apps and gain insights into user behavior.</p>
                        </div>
                    </div>
                    <div className="flex items-center my-14">
                        <div className="mb-6 w-6 h-6 border-2 border-[#0ede0e] text-[#0ede0e] rounded-full flex justify-center items-center mt-[-38px]">
                            <i className="text-[13px] font-bold fa-solid fa-check"></i>
                        </div>
                        <div className="pl-5">
                            <h3 className='text-lg sm:text-xl text-white mb-3'>Code merge made easy</h3>
                            <p className='w-full text-xl w-[588px]'>Track the performance of your VR apps and gain insights into user behavior.</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="mb-6 w-6 h-6 border-2 border-[#0ede0e] text-[#0ede0e] rounded-full flex justify-center items-center mt-[-38px]">
                            <i className="text-[13px] font-bold fa-solid fa-check"></i>
                        </div>
                        <div className="pl-5">
                            <h3 className='text-lg sm:text-xl text-white mb-3'>Code merge made easy</h3>
                            <p className='w-full text-xl w-[588px]'>Track the performance of your VR apps and gain insights into user behavior.</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-14">
                        <div className="mb-6 w-6 h-6 border-2 border-[#0ede0e] text-[#0ede0e] rounded-full flex justify-center items-center mt-[-38px]">
                            <i className="text-[13px] font-bold fa-solid fa-check"></i>
                        </div>
                        <div className="pl-5">
                            <h3 className='text-lg sm:text-xl text-white mb-3'>Code merge made easy</h3>
                            <p className='w-full text-xl w-[588px] '>Track the performance of your VR apps and gain insights into user behavior.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default componentName;