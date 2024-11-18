import User1 from '../../Images/profile-pictures/user1.jpg';
import User2 from '../../Images/profile-pictures/user2.jpg';
import User3 from '../../Images/profile-pictures/user3.jpg';
import User4 from '../../Images/profile-pictures/user4.jpg';
import User5 from '../../Images/profile-pictures/user5.jpg';
import User6 from '../../Images/profile-pictures/user6.jpg';

const Community = () => {
    return (
        <div className="px-4">
            <div className="text-center mt-5">
                <h1 className='text-3xl md:text-5xl lg:text-7xl text-white'>What People are saying</h1>
            </div>
            <div className="flex justify-center">
                <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-10">
                    {[User1, User2, User3, User4, User5, User6].map((user, index) => (
                        <div key={index} className="w-full max-w-[410px] h-auto bg-black rounded-md p-5 border border-[#3a3030]">
                            <p className='text-white text-lg mb-8'>
                                I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.
                            </p>
                            <div className="flex items-center">
                                <img className='w-12 h-12 rounded-full' src={user} alt={`User ${index + 1}`} />
                                <div className="ml-4">
                                    <p className='text-white text-base'>John Doe</p>
                                    <h5 className='text-base'>Stellar Solutions</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <hr className='my-10 w-[79rem]'/>
            </div>
        </div>
    );
};

export default Community;
