import User from "../assets/user.png"
import Package from "../assets/package.png"
import Roket from "../assets/rocket.png"


const Steps = () => {
    return (
        <div className="pt-30 pb-30 bg-[#F9FAFC]">
            <div className="text-center space-y-4">
                <h1 className="text-5xl font-bold">Get Started in 3 Steps</h1>
                <p className="text-[#627382] font-semibold">Start using premium digital tools in minutes, not hours.</p>
            </div>


            <div className="max-w-[80%] mx-auto flex justify-between pt-5">

                {/* Cart-1 */}
                <div className="relative h-80 w-80 bg-white shadow-lg rounded-2xl flex items-center justify-center">


                    <span className="absolute top-4 right-4 text-sm font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-3 py-1 text-white">
                        01
                    </span>


                    <div className="flex flex-col items-center text-center px-6 gap-3">


                        <div className="bg-purple-100 rounded-full p-5 mb-1">
                            <img src={User} alt="User icon" className="w-8 h-8" />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900">Create Account</h2>
                        <p className="text-sm text-gray-500">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>

                    </div>
                </div>


                {/* Cart-2 */}
                <div className="relative h-80 w-80 bg-white shadow-lg rounded-2xl flex items-center justify-center">


                    <span className="absolute top-4 right-4 text-sm bg-linear-to-r from-[#4F39F6]   to-[#9514FA] rounded-full px-3 py-1 text-amber-50">02</span>


                    <div className="flex flex-col items-center text-center px-6 gap-3">

                        <div className="bg-purple-100 rounded-full p-5 mb-1">
                            <img src={Package} alt="" className="w-8 h-8" />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900">Choose Products</h2>
                        <p className="text-sm text-gray-500">Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>


                {/* Cart-3 */}
                <div className="relative h-80 w-80 bg-white shadow-lg rounded-2xl flex items-center justify-center">


                    <span className="absolute top-4 right-4 text-sm bg-linear-to-r from-[#4F39F6]   to-[#9514FA] rounded-full px-3 py-1 text-amber-50">03</span>


                    <div className="flex flex-col items-center text-center px-6 gap-3">

                        <div className="bg-purple-100 rounded-full p-5 mb-1">
                            <img src={Roket} alt="" className="w-8 h-8" />
                        </div>

                        <h2 className="text-xl font-semibold text-gray-900">Start Creating</h2>
                        <p className="text-sm text-gray-500">Download and start using your premium tools immediately.</p>
                    </div>
                </div>



                {/* <div>
                    <span className="text-[14px] bg-linear-to-r from-[#4F39F6]   to-[#9514FA] rounded-full p-4 text-amber-50">03</span>
                    <div>
                        <img src={Roket} alt="" />
                        <h2>Create Account</h2>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Steps;