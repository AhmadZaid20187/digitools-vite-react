import React from 'react';

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-5 py-2 rounded-full">
                        ✨ Frontier AI Models
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-red-600">
                        One Subscription.
                        <br />
                        <span className="bg-linear-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                            All the AIs You Need
                        </span>
                    </h1>

                    <p className="text-lg text-zinc-700 max-w-lg">
                        Experience the full spectrum of frontier intelligence — all the most
                        advanced AI models, unified under a single, powerful subscription.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="align-middle bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-[#9514FA] transition-all p-3 rounded-full font-semibold text-lg flex items-center gap-2 group text-white">
                            Explore Products
                            <span className="group-hover:translate-x-1 transition text-2xl">→</span>
                        </button>
                        <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-[2px] rounded-full">
                            <span className="flex items-center gap-2 bg-white  px-4 py-2 rounded-full group">
                                <span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Explore Products</span>
                                <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent group-hover:translate-x-1 transition text-2xl">→</span>
                            </span>
                        </button>

                    </div>

                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                            src="../assets/banner.png"
                            alt="Tools Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;