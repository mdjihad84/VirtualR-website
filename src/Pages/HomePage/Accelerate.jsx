import CodeImg from '../../Images/code.jpg';

const componentName = () => {
    return (
        <div className="px-4 py-8 sm:px-8 lg:px-20">
            <div className="text-center mt-20 lg:mt-40 mb-8">
                <h2 className="text-3xl sm:text-5xl lg:text-7xl text-white">
                    Accelerate your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">coding workflow.</span>
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-around items-center gap-10 my-10 lg:my-20">
                <div className="flex justify-center">
                    <img className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[653px]" src={CodeImg} alt="Code" />
                </div>
                <div className="flex flex-col items-start">
                    <FeatureItem title="Code merge made easy" description="Track the performance of your VR apps and gain insights into user behavior." />
                    <FeatureItem title="Seamless Integration" description="Integrate with your existing tools and workflows effortlessly." className="my-8 lg:my-14" />
                    <FeatureItem title="Real-time Updates" description="Stay up-to-date with real-time notifications and updates." />
                    <FeatureItem title="Enhanced Collaboration" description="Collaborate with your team for faster development." className="mt-8 lg:mt-14" />
                </div>
            </div>
        </div>
    );
};

const FeatureItem = ({ title, description, className }) => (
    <div className={`flex items-center ${className}`}>
        <div className="w-6 h-6 border-2 border-[#0ede0e] text-[#0ede0e] rounded-full flex justify-center items-center">
            <i className="text-[13px] font-bold fa-solid fa-check"></i>
        </div>
        <div className="pl-5">
            <h3 className="text-base sm:text-lg md:text-xl text-white mb-2 sm:mb-3">{title}</h3>
            <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-[350px] sm:max-w-[500px] lg:max-w-[588px]">{description}</p>
        </div>
    </div>
);

export default componentName;
